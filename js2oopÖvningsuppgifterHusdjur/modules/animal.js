class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  logInfo() {
    console.log(this.name, this.type, this.color);
  }
}

export { Animal };
