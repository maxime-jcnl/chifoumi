# POC: CHIFOUMI

Ce projet est une version interactive du jeu classique "Pierre Feuille Ciseaux", également connu sous le nom de Chifoumi. Avec une interface simple et dynamique, ce jeu permet à l'utilisateur de jouer contre une IA.

## Fonctionnalités

- **Compte à rebours interactif** : Le jeu commence par un décompte "CHI", "FU", "MI", avant de demander au joueur de choisir son coup.
- **Choix du joueur et de l'IA** : L'utilisateur peut choisir entre "Pierre", "Feuille" ou "Ciseaux" en appuyant sur les touches `1`, `2`, ou `3` de son clavier.
- **Résultat immédiat** : Le jeu affiche le choix du joueur et de l'IA, puis indique qui a gagné ou s'il y a égalité.
- **Système de score** : Le score est mis à jour en temps réel après chaque partie.
- **Interface dynamique** : Le fond change de couleur selon que le joueur gagne (vert), perd (rouge), ou fait match nul (couleur de base).
- **Bouton "Rejouer"** : Une fois le résultat affiché, l'utilisateur peut cliquer sur un bouton pour recommencer une nouvelle partie.

## Comment exécuter le projet

Le projet est accessible directement en ligne à l'adresse suivante : https://poc-chifoumi.vercel.app/

Une fois sur la page :
1. Cliquez sur le bouton "Jouer" pour commencer une partie.
2. Après le compte à rebours, appuyez sur `1` pour Pierre, `2` pour Feuille, ou `3` pour Ciseaux.
3. Regardez le résultat s'afficher et voyez si vous avez battu l'IA.
4. Appuyez sur "Rejouer" pour lancer une nouvelle partie.

## Structure des fichiers

- `index.html` : La structure HTML principale du projet.
- `style.css` : Le fichier de style qui gère l'apparence du jeu (grille, boutons, etc.).
- `script.js` : La logique JavaScript qui gère le jeu, l'affichage des résultats et la gestion du score.

## Technologies utilisées

- **HTML** pour structurer la page.
- **CSS** pour le style et l'apparence du jeu.
- **JavaScript** pour la logique du jeu, les interactions, et la gestion du score.

