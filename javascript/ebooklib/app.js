const [book_name, book_author, book_date, price] = document.querySelectorAll('input')
const book_category = document.querySelector('#addbookbtn')
const addBtn = document.querySelector('addbookbtn')
let books = []
const tableBody = document.querySelector('tbody')


addBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(book_name, book_author, book_date, price, book_category, addBtn)
    console.log(book_category.options[book_category.selectedIndex].text)
    let obj = {
        book_name: book_name.value,
        book_author: book_author.value,
        book_date: book_date.value,
        book_category: book_category.value,
        price: price.value,
    }
    console.log(obj)
    books.push(obj)
    console.log(books)
    tableBody.innerHTML += `
    `
})