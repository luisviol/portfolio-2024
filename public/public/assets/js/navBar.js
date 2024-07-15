class NavComponent extends HTMLElement {
   constructor() {
     super();
     this.innerHTML = `
       <nav>
         <a href="#" class="logo">
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect width="32" height="32" rx="16" fill="#007BFF" />
             <path d="M10 10H14V22H10V10Z" fill="white" />
             <path d="M18 10H22L18 16L22 22H18L14 16L18 10Z" fill="white" />
           </svg>
           Luis Villasmil
         </a>
         <div class="nav-items">
           <ul>
             <li><a href="#home">Home</a></li>
             <li><a href="#about">About</a></li>
             <li><a href="#resume">Resume</a></li>
           </ul>
           <div class="mode-switch">
             <span id="modeIcon">☀️</span>
             <label class="switch">
               <input type="checkbox" id="modeToggle">
               <span class="slider"></span>
             </label>
           </div>
         </div>
         <button class="menu-toggle" aria-label="Toggle menu">
           <span></span>
           <span></span>
           <span></span>
         </button>
       </nav>
     `;
     this.setupEventListeners = this.setupEventListeners.bind(this);
   }
 
   connectedCallback() {
     this.setupEventListeners();
   }
 
   setupEventListeners() {
     const menuToggle = this.querySelector('.menu-toggle');
     const nav = this.querySelector('nav ul');
     const modeToggle = this.querySelector('#modeToggle');
     const modeIcon = this.querySelector('#modeIcon');
 
     if (menuToggle && nav) {
       menuToggle.addEventListener('click', () => {
         nav.classList.toggle('show');
       });
     }
 
     if (modeToggle && modeIcon) {
       modeToggle.addEventListener('change', () => {
         document.body.classList.toggle('dark-mode');
         modeIcon.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
       });
     }
   }
}
 
customElements.define('custom-nav', NavComponent);