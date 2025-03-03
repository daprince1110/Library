//I could have made the code more neat and fancy
//but this project was too easy. Would rather move on

const myLibrary = [];
const bookList = document.querySelector('.book-list')
const addBookBtn = document.querySelector("#add-book-btn")
const addBookFrm = document.querySelector("#book-dialog")
const addBookSave = document.querySelector("#save-book-btn")
const addBookClose = document.querySelector("#close-dialog")

function Book(name, author, genre, text) {
  this.name = name;
  this.author = author;
  this.genre = genre;
  this.text = text;
}

function clearBooks(){
  bookList.innerHTML = '';
}

function addBooks(){
  for (let x of myLibrary){
    // Create the book div
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    // Create and append the heading
    const title = document.createElement("h2");
    title.textContent = x.name;
    bookDiv.appendChild(title);

    // Create and append the author paragraph
    const authorPara = document.createElement("p");
    const authorStrong = document.createElement("strong");
    authorStrong.textContent = "Author:";
    authorPara.appendChild(authorStrong);
    authorPara.appendChild(document.createTextNode(x.author));
    bookDiv.appendChild(authorPara);

    // Create and append the genre paragraph
    const genrePara = document.createElement("p");
    const genreStrong = document.createElement("strong");
    genreStrong.textContent = "Genre:";
    genrePara.appendChild(genreStrong);
    genrePara.appendChild(document.createTextNode(x.genre));
    bookDiv.appendChild(genrePara);

    // Append the bookDiv to the body or any other container
    bookList.appendChild(bookDiv);

  }
}

function addBooksToLibrary() {
  for (let i = 0; i < arguments.length; i++){
    myLibrary.push(arguments[i]);
  }

  clearBooks()
  addBooks()
}

addBookBtn.addEventListener("click", function(){
  addBookFrm.style.display = "block";
})

addBookSave.addEventListener('click', function(){
  let name = addBookFrm.querySelector("#book-title")
  let author = addBookFrm.querySelector("#book-author")
  let genre = addBookFrm.querySelector("#book-genre")
  let book = new Book(name.value, author.value, genre.value)
  addBooksToLibrary(book)
  addBookClose.click()
})

addBookClose.addEventListener('click', function(){
  addBookFrm.querySelector("#book-title").value = ''
  addBookFrm.querySelector("#book-author").value = ''
  addBookFrm.querySelector("#book-genre").value = ''
  addBookFrm.style.display = "none";

})

let Book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", null)
let Book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", null)
let Book3 = new Book("1984", "George Orwell", "Dystopian", null)

addBooksToLibrary(Book1,Book2, Book3)


console.log(myLibrary)