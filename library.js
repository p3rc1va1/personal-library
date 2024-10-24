const myLibrary = [];

function Book(name,author,read) {
  this.name = name;
  this.author = author;
  this.read = read;
}


console.log(new Book("Norwegian wood", "Murakami", true));

//ui interactions
const addButton = document.getElementById("addabook");
const dialogContainer = document.getElementById("dialogContainer");
addButton.addEventListener("click",()=>{
    dialogContainer.showModal();
});

const bookShelf = document.getElementById("app");
let form = document.getElementById("formD");
const cancel = document.getElementById("cancel");

cancel.addEventListener("click",()=>{
  dialogContainer.close();
  form.reset();
});

form.addEventListener("submit", ()=>{
  console.log(form.notread.value)
  myLibrary.push(new Book(form.author.value,form.name.value,form.read.value));
  let labelAuthor = document.createElement("p");
  let labelName = document.createElement("p")
  labelAuthor.textContent = form.author.value
  labelName.textContent = '"'+ form.name.value + '"'
  form.reset();
  let abook = document.createElement("div");
  abook.classList.add("abook");
  abook.style.border = "solid";
  if(form.read.value == true){
    abook.style.borderColor = "#380000"
  }else{
    abook.style.borderColor = "#002211"
  }

  abook.appendChild(labelAuthor);
  abook.appendChild(labelName);
  bookShelf.appendChild(abook);
  console.log(myLibrary);
});