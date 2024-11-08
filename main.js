
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

// this allow content entered to be displayed
function render() {
    let libraryBook = document.querySelector("output")
    libraryBook.innerHTML = '';
    for (let i=0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card")
        bookEl.innerHTML = `
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="Author">by ${book.author}</h5>
        </div>
        <div>
            <p>${book.pages} pages</p>
        </div>
        <div class="card-btn">
            <button class="remove-book-btn" onClick="removeBook(${i})">REMOVE</button>
            <button 
                id="read-status-btn-${i}" 
                class="read-status-btn" 
                onclick="toggleRead(${i})"
                style="background-color: ${book.read ? '#4CAF50' : '#f44336'};">
                ${book.read ? "READ" : "UNREAD"}
            </button>
        </div>
        `
        libraryBook.appendChild(bookEl);
    }
}

// deletes the book once pressed
function removeBook(index) {
    alert("Do you want to delete this book?")
    myLibrary.splice(index, 1);
    render();
}




Book.prototype.toggleRead = function() {
    this.read = !this.read
}


function toggleRead(index) {
    myLibrary[index].toggleRead();
    render()
} 

function toggleReadStatus(button, bookInstance) {
    bookInstance.toggleRead();
    button.textContent = bookInstance.read ? "READ" : "UNREAD";
    button.style.backgroundColor = bookInstance.read ? "#4CAF50" : "#f44336";
}


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    // adds books to library
    myLibrary.push(newBook);
    // display books on html
    render();

}



// show dialog once button is clicked
let newBookbtn = document.querySelector("#new-book-btn")
newBookbtn.addEventListener('click', () => {
    dialog.showModal()
    
})

// closes the dialog
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



