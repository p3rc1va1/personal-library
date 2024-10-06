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