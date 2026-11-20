let price = 200;
let quantity = 3;
function calculateTotal(){
let result=price*quantity;
return result;
}
function discount(asal){
    let out= asal*10/100;
    let out2=asal-out;
    return out2;
}
let answer1=calculateTotal();
let answer2= discount(answer1);


console.log(answer1);
console.log(answer2);

// I hate functions