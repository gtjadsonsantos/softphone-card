import { CardConfig } from './types';

export const DefaultCardConfig: CardConfig = {
  type: 'softphone-card',
  title: '',
  name: '',
  password: '',
  username: '',
  sipServer: '',
  wss: '',
};

export enum Delegate {
  onCallReceived = 'onCallReceived',
  onCallHangup = 'onCallHangup',
  onCallAnswered = 'onCallAnswered',
  onCall = 'onCall',
}

export const SOUNDS_URL = {
  dtmf: (): HTMLAudioElement => {
    const audio = document.createElement('audio');
    audio.src = 'https://jadson179.github.io/softphone-card/sounds/dtmf.wav';
    audio.load();
    return audio;
  },
  ringbacktone: (): HTMLAudioElement => {
    const audio = document.createElement('audio');
    audio.src = 'https://jadson179.github.io/softphone-card/sounds/ringbacktone.wav';
    audio.load();
    return audio;
  },
  ringtone: (): HTMLAudioElement => {
    const audio = document.createElement('audio');
    audio.src = 'https://jadson179.github.io/softphone-card/sounds/ringtone.wav';
    audio.load();
    return audio;
  },
};
