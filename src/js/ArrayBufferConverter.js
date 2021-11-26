import getBuffer from './getBuffer.js';

export default class ArrayBufferConverter {
  load() {
    return getBuffer.call(this);
  }

  toString() {
    const buffer = this.load();
    const bufferViewforString = new Uint16Array(buffer);
    let str = '';
    for (let i = 0; i < bufferViewforString.byteLength; i++) {
      str += String.fromCharCode(bufferViewforString[i]);
    }
    return str;
  }
}
