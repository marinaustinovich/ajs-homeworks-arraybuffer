import Daemon from '../Math/Daemon';

test('should create Daemon for name "Daemon"', () => {
  const result = new Daemon('Daemon');

  expect(result).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 40,
    defence: 20,
  });
});
