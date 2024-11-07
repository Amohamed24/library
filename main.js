
// all book objects are going to be stored in an array
const myLibrary = []


// constructor for book
// have title, author, pages, read
// add info func
function Book(title, author, pages, read) {
    // the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
    };
}


function render() {
    let libraryEl = document.querySelector("#library")
    for (let i=0; i < myLibrary; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `<p>${book.title}</p>`
        libraryEl.appendChild(bookEl);
    }
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    // display books on html
    render();

}



// show dialog once button is clicked
let newBookbtn = document.querySelector("#new-book-btn")
newBookbtn.addEventListener('click', () => {
    dialog.showModal()
    
})

const close = document.querySelector("#close")
close.addEventListener('click', () => {
    dialog.close()
})


// show what entered on screen
const submit = document.querySelector("#submit")
submit.addEventListener('click', (event)=> {
    event.preventDefault();
    addBookToLibrary();
    // show everything entered on screen
    
})



