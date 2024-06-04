//---------------Animation avec SetInterval--------------//
let imageFelixa = document.getElementById("img_chat"); //Image de Félixa
let adresseFelixa = imageFelixa.src; //Adresse pour l'image de Félixa
let i = 1; //Variable pour la boucle
let animationOnFelixa = true; //Variable pour savoir si l'animation est active ou non
let animFelixa = setInterval(afficherFelixa, 1500); //Variable pour la boucle

let boutonFelixa = document.getElementById("boutonFelixa"); //Le bouton pour controler (arret/démarrage) l'animation
boutonFelixa.addEventListener("click", arreterAnimationFelixa); //Écouter d'évenement pour un clic sur le bouton

/*Fonction pour gerer l'animation par image */
function afficherFelixa(){
  adresseFelixa = "felixa" + i + ".jpg";
  imageFelixa.src = "images/felixa/" + adresseFelixa;
  i++;
  if(i > 6){
      i = 1;
  }
}
afficherFelixa();

/*Fonction pour démarrer ou arrêter l'animation du diaporama de Félixa*/
function arreterAnimationFelixa() {
  if (animationOnFelixa) {
    clearTimeout(animFelixa);
    animationOnFelixa = false;
  } else {
    animFelixa = setInterval(afficherFelixa, 1500);
    animationOnFelixa = true;
  }
}


//----------Animation avec requestAnimationFrame---------//
let imageAngora = document.getElementById("imageAngora"); //Image de l'angora turc
let adresseAngora = imageAngora.src; //Adresse pour l'image de L'angora turc
let ii = 1; //Variable pour la boucle
var fps = 30; //Nombre d'image par seconde désiré
let animationOnAngora = true; //Variable pour savoir si l'animation est active ou non
let animAngora; //Initialisation de la variable pour enregistrer le requestAnimationFrame

let boutonAngora = document.getElementById("bouton_Angora"); //Le bouton pour controler (arret/démarrage) l'animation
boutonAngora.addEventListener("click", arreterAnimationAngora); //Écouter d'évenement pour un clic sur le bouton

/*Fonction pour gerer l'animation par image */
function afficherAngora() {
  animAngora = setTimeout(function () {
    requestAnimationFrame(afficherAngora);
    adresseAngora = "angora (" + ii + ").png";
    imageAngora.src = "images/angora/" + adresseAngora;
    ii = ii + 1;
    if (ii > 120) {
      ii = 1;
    }
  }, 1000 / fps);
}
afficherAngora();

/*Fonction pour démarrer ou arrêter l'animation de la queue de l'Angora turc*/
function arreterAnimationAngora() {
  if (animationOnAngora) {
    clearTimeout(animAngora);
    cancelAnimationFrame(afficherAngora);
    animationOnAngora = false;
  } else {
    afficherAngora();
    animationOnAngora = true;
  }
}


//-------Animation CSS spritesheet contrôlée avec JS-----//
const animPub = document.getElementById("pub_Chat"); //La div pour l'animation de la pub
const classes = animPub.classList; //Recupération de la classList de la div pour l'animation
animPub.classList.add("animationDeLaPub"); //Ajout de la class pour l'animation de la pub

let boutonPub = document.getElementById("bouton_pub"); //Le bouton pour controler (arret/démarrage) l'animation
boutonPub.addEventListener("click", basculer); //Écouter d'évenement pour un clic sur le bouton

/*Fontion pour l'animation de la pub*/
function basculer(){
    animPub.classList.toggle("animationDeLaPub"); //On active ou désactive l'animation à chaque clic avec toggle
}


//---------------Menu burger amélioré----------------//
let maCheckbox = document.getElementById("maCheckbox");
let monBody = document.querySelector("body");
let monMenu_phone = document.getElementById("menu_mobile");
maCheckbox.addEventListener("click", gererCheckbox);

/*Fonction pour gérer le menu burger */
function gererCheckbox() {
  
  //si la checkbox est cochée 
  if(maCheckbox.checked) 
  {
    //-afficher menu-phone
    monMenu_phone.style.transform = "translateX(0)";
    //-arreter scroll
    monBody.style.overflow = "hidden";
  }   
  //sinon 
  else
  {
    //-autoriser scroll
    monBody.style.overflow = "scroll";
    //-cacher menu-phone
    monMenu_phone.style.transform = "translateX(-101%)"; /*Encore une fois, le -101% c'est pour m'assurer qu'il n'y a pas de petite bordure qui persiste au coin quand le menu est fermé*/
  }
}

//On cherche les liens du menu:
let mesLiens = document.querySelectorAll("a");
//On attache un écouteur d'évènement click sur chacun d'eux:
for (let i = 0; i < mesLiens.length; i++) {
  mesLiens[i].addEventListener("click", gererLiens);

  function gererLiens() 
  {
    //- cacher menu
    monMenu_phone.style.transform = "translateX(-101%)";
    //- arreter le scroll
    monBody.style.overflow = "scroll";
    //- decocher la checkbox (pour faire revenir le burger)
    maCheckbox.checked = false; 
  }
} 

/*Interval pour appeler la fonction plusieurs fois pour qu'elle vérifie la largeur du viewport et pour qu'elle réactive le scroll ou non*/
setInterval(activerScrollDesktop, 1000 / 60);

/*Fonction pour réactiver le scroll ou non. dépendemment du view-width (éviter de bloquer le scroll losqu'on bascule de mobile à desktop mais qu'on avait le menu mobile ouvert) */
function activerScrollDesktop(){
  if(window.innerWidth > 800){
    monBody.style.overflow = "scroll";
    //-cacher menu-phone
    monMenu_phone.style.transform = "translateX(-101%)";
    //Remettre le checkbox à unchecked
    maCheckbox.checked = false; 
  }  
}

