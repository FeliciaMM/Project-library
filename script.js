const addBookBtn = document.querySelector('.add-book-btn');
const container = document.querySelector('.container');
const formDialog = document.querySelector('.new-book-form');
const titleInput = document.querySelector('#book-name');
const authorInput = document.querySelector('#book-author');
const pagesInput = document.querySelector('#book-pages');
const readInput = document.querySelector('#book-read');
const confirmBtn =document.querySelector('.confirm-btn');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title,author,pages,read){
    const book= new Book(title,author,pages,read);
    myLibrary.push(book);    
    console.log(book);
}

function readBook(){
    
}

function displayLibrary(){
    container.innerHTML=" ";
    for(let i = 0; i < myLibrary.length;i++){
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index',i);
        card.innerHTML= `<p><strong>Title:</strong> ${myLibrary[i].title}</p>
        <p><strong>Author:</strong> ${myLibrary[i].author}</p>
        <p><strong>Pages:</strong> ${myLibrary[i].pages}</p>
        <p><strong>Read:</strong> ${myLibrary[i].read}</p>
    `;
        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = "Delete book";

        deleteBtn.addEventListener('click',()=>{
            deleteBook(i);
        })
        container.appendChild(card);
        card.appendChild(deleteBtn);
    }
}

function deleteBook(index){
    myLibrary.splice(index,1);
    displayLibrary();
}

addBookBtn.addEventListener('click',()=>{
    formDialog.showModal();
})

confirmBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formDialog.close(titleInput.value);
    let newAuthor = authorInput.value;
    let newTitle = titleInput.value;
    let newPages = pagesInput.value;
    let newRead = readInput.value;
    addBookToLibrary(newTitle,newAuthor,newPages, newRead);
    displayLibrary();
})

