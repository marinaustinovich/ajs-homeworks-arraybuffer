import Character from './Charactar';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.baseAttack = 40;
    this.defence = 20;
  }
}
