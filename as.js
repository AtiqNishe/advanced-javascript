// javascript. slice
const num = [1, 2, 3, 4, 5,6 ,7 ,8 ,9,10, 11, 12, 10];
const parts = num.slice(1,8);
console.log(parts);
console.log(num);

const name = ['atiq', 'doly', 'nishe', "shobuj", "Rubel", "Rina" ];
const nameParts = name.slice(2,4);
console.log(nameParts);


// javascript splice

const spliceed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const splicePart = spliceed.splice(2, 7, 59,34,56,76,56,46,35,67,34 );
console.log(splicePart);
console.log(spliceed);


const joinElements = spliceed.join(' atiq doly');
console.log(joinElements);