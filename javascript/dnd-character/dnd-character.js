export const abilityModifier = (score) => {

  switch (true) {
    case score < 3:
      throw new Error('Ability scores must be at least 3');

    case score > 18:
      throw new Error('Ability scores can be at most 18');

    default:
      return Math.floor((score - 10) / 2);
  }
};

export class Character {

  constructor() {
    const hitpointAddition = 10;
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = abilityModifier(this._constitution) + hitpointAddition;
  }


  static rollAbility() {
    // array with 4 entries, each gets random number, remove entry with lowest value, sum the remaining 3 values
    return Array(4)
      .fill('')
      .map(Character.RANDOM_NUMBER)
      .sort(Character.SORT_ASC)
      .slice(1)
      .reduce(Character.SUM)
  }

  static RANDOM_NUMBER() {
    return Math.floor((Math.random() * 6) + 1)
  }

  static SORT_ASC(a, b) {
    return a - b
  }

  static SUM(sum, roll) {
    return sum += roll;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}
