let value;

value = window;
// value = window.Number('5')
window.WebDeveloper = (arg)=>{
    console.log(arg)
}

value = window.WebDeveloper(['jack', 'mike'])

value = window.Haktan = (name)=>{
    console.log(name)
}
value = window.Haktan(['haktan', 'hamza'])

value = window.outerWidth
value = window.outerHeight

// window.addEventListener('resize', (e)=>{
//     console.log(`${window.outerWidth}\n${window.outerHeight}`)
// })

value = window.document

value = document.body
value = document.scripts
value = document.all
value = document.location
value = document.links
value = document.links[0]
value = document.links[0].className = "btn btn-light btn-lg"
value = document.links[0].getAttribute('key')

console.log(value)

