export default class Character {
  constructor(name, type) {
    if ((typeof name !== 'string') || (name.length < 2) || (name.length > 10)) {
      throw new Error('Передаются некорректные значения');
    }

    this.name = name;

    switch (type) {
      case 'Magician':
        this.type = type;
        break;
      case 'Daemon':
        this.type = type;
        break;
      default:
        throw new Error('Передаются некорректные значения');
    }
    this.health = 100;
    this.level = 1;
    this.attack = 100;
    this.defence = 40;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(value) {
    this.stonedStatus = value;
  }

  get attackDistance() {
    if (this.attack <= 0) {
      // eslint-disable-next-line no-alert
      alert('Strength is not enough');
      return;
    }
    if (this.stoned) {
      this.attack -= Math.log2(this.distance) * 5;
    }

    // eslint-disable-next-line consistent-return
    return this.attack;
  }

  set attackDistance(distance) {
    this.attack *= (1 - ((distance - 1) / 10));
    this.distance = distance;
  }
}
