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
let readIconDom = document.querySelectorAll("fa-solid", "fa-book-open-reader" ,"fa-lg")

cancel.addEventListener("click",()=>{
  dialogContainer.close();
  form.reset();
});

form.addEventListener("submit", (e)=>{

  //parsing forms returned values
  e.preventDefault();
  var formData = new FormData(form);
  var formObject = Object.fromEntries(formData);
  
  //creating the book object and pushing it to the library list
  myLibrary.push(new Book(formObject.author,formObject.name,formObject.read));

  //creating the dom items that will be in the book div
  let abook = document.createElement("div");
  let labelAuthor = document.createElement("p");
  let labelName = document.createElement("p");

  let removeIcon = document.createElement("i");

  removeIcon.classList.add("fa-solid", "fa-trash", "fa-lg");

  labelAuthor.textContent = formObject.author;
  labelName.textContent = '"'+ formObject.name + '"';
  abook.classList.add("abook");
  abook.style.border = "solid";



  //placing the form elements into its place
  abook.appendChild(labelAuthor);
  abook.appendChild(labelName);

  abook.appendChild(removeIcon)

  if(formObject.read == "true"){
    abook.style.borderColor = "#06402B"
    
  }else{
    abook.style.borderColor = "#8B0000"
    let readIcon = document.createElement("i");
    readIcon.classList.add("fa-solid", "fa-book-open-reader" ,"fa-lg");
    abook.appendChild(readIcon)
  }

  bookShelf.appendChild(abook);
  console.log(myLibrary);

  //return the dialog and the form into its original state
  dialogContainer.close()
  form.reset();
});

readIconDom.addEventListener("click", ()=>{
  alert("clicked")
})