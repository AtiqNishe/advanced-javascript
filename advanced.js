// advanced javascript

//let name = 6 ; condition is true;
//let name = ""; condition = false; 
//let name = " "; condition = is true;
//let name = 0; condition = is false;
//let name = "0"; condition = is true because string in 0;
//let name = false; condition = is false;
//let name = "false"; is true because string in false;
//let name ; this variable value is kisu nai tai undefined mane false ;
//let name = null; this variable value is null tai null hobe mane false hobe;
 //let name = NaN; this variable value is NaN tai tai tar mane false hobe;
// let name = 0; condition = is true because name || name===O; ar karone;
//if(name || name ===0){
   // console.log("condition is true", name );
// }
// else{
//     console.log("condition is false", name );
// }


//undefined vs null

// function add(x,y){
//    const sum = x+y;
// }

// const result = add(4,6);
// console.log(result);



// function add(x,y){
//     const sum = x+y;
//  }
 
//  const result = add(4);
//  console.log(result);


const students = {name:'sumon', age:25, id:201, phone:012345456 }
const {home,name,phone}=students;
console.log(home,name,phone);


const id = [12,30,40,15,67,45,67,89,09,23,56,78,90,45,67,89];
console.log(id[20]);

const price = undefined;
console.log(price);

let tomatoPrice = 100;
console.log(tomatoPrice);
tomatoPrice = null;
console.log(tomatoPrice);
