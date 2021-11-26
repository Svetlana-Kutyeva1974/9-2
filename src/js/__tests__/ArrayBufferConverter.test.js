import ArrayBufferConverter from '../ArrayBufferConverter.js';
import getBuffer from '../getBuffer.js';

test('возврат строки', () => {
  const result2 = new ArrayBufferConverter();
  expect(result2.toString()).toMatch(/{"data":{"user":{"id":1,"name":"Hitman","level":10}}}/);
});

test('возврат buffer', () => {
  const result2 = new ArrayBufferConverter();
  const buf = getBuffer();
  expect(result2.load()).toEqual(buf);
});
