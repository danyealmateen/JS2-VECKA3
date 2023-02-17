class Car {
  constructor(model, year, maxSpeed) {
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = 0;
  }
  accelerate(newSpeed) {
    do {
      this.currentSpeed += 10;
      console.log(this.currentSpeed);
    } while (this.currentSpeed < newSpeed);
  }

  break(slowDown) {
    do {
      this.currentSpeed -= 10;
      console.log(this.currentSpeed);
    } while (this.currentSpeed > 0);
  }
}

export { Car };
