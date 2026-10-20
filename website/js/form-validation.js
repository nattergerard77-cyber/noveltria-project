/**
 * NOVELTRIA International Trade Services
 * Script de validation et sécurisation du formulaire de contact
 * Agent: Quality Assurance & Web Developer (Skills: secure-form-inputs, create-form)
 *
 * CONFIGURATION:
 * - Endpoint Formspree: À remplacer par votre endpoint réel après inscription sur formspree.io
 * - Email de réception: contact@noveltria.online
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const feedbackEl = document.getElementById('formFeedback');
  const submitBtn = contactForm?.querySelector('button[type="submit"]');

  if (!contactForm || !feedbackEl) return;

  const lang = (document.documentElement.lang || 'fr').toLowerCase().slice(0, 2);
  const translations = {
    fr: {
      botMsg: 'Votre demande a été traitée.',
      required: 'Veuillez remplir tous les champs obligatoires (*).',
      invalidEmail: 'Veuillez renseigner une adresse email valide.',
      minMsg: 'Votre message doit comporter au moins 20 caractères.',
      sending: '<span>Envoi en cours...</span>',
      success: 'Merci. Votre message a été transmis avec succès. Notre équipe vous répondra sous 24h ouvrées.',
      errorSubmit: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
      networkError: 'Impossible d\'envoyer le message. Vérifiez votre connexion et réessayez.',
      btnText: 'Transmettre ma demande'
    },
    en: {
      botMsg: 'Your inquiry has been processed.',
      required: 'Please complete all required fields (*).',
      invalidEmail: 'Please enter a valid email address.',
      minMsg: 'Your message must be at least 20 characters long.',
      sending: '<span>Sending inquiry...</span>',
      success: 'Thank you. Your message has been sent successfully. Our team will get back to you within 24 business hours.',
      errorSubmit: 'An error occurred while sending. Please try again.',
      networkError: 'Unable to send message. Please check your network connection and try again.',
      btnText: 'Submit Inquiry'
    },
    es: {
      botMsg: 'Su solicitud ha sido procesada.',
      required: 'Por favor, complete todos los campos obligatorios (*).',
      invalidEmail: 'Por favor, introduzca una dirección de correo electrónico válida.',
      minMsg: 'Su mensaje debe contener al menos 20 caracteres.',
      sending: '<span>Enviando solicitud...</span>',
      success: 'Gracias. Su mensaje ha sido enviado con éxito. Nuestro equipo le responderá en un plazo de 24 horas laborables.',
      errorSubmit: 'Se ha producido un error durante el envío. Por favor, inténtelo de nuevo.',
      networkError: 'No se pudo enviar el mensaje. Compruebe su conexión de red e inténtelo de nuevo.',
      btnText: 'Enviar mi solicitud'
    },
    it: {
      botMsg: 'La sua richiesta è stata elaborata.',
      required: 'Si prega di compilare tutti i campi obbligatori (*).',
      invalidEmail: 'Si prega di inserire un indirizzo email valido.',
      minMsg: 'Il suo messaggio deve contenere almeno 20 caratteri.',
      sending: '<span>Invio in corso...</span>',
      success: 'Grazie. Il suo messaggio è stato inviato con successo. Il nostro team le risponderà entro 24 ore lavorative.',
      errorSubmit: 'Si è verificato un errore durante l\'invio. Si prega di riprovare.',
      networkError: 'Impossibile inviare il messaggio. Verifichi la connessione di rete e riprovi.',
      btnText: 'Inviare la richiesta'
    },
    de: {
      botMsg: 'Ihre Anfrage wurde bearbeitet.',
      required: 'Bitte füllen Sie alle Pflichtfelder (*) aus.',
      invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      minMsg: 'Ihre Nachricht muss mindestens 20 Zeichen lang sein.',
      sending: '<span>Wird gesendet...</span>',
      success: 'Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt. Unser Team antwortet Ihnen innerhalb von 24 Geschäftsstunden.',
      errorSubmit: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
      networkError: 'Nachricht konnte nicht gesendet werden. Überprüfen Sie Ihre Netzwerkverbindung und versuchen Sie es erneut.',
      btnText: 'Anfrage absenden'
    },
    zh: {
      botMsg: '您的咨询已处理。',
      required: '请填写所有必填字段（*）。',
      invalidEmail: '请输入有效的电子邮箱地址。',
      minMsg: '您的留言内容至少需要 20 个字符。',
      sending: '<span>正在发送...</span>',
      success: '感谢您的联系。您的咨询已成功提交。我们的团队将在 24 个工作小时内予以回复。',
      errorSubmit: '发送过程中发生错误，请重试。',
      networkError: '无法发送信息，请检查您的网络连接后重试。',
      btnText: '提交咨询'
    }
  };

  const i18n = translations[lang] || translations.fr;
  i18n.btnNormal = `<span>${i18n.btnText}</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Protection Anti-Spam (Honeypot)
    const honeypot = document.getElementById('website_hp');
    if (honeypot && honeypot.value.trim() !== '') {
      console.warn('Bot detected via honeypot field.');
      showFeedback(i18n.botMsg, 'success');
      contactForm.reset();
      return;
    }

    // 2. Récupération et nettoyage des champs
    const fullname = document.getElementById('fullname')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const company = document.getElementById('company')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const category = document.getElementById('category')?.value;
    const message = document.getElementById('message')?.value.trim();

    // 3. Validation des champs obligatoires
    if (!fullname || !email || !category || !message) {
      showFeedback(i18n.required, 'error');
      return;
    }

    // 4. Validation du format d'email (RFC 5322 standard simplifié)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      showFeedback(i18n.invalidEmail, 'error');
      const emailField = document.getElementById('email');
      if (emailField) emailField.focus();
      return;
    }

    // 5. Validation de la longueur du message
    if (message.length < 20) {
      showFeedback(i18n.minMsg, 'error');
      return;
    }

    // 6. Préparation des données pour Formspree
    const formData = new FormData(contactForm);

    // 7. Désactivation du bouton pendant l'envoi
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = i18n.sending;
    }

    try {
      // 8. Envoi asynchrone vers Formspree
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showFeedback(i18n.success, 'success');
        contactForm.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          showFeedback('Error: ' + data.errors.map(e => e.message).join(', '), 'error');
        } else {
          showFeedback(i18n.errorSubmit, 'error');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFeedback(i18n.networkError, 'error');
    } finally {
      // 9. Réactivation du bouton
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = i18n.btnNormal;
      }
    }
  });

  function showFeedback(msg, type) {
    feedbackEl.textContent = msg;
    feedbackEl.className = 'form-feedback ' + type;
    feedbackEl.style.display = 'block';
    feedbackEl.setAttribute('role', 'alert');
    feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
