import {LitElement, html,css } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';


@customElement('configuration-phone')
export class ConfigurationPhone extends LitElement {


  @property({type: Object}) 
  hass?: HomeAssistant;



  render() {
    return html`
    <div id="configuration-phone" >

        <label for="name" title="Nome" >Nome</label>
        <input class="input"  id="name"  />

        <label for="sip-uri" title="Sip Uri" >Sip Uri</label>
        <input class="input"  id="sip-uri"  />

        <label for="username" title="Nome de Usuario" >Nome de Usuario</label>
        <input class="input"  id="username"  />

        <label for="password" title="Senha de Usuario" >Senha de Usuario</label>
        <input class="input"  id="password"  />

        <label for="swss" title="Servidor Websocket" >Servidor Websocket</label>
        <input class="input"  id="swss"  />

        <div class="configuration-phone-area-buttons" >
          <span>Desconectado</span>
          <button @click=${() => {console.log("Jadson dos Santos")} } >Salvar</button>
        </div>
    </div>

    `;
  }


  static styles = css`
  

  #configuration-phone {
      width: 100%;
      height: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;      
  }

  #configuration-phone .input {
      width: 90%;
      height: 35px;
      margin: auto;
      border: 1px solid #78B4D7;
      border-radius: 5%;
      margin-top: 13px ;
    
  }

  #configuration-phone label {
    margin: 7px 0px 0px 20px ;
    font-weight: bold;
    font-family: "Roboto",sans-serif;
  }

  .configuration-phone-area-buttons {
    margin-top: 10px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }

  .configuration-phone-area-buttons button,span {
    width: 120px ;
    height: 45px;
    border-radius: 4%;
    margin-left:  20px;
    margin-right: 20px;
  }
  .configuration-phone-area-buttons button {
    background-color: #78B4D7;
    color: #fff;
    font-weight: bolder;
    font-size: 14px;
    text-decoration: none;
    border: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
  
  .configuration-phone-area-buttons span {
    background-color: #FF0000;
    color: #fff;
    line-height: 45px;
    font-weight: bold;
    font-weight: bolder;
    font-size: 14px;
    text-decoration: none;
    border: none;
    text-align: center;
    text-decoration: none;
    font-family: "Roboto",sans-serif;


  }
  
  `;
}



