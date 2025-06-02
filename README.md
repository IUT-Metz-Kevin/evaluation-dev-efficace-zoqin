# Examen TDD

## Outils

Utilisation de `deno` pour lancer le fichier de tests.
**INTERDICTION d'utiliser l'IA.**

Lancer les tests

```ts
deno test --watch
```

## MineSweeper

L'objectif est de créer une fonction `minesweeper` permettant de résoudre le jeu du démineur. Un exemple sera plus simple.

J'ai un tableau de mine représenté par la chaîne de caractère suivante :

```
.*.**.
....*.
..*...
```

La fonction minesweeper doit renvoyer la chaîne de caractère suivante :

```
1*2**2
1234*2
01*211
```

L'objectif est de retourner une chaîne de caractère en indiquant pour chaque case combien il y a de mines autour.

NB: Dans les tests le saut de ligne est représenté par le caractère `\n`.

## Grille de notation (20 points)

### (10 points) Démonstration du cycle TDD

Le cycle TDD se compose de 3 étapes :

1. RED
2. GREEN
3. REFACTOR (optionnel en fonction de si il y a besoin de nettoyer le code pour le rendre plus propre, ou non)

NB: REFACTOR est également un cycle de développement qui doit se faire par la plus petite itération possible.

Vous devez faire des commits pour chaque étape du cycle TDD.
Rappel commande git: `git commit -am "RED|GREEN|REFACTOR"`

### (5 points) Progressivité des exemples

Vous devez pratiquer un exemple à la fois, partez des exemples les plus simples avant d'aller progressivement vers les exemples les plus complexes.

Essayez d'intégrer un concept à la fois.

### (3 points) Algorithme qui répond à la fonctionnalité

### (2 points) Nommage des variables/fonctions de manière claire et lisible, propreté du code (indentation)
