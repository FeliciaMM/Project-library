function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function info() {
        return "The book " + this.title + " by " + this.author + " has " + this.pages + " pages and has been " + this.read + ".";
    };
}

const Carrie = new Book('Carrie', 'King', 345, 'read');

console.log(Carrie.info());
