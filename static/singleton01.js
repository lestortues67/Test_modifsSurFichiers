var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}

run()




class Singleton {
  constructor(p_id, p_idPremier) {
    this.form = document.getElementById(p_id);
    this.dictPublic = {};
    let dictPrive = {};

    this.bouton = document.getElementById("addElem")
    this.infosCard = document.getElementById("cardBody")
    this.ajouterCard = document.getElementById("ajouterCard")
    this.btnCard = document.getElementsByClassName("btnAjouterCards")
    this.id = null;
    this.idPremier = p_idPremier;

    this.alertDiv = document.getElementById("alertMessage");
    
  }





// let form = new classForm; 

// form.dictPublic['nom'] = 'doriath'; // OK 
// form.dictPrive['nom'] = 'doriath'; // NOT OK !!

var datas = 
[{ id:1,image: "static/pizzaHappy.jpg" ,produit: "Pizza au chorizo", descrip: "sauce tomate,chorizo,origan,fromage,sel,poivre", prix: "12€" },
  {id : 2 ,image:"static/champignons.jpg",produit: "Pizza aux champignons ", descrip: "crème fraiche,champignons,poivre,sel", prix: "14€" },
  {id : 3 ,image:"static/pizzaMer.jpg" ,produit: "Pizza Alsacienne à la crème fraiche , fruits de mer et vin blanc", descrip: "crème fraiche,fruits de mer,poivre,sel marin,vin blanc", prix: "20€" }]

//prix: pizza chorizo 12€ ! Pizza aux champignons 14€ !  Pizza Alsacienne à la crème fraiche , fruits de mer et vin blanc 16€


class classCard {
  constructor(p_id, p_idPremier) {
    this.form = document.getElementById(p_id);
    this.dictPublic = {};
    let dictPrive = {};

    this.bouton = document.getElementById("addElem")
    this.infosCard = document.getElementById("cardBody")
    this.ajouterCard = document.getElementById("ajouterCard")
    this.btnCard = document.getElementsByClassName("btnAjouterCards")
    this.id = null;
    this.idPremier = p_idPremier;

    this.alertDiv = document.getElementById("alertMessage");
    
  }

  creationCard(){
    console.log("***creationCard")
    for (var i = 0; i < datas.length; i++) {
      
        // Créer l'élément div de la card
        var card = document.createElement("div");
        card.classList.add("card", "d-flex", "flex-column", "justify-content-between","m-4");
        card.style.width = "14rem";
        card.style.height = "32rem"; 
        card.id = "maCard";

        // Créer l'image de la carte
        var img = document.createElement("img");
        img.src = datas[i].image;
        img.className = "card-img-top";
        img.alt = "...";

        // Créer la div "card-body"
        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "flex-column");
        cardBody.dataset.id = "btn" + datas[i].id

        // Créer le titre <h5> de la carte
        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = datas[i].produit;    

        // Créer le paragraphe <p> pour la description
        var cardText = document.createElement("p");
        cardText.className = "card-text flex-grow-1";  // Permet de pousser le bouton vers le bas
        cardText.textContent = datas[i].descrip;

        // Créer l'élément h4 pour le prix
        var cardPrix = document.createElement("h4");
        cardPrix.className = "card-prix";
        cardPrix.textContent = datas[i].prix;

        // Créer le bouton d'ajout
        var addButton = document.createElement("a");
        addButton.href = "#";
        addButton.classList.add("btn", "btn-primary", "mt-auto","btnAjouterCards");
        addButton.id = "addElem";
        addButton.textContent = "+ Ajouter";
        addButton.addEventListener("click",eventManager,false)
        addButton.dataset.id = "btn" + datas[i].id

        // Ajouter les éléments dans la div "card-body"
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrix);
        cardBody.appendChild(addButton);

        // Ajouter les éléments à la carte principale
        card.appendChild(img);
        card.appendChild(cardBody);

