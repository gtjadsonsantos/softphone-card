export function getAudioElement(id: string): HTMLAudioElement {
    const el = document.createElement('audio')
    if (!(el instanceof HTMLAudioElement)) {
      throw new Error(`Element "${id}" not found or not an audio element.`);
    }
    return el;
}

