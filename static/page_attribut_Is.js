




class CompteurBouton extends HTMLButtonElement {
    constructor() {
        super(); // Appelle le constructeur du bouton natif (<button>)
        this.clics = 0;
        this.updateText();
        
        // Ajout d'un écouteur d'événement au bouton
        this.addEventListener('click', () => {
            this.clics++;
            this.updateText();
        });
    }

    updateText() {
        this.textContent = `J'ai été cliqué ${this.clics} fois`;
    }
}

// On enregistre le composant, en indiquant :
// 1. Le nom que nous inventons : 'compteur-bouton'
// 2. La classe : CompteurBouton
// 3. Le type d'élément HTML natif qu'il étend : { extends: 'button' } 
customElements.define('compteur-bouton', CompteurBouton, { extends: 'button' });






class CompteurBouton2 extends HTMLButtonElement {
  constructor() {
    super();
    this.clicks = 0;
    this.addEventListener('click', () => {
      this.clicks++;
      this.textContent = `Clics: ${this.clicks}`;
    });
  }
}
customElements.define('compteur-bouton2', CompteurBouton2, { extends: 'button' });






////////////////////////////////////////////////////////

// On crée une nouvelle classe "BtnDanger" qui étend la classe HTMLButtonElement
// Cela signifie qu'on part d'un bouton classique, mais qu'on le personnalise.
class BtnDanger extends HTMLButtonElement {
  
  // Cette méthode est appelée automatiquement quand l'élément est inséré dans le DOM
  connectedCallback() {
    // On change le style du bouton
    this.style.background = "red";
    this.style.color = "white";
    this.style.border = "none";
    this.style.padding = "8px 16px";
    this.style.borderRadius = "8px";
  }
}

// On enregistre notre nouveau "type" d'élément personnalisé.
// Le troisième argument `{ extends: "button" }` dit qu'il s'agit d'un bouton étendu.
customElements.define("btn-danger", BtnDanger, { extends: "button" });






