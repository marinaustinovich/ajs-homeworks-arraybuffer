import Character from '../Math/Charactar';

describe('Character', () => {
  test.each([
    ['String', 'Daemon', 100, 40],
    ['String', 'Magician', 120, 50],
  ])('should create Character for name "%s" and type "%s"', (name, type) => {
    const result = new Character(name, type);
    expect(result).toEqual({
      name,
      type,
      health: 100,
      level: 1,
    });
  });
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
    [true, 2, 100, 85],
    [false, 2, 100, 90],
  ])(
    'should distance = %d for set/get attackDistance 2 and stoned %s',
    (stoned, distance, attack, expected) => {
      const result = new Character('String', 'Daemon');
      result.stoned = stoned;
      result.distance = distance;
      result.attack = attack;
      expect(result.attack).toBe(expected);
    },
  );

  // Тесты для статуса stoned
  test.each([true, false])('should %s for set/get stoned', (stoned) => {
    const result = new Character('String', 'Daemon');
    result.stoned = stoned;
    expect(result.stoned).toBe(stoned);
  });

  test('should throw an error when attack <= 0', () => {
    const character = new Character('String', 'Daemon');
    expect(() => {
      character.attack = 0;
    }).toThrow('Не возможно атаковать противника');
  });

  test('should distance = 2 for set/get distance 2', () => {
    const character = new Character('String', 'Daemon');
    character.distance = 2;
    expect(character.distance).toBe(2);
  });
});
