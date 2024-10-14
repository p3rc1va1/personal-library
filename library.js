const myLibrary = [];

function Book(name,author,read) {
  this.name = name;
  this.author = author;
  this.read = read;
}

// function addBookToLibrary() {
//   // do stuff here
// }


console.log(new Book("Norwegian wood", "Murakami", true));

//ui interactions
const addButton = document.getElementById("addabook");
const dialogContainer = document.getElementById("dialogContainer")
addButton.addEventListener("click",()=>{
    dialogContainer.showModal()
})

const submitDialogBtn = document.getElementById("submitDialogBtn");
const bookShelf = document.getElementById("app")
const form = document.getElementById("formD")
const author = document.getElementById("author")
const name = document.getElementById("name")
const read = document.getElementById("read")
submitDialogBtn.addEventListener("click", ()=>{
   myLibrary.push(new Book(author.value,name.value,read.value))
   form.reset()
   let abook = document.createElement("div")
   abook.classList.add("abook")
   abook.style.width = "10%"
   abook.style.height = "20%"
   abook.style.border = "solid"
   bookShelf.appendChild(abook)
   console.log(myLibrary)
})