# 🚀 Guide de Déploiement : GitHub & Vercel pour H-Flix Web

Ce guide vous explique étape par étape comment publier votre application **H-Flix Web** sur **GitHub**, puis la déployer gratuitement en ligne avec **Vercel** pour obtenir une URL accessible depuis n'importe quel appareil (PC, tablette, smartphone, TV).

---

## 📑 Sommaire
1. [Prérequis](#1-prérequis)
2. [Tester l'application en local (Optionnel mais recommandé)](#2-tester-lapplication-en-local)
3. [Étape 1 : Créer le dépôt sur GitHub](#étape-1--créer-le-dépôt-sur-github)
4. [Étape 2 : Initialiser Git et pousser vos fichiers](#étape-2--initialiser-git-et-pousser-vos-fichiers)
5. [Étape 3 : Déployer sur Vercel](#étape-3--déployer-sur-vercel)
6. [Comment mettre à jour l'application plus tard (Nouveaux commits)](#6-comment-mettre-à-jour-lapplication-plus-tard)

---

## 1. Prérequis
- Un compte **[GitHub](https://github.com/)** (gratuit).
- Un compte **[Vercel](https://vercel.com/)** (gratuit, connectez-vous avec votre compte GitHub).
- **Git** installé sur votre ordinateur Windows. *(Si vous ne l'avez pas, téléchargez-le sur [git-scm.com](https://git-scm.com/)).*

---

## 2. Tester l'application en local

Avant de déployer, vous pouvez tester l'application directement sur votre PC :

1. Ouvrez un terminal (PowerShell ou Invite de commandes) dans le dossier `h-flix-web` :
   ```bash
   cd "C:\Users\Hish\Desktop\H-Flix\h-flix-web"
   ```
2. Lancez le serveur local :
   ```bash
   node server.cjs
   ```
3. Ouvrez votre navigateur sur **`http://localhost:3000`**.
   - Vous verrez l'application avec **Films**, **Séries**, **Animés** et **Télé en direct**.
   - YouTube et Twitch ont bien été retirés.

---

## Étape 1 : Créer le dépôt sur GitHub

1. Rendez-vous sur [github.com/new](https://github.com/new).
2. Donnez un nom à votre dépôt, par exemple : `h-flix-web`.
3. Choisissez **Public** ou **Private** (selon votre préférence).
4. **Ne cochez pas** "Add a README file", "Add .gitignore" ou "Choose a license" (ces fichiers sont déjà créés dans votre projet).
5. Cliquez sur le bouton vert **"Create repository"**.
6. Copiez l'URL de votre dépôt (ex: `https://github.com/votre-nom-utilisateur/h-flix-web.git`).

---

## Étape 2 : Initialiser Git et pousser vos fichiers

Ouvrez un terminal dans le dossier `h-flix-web` :

```powershell
cd "C:\Users\Hish\Desktop\H-Flix\h-flix-web"
```

Exécutez ensuite les commandes suivantes une par une :

```powershell
# 1. Initialiser le dépôt Git local
git init

# 2. Configurer la branche principale "main"
git branch -M main

# 3. Ajouter tous les fichiers du projet
git add .

# 4. Créer le premier commit
git commit -m "feat: version web initiale H-Flix sans YouTube/Twitch prête pour Vercel"

# 5. Relier votre dossier local au dépôt GitHub (remplacez avec votre URL)
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/h-flix-web.git

# 6. Envoyer le code sur GitHub
git push -u origin main
```

> **Note d'authentification** : Si Git vous demande de vous connecter, utilisez votre compte GitHub ou un *Personal Access Token* (PAT).

---

## Étape 3 : Déployer sur Vercel

1. Connectez-vous sur **[vercel.com](https://vercel.com)** avec votre compte GitHub.
2. Sur votre tableau de bord Vercel, cliquez sur le bouton **"Add New..."** puis **"Project"**.
3. Dans la liste **"Import Git Repository"**, trouvez votre dépôt `h-flix-web` et cliquez sur **"Import"**.
4. Dans les paramètres de configuration du projet :
   - **Framework Preset** : Sélectionnez **"Other"** (ou laissez vide).
   - **Root Directory** : `./` (par défaut).
   - **Build and Output Settings** : Laissez les valeurs par défaut (le fichier `vercel.json` configuré s'occupe de tout automatiquement).
5. Cliquez sur le bouton bleu **"Deploy"**.
6. L'opération prend environ **20 à 30 secondes**.
7. Une fois terminé, Vercel vous affiche des confettis et vous donne votre lien public sécurisé en HTTPS (ex: `https://h-flix-web.vercel.app`).

🎉 **Votre application H-Flix Web est maintenant en ligne !**

---

## 6. Comment mettre à jour l'application plus tard

Chaque fois que vous modifiez un fichier et que vous voulez mettre à jour le site en ligne, il vous suffit de faire :

```powershell
cd "C:\Users\Hish\Desktop\H-Flix\h-flix-web"

# 1. Ajouter les fichiers modifiés
git add .

# 2. Créer un commit décrivant vos modifications
git commit -m "update: description de vos modifications"

# 3. Pousser vers GitHub
git push
```

👉 **Vercel détecte automatiquement chaque `git push` et met à jour votre site en direct en quelques secondes sans aucune manipulation manuelle !**

---

## 🔒 Résumé des fonctionnalités actives sur la version Web
- **Films** : Lecteurs HLS et multi-serveurs avec sélection automatique du meilleur flux VF/VOSTFR.
- **Séries** : Gestion des saisons et épisodes avec historique de reprise de lecture.
- **Télévision en direct (Live TV)** : TNT française complète (TF1, France 2, France 3, M6, etc.), chaînes sport et thématiques.
- **Mode VIP & Ad-Free** : Activé automatiquement pour une expérience fluide.
- **Optimisation Tactile** : Fonctionne aussi bien sur écran tactile (tablette) que sur ordinateur ou smartphone.
