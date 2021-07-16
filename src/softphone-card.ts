import { HomeAssistant } from 'custom-card-helpers';
import { LitElement, html, css, property, CSSResult, TemplateResult, customElement } from 'lit-element';

import { DefaultCardConfig } from './const';
import { CardConfig } from './types';
import { Web } from "sip.js";
import { getAudioElement } from './helpers';




// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).customCards = (window as any).customCards || [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).customCards.push({
  type: 'softphone-card',
  name: 'Scheduler Card',
  description: 'Card to manage schedule entities made with scheduler-component.',
});

console.info(
  `%c  softphone-card  \n%c  Version: 1`,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

@customElement('softphone-card')
export class SoftphoneCard extends LitElement {

  @property({ type: Object }) private _hass?: HomeAssistant;
  @property({ type: Object }) private config: CardConfig = DefaultCardConfig;
  @property({type: String}) private destination = "";

  @property({type: Object}) private options: Web.SimpleUserOptions | undefined ;
  @property({type: Object}) private simpleUser: Web.SimpleUser | undefined ;
  
  
  set hass(hass: HomeAssistant) {
    this._hass = hass;
  }
  
  setConfig(userConfig: Partial<CardConfig>): void {
    const config: CardConfig = {
      ...DefaultCardConfig,
      ...userConfig,
    };
    
    this.config = config;
    
    this.options = {
      aor: `sip:${config.username}:${config.password}@${config.sipServer}`, // caller
      media: {
        constraints: { audio: true, video: false }, // audio only call
        remote: { audio: getAudioElement("remoteAudio") } // play remote audio
      },
      userAgentOptions: {
        authorizationPassword: config.password,
        authorizationUsername: config.username
      }
    };
    
    this.simpleUser = new Web.SimpleUser(this.config.wss, this.options);
    this.simpleUser.connect()
    .then(()=> this.simpleUser?.register())



    
  }
  
  
  private addDigit(e: Event): void {
    const type = (e.target as HTMLButtonElement).value
    this.destination = this.destination.concat(type)
  }

  private backSpace(): void {
    this.destination = this.destination.substr(0,this.destination.length -  1) 
  }
  
  private updateInputDestination(e: Event): void {
    const type = (e.target as HTMLInputElement).value;
    this.destination = type;
  }


  render(): TemplateResult {
    return html`
      <ha-card>
      <div class="card-header" >
      <paper-input
        class="input-number" 
        label="Destino" 
        .value=${this.destination} 

        @value-changed=${this.updateInputDestination}
        >
        ${this.destination}  
      </paper-input>

      <ha-icon-button icon="mdi:backspace" @click=${this.backSpace} > </ha-icon-button>
      </div>
      <div class="card-content" >
        <div class="row">
          <button class="key" value="1" @click=${this.addDigit} >1</button>
          <button class="key" value="2" @click=${this.addDigit} >2</button>
          <button class="key" value="3" @click=${this.addDigit} >3</button>
        </div>
        <div class="row">
          <button class="key" value="4" @click=${this.addDigit} >4</button>
          <button class="key" value="5" @click=${this.addDigit} >5</button>
          <button class="key" value="6" @click=${this.addDigit} >6</button>
        </div>  
        <div class="row">
          <button class="key" value="7" @click=${this.addDigit} >7</button>
          <button class="key" value="8" @click=${this.addDigit} >8</button>
          <button class="key" value="9" @click=${this.addDigit} >9</button>
        </div>  
        <div class="row">
          <button class="key" value="*" @click=${this.addDigit} >*</button>
          <button class="key" value="0" @click=${this.addDigit} >0</button>
          <button class="key" value="#" @click=${this.addDigit} >#</button>
        </div>  
      </ha-card>
      </div>

      <div class="card-actions" >
        <mwc-button
        
        @click=${()=> {

      
          this.simpleUser?.call(`sip:${this.destination}@${this.config.sipServer}`)
          .catch((error: Error) => {
            console.error(error)
          });

        }}
        
        >Ligar</mwc-button>
      </div>
      </ha-card>
    
    `;
  }

  getCardSize(): number {
    return 9;
  }

  static get styles(): CSSResult {
    return css`
    :host {
      max-width: 492.03px;
      height: 500.63px;
      width: 100%;
      border-radius: 1em;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
    }
    .card-header > .input-number {
      width: 100%;
      border: none;
    }
    .card-content {
      padding: 16px;
    }
    .row {
      width: 100%;
      display: flex;
      height: 70px;
      justify-content: space-evenly;
    }
    .key {
      width: 80px;
      height: 40px;
      background-color: rgb(138 180 248);
      color : #fff ;
      border: none;
      border-radius: 0.3em;
      color: white;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      font-size: 16px;
      cursor: pointer
    }

    .card-actions {
      border-top: 1px solid var(--divider-color, #e8e8e8);
      padding: 5px 16px;
    }

    `;
  }
}
