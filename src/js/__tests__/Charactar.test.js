import Character from '../Math/Charactar';

describe('Character', () => {
  test.each([
    ['String', 'Daemon', 100, 40],
    ['String', 'Magician', 120, 50],
  ])(
    'should create Character for name "%s" and type "%s"',
    (name, type, baseAttack, defence) => {
      const result = new Character(name, type, baseAttack, defence);
      expect(result).toEqual({
        name,
        type,
        health: 100,
        level: 1,
        baseAttack,
        defence,
      });
    },
  );
  // Тесты для некорректных имен
  test.each([150, 'A', 'ElevenLetters'])(
    'should be Error for name "%s"',
    (name) => {
      expect(() => new Character(name, 'Daemon')).toThrow(
        'Передаются некорректные значения',
      );
    },
  );

  // Тесты для некорректных типов
  test.each([undefined, 150, 'Bo'])('should be Error for type "%s"', (type) => {
    expect(() => new Character('String', type)).toThrow(
      'Передаются некорректные значения',
    );
  });

  // Тесты для стоунда
  test.each([
    [true, 85],
    [false, 90],
  ])(
    'should attack = %d for set/get attackDistance 2 and stoned %s',
    (stoned, expectedAttack) => {
      const result = new Character('String', 'Daemon', 100, 40);
      result.stoned = stoned;
      result.attack = 2;
      expect(result.attack).toBe(expectedAttack);
    },
  );

  // Тесты для статуса stoned
  test.each([true, false])('should %s for set/get stoned', (stoned) => {
    const result = new Character('String', 'Daemon', 100, 40);
    result.stoned = stoned;
    expect(result.stoned).toBe(stoned);
  });

  test('should throw an error when attack <= 0', () => {
    const character = new Character('String', 'Daemon', 0, 40);
    expect(() => {
      character.attack = 1;
    }).toThrow('Не возможно атаковать противника');
  });
});
