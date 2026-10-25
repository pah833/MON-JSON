// localStorage.setItem("prenom","papa");

// let Prenomrecupere=localStorage.getItem("prenom");
// console.log(Prenomrecupere);

// localStorage.removeItem("prenom");



let etudiant = {
    nom: "Papa",
    age: 24,
    filiere: "Genie logiciel"
};

let Transforme =JSON.stringify(etudiant);

localStorage.setItem("etudiant",Transforme);

let etudiantRecupere=localStorage.getItem("etudiant");


let donnees=JSON.parse(etudiantRecupere);
console.log(donnees);








// Travail demandé :

// Enregistre cet objet dans localStorage sous la clé "etudiant".
// Récupère les données dans une variable appelée donnees.
// Transforme les données récupérées en objet JavaScript dans etudiantRecupere.
// Affiche le nom de l'étudiant.

// Cette fois, tu dois combiner ce que tu as appris sur JSON et localStorage. À toi ! 💪



let developpeur = {
    nom: "Papa",
    age: 24,
    specialite: "Cloud",
    competences: ["Python", "Docker", "AWS"]
};


let changement=JSON.stringify(developpeur);

localStorage.setItem("developpeur",changement);

let Enregistre =localStorage.getItem("developpeur");

let objet=JSON.parse(Enregistre);

console.log(objet.nom);
console.log(objet.competences[1]);

// Travail demandé :

// Enregistre l'objet dans localStorage sous la clé "developpeur".
// Récupère les données enregistrées dans une variable appelée donnees.
// Transforme ces données en objet JavaScript dans developpeurRecupere.
// Affiche son nom.
// Affiche sa deuxième compétence.

// Essaie de tout faire seul, sans regarder l'exemple précédent. 😈


let users={
    nom:"Moussa",
    age:22,
    ville:"Dakar"
};

let transform=JSON.stringify(users);

localStorage.setItem("users",transform);

let save=localStorage.getItem("users");

let affiche=JSON.parse(save);
console.log(affiche.ville);

// Ensuite, enregistre-le dans localStorage, 
// récupère-le dans une nouvelle variable et 
// affiche uniquement sa ville à partir de l'objet récupéré.

// À toi ! 💪



let utilisateurs = {
    nom: "Moussa",
    age: 22,
    ville: "Dakar"
};

let texte=JSON.stringify(utilisateurs);

localStorage.setItem("utilisateurs",texte);

let saved=localStorage.getItem("utilisateurs");

let donne=JSON.parse(saved);
donne.age=23;
console.log(donne);

let nouveautext=JSON.stringify(donne);
localStorage.setItem("utilisateurs",nouveautext)



// Étape 1 — Les objets, JSON et localStorage

// On commence par un petit exercice. Je ne te donne aucun indice :
//  tu vas réfléchir et écrire ton code toi-même.

// Exercice 1 : Gestion d'un étudiant 🎓

// Crée un objet etudiant contenant :

// nom : "Papa"
// age : 22
// filiere : "Génie logiciel"

// Ensuite, effectue les opérations suivantes dans l'ordre :

// Transforme l'objet en texte JSON.
// Enregistre ce texte dans localStorage sous la clé "etudiant".
// Récupère les données enregistrées.
// Transforme les données récupérées en objet JavaScript.
// Modifie l'âge de l'étudiant pour le mettre à 23.
// Enregistre la modification dans localStorage.
// Affiche l'objet final dans la console.

// Important : écris chaque opération sur une ligne séparée. 
// Prends ton temps et envoie-moi ton code quand tu as terminé. 💪🏽



// // Travail demandé
// // Récupère l'utilisateur depuis localStorage.
// // Transforme les données récupérées en objet JavaScript.
// // Modifie son âge : il passe de 22 à 23 ans.
// // Enregistre la modification dans localStorage.
// // Affiche l'utilisateur après la modification.

// // Essaie de le faire seul, sans recopier l'exemple précédent. 😈💪









// 🎯 Exercice 1 — Gestion d'un panier de jeux vidéo 🎮

// Imagine que tu développes une petite application de vente de jeux vidéo.

// Crée un objet jeu contenant :

// titre : "GTA VI"
// prix : 45000
// disponible : true
// plateformes : ["PS5", "Xbox"]

// Ensuite, réalise les opérations suivantes :

// Transforme l'objet en texte JSON.
// Enregistre-le dans localStorage sous la clé "jeu".
// Récupère les données enregistrées.
// Transforme-les en objet JavaScript.
// Modifie le prix pour le mettre à 40000.
// Enregistre la modification dans localStorage.
// Affiche l'objet final dans la console.

// À toi ! Pas d'indice, pas à pas, chaque opération sur une ligne séparée. 💪🏽


let jeux={
    titre : "GTA VI",
    prix : 45000,
    disponible : true,
    plateformes : ["PS5", "Xbox"]
};

let dindi=JSON.stringify(jeux);


localStorage.setItem("jeux",dindi);

let denthie=localStorage.getItem("jeux");

let data=JSON.parse(denthie);
data.prix=40000;
console.log(data);

let newdenthie=JSON.stringify(data);

localStorage.setItem("jeux",newdenthie);



let commande={
    client : "Aminata",
    repas : "Pizza",
    quantite : 2,
    prixUnitaire : 5000,
    payee : false
};


let textjson=JSON.stringify(commande);
localStorage.setItem("commande",textjson);

let enregistrejson=localStorage.getItem("commande");

let transformobjet=JSON.parse(enregistrejson);

transformobjet.quantite=3;
transformobjet.payee=true;
console.log(transformobjet);

let lastjsontex=JSON.stringify(transformobjet);
localStorage.setItem("commande",lastjsontex);


// Travail à faire :

// Transforme l'objet en texte JSON.
// Enregistre-le dans localStorage sous la clé "commande".
// Récupère les données enregistrées.
// Transforme-les en objet JavaScript.
// Modifie la quantité pour la mettre à 3.
// Modifie payee pour mettre true.
// Enregistre les modifications dans localStorage.
// Affiche l'objet final dans la console.

// À toi de jouer ! 😈

