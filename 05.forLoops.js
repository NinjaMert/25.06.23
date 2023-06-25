//loops are used to repeat our action 
//1. Print the value of i if i starts from 0 and i is less than 3.

for(let i = 0; i < 3; i++){
    console.log(i);
}
console.log("---------------------");

//2.Print the value of i if i starts from 1 and i is less than/euqal to 3.

for(let  i = 1; i <=3; i++){
    console.log(i);
}
console.log("------------------------");

let anything;
for(anything = 0; anything <= 10;anything++)[
    console.log(anything)
]
console.log("value of anything:" , anything);
console.log("--------------------------------------------");

let sum= 0;
for(let i = 1; i<=5; i++){
    sum =sum + i;
    console.log(`sum= ${sum}`);
}

console.log("-----------------------------");

let sum1 = "Hello";
for(let i = 3; i<=5 ; i++){
    sum1= sum1 +2;
    console.log(`sum ${sum1}`);
}
console.log(`Final Sum=${sum1}`);

console.log("--------------------------");

const myString = "Germany";

console.log(myString.length);
console.log(myString[2]);

for(let i = 0; i < myString.length; i++){
console.log(`The index of ${myString[i]} is ${i}`);
}
console.log(`${myString[4]}`);

console.log("---------------");

const fruits = [
    "Apple" ,
    "Orange",
    "Banana",
    "Melon",
    "Lemon"
];

for(let i = 0; i<fruits; i++){
    const fruit= fruits[i];
    console.log(`${fruit}`);
}

console.log(fruits);


const fruits2 = [
    "Apple" ,
    "Orange",
    "Banana",
    "Melon",
    "Lemon"
];

const newArr=[];
for(let i=fruits2.length -1 ; i >=0;i--){
    newArr.push(fruits2[i])
}
console.log(newArr);
