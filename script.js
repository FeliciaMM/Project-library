const addBookBtn = document.querySelector('.add-book-btn');
const container = document.querySelector('.container');
const formDialog = document.querySelector('.new-book-form');
const titleInput = document.querySelector('#book-name');
const authorInput = document.querySelector('#book-author');
const pagesInput = document.querySelector('#book-pages');
const statusInput = document.querySelector('#book-status');
const confirmBtn =document.querySelector('.confirm-btn');

const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary(title,author,pages,status){
    const book= new Book(title,author,pages,status);
    myLibrary.push(book);    
    console.log(book);
}

function changeBookStatus(book){
    if(book.status==="read"){
        book.status="not read";
    }else if(book.status==='not read'){
        book.status="read";
    }
    displayLibrary();
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
        <p><strong>Status:</strong> ${myLibrary[i].status}</p>
    `;
        let changeStatusBtn = document.createElement('button');
        changeStatusBtn.innerHTML = "Change status";
        changeStatusBtn.addEventListener('click',()=>{
            changeBookStatus(myLibrary[i]);
            console.log(myLibrary[i]);
        });

        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = "Delete book";
        deleteBtn.addEventListener('click',()=>{
            deleteBook(i);
        })
        container.appendChild(card);
        card.appendChild(deleteBtn);
        card.appendChild(changeStatusBtn)
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
    let newStatus = statusInput.value;
    addBookToLibrary(newTitle,newAuthor,newPages, newStatus);
    displayLibrary();
})