        this.ajouterCard.appendChild(card);
    }
  }
  

  dataCard(p_elem) {
    console.log("***dataCard()")
    // Récupère les infos des cards à partir de l'élément parent (p_elem)
    var keys = ['produit', 'descrip', 'prix','id'];
    var values = [];
    var dict = {};

    // Sélectionne le card-body de la carte cliquée
    var cardBody = p_elem.querySelector(".card-body");
    var monId = cardBody.dataset.id 
    console.log("**************:",monId)


    // Récupère les informations spécifiques du card-body
    var produit = cardBody.querySelector(".card-title").textContent;  // Titre de la carte
    var descrip = cardBody.querySelector(".card-text").textContent;   // Description de la carte
    var prix = cardBody.querySelector(".card-prix").textContent;      // Prix de la carte

    // Ajoute ces informations dans le tableau values
    values.push(produit);
    values.push(descrip);
    values.push(prix);
    values.push(monId)

    // Remplir le dictionnaire avec les clés et valeurs appropriées
    for (var y = 0; y < keys.length; y++) {
      dict[keys[y]] = values[y];
      console.log(dict);  // Affiche le dictionnaire dans la console
    }

    return dict;
}


  ModifCardQuandAjout(p_id) {
    console.log("***ModifCardQuandAjout")
    var boutons = document.getElementsByClassName("btnAjouterCards")

    // Vérifier si l'article est déjà dans le panier
    var panier = document.getElementById("tablePanier");
    var estDansPanier = false;

    for (var i = 0; i < panier.children.length; i++) {
        if (panier.children[i].dataset.id == p_id) {
            estDansPanier = true;
            break;  // Sortir de la boucle dès qu'on trouve l'élément
        }
    }

     for (var y = 0; y < boutons.length; y++) {
        if (boutons[y].dataset.id == p_id) {
          if (estDansPanier) {
            console.log("L'article est dans le panier");
            boutons[y].innerHTML = "Déjà ajouté !";
            boutons[y].disabled = true;
            boutons[y].classList.add("disabled");
          } else {
            console.log("L'article n'est pas dans le panier...");
            // boutons[y].classList.remove("disabled");
          }
        }
      }

}


  afficheTexteBouton(p_id){
    console.log("***afficheTexteBouton")
    //Quand une ligne est supprimée dans le panier. On rend le bouton de la card enabled et on ajoute le texte de départ
    var mesBoutonsAjouter =  document.getElementsByClassName("btnAjouterCards") 
    //bb[2].dataset.id == p_event.target.parentElement.parentElement.dataset.id
    for (var i = 0; i < mesBoutonsAjouter.length; i++) {
      console.log("afficheTexteBouton():",p_id)
      if (mesBoutonsAjouter[i].dataset.id == p_id){
        mesBoutonsAjouter[i].innerHTML = "+ Ajouter"
        mesBoutonsAjouter[i].classList.remove("disabled");
      }

      else{

      } 

    }
    
  } 

  
}
//FIN classCard




