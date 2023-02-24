export default class ArrayBufferConverter {
  constructor(buffer) {
    this.load(buffer);
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let stringBuffer = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      stringBuffer += String.fromCharCode(bufferView[i]);
    }

    return stringBuffer;
  }
}
