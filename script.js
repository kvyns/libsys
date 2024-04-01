const laptop = document.querySelector("#laptop")
const book= document.querySelector("#book")
const notebook = document.querySelector("#notebook")
console.log(laptop)

let laptopCount = 0
let bookCount = 0
let notebookCount = 0

let laptopState = -1
let bookState = -1
let notebookState = -1

laptop.addEventListener('click', function(){
    laptopState *= -1
    if(laptopState == 1){
        laptop.style.background = "rgb(206, 206, 206)"
        laptop.style.color = "rgb(0 0 0)"
        laptop.style.fontWeight = "700"
        laptop.style.fontSize = "20px"
    }
    else{
        laptop.style.background = "rgb(62, 62, 62)"
        laptop.style.color = "rgb(172, 169, 169)"
        laptop.style.fontWeight = "400"
        laptop.style.fontSize = "16px"
    }
        
})

book.addEventListener('click', function(){
    bookState *= -1
    if(bookState == 1){
        book.style.background = "rgb(206, 206, 206)"
        book.style.color = "rgb(0 0 0)"
        book.style.fontWeight = "700"
        book.style.fontSize = "20px"
    }
    else{
        book.style.background = "rgb(62, 62, 62)"
        book.style.color = "rgb(172, 169, 169)"
        book.style.fontWeight = "400"
        book.style.fontSize = "16px"
    }
})
notebook.addEventListener('click', function(){
    notebookState *= -1
    if(notebookState == 1){
        notebook.style.background = "rgb(206, 206, 206)"
        notebook.style.color = "rgb(0 0 0)"
        notebook.style.fontWeight = "700"
        notebook.style.fontSize = "20px"
    }
    else{
        notebook.style.background = "rgb(62, 62, 62)"
        notebook.style.color = "rgb(172, 169, 169)"
        notebook.style.fontWeight = "400"
        notebook.style.fontSize = "16px"
    }
})