class classPanier {
  constructor(p_id) {
    this.dict = {}; // Un dictionnaire vide pour stocker les données
    this.panier = document.getElementById("tablePanier");  
    this.total = document.getElementById("monTotal");
    this.modalBody = document.getElementById("modal-body")
    this.coco = document.getElementById("tablePanier");  
  }
   //Créer la table pour le panier 
   ModalPanier(){
    console.log("***ModalPanier()")
    var table = document.createElement("table")
    table.classList.add("table","table-hover")
    var monThead = document.createElement("thead")
    var monTbody = document.createElement("tbody")
    monTbody.id = "tablePanier"
    //monTbody.id = "choucroute"
    var monTfoot = document.createElement("tfoot")

    var mesColonnes = ['N°Ligne','Produit','Description','Prix','Qte','Note','Supprimer']
    var maLigneThead = document.createElement("tr")

    for (var i = 0; i < mesColonnes.length; i++) {
      var monTh = document.createElement("th")
      monTh.innerHTML = mesColonnes[i]
      maLigneThead.appendChild(monTh);
    }    

     var maLigneTfoot = document.createElement("tr")
     maLigneTfoot.innerHTML = "Total à payer:"
     var maCaseTfoot = document.createElement("td")
     maCaseTfoot.id = "monTotal"
     maCaseTfoot.innerHTML = "0€"

    this.modalBody.appendChild(table)
    table.appendChild(monThead)
    table.appendChild(monTbody)
    table.appendChild(monTfoot)

    monThead.appendChild(maLigneThead)

    monTfoot.appendChild(maLigneTfoot)
    maLigneTfoot.appendChild(maCaseTfoot)
    


  }
  //créer les lignes dans le panier
  ajouterDansPanier(p_data) {
    console.log("***ajouterDansPanier()");
    var myModal = document.getElementById("modal-body")
    var myTbody = myModal.getElementsByTagName("tbody")[0]

    var monTotal= myModal.getElementsByTagName("tfoot")[0].children[0].children[0]

    var maData = p_data 
    console.log("maData:",maData)

    var enfantsTbody = myTbody.children.length

    
    var ligne = document.createElement("tr")
    ligne.id = p_data.id 
    ligne.dataset.id = p_data.id 
    //ligne.style.width = "10%"

    var numLigne = document.createElement("td")
    numLigne.innerHTML = enfantsTbody+1
    numLigne.classList.add("numLigne")    
    numLigne.style.width = "5%";

    var monProduit = document.createElement("td")
    monProduit.innerHTML = maData.produit
    monProduit.classList.add("text-wrap")
    //monProduit.classList.add("w-10");
    monProduit.style.width = "10%";

    var maDescrip = document.createElement("td")
    maDescrip.innerHTML = maData.descrip
    maDescrip.classList.add("text-wrap")
    //maDescrip.classList.add("w-10");
    maDescrip.style.width = "40%";

    var monPrix = document.createElement("td")
    monPrix.innerHTML = maData.prix
    monPrix.classList.add("text-wrap")
    //monPrix.classList.add("w-5");
    monPrix.style.width = "10%";

    var caseQte = document.createElement("td")
    caseQte.classList.add("d-flex","flex-column")
    caseQte.classList.add("w-10");
    caseQte.style.width = "10%";
    
    var maQte = document.createElement("td")
    maQte.innerHTML = 1    
    //maQte.style.width = "5%";

    var maNote = document.createElement("td")
    //maNote.classList.add("w-35");
    maNote.style.width = "35%";

    var divNote = document.createElement("div")
    var spanNote = document.createElement("span")
    spanNote.classList.add("note-text")    
    var inputNote = document.createElement("input")
    inputNote.classList.add("form-control","note-input","d-none")
    inputNote.type = "text"
    inputNote.placeholder = "Ajouter une note"+"\u{1F58D}"
    var btnNote = document.createElement("button")
    btnNote.classList.add("btn","btn-light","btn-sm","d-block","btnNotePanier")
    btnNote.innerHTML = "Ajouter une note"+"\u{1F58D}"
    btnNote.addEventListener("click",eventManager,false)


    var buttonsQte = document.createElement("td")    
    var plus = document.createElement("button")
    plus.classList.add("btn-sm","btn-light","ajouterCeProduit")
    plus.innerHTML = "+"
    plus.id = "ajouterCeProduit"
    plus.dataset.id = maData.id
    plus.addEventListener("click",eventManager,false)

    var moins = document.createElement("button")
    moins.classList.add("btn-sm","btn-light","retirerCeProduit")
    moins.innerHTML = "-" 
    moins.id = "retirerCeProduit"
    moins.dataset.id = maData.id
    moins.addEventListener("click",eventManager,false)

    //this.total.innerHTML = this.total + maData.prix


    var caseSupprimer = document.createElement("td")
    //caseSupprimer.classList.add("w-5");
    caseSupprimer.style.width = "5%";
    //caseSupprimer.style.width = "5%";
    var btnSupprimer = document.createElement("button")
    btnSupprimer.classList.add("btn","btn-light","supprimerLigne")
    btnSupprimer.innerHTML = "❌"
    btnSupprimer.addEventListener("click",eventManager,false)


    var valeurTotal = monTotal.innerHTML
    monTotal.innerHTML = parseInt(valeurTotal)+ parseInt(maData.prix) + "€"


    

    myTbody.appendChild(ligne)
    ligne.appendChild(numLigne)
    ligne.appendChild(monProduit)      
    ligne.appendChild(maDescrip)
    ligne.appendChild(monPrix)

    ligne.appendChild(caseQte)
    caseQte.appendChild(maQte)
    caseQte.appendChild(buttonsQte)
    buttonsQte.appendChild(plus)
    buttonsQte.appendChild(moins)
    



    ligne.appendChild(maNote)
    maNote.appendChild(divNote)
    divNote.appendChild(spanNote)
    divNote.appendChild(inputNote)
    divNote.appendChild(btnNote)
    

    ligne.appendChild(caseSupprimer)
    caseSupprimer.appendChild(btnSupprimer)

  } 


