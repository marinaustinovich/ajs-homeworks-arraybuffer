import Magician from '../Math/Magician';

test('should create Magician for type "Magician"', () => {
  const result = new Magician('Magician');

  expect(result).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    baseAttack: 40,
    defence: 20,
  });
});
