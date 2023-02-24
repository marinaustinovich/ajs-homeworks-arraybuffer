import Character from '../Math/Charactar';

test('should create Character for name "String"', () => {
  const result = new Character('String', 'Daemon');

  expect(result).toEqual({
    name: 'String',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 100,
    defence: 40,
  });
});

test('should be Error for name "NotString"', () => {
  expect(() => new Character(150, 'Daemon')).toThrow('Передаются некорректные значения');
});

test('should be Error for too little name "A"', () => {
  expect(() => new Character('A', 'Daemon')).toThrow('Передаются некорректные значения');
});

test('should be Error for too long name "ElevenLetters"', () => {
  expect(() => new Character('ElevenLetters', 'Daemon')).toThrow('Передаются некорректные значения');
});

test('should create Character for invalid type', () => {
  expect(() => new Character('String', 'Bo')).toThrow('Передаются некорректные значения');
});

test('should be Error for the type "undefined"', () => {
  expect(() => new Character('Daemon', undefined)).toThrow('Передаются некорректные значения');
});

test('should be Error for the type "Number"', () => {
  expect(() => new Character('Daemon', 150)).toThrow('Передаются некорректные значения');
});

test('should attack = 85 for set/get attackDistance 2 and stoned true', () => {
  const result = new Character('String', 'Daemon');
  result.stoned = true;
  result.attackDistance = 2;
  expect(result.attackDistance).toBe(85);
});

test('should attack = 85 for set/get attackDistance 2 and stoned false', () => {
  const result = new Character('String', 'Daemon');
  result.stoned = false;
  result.attackDistance = 2;
  expect(result.attackDistance).toBe(90);
});

//   test('should be Error for too much distance', () => {
//     const result = new Character('String', 'Daemon');
//     result.stoned = false;
//     result.attackDistance = 200;
//     expect(() => );
//   });
// КАК ПРОТЕСТИТЬ ALERT???

test('should true for set/get stoned "true"', () => {
  const result = new Character('String', 'Daemon');
  result.stoned = true;
  expect(result.stoned).toBe(true);
});

test('should false for set/get stoned "false"', () => {
  const result = new Character('String', 'Daemon');
  result.stoned = false;
  expect(result.stoned).toBe(false);
});

test('should false for set stoned new Character', () => {
  const result = new Character('String', 'Daemon');
  expect(result.stoned).toBe(undefined);
});
