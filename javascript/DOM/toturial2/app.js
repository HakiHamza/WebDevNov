let h1 = document.createElement('h1');
h1.textContent = 'INTECBRUSSEL';

let cardColums = document.querySelector('.card-columns')


console.log(cardColums.childNodes)
cardColums.insertBefore(h1,cardColums.childNodes[3])


//append
cardColums.appendChild("<h1>hello</h1>")
cardColums.appendChild(h1)


//prepend()
cardColums.prepend(h1)



//insertAdjacentHTML
cardColums.insertAdjacentHTML('beforebegin', '<h1>hello hello</h1>')
cardColums.insertAdjacentHTML('afterbegin', '<h1>hello hello </h1>')
cardColums.insertAdjacentHTML('beforeend', '<h1>hello hello</h1>')
cardColums.insertAdjacentHTML('afterend', '<h1>hello hello </h1>')



//cloneNode

let cardTemplate = cardColums.firstElementChild.cloneNode(true) //holding copy of HTML
cardTemplate.childNodes[3], childNodes[1].textContent="NEW YEAR 2022"
console.log(cardTemplate)

cardColums.appendChild(cardTemplate)


//replaceChild

setTimeout(()=>{
    cardColumns.appendChild(cardTemplate,cardColumns,childNodes[5])
},3000)


//removeChild