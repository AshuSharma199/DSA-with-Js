
let num =document.getElementById("input");

let print = document.getElementById("print");

let list = document.createElement("ul");

let h1 =document.getElementById("h1")


// const result =()=>{
// let product= 1;
// for(i=1;i<=num.value;i++){
//     product=product*i;
// }

// h1.innerHTML+=product

// console.log(product)
// }

// print.addEventListener("click",result)

// function getlist(){
//       for(let i=0;i<=num.value;i++){

//         if(i%2==0){
//             const li =document.createElement("li");
//             li.innerText=i
//             list.appendChild(li);
//         }

//       }
// }
// print.addEventListener("click",getlist);
// document.body.appendChild(list);


//! print the sum of 1-5 natural numbers

// console.time()

// let n=50000000

//  let sum=null;

// for(i=0;i<=n;i++){
//      sum=sum+i;
// }
// console.log(sum);

// console.timeEnd()


//! find the factorial of n ?

// let num = 5;
// let product = 1;
// for(let i =1; i<=num;i++){  
//     product*=i;
// }
// console.log(product)


// let n = 5;

// for(let i=1; i<=n;i++){
//    console.log(i**3)
    
// }


//! find all odd number of n ?

// let n = 5;

// let sum = 0

// for(let i=0; i<=n;i++){
//    if(i%2!=0){
//     sum=sum+i;
//    }
// }
// console.log(sum)

//! print the qube of 1-n?

let n=5;
for(let i=1;i<=n;i++){
   console.log(i*i*i);
}