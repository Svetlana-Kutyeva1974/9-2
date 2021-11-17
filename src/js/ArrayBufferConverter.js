import getBuffer from './getBuffer.js';

export default class ArrayBufferConverter {
  static load() {
    return getBuffer();
  }

  // eslint-disable-next-line no-unused-vars
  toString() {
    const buffer = this.load();
    console.log('buffertoString', buffer);
    const bufferViewforString = new Uint16Array(buffer);
    let str = '';
    for (let i = 0; i < bufferViewforString.byteLength; i++) {
      str += String.fromCharCode(bufferViewforString[i]);
    }
    console.log('buffertoString', buffer);
    console.log('итог String', str);
    return str;
  }
}
