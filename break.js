const numbers = [1,-2,-3,-4,-5,-6,-7,8,9,10,-11,-12,-13,14,-15,16,17,18,19];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if(element>15){
//         break;
        
//     }



  
   
//     console.log(element);
// }

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element<0){
        continue;
    }

    console.log(element);
    
}
