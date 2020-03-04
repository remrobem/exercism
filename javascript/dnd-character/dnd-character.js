export const abilityModifier = (score) => {

  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  }

  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor((score - 10) / 2)

};

export class Character {
  static rollAbility() {

    // create array with 4 entries, populate with randopm numbers, sum the 3 highest random numbers
    return Number(Array(4)
      .fill('')
      .map(_ => {
        return Math.floor((Math.random() * 6) + 1)
      })
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((sum, roll) => { return sum += roll })
    )
  }

  get strength() {
    console.log('strength: ', this.rollAbility)
    return this.rollAbility
    // throw new Error("Remove this statement and implement this function");
  }

  get dexterity() {
    return this.rollAbility

    // throw new Error("Remove this statement and implement this function");
  }

  get constitution() {
    return this.rollAbility

    // throw new Error("Remove this statement and implement this function");
  }

  get intelligence() {
    return this.rollAbility

    // throw new Error("Remove this statement and implement this function");
  }

  get wisdom() {
    return this.rollAbility

    // throw new Error("Remove this statement and implement this function");
  }

  get charisma() {
    return this.rollAbility

    // throw new Error("Remove this statement and implement this function");
  }

  get hitpoints() {
    // Your character's initial hitpoints are 10 + your character's constitution modifier. 
    // You find your character's constitution modifier by subtracting 10 from your character's constitution, divide by 2 and round down.

    let constitutionModifier = Math.floor((this.constitution - 10) / 2);
    return constitutionModifier + 10;

    // throw new Error("Remove this statement and implement this function");
  }
}
