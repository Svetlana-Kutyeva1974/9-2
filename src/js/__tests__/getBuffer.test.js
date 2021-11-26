import getBuffer from '../getBuffer.js';

test('test возврат buffer из getbuffer', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = new ArrayBuffer(data.length * 2);
  const getbuf = getBuffer();
  expect(getbuf).toEqual(buffer);
});
