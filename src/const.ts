import { CardConfig } from "./types";

export const DefaultCardConfig: CardConfig = {
    type: "softphone-card",
    title: "",
    name: "",
    password: "",
    username: "",
    sipServer: "",
    wss: ""
};
  
export enum Delegate {
    onCallReceived = "onCallReceived",
    onCallHangup = "onCallHangup",
    onCallAnswered = "onCallAnswered",
    onCall= "onCall"
}