// Activity 1
const num = 23;
if (num > 0) {
    console.log("The number is positive");
} else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is ZERO");
}

const age = 18;
if (age >= 18) {
    console.log("Eligible to vote!");
} else {
    console.log("Not eligible to vote.");
}

// Activity 2 
const first = 5, second = 8, third = 12;
let greaterOf3 = -1;
if (first >= second) {
    if (first >= third) {
        greaterOf3 = first;
    } else {
        greaterOf3 = third;
    }
} else if (second >= third) {
    greaterOf3 = second;
} else {
    greaterOf3 = third;
}

// Activity 3
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day.");
        break;
}

const score = 78;
switch (score) {
    case (score >= 90):
        console.log('A');
        break;
    case (score >= 80):
        console.log('B');
        break;
    case (score >= 70):
        console.log('C');
        break;
    case (score >= 60):
        console.log('D');
        break;
    case (score >= 50):
        console.log('E');
        break;
    case (score < 40 && score > 0):
        console.log('F');
        break;
    default:
        console.log("Please provide score between 1 - 100");
}

// Activity 4
const number = 255;
let result = (number%2 == 0)? "Even" : "Odd";
console.log(result);

// Activity 5
const year = 2023

if (year%400 === 0) {
    console.log("Leap Year");
} else if (year%100 === 0) {
    console.log("Not a Leap Year");
} else if (year%4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