  //supprimer une ligne dans le panier
  supprimerLignePanier(p_id){
    console.log("***supprimerLigne")
    var ligne = document.getElementById(p_id);
    ligne.remove()    

  }

 
  //Augmenter le chiffre du panier de la notification
  ajouterNumAuPanier(p_elem){
    console.log("***ajouterNumAuPanier")
    var elem = document.getElementsByClassName(p_elem)
    var monNum = parseInt(elem[0].innerText)
    console.log(monNum)    
    elem[0].innerText = monNum + 1
    //elem[0].innerText = compt + 1

  }
  //Diminuer le chiffre du panier de la notification
   supprimerNumAuPanier(p_elem){
    console.log("***supprimerNumAuPanier")
    var elem = document.getElementsByClassName(p_elem)
    var monNum = parseInt(elem[0].innerText)
    console.log(monNum)    
    elem[0].innerText = monNum - 1
    //elem[0].innerText = compt + 1

  }
  //Quand on augmente la quantitée dans la colonne "Qte"
  PrixTotalPanierPlus(p_valeur){
    console.log("***PrixTotalPanierPlus")
    var myModal = document.getElementById("modal-body")
    var monTotal= myModal.getElementsByTagName("tfoot")[0].children[0].children[0]
    console.log("le prix est:",monTotal.innerHTML)
    var nombre = monTotal.innerHTML.slice(0, -1); 
    var valeur = p_valeur 
    var calcul = parseInt(nombre) + valeur
    console.log(calcul)
    monTotal.innerHTML = calcul + "€"
  }

  //Quand on réduit la quantitée dans la colonne "Qte"
  PrixTotalPanierMoins(p_valeur){
    console.log("***PrixTotalPanierMoins")
    var myModal = document.getElementById("modal-body")
    var monTotal= myModal.getElementsByTagName("tfoot")[0].children[0].children[0]
    console.log("le prix est:",monTotal.innerHTML)
    var nombre = monTotal.innerHTML.slice(0, -1); 
    var valeur = p_valeur 
    var calcul = parseInt(nombre) - valeur
    console.log(calcul)
    monTotal.innerHTML = calcul + "€"
  }

  //Réduire le numéro de ligne 
  numLigneDansPanier(){
    console.log("***numLigneDansPanier()")
    var ligne = document.getElementsByClassName("numLigne")   
    
    for (var i = 0; i < ligne.length; i++) {
      var valeurNumLigne = ligne[i].innerHTML
      if (valeurNumLigne == "1"){
        console.log("La valeur est égale à 1")
      }
      else{
        ligne[i].innerHTML = parseInt(valeurNumLigne) -1 
      }
      
    }
  }

  ajoutUneFoisProduit(p_data){
    console.log("***ajoutUneFoisProduit")
  // On vérifie que l'id du produit existe déjà dans le panier
  var elem = document.getElementById("tablePanier");
  var mesEnfants = elem.children;
  
  for (var y = 0; y < mesEnfants.length; y++) {
    var produitId = mesEnfants[y].dataset.id; // On prend l'ID du produit de chaque ligne
    if(produitId == p_data.id) {
      return true; // Le produit existe déjà, ne pas ajouter
    }
  }
  return false; // Le produit n'est pas dans le panier, on peut l'ajouter
}


ajouterNote(p_button){
    console.log("***ajouterNote()")
    // Trouver la cellule parente du bouton cliqué
    var cell = p_button.parentElement.parentElement;  // Si le bouton est dans un div qui est dans un <td>

    // Accéder au <div> qui est le premier enfant du <td>
    let div = cell.children[0]; // C'est le <div>

    // Accéder aux éléments <span> et <input> à l'intérieur du <div>
    var noteText = div.children[0];  // Le premier enfant de <div> est <span class="note-text">
    var noteInput = div.children[1]; // Le deuxième enfant de <div> est <input class="note-input">

    // Si l'input est caché, l'afficher et changer le bouton
    if (noteInput.className.indexOf("d-none") !== -1) {
        noteInput.classList.remove("d-none");
        noteInput.value = noteText.innerText !== "-" ? noteText.innerText : ""; // Pré-remplir la note existante
        noteInput.focus();
        noteText.classList.add("d-none");
        p_button.innerText = "Enregistrer";
        //p_button.classList.replace("btn-success", "btn-primary");
    } else {
        // Si l'input est affiché, enregistrer la note
        noteText.innerText = noteInput.value.trim() || "-";
        noteText.classList.remove("d-none");
        noteInput.classList.add("d-none");
        p_button.innerText = "Ajouter une note"+"\u{1F58D}";
        //p_button.classList.replace("btn-primary", "btn-success");
    }
}



 


  
// FIN classPanier
}


