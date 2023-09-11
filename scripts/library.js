//Constructor for a Book Objects
function Book(title, author, pages, read) {
  [this.title, this.author, this.pages, this.read] = arguments;
  this.color = generateHex()
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
};

Book.prototype.updateReadStatus = function (status) {
    this.read = status
    saveLibrary()
}

//Select DOM Elements

let bookShelf = document.querySelector('.bookshelf')
let modal = document.querySelector('.modal')
let form = document.querySelector('#newBookForm')
let inputs = form.querySelectorAll('input');
let closeModalBtn = document.querySelector('.close')

// Add Event Listeners

//on form submit,grab the values from the inputs, add a book with the user input to myLibrary, prevent default page refresh behavior
form.addEventListener('submit', (e) => {
    let inputValues = [...inputs].map((input)=> {
        return input.type === 'checkbox' ? input.checked : input.value
    })
    addBookToLibrary(...inputValues)
    closeModal()
    e.preventDefault(); 
})

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal()
    }
})

closeModalBtn.addEventListener('click', () => {
    closeModal()
})

window.addEventListener('touchend', (e) => {
    if(e.target === modal) {
        closeModal()
    }
})

closeModalBtn.addEventListener('touchend', () => {
    closeModal()
})

//Helper Functions

function addBookToLibrary(title, author, pages, read = false) {
    myLibrary.push(new Book(...arguments))
    saveLibrary()
    displayBooks()
    console.log(myLibrary)
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index,1)
    saveLibrary()
    displayBooks()
}

function saveLibrary() {
    localStorage.setItem("lib", JSON.stringify(myLibrary))
}

function loadLibrary() {
    console.log(`retrieving data from localStorage`)
    if(JSON.parse(localStorage.getItem('lib')) === null || JSON.parse(localStorage.getItem('lib')).length === 0) {console.log('no data'); return []}
    let libString = localStorage.getItem("lib")  
    let objectArr = JSON.parse(libString)
    let bookArr = objectArr.map((obj) => {
        return turnObjectLiteralBackIntoBookObj(obj)
    })
    return bookArr
}

function turnObjectLiteralBackIntoBookObj(obj) {
    let book = Object.create(Book.prototype)
    book.title = obj.title;
    book.author = obj.author;
    book.pages = obj.pages;
    book.read = obj.read;
    book.color = obj.color;
    return book;
}

function displayBooks() {
    bookShelf.innerHTML = '';
    let bookElements = myLibrary.map((book,i)=> {
        return `
        <div class="book" data-index="${i}" style = 'background-color:${book.color}'>
            <h2 class="book__title">${book.title}</h2>
            <h3 class="book__author">${book.author}</h3>
            <div>
                <input class="book__read" type="checkbox" ${book.read ? 'checked' : ''}  onclick = 'myLibrary[${i}].updateReadStatus(this.checked);'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                ${book.pages ? `<p class="book__pages">${book.pages}</p>` : ''}
                <p class="book__close" onclick = "removeBookFromLibrary(this.parentNode.parentNode.getAttribute('data-index'))">&times;</p>
            </div>
        </div>
        `
    }).join('')
    //<input class="book__read" type="checkbox" ${book.read ? 'checked' : ''}  onclick = 'myLibrary[${i}].updateReadStatus(this.checked); console.log(myLibrary[${i}]); console.log(myLibrary);'> 
    //<p class="book__close" onclick = "console.log(this.parentNode.parentNode.getAttribute('data-index')); removeBookFromLibrary(this.parentNode.parentNode.getAttribute('data-index'))">&times;</p>
    bookShelf.innerHTML = bookElements;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}

function openModal() {
    modal.firstElementChild.classList.remove('modalContentExitState')
    modal.classList.remove('fadedModal')
    modal.classList.remove('hidden')
}

function closeModal() {
    modal.firstElementChild.classList.add('modalContentExitState')
    modal.classList.add('fadedModal')
    setTimeout(() => {
        modal.classList.add('hidden')
        resetFormFields()
    },400)
    // modal.classList.add('hidden')
    // resetFormFields()
}

function resetFormFields() {
    inputs.forEach((field) => {
        if(field.type === 'text' || field.type === 'number') {
            field.value = ''
        }
        if(field.type === 'checkbox') {
            field.checked = ''
        }
    })
}

function generateHex() {
    let digits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let randoHex = ["#"]
    for(let i = 0; i < 6; i++){
      let newHex = randoHex.push(digits[Math.floor(Math.random()*16)])
    }
    const theStuff = randoHex.join("")
    return theStuff
}

//use the addSomeBooks() command in the browser console to add some books to the app

function addSomeBooks() { 
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
    addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien',400,false)
    addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J. K. Rowling',450,false)
}

//CODE

//Initialize a global library array with the values from 'lib' in local storage or an empty array if it doesnt exist
//Display the global library array via the displayBooks() function

const myLibrary = loadLibrary()
displayBooks()




