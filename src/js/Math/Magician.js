import Character, { CharacterTypes } from './Charactar';

export default class Magician extends Character {
  constructor(name) {
    super(name, CharacterTypes.MAGICIAN);
  }
}
