let container = document.querySelector('.container');



const library = [];



function Book(name,author,pages,rating){
    this.name = name;
    this.author=author;
    this.pages=pages;
    this.rating = rating;
}

function addBookToLibrary(book){
    library.push(book);
}

let Carrie = new Book('Carrie','Stephen King',360,4.5);
let Circe = new Book('Circe','Madeline Miller',424,4.2);
let TheShining = new Book('The Shining','Stephen King',380,4.3);

addBookToLibrary(Carrie);
addBookToLibrary(Circe);
addBookToLibrary(TheShining);

function display(){


    library.forEach(element=>{
        let bookCard = document.createElement('div');
        let deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerHTML="Delete Book"
        bookCard.className='bookCard';
        bookCard.innerHTML = `
            <h3>${element.name}</h3>
            <p>Author: ${element.author}</p>
            <p>Pages: ${element.pages}</p>
            <p>Rating: ${element.rating}</p>
        `;
        bookCard.appendChild(deleteButton);
        container.appendChild(bookCard);
    });
}
display();
