//check what month we have 
//january = 1
//february = 2

const month = 10;

//What month is this? Print it to the console as a word.

if (month === 1) {
    console.log("It`s January");
}else if(month === 2){
    console.log("Its February");
}else if(month === 3){
    console.log("Its march");
}else if(month === 4){
    console.log("Its april");
}else if(month === 5){
    console.log("Its may");
}else if(month === 6){
    console.log("Its june");
}else if(month === 7){
    console.log("Its july");
}else if(month === 8){
    console.log("Its august");
}else if(month === 9){
    console.log("Its september");
}else if(month === 10){
    console.log("Its october");
}else if(month === 11){
    console.log("Its november");
}else if(month === 12){
    console.log("Its december");
}else{
    console.log("Error Message!");
}

console.log("----------------------------------")
//-------------------------------------------
//how to make it simplier
//SWITCH CASE
//for easy comparison
//cannot check if bigger or smaller

const grade = "C";
switch(grade){
    case "A":
        console.log("You got an A");
        break;
    case "B":
        console.log("You got a B");
        break;
    case "C":
        console.log("You got a C");
        break;
    case "D" :
        console.log("You got a D");
        break;
    case "E":
        console.log("You got an E");
        break;
    case "F":
        console.log("You got a F");
        break;

    default:
        console.log("Not a valid grade");
}

console.log("------------------------------")

const month2 = 10;

switch(month2){
    case 1:
        console.log("Its January");
         break;
    case 2:
        console.log("Its February");
        break;
    case 3:
        console.log("Its March");
        break;
    case 4:
        console.log("Its April");
        break;
    case 5:
        console.log("Its May");
        break;
    case 6:
        console.log("Its June");
        break;
    case 7:
        console.log("Its July");
        break;
    case 8: 
        console.log("Its August");
         break;
    case 9:
        console.log("Its September");
        break;
    case 10:
        console.log("Its October");
        break;
    case 11: 
        console.log("Its November");
         break;
    case 12:
        console.log("Its December");
        break;

     default:
            console.log("This Month is not valid");
}

console.log("-------------------------------------------");


const myMonth = "January";
switch(myMonth){
    case "January":
        case "February":
            if(myMonth === "Janaury"){
                //block
                const message = "Hello Winter";
                console.log(message);
            }
            console.log("This is the first or second month of the year.");
            break;

            case "March":
                console.log("this is the third month of the year");
                break;
            default:
                console.log("Error");
}

