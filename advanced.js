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



// Advanced js dubole equal and three equal

const num1 = 20;
const num2 ="20";
const isRight = true;

if(num1 != num2 && isRight){
   console.log('This condition is true');
}
else{
   console.log('This condition is false');
}

// Advanced ja map(), and filter() function,


const numbers = [2, 3, 4, 5, 6, 7,8];
// const output = [];
// for (let index = 0; index < numbers.length; index++) {
//    const element = numbers[index];
//    const result = element*element;
//    output.push(result);

   
// }


// console.log(output);


const result = numbers.map((ele)=>ele*ele);
 


//console.log(result); use filter

const result2 = numbers.map(x=>x*x);
console.log(result2);

const result3 = numbers.filter(x=>x<5);
console.log(result3);



// use find function


const findNumber = numbers.find(x=>x<5);
console.log(findNumber);



// object use map , filter, and map


const student = [

{id: 24, name:'sumon'},
{id: 40, name:'Atiq'},
{id: 54, name:'Sujjon'},
{id: 56, name:'Badsha'}


]




const allName = student.map(np=>np.name);
const ids = student.map(np=>np.id);
console.log(allName);
console.log(ids);

const idbig= student.filter(n=>n.id>24);
console.log(idbig);

const finds = student.find(np=>np.id>40);
console.log(finds);

