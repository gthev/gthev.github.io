# Site academique — mode d'emploi

Site statique en HTML/CSS pur, sans framework ni etape de build.
Chaque onglet est une page HTML separee ; toutes partagent `style.css`.

## Structure

```
index.html          Presentation + actualites + parcours
publications.html   Liste des publications
teaching.html          Presentations / teaching
contact.html        Coordonnees
style.css           Feuille de style unique, partagee par toutes les pages
assets/             Photo, CV, vignettes d'articles
```

## Remplacer les placeholders

Cherchez les crochets `[...]` dans les fichiers HTML (nom, adresse,
CV, liens Scholar/GitHub) et remplacez-les par vos informations.
Deposez votre photo dans `assets/photo.jpg` et votre CV dans
`assets/cv.pdf`, ou changez les chemins dans le HTML.

## Ajouter du contenu

Chaque type de bloc repetable (publication, talk, actualite, ligne de
parcours) est entoure d'un commentaire :

```html
<!-- ======== BLOC A DUPLIQUER : ... ======== -->
...
<!-- ======== FIN DU BLOC A DUPLIQUER ======== -->
```

Pour ajouter un element, copiez tout le bloc, collez-le au bon
endroit (les actualites et les publications les plus recentes en
premier) et modifiez le texte a l'interieur. Vous n'avez besoin de
toucher ni au CSS ni a la structure de la page.

## Ajouter un onglet

1. Dupliquez `teaching.html` (c'est le fichier le plus simple) et
   renommez-le, par ex. `teaching.html`.
2. Videz la balise `<main>` et remplissez-la avec votre contenu, en
   reutilisant les classes existantes (`.pub-entry`, `.timeline`,
   `.news-item`...) si elles conviennent, ou en ajoutant vos propres
   classes dans `style.css`.
3. Ajoutez le lien `<a href="teaching.html">Teaching</a>` dans le
   bloc `<nav class="tabs">` de **chaque** fichier HTML (y compris le
   nouveau), et mettez `aria-current="page"` sur le bon lien dans
   chaque page.

## Personnaliser l'apparence

Toutes les couleurs, polices et espacements sont definis en variables
CSS en haut de `style.css`, dans `:root`. Par exemple, pour changer la
couleur d'accent (liens, onglet actif) :

```css
--accent: #33506f;
```

## Deployer sur GitHub Pages

1. Creez un depot nomme `<votre-identifiant-github>.github.io`.
2. Poussez ces fichiers a la racine du depot.
3. Le site est en ligne a `https://<votre-identifiant-github>.github.io`
   quelques minutes plus tard, sans configuration supplementaire.

## Tester en local

Aucun outil requis : ouvrez `index.html` directement dans un
navigateur, ou lancez un petit serveur local si vous preferez les
chemins relatifs propres :

```bash
python3 -m http.server 8000
```

puis ouvrez `http://localhost:8000`.
