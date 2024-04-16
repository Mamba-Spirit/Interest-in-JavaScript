/*
                ***********************Exercice 1******************************
                
function addtion(param1, param2){
    return (param1 + param2);
}
function soustraction(param1, param2){
    return (param1 - param2);
}
function multi(param1, param2){
    return(param1*param2);
}
function division(param1, param2){
    let reponse;
    if(param2 !== 0){
        reponse = (param1/param2);
    }
    else{
        reponse = "La divison par zéro est impossible!";
    }
    return reponse;
}
function expo(param){
    return (param*param);
}

let a = 14, b = 20;
console.log(addtion(a,b));
console.log(soustraction(a,b));
console.log(multi(a,b));
console.log(division(a,b));
console.log(expo(12));

                ***********************Exercice 2******************************

//********  Arrow function   **********

var add = (numbre1, numbre2) =>{return (numbre1 + numbre2)};
var sous = (numbre1, numbre2) =>{return (numbre1 - numbre2)};
var multi = (numbre1, numbre2) =>{return (numbre1 * numbre2)};
var division = (numbre1, numbre2) =>{
    let reponse;
    if(numbre2 !== 0){
        reponse = numbre1/numbre2;
    }
    else{
        reponse = "On ne divise pas un nombre par 0!";
    }
    return reponse;
};

var expo = (numbre) => {return (numbre * numbre)};

var a = 5, b= 0;

console.log(add(a,b));
console.log(sous(a,b));
console.log(multi(a,b));
console.log(division(a,b));
console.log(expo(b));

               // ***********************Exercice 3******************************

var myArray = [157, 10, 81, 1000, 4, 1024, 16, 492, 9, 287, 0];
console.log(myArray);
var count = 0;
for(let i = myArray.length - 1; i >= 0; i--){
    if((myArray[i] % 2) !== 0){
        myArray.splice(i,1);
        count++;
    }
}

console.log(myArray);
console.log(count + " élélements supprimés.");
 var sinus= myArray.map(function(value){
                        return Math.sin((value * Math.PI )/180);
 });
 console.log(sinus);

var myArray = [157, 10, 81, 1000, 4, 1024, 16, 492, 9, 287, 0];

var loga = 0;
for(let i = 0; i < myArray.length; i++){

    if(Math.log10(myArray[i]) == i){
        
        console.log(myArray[i]);
        loga ++;
    }
}
console.log(loga);
*/
// ****************************Exercice 4*********************************
function remplacerNom(phrase, nomRecherche, nomRemplacement) {
    // Utiliser la méthode replace() pour remplacer toutes les occurrences de nomRecherche par nomRemplacement
    const nouvellePhrase = phrase.replace(new RegExp(nomRecherche, 'g'), nomRemplacement);
    return nouvellePhrase;
}

//let fact = "Vérité sur Chuck Norris : Hulk s'est battu contre Chuck Norris une fois. Depuis, il fait de la pub pour du maïs. Lando Norris est un pilote de f1";
//const nouvelleFact = remplacerNom(fact, "Chuck Norris", "Bruce Lee");

//console.log(nouvelleFact);
//console.log(fact);
//console.log(fact[3]);
//var next = fact.split('');
//console.log(next[3]);
function letter(tableau){
    var newTableau = [];
    for(let i = 0; i < tableau.length; i++){
        if(!newTableau.includes(tableau[i])){
            newTableau.push(tableau[i]);
        }
    }
    console.log(newTableau.length);
    return newTableau;
}

var fact = "Vérité sur Chuck Norris : Hulk s'est battu contre Chuck Norris une fois. Depuis, il fait de la pub pour du maïs.";
let taille = fact.length;
var words = fact.split(' ');
let nombre_mot = words.length;
let average = taille/nombre_mot;
console.log(taille);
console.log(nombre_mot);
console.log("La taille moyenne des mots du text est : " + average);
console.log(letter(fact));
var trie = letter(fact);
console.log(trie.sort());
