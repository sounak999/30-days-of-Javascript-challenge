// Activity 1
console.log("============ Print 1 to 10 ===========");
let str = ``
for (let i=1; i<=10; i++) {
    str += i + ((i < 10)? ", " : "");
}
console.log(str);

console.log("\n============ Multiplication table of 5 ===========");
str = ""
for (let i=1; i<=10; i++) {
    str += 5 * i + ((i < 10)? ", " : "");
}
console.log(str);

// Activity 2
console.log("\n============ Sum from 1 to 10 ===========");
let sum = 0
let counter = 1

while (counter <= 10) {
    sum += counter
    counter++
}
console.log(`sum = ${sum}`);

counter = 10
console.log("\n============ Print 10 to 1 ===========");

str = ``
while (counter >= 1) {
    str += `${counter} `
    counter--
}
console.log(str);

// Activity 3
console.log("\n============ Print 1 to 5 ===========");
let num = 1
str = ``
do {
    str += `${num++} `
} while (num <= 5)
console.log(str);

console.log("\n============ Calculate Factorial ===========");
num = 5
let factorial = 1;
do {
    factorial *= num;
    num--;
} while (num >= 1)
console.log(factorial);

// Activity 4
console.log("\n============ Right Angle Triangle Pattern ===========");
let rows = 5

for (let i=1; i<=rows; i++) {
    str = ``
    for (let j=1; j<=i; j++) {
        str += `* `
    }
    console.log(str);
}

// Activity 5
console.log("\n============ Continue & Break ===========");
str = ``
for (let i=1; i<=10; i++) {
    if (i === 5)
        continue

    str += `${i} `
}
console.log(str);

str = ``
for (let i=1; i<=10; i++) {
    str += `${i} `
    if (i === 7)
        break;
}
console.log(str);