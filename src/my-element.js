import { LitElement, css, html } from 'lit';
import crkLogo from './assets/crk-logo.svg';

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

  render() {
    return html`
      <div>
        <img src="${crkLogo}" class="logo" alt="crk logo" />
      </div>
      <h1><slot name="title"></slot></h1>
      <div class="tab">
        <a href="#" @click="${() => this.activateTab('meet')}">meet</a> | 
        <a href="#" @click="${() => this.activateTab('observe')}">observe</a> | 
        <a href="#" @click="${() => this.activateTab('interact')}">interact</a>
      </div>
      <div class="content">
        ${this.activeTab ? html`<a href="#" @click="${() => this.closeTab()}">close</a>` : ''}
        ${this.activeTab ? html`<slot name="${this.activeTab}"></slot>` : ''}
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
    `;
  }
}

window.customElements.define('my-element', MyElement);
