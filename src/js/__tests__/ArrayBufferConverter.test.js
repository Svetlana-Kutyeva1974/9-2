// eslint-disable-next-line no-unused-vars
import ArrayBufferConverter from '../ArrayBufferConverter.js';
import getBuffer from '../getBuffer.js';

test('возврат строки', () => {
  const result2 = new ArrayBufferConverter();
  expect(result2.toString()).not.toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('возврат buffer', () => {
  expect(() => {
    const result2 = new ArrayBufferConverter();
    const buf = getBuffer();
    const func = ArrayBufferConverter.load.call(result2)();
    expect(func()).toBe(buf);
  }).toBeTruthy();
});
