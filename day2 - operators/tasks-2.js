// Activity 1 
let a = 25, b = 5;

let addition = a + b;
console.log(addition);

let subtraction = a - b;
console.log(subtraction);

let multiplication = a * b;
console.log(multiplication);

let divide = a / b;
console.log(divide.toPrecision(3));

let remainder = a % b;
console.log(remainder);

// Activity 2
a += 8;
console.log(a);

b -= 3;
console.log(b);

// Activity 3
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
let c = 2;
console.log(b === c);
console.log(b == c);

// Activity 4
console.log((b == 2) && (c === 2));
console.log((a != 2) || (b == 3));

let d = false;
console.log(!c);

// Activity 5
let e = -2;
let ans = (e < 0)? "Negative": (e == 0)? "Zero": "Positive";
console.log(ans);