// eslint-disable-next-line no-unused-vars
import getBuffer from '../getBuffer.js';
// eslint-disable-next-line no-unused-vars
import ArrayBufferConverter from '../ArrayBufferConverter.js';

test('test функции работают', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const p1 = new ArrayBufferConverter();
    p1.load();
    p1.toString();
  }).toBeTruthy();
});
