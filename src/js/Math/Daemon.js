import Character, { CharacterTypes } from './Charactar';

export default class Daemon extends Character {
  constructor(name) {
    super(name, CharacterTypes.DAEMON);
  }
}
