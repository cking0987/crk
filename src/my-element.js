import { LitElement, css, html } from 'lit'
import crkLogo from './assets/crk-logo.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * 
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      activeTab: { type: String }, // Track the active tab
    };
  }

  constructor() {
    super();
    this.activeTab = ''; // Initialize active tab as empty
  }

  // Content for each tab
  tabContent = {
    learn: html`
      <h2>Chuck King (nerd).</h2>
      <p>Creative strategist and digital innovator</p>
      <p>What does that even mean? 🧐 I'm a tech nerd who is actually just an all-around nerd. I have very few qualifications but I make up for that with my insatiable curiosity and lust for failure.</p>
      <p>I like to design things and then build them. I do websites, apps, print design, and real-life things that don't have any pixels at all. That's what the projects section of my site is all about. This is the about page though, so I'll move on to the mission-critical information now.</p>`,
    look: html`<p>This is the Look tab content</p>`,
    talk: html`<p>This is the Talk tab content</p>`,
  };


  render() {
    return html`
      <div>
        <img src="${crkLogo}" class="logo" alt="crk logo" />
      </div>
      <p>why are you here?</p>
      <p class="tab">
        <a href="#" @click="${() => this.activateTab('learn')}">learn</a>
        <a href="#" @click="${() => this.activateTab('look')}">look</a>
        <a href="#" @click="${() => this.activateTab('talk')}">talk</a>
        
      </p>
      <div class="content">
      <p>${this.activeTab ? html`<button @click="${() => this.closeTab()}">X</button>` : ''}</p>
        ${this.activeTab ? this.tabContent[this.activeTab] : ''}
      </div>
    `;
  }

  activateTab(tab) {
    this.activeTab = tab;
  }

  closeTab() {
    this.activeTab = '';
  }


  static get styles() {
    return css`
      :host {
        max-width: 400px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }
      .tab {
        display: flex;
        gap: 1rem;
        justify-content: center;
      }
      .content {
        margin-top: 1rem;
        text-align: left;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
