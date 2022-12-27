function Book(title, author, pages, read) {
  [this.title, this.author, this.pages, this.read] = arguments;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      read ? "read" : "not read yet"
    }`;
};

Book.prototype.updateReadStatus = function (status) {
    this.read = status
    console.table(myLibrary)
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(...arguments))
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index,1)
    displayBooks()
    // console.log(myLibrary)
}


addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)
addBookToLibrary('A Song of Ice and Fire', 'George R.R. Martin', 800, true)
addBookToLibrary('The Lord of the Rings', "J.R.R. Tolkien", 500, false)
addBookToLibrary('Harry Potter and the Chamber of Secrets', "J.K. Rowling", 400, true)

// console.log(myLibrary)

function openModal() {
    modal.classList.remove('hidden')
}
function closeModal() {
    modal.classList.add('hidden')
}

let bookShelf = document.querySelector('.bookshelf')
let modal = document.querySelector('.modal')
let closeModalBtn = document.querySelector('.close')

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal()
    }
})

closeModalBtn.addEventListener('click', () => {
    closeModal()
})

function generateHex() {
    let digits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let randoHex = ["#"]
    for(let i = 0; i < 6; i++){
      let newHex = randoHex.push(digits[Math.floor(Math.random()*16)])
    }
    const theStuff = randoHex.join("")
    return theStuff
}

function displayBooks() {
    bookShelf.innerHTML = '';
    let bookElements = myLibrary.map((book,i)=> {
        return `
        <div class="book" data-index="${i}" style = 'background-color:${generateHex()}'>
            <h2 class="book__title">${book.title}</h2>
            <h3 class="book__author">${book.author}</h3>
            <div>
                <input class="book__read" type="checkbox" ${book.read ? 'checked' : ''}  onclick = 'console.log(myLibrary[${i}]); myLibrary[${i}].updateReadStatus(this.checked); console.log(this.checked)'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                <p class="book__pages">${book.pages}</p>
                <p class="book__close" onclick = "console.log(this.parentNode.parentNode.getAttribute('data-index')); removeBookFromLibrary(this.parentNode.parentNode.getAttribute('data-index'))">&times;</p>
            </div>
        </div>
        `
    }).join('')
    bookShelf.innerHTML = bookElements;
}

displayBooks()