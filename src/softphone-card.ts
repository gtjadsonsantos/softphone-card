import {LitElement, html,css } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

import "./views/configuration-phone"

@customElement('softphone-card')
export class SoftphoneCard extends LitElement {

  @property() private _hass?: HomeAssistant;


  set hass(hass: HomeAssistant) {
    this._hass = hass;
  }

  render() {
    return html`
     <configuration-phone .hass=${this._hass} />

     </configuration-phone>
    `;
  }


  static styles = css`
  :host {
      display: block;
      max-width: 450px;
      height: 520px ;
      display: flex;
      flex-direction: column;
      
      justify-content: center;
    }
  `;

}

