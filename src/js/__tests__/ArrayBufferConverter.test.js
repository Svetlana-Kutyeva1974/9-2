// eslint-disable-next-line no-unused-vars
import ArrayBufferConverter from '../ArrayBufferConverter.js';

test('string length name error', () => {
  const result2 = new ArrayBufferConverter();
  expect(result2.toString()).toMatch(/{"data":{"user":{"id":1,"name":"Hitman","level":10}}}/);
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
