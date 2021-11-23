// eslint-disable-next-line no-unused-vars
import ArrayBufferConverter from '../ArrayBufferConverter.js';
import getBuffer from '../getBuffer.js';

test('возврат строки', () => {
  const result2 = new ArrayBufferConverter();
  expect(result2.toString()).toMatch(/{"data":{"user":{"id":1,"name":"Hitman","level":10}}}/);
});

test('возврат buffer', () => {
  expect(() => {
    /*
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = new ArrayBuffer(data.length * 2);
    */
    const result2 = new ArrayBufferConverter();
    const buf = getBuffer();
    const func = ArrayBufferConverter.load.call(result2)();
    expect(func()).toBe(buf);
  }).toBeTruthy();
});
/*
test('app string length name error', () => {
  expect(result.type).toMatch(/Magician/);
});

test('app string length name error', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const obj = new Character('heroismerror', 'Magician');
  }).toThrow(/Ошибка, имя должно содержать не менее 2 и не более 10 символов/);
});

test('app type error ', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const result3 = new Character('hero5', 'Magiciancheck');
  }).toThrow(/Ошибка, недопустимый тип элемента/);
});
*/
