
//Element à etendre ? Une div

//





// class MaDiv extends HTMLDivElement {
//   //je choisis Styles,Événements,Méthodes supplémentaires
//    constructor(){
//           this.myDiv = document.createElement("div")
//           this.myDiv.classList.add("bg-primary")
//           this.myDiv.classList.add("p-3")
//           this.myDiv.innerHTML = "Hello , ceci est un essai"


//           return this.myDiv

//    }
    


// }




// customElements.define("ma-div", MaDiv, { extends: "div" });



//correction
// 1️⃣ Créer la classe qui étend HTMLDivElement
class MaDiv extends HTMLDivElement {
  constructor() {
    super(); // Obligatoire pour les éléments étendus

    // 2️⃣ Styles
    this.classList.add("bg-primary", "p-3"); // classes CSS

    // 3️⃣ Contenu
    this.textContent = "Hello, ceci est un essai";

    // 4️⃣ Événement personnalisé (optionnel)
    this.addEventListener("click", () => {
      alert("Div cliquée !");
    });

    // 5️⃣ Attribut personnalisé (optionnel)
    this.setAttribute("data-type", "exemple");
  }

  // 6️⃣ Méthode personnalisée (optionnel)
  toggleHighlight() {
    this.classList.toggle("highlight");
  }
}

// 7️⃣ Enregistrer le composant
customElements.define("ma-div", MaDiv, { extends: "div" });





class MaDiv_card extends HTMLDivElement{
  constructor(){
    super()

    this.classList.add("card")
    this.classList.add("text-center")
    this.classList.add("border-info")

    this.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card’s content."


  }

}


customElements.define("ma-card", MaDiv_card, { extends: "div" });

 
