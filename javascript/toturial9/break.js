let password = "123456"
let ratelimit = 3;

while(ratelimit>0){
    let askUser = prompt('Enter a password');
    ratelimit--;
    if(ratelimit==0)
    if(askUser == password){
        console.log('welcome user')
    }else {
        console.log(`You have *${ratelimit} attempts left!`)
        break;
    }
}