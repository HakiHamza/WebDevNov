// do {
//     i++
//     //actions
//     console.log('hello',i)
// }while(i>=9)



// var i = 0

// do{
//     console.log(i)
//     i++;
// }while(false)

// do while will execute even if the condition is wrong, will execute only once!!

// var randomNumber;

// do{
//     randomNumber = Math.floor(Math.random() * 100);
//     console.log(randomNumber)
// }while(randomNumber==50)


// do {
//     number=Number(prompt('Enter a number!'))
//     sum +=number;
//     console.log('Sum Result', sum)

// }while(false)

var password = "123456"
var rateLimit=3;  //maximum login chances

while(rateLimit>0){
    var askPassword = prompt("Enter your password!")
    rateLimit--;
    if(askPassword == password){
        console.log('welcome user!')
        break
    }else{
        console.log(`You've ${rateLimit} attempts left.`)
    }
}