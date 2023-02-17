//Constructor
function Book(title, author, numberOfPages) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.currentPage = 0;
}

Book.prototype.turnPage = function () {
  this.currentPage++;
  if (this.currentPage > this.numberOfPages) {
    this.currentPage = 0;
  }
};

const hp = new Book("Harry Potter och fången från Azkaban", "JK Rowling", 357);
const lotr = new Book("Fellowship of the ring", "PJ", 900);

console.log(lotr.title);
console.log(Object.getPrototypeOf(hp));
hp.turnPage();
hp.turnPage();
