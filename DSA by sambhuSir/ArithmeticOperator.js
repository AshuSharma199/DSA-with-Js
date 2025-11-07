/** 
//?Qus.1=> For a given number int n=5783;
//     a. Print the last digit of the number
//     b. Print the last two digit of the number
//     c. Remove the last digit of the number
//     d. Remove the last two digit of the number

let n = 5783;
const result = (n%10);
console.log(result);
console.log("last digit",n%100)
console.log("remove the last digit",Math.floor(n/10));
console.log("remover last 2 digit ",Math.floor(n/100));

*/



/** 
//?Qus.2=> For a given number int n=5783;
//       Print each digit of the number one by one from
//       Left to Right.

let n = 5783;
console.log("index of 0",Math.floor(n/1000)%10);
console.log("index of 1", Math.floor(n/100)%10);
console.log("index of 2",Math.floor(n/10)%10);
console.log("index of 3",Math.floor(n/1)%10);
*/

/** 
//! Qus.3=> WAJP to swap two numbers.
//      a. With using a third variable
//      b. Without using third variable

let a = 20;
let  b = 30;
console.log(`a=${a}, b=${b}`);
let c = b ;
b=a;
a=c;
console.log(`a=${a}, b=${b}`);

console.log(`a=${a}, b=${b}`);

a=a+b;
b=a-b;
a=a-b;

console.log(`a=${a}, b=${b}`);

*/

/** 
//! Qus.4=> For the given three numbers. Swap 1st into 2nd, 2nd into 3rd and 3rd into 1st number.
//      a. With using fourth variable
//      b. Without using fourth variable
*/

// let a = 20;
// let b = 30;
// let c=  50;

// console.log(`a:${a}, b:${b}, c:${c}`);

// a=a+b+c;
// b=a-(b+c);
// c=a-(c+b);
// a= b+c

// console.log(`a:${a}, b:${b}, c:${c}`);


// let n = prompt("enter the ending number ");

// console.log( typeof n );

// for(let i =1; i<=n;i++){
//     console.log(i);
// }

let num = document.querySelector(".input").value;
    console.log(num)

let button = document.querySelector(".button");
button.addEventListener("click",()=>{
    console.log(num)

})



