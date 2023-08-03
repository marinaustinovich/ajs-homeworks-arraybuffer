export const CharacterTypes = {
  DAEMON: 'Daemon',
  MAGICIAN: 'Magician',
};
export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Передаются некорректные значения');
    }

    this.name = name;

    if (type === 'Magician' || type === 'Daemon') {
      this.type = type;
    } else {
      throw new Error('Передаются некорректные значения');
    }

    this.health = 100;
    this.level = 1;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(value) {
    this.stonedStatus = value;
  }

  get distance() {
    return this.attackDistance;
  }

  set distance(value) {
    this.attackDistance = value;
  }

  get attack() {
    let attackPower = this.attackPower * (1 - (this.attackDistance - 1) / 10);
    if (this.stoned) {
      attackPower -= Math.log2(this.distance) * 5;
    }
    return attackPower;
  }

  set attack(value) {
    if (value <= 0) {
      throw new Error('Не возможно атаковать противника');
    }
    this.attackPower = value;
  }
}
