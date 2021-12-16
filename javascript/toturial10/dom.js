//getElementId


let value; 
let elGen = t => document.createElement(t) //custom from Atilla
let findAll = selector => document.querySelectorAll(selector) //custom from Atilla

// value = document.getElementById('todo-form')

// value.innerHTML="test" //simple string shown in console

//get elementByTagName

// value = document.getElementsByTagName('input') //return html collection

// value = document.getElementsByTagName('*')
// value.forEach(e=>{
//     console.log(el)
// })


// value = Array.from(value)


// function ForEachFunction(el){
//     console.log(el)
// }
// value.forEach(ForEachFunction)
// console.log(value)


//getElementByClassName

// value = document.getElementsByClassName('btn')
// console.log(value)

// Array.from(value).forEach(function(justName){
//     console.log(justName)
//     justName.innerHTML="hhhhhhhhhhhhhh"
// })


// value = document.getElementsByClassName('')


// value = document.getElementsByClassName('card-body')
// value = document.getElementsByClassName('*') //not working, not a class


// //QuerySelection
// value = document.querySelector('.card-header') //return first element, always one

// //querySelectorAll

// value = document.querySelectorAll('.card-header')

// value.forEach(el=>{
//     // console.log(el)
// })


// value = document.querySelectorAll('.card-header')

 const[first,second,third] = document.querySelectorAll('.card-header')

// console.log(first, second, third)


//createElement()





value = document.createElement('p')
value.className="lead text-danger font-weight-bold"
value.innerHTML="This is test paragraph"
third.appendChild(value)

// custom function for createElement



value = elGen('div')
value = elGen('a')
value.href = "www.google.com";
value.innerHTML = "Google link";

value = findAll('.delete-item') //return nodelist iterable with forEach

//clickaction
value.forEach(btn=>{
    console.log(btn)
    btn.addEventListener('click', function(e){ //e(event) is preventing scrolling back all, no more default action on clicking event
        e.preventDefault();
        //click actions
        console.log('hello click!!!!')
        alert(1)
    })
    
})

// value = findAll('div')

// console.log(value)