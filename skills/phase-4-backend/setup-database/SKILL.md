---
name: setup-database
description: Configurer une base de données légère (SQLite ou MySQL) pour stocker les messages de contact de NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Setup Database (Configuration base de données)

## Quand utiliser ce skill
- Si le client souhaite conserver un historique de tous les messages de contact reçus en base de données en plus des notifications email.
- Pour une future évolution (gestion d'articles de blog dynamiques).

## Prérequis
- Support serveur (SQLite ou MySQL).
- Script de traitement des formulaires (`setup-form-handling`).

## Choix technologique pour NOVELTRIA (MVP)

Pour un site vitrine en phase de lancement (projet en cours de constitution), **SQLite** est le choix idéal :
- **Pas de serveur de base de données séparé** (tout tient dans un simple fichier `.db`).
- **Léger, rapide, aucun coût additionnel**.
- Facile à migrer vers MySQL/PostgreSQL si le trafic augmente.

---

## Implémentation SQLite (Schéma & Connexion)

### 1. Schéma de la table `contacts`
```sql
CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'unread'
);
```

### 2. Connexion et insertion en PHP (`db.php`)
```php
<?php
$dbFile = __DIR__ . '/database.sqlite';

try {
    $pdo = new PDO('sqlite:' . $dbFile);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Création de la table si elle n'existe pas
    $pdo->exec("CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'unread'
    )");

} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}
?>
```

### 3. Insertion lors d'une soumission de formulaire
Dans le script de traitement (`contact.php`) :
```php
include 'db.php';

$stmt = $pdo->prepare("INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)");
$stmt->execute([$name, $email, $phone, $message]);
```

## Sécurité de la base de données SQLite

1. **Emplacement du fichier** : Placer le fichier `database.sqlite` en **dehors** de la racine web publique (`public_html` ou `website`), ou bloquer son accès via `.htaccess` :
```apache
<Files database.sqlite>
    Order deny,allow
    Deny from all
</Files>
```
2. **Requêtes préparées** : Utiliser systématiquement PDO avec des requêtes préparées (`prepare` + `execute`) pour empêcher les injections SQL.

## Checklist base de données

- [ ] Fichier SQLite créé dans un emplacement sécurisé.
- [ ] Table `contacts` initialisée avec les bons champs.
- [ ] Requêtes préparées utilisées pour l'insertion.
- [ ] Accès direct au fichier `.sqlite` bloqué par le serveur web.
- [ ] Test d'insertion réussi via le formulaire.

## Sorties attendues

1. **Script de connexion** : `db.php` configuré et sécurisé.
2. **Schéma SQL** : Documenté pour référence future.
3. **Rapport de test** : Enregistrement réussi d'un message test en base.
