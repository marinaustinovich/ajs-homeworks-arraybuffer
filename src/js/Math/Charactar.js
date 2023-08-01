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
    this.attack = attack;
    this.defence = defence;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(value) {
    this.stonedStatus = value;
  }

  get attackDistance() {
    if (this.attack <= 0) {
      throw new Error('Не возможно атаковать противника');
    }
    let attack = this.attack * (1 - (this.distance - 1) / 10);

    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }

    return Math.round(attack);
  }

  set attackDistance(distance) {
    this.distance = distance;
  }
}
