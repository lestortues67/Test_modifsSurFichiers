




class addColorText extends HTMLElement {
  constructor() {
    super(); // obligatoire
    const shadow = this.attachShadow({ mode: 'open' }); 


    // Ajouter du contenu HTML
    shadow.innerHTML = `
      <p>Ex1 : Bonjour, je suis un Web Component !</p>
      <button type="button" class="btn" >Cliquez ici pour de la couleur</button>

    `;

    // Ajouter un comportement au bouton
    const btn = shadow.querySelector('button');
    btn.addEventListener('click', () => btn.classList.add("btn-info","btn-lg"));
  }


}


customElements.define('bouton-color', addColorText);





class MaCardBootstrap extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Créer la div card directement en JS
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';

    // Ajouter le contenu
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">Titre Bootstrap</h5>
        <p class="card-text">Description de la card.9999999999999</p>
        <button class="btn btn-primary">Cliquez</button>
      </div>
    `;

    shadow.appendChild(card);

    // Ajouter un comportement au bouton
    const btn = card.querySelector('div');
    btn.addEventListener('click', () => alert('Bouton cliqué !'));
  }
}

customElements.define('ma-card-bs', MaCardBootstrap);





// class MesComposants extends HTMLElement{

//   constructor(){
//     super();

//     this.classList.add("button")
//     this.classList.add("btn-danger")
//   }
// }

// customElements.define('bouton-color', MesComposants);




















//////////////////////////////////////////////////
///////////2eme exemple

  class MonComposant extends HTMLElement {
    static get observedAttributes() { return ['texte']; }

    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const template = document.getElementById('mon-composant-template');
      shadow.appendChild(template.content.cloneNode(true));
      this.paragraph = shadow.getElementById('message');
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'texte') {
        this.paragraph.textContent = newValue;
      }
    }
  }

  customElements.define('mon-composant', MonComposant);







