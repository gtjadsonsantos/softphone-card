import {LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';

import {globalCSS} from "./styles"

@customElement('softphone-card')
export class SoftphoneCard extends LitElement {
  static styles = globalCSS

  @property()
  name = 'Worldd';

  @property({type: Number})
  count = 0;

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

