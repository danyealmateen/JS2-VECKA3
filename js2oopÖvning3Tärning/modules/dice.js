class Dice {
  constructor(sides) {
    this.sides = sides;
  }
  throwDice() {
    let rollTheDice = Math.floor(Math.random() * this.sides + 1);
    console.log(rollTheDice);
    return rollTheDice;
  }
}

export { Dice };
