class Dog {
  constructor(breed) {
    this.breed = breed;
    this.createElements();
  }
  createElements() {
    console.log("creating elements");
    const container = document.createElement("div");
    container.setAttribute("class", "dog-container");

    const img = document.createElement("img");
    const btn = document.createElement("button");
    btn.innerText = `Get ${this.breed} image`;

    btn.addEventListener("click", () => {
      this.getImage().then((imgUrl) => (img.src = imgUrl));
    });

    document.body.append(container);
    container.append(img, btn);
  }

  async getImage() {
    const url = `https://dog.ceo/api/breed/${this.breed}/images/random`;
  }
}

export { Dog };
