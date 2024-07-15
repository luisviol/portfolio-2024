class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer>
        <div class="social-links">
            <a href="#" aria-label="Medium">Medium</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Unsplash">Unsplash</a>
            <a href="mailto:your@email.com" aria-label="Email">Email</a>
        </div>
    </footer>
    `;
  }
}

window.customElements.define('custom-footer', FooterComponent);