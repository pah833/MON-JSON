
let etudiant={
    nom:"papa",
    age:24,
    Filiere:"Genie logiciel",
    Competences:["javascript","SQL","python"]
}

console.log(typeof(etudiant));

// let jsonEtudiant=JSON.stringify(etudiant);
// console.log(jsonEtudiant);
// console.log(typeof(jsonEtudiant));


// Fais ceci :
// Transforme etudiant en JSON.
// Stocke le résultat dans une variable jsonEtudiant.
// Affiche jsonEtudiant.
// Affiche son type avec typeof.

// À toi.



let jsonDeveloppeur = 
'{"nom":"Papa","age":24,"specialite":"Cloud","competences":["Python","Docker","AWS"]}';

console.log(jsonDeveloppeur)

let developpeur=JSON.parse(jsonDeveloppeur);
console.log(developpeur);
console.log(developpeur.nom);
console.log(typeof(developpeur));

// Fais les 4 choses suivantes :

// Transforme ce JSON en objet JavaScript.
// Stocke le résultat dans developpeur.
// Affiche le nom du développeur.
// Affiche le type de developpeur.

// Pas d’indice 😈, choisis toi-même la méthode.