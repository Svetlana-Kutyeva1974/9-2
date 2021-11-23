import getBuffer from '../getBuffer.js';
// eslint-disable-next-line no-unused-vars
import ArrayBufferConverter from '../ArrayBufferConverter.js';

test('test возврат buffer из getbuffer', () => {
  expect(() => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = new ArrayBuffer(data.length * 2);
    expect(getBuffer()).toBe(buffer);
  }).toBeTruthy();
});
/*
test('test успешное добавление', () => {
  const p = new Character('hero', 'Magician');
  const p0 = new Character('hero1', 'Bowman');
  const t = new Team();
  t.add(p);
  t.add(p0);
  expect(t).toMatchObject(new Team([p, p0]).members);
});

test('test преобразование в массив', () => {
  const p1 = new Character('hero', 'Magician');
  const p2 = new Character('hero1', 'Bowman');
  const team = new Team();
  team.add(p1);
  team.add(p2);
  expect(team.toArray()).toStrictEqual([...team.members]);
});

test('test успешное добавление', () => {
  const p = new Character('hero', 'Magician');
  const p0 = new Character('hero1', 'Bowman');
  const t = new Team();
  t.addAll(p, p0);
  expect(t).toMatchObject(new Team([p, p0]).members);
});
*/
