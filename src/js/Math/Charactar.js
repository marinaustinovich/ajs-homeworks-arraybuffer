export default class Character {
  constructor(name, type, attack, defence) {
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
    this.baseAttack = attack;
    this.defence = defence;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(value) {
    this.stonedStatus = value;
  }

  get attack() {
    return this.attackPower;
  }

  set attack(distance) {
    if (this.baseAttack <= 0) {
      throw new Error('Не возможно атаковать противника');
    }
    this.attackPower = this.baseAttack * (1 - (distance - 1) / 10);
    if (this.stoned) {
      this.attackPower -= Math.log2(distance) * 5;
    }
  }
}
