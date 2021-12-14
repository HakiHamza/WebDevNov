let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
]

// const [item1, item2] = users

// console.log(item1, item2)


// for (let i = 0; i < data.length; i++){

// }


// let myStringArray = users
// let arrayLength = myStringArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myStringArray[i]);
//     //Do something
// }


// for(singleobj in users){
//   // console.log(singleobj)
//   let obj = users[singleobj]
//   // console.log(obj)
//   const {id, name, email, username, address} = obj
//   console.log(id, name, email, username, address)
// }

// for(singleobj in users){
//   let obj = users[singleobj]
//   const {id, name, email, username, address} = obj
//   const {street} = address
//   // console.log(Object.values(address))
//   console.log(id, name, email, username)
// }

for(singleobj in users){
  let obj = users[singleobj]
  const {id, name, username, email, address, phone, website, company:{name: _name}} = obj
  // const {street} = address
  console.log(id, name, username, email, address, phone, website, _name)
}

