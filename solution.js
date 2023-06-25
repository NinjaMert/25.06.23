const Color = "red";

switch(Color){
    case "red":
        console.log("Reds a great color on you");
        break;
    case "blue":
        console.log("Blue? Great choice");
        break;
    case "green":
        console.log("Green? ok green it is");
        break;
    case "yellow":
        console.log("Yellow is not what i have picked but great color");
        break;

        default: console.log("the aim of the game is to pick a color");
}

const grade = "C";

switch(grade){
    case "A":
        console.log("Well done");
        break;
    case "B":
        console.log("Good on you");
        break;
    case "C":
        console.log("Good effort");
        break;
     case "D":
        console.log("Try harder");
        break;
    case "E":
        console.log("Your ernst?");
        break;
     case "F":
        console.log("GG Well played");
        break;
    default:console.log("yikes");
}


const fruits = ["banana", "orange", "strawberry", "apple"];
switch(fruits){
    case "apple":
        console.log(" an apple a day keeps the doctor away");
        break;
    case "banana":
        console.log("bananas are full of potassium");
        break;
    case "orange":
        console.log("Yep oranges are good");
        break;
    case "strawberry":
        console.log("hmm....nothing better than strawberries");
        break;
    default:console.log("PICK A FRUIT DUDE");
}

const percentageComplete = 20;
switch(percentageComplete){
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
    case 6: 
    case 7: 
    case 8: 
    case 9: 
    case 10: 
    case 11: 
    case 12: 
    case 13: 
    case 14: 
    case 15: 
    case 16: 
    case 17: 
    case 18: 
    case 19: 
    case 20: 
    case 21: 
    case 22: 
    case 23: 
    case 24: 
    case 25: 
    case 26: 
    case 27: 
    case 28: 
    case 29: 
    case 30: 
    console.log("Still a long way to go");
    break;
    case 31: 
    case 32: 
    case 33: 
    case 34: 
    case 35: 
    case 36: 
    case 37: 
    case 38: 
    case 39: 
    case 40: 
    case 41: 
    case 42: 
    case 43: 
    case 44: 
    case 45: 
    case 46: 
    case 47: 
    case 48: 
    case 49: 
    case 50: 
    console.log("Slowly getting better");
    break;
    case 51:  
    case 52: 
    case 53: 
    case 54: 
    case 55: 
    case 56: 
    case 57: 
    case 58: 
    case 59: 
    case 60: 
    case 61: 
    case 62: 
    case 63: 
    case 64: 
    case 65: 
    case 66: 
    case 67: 
    case 68: 
    case 69: 
    case 70: 
    case 71: 
    case 72: 
    case 73: 
    case 74: 
    case 75: 
    case 76: 
    case 77: 
    case 78: 
    case 79: 
    case 80: 
    console.log("you can do it");
    break;
    case 81: 
    case 82: 
    case 83: 
    case 84: 
    case 85: 
    case 86: 
    case 87: 
    case 88: 
    case 89: 
    case 90: 
    case 91: 
    case 92: 
    case 93: 
    case 94: 
    case 95: 
    case 96: 
    case 97: 
    case 98: 
    case 99: 
    console.log("this is the last push");
    break;
    case 100:
        console.log("You´re there well done");
    break;

}

//switch is used to make is simplier and its easy for comparison




//-------------------------------------


//LOOOOOOOOOOOOOOOOOOOOOOOOOOPSSSSSSSSSSS

let sum = 0;
for(let i=1; i<21; i++){
    sum = sum+ i;
    console.log(`sum ${sum}`);

}

let bottle = 0;
for(let i=1; i<6; i++){
    bottle = bottle +1;
    console.log(`there are ${bottle} bottle of beer on the wall`);
}

for(let i = 0; i<21; i++){
    if(i%2===0){
        console.log(i+" is even");
    }else
    console.log(i+" is odd");
}
 

let multiplication = 1;
for(let i=0; i< 10; i++){
    multiplication= i *9;
    console.log(`${i}*9=${multiplication}`);
}

let multiplication2 = 1;
for(let i=0; i<=10; i++){
    for(let j=0; j<=10; j++){
    multiplication2=i*j;
    
    console.log(i+" * "+j+" = "+multiplication2);
   
    }
}

let FizzBuzz = 0
for(let i=0; i<=100; i++){
     if(i%3===0 && i%5 ===0){
    console.log("FizzBuzz");
     }
    else if(i%3===0){
    console.log("Fizz");
    }
    else if(i%5===0){
    console.log("Buzz");
    }
    else{
        console.log(i);
    }
   
}

let SumOfMultiples = 0;
for(let i=0; i<=1000; i++){
if(i%3===0 && i%5 ===0){
    SumOfMultiples= SumOfMultiples + i;
    console.log(SumOfMultiples);
}
}



//----------------------------------------
//TASK 3 REPEAT

let i=0;
let text="";
while (i<=15){
   text ="the number is "+i;i++;
   console.log(text);
}

let manufacturing=0;
let g=0;
while(g<=20){
    g++;
    manufacturing=manufacturing+g;
    console.log(manufacturing);
}

let h=0;
do{ h++;
    console.log(h);


}while(h<20)


//------------------------------
//TASK NUMBER 4


function square (SOOOOOOOO, sOOOOOO2){
   
    console.log(SOOOOOOOO * sOOOOOO2);
}
square(5,5);


function square (myMultiply,Habibi){
   myMultiply=myMultiply*Habibi;
    console.log(myMultiply);
}
square(5,7);


//______________________________________

const favFruit = "banana";
switch(favFruit){
case "Apple":
    console.log("my favorite fruit is Apple");
    break;
case "banana":
    console.log("my favorite fruit is banana");
    break;
case "Pineapple":
    console.log("my favorite fruit is pineapple");
    console.log(favFruit);
}


function exponent (A, B){
    result= Math.pow(A,B);
    console.log(result);
}

exponent(2,3);

//This is not going to work since it has to be in the function-block otherwise it wont work


