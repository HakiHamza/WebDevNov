// for (let i=0; i<=5; i++) {
//     console.log('hello', i)
// }


// function printEvenNumber(number){

// }











// function printEvenNumber(number) {
//     for(let i=1; i<number; i++){
//         if (i % 2 === 0){
//             console.log(i)
//         }
//     }
    
// }

// printEvenNumber(100)


// for(let i=10; i>=0; i--){
//     console.log(i)
// }

let x,y

// for(x=1, y=50; x<=10 && y>=50;x++){
//     console.log(`x:${x}\ny:${y}`)
// }

// for(x=9; x<=10; x++){
//     for(y=1; y<=10; y++){
//         let result = `${x} + ${y} = ${x+y}`
//         console.log(result)
//     }
// }

// for(x=5; x<=6; x++){
//     for(y=0; y<=10; y++){
//         let result = `${x} + ${y} = ${x+y}`
//         console.log(result)
//     }
// }


// let arraylist = ['ali','veli','deli'];

// for (let x=0; x<arraylist.length; x++){
//     console.log(x)
//     console.log(arraylist[x])
// }


let posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
]

// for(let x=0; x<posts.length; x++){
//     let obj = posts[x]
//     console.log(obj.title)
// }


// 4! = 4 * 3 * 3 * 1 = > 24
// 4 * 3 = 12
// 12 * 2 = 24
// 24 * 1 = 24

// let answer = 1;
// for(let x=4; x>=1; x--){
//     answer = answer * x
//     // 1 * 4
//     // 1 * 3
//     // 1 * 2
//     // 1 * 1
//     console.log(answer , 'in for')
// }



// function getFactrial(n){
//     let answer = 1;
//     for(let x=n; x>=1; x--){
//         answer = answer * x
//     }
//     console.log(answer)
// }
// getFactrial(4)


let count=0;
for(let i=0; i<100; i++){
    console.log(i)
    count = (count + i)
    //49 50
    count = (count - 1)
}

console.log(count)