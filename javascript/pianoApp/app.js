// let allButton = document.querySelectorAll('.key')
// let note = document.querySelectorAll("audio")

// // allButton.forEach(el=>{
// //     // console.log(el.getAttribute('data-key'))
// //     //set action
// //     el.addEventListener('click', function(e){
// //         //play audio
// //     let note = document.querySelectorAll("audio")
// //     console.log(note)
// //     note.forEach(audio =>{
// //         console.log(audio)
// //     })

        
// //     })
// // })


// // console.log(note)
// function PlayAudio(keyNumber){
//     note.forEach(audio=>{
//         let getKeyofAudio = audio.getAttribute('data-key')
//         if(getKeyofAudio == keyNumber){
//             audio.play()
//         }
//     })
// }
// allButton.forEach(el=>{
//     el.addEventListener('click', function(e){
//         e.preventDefault()
//         let getKey = el.getAttribute('data-key')
//         PlayAudio(getKey)
//     })
// })



// let notes = document.querySelectorAll("audio")

// function PlayAudio(e){
//     notes.forEach(e)
// }

let buttons = document.querySelectorAll('.key')
let notes = document.querySelectorAll("audio")

function PlayAudio(keyNumber){
    notes.forEach(audio=>{
        let getKeyOfAudio = audio.getAttribute('data-key')
        if(getKeyOfAudio === keyNumber){
            audio.play()
        }
    })
}

buttons.forEach(el=>{
    el.addEventListener('click', function(e){
        e.preventDefault()
        let getKey = el.getAttribute('data-key')
        PlayAudio(getKey)
    })
})