let card = new classCard('maCard',"glycemie-matin"); // Créer une instance de classForm pour manipuler 'myForm'
let panier = new classPanier();


function demarrage(){
    console.log("demarrage")
    //création de la table du panier dans la modal
    panier.ModalPanier()  
    //Création des cards
    card.creationCard()

      
    
};
demarrage()

function eventManager(p_event) { 
  try {
    //var ligneData = " "
    console.log("D6 buttonsAddEvents()")
    //click sur modifier(boutons jaune)

    if(p_event.target.className.includes("btnAjouterCards")){
       console.log("btnAjouterCards");

      var produitData = card.dataCard(p_event.target.parentNode.parentNode);

      // Vérifie si le produit est déjà dans le panier
      if(panier.ajoutUneFoisProduit(produitData) == false) {
        panier.ajouterDansPanier(produitData);  // Ajoute le produit dans le panier
        panier.ajouterNumAuPanier("monBadgeNotif");  // Met à jour le compteur de notification
      } else {        
        var dd = document.getElementById(produitData.id)
        var pp = parseInt(dd.children[3].innerHTML)
        panier.PrixTotalPanierPlus(pp)
        
         
      }
      card.ModifCardQuandAjout(produitData.id)    
    }       
    
    //Augmenter la quantitée
    if(p_event.target.className.includes("ajouterCeProduit")){
      console.log("Qte:ajouterCeProduit")     
      var maQte = parseInt(p_event.target.parentElement.parentElement.children[0].innerHTML)
      p_event.target.parentElement.parentElement.children[0].innerHTML = maQte + 1
      var monPrix = p_event.target.parentElement.parentElement.parentElement.children[3].innerHTML
      panier.PrixTotalPanierPlus(parseInt(monPrix))   
    
    }
    //Diminuer la quantitée 
    if(p_event.target.className.includes("retirerCeProduit")){
      console.log("Qte: retirerCeProduit")
      var maQte = parseInt(p_event.target.parentElement.parentElement.children[0].innerHTML)
      if(maQte == 1){

      }
      else{
        p_event.target.parentElement.parentElement.children[0].innerHTML = maQte - 1
        var monPrix = p_event.target.parentElement.parentElement.parentElement.children[3].innerHTML
        panier.PrixTotalPanierMoins(parseInt(monPrix))

      }    
    }

    //Ajouter une note
    if(p_event.target.className.includes("btnNotePanier")){
      //Ajouter une note à une ligne du panier
      console.log("btnNotePanier")      
      console.log("button:",p_event.target)      
      panier.ajouterNote(p_event.target)
    }
     


    //Supprimer une ligne dans le panier
    if(p_event.target.className.includes("supprimerLigne")){
      console.log("supprimerLigne")
      //Supprimer une ligne dans le panier
      panier.supprimerLignePanier(p_event.target.parentElement.parentElement.dataset.id)
      //Réduire les numéros de ligne quand on supprime une ligne       
      panier.numLigneDansPanier()
      //Réduire le chiffre/nombre de la notif du bouton panier
      panier.supprimerNumAuPanier("monBadgeNotif")

      //Si un produit/article est supprimé alors le bouton ajouter re-devient "ajouter" et enabled
      card.afficheTexteBouton(p_event.target.parentElement.parentElement.dataset.id)

      var maQte = parseInt(p_event.target.parentElement.parentElement.children[4].children[0].innerHTML)

      var monPrix = parseInt(p_event.target.parentElement.parentElement.children[3].innerHTML)

      var total = monPrix*maQte

      if(maQte == 1){
        //On soustrait le prix du total 
        panier.PrixTotalPanierMoins(parseInt(monPrix)) 

      }
      else{
        panier.PrixTotalPanierMoins(parseInt(total)) 
      }

      var monId = p_event.target.parentElement.parentElement.dataset.id 
    
    }  



        

    
  //Fin du TRY  
  } 
  catch (error) {
    console.error("Une erreur est survenue :", error);
  }
}


