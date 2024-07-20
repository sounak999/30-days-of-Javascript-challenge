// Activity 1
function evenOrOdd(num) {
    if (num%2 === 0)
        console.log("Even Number!");
    else    
        console.log("Odd Number!");
}

evenOrOdd(12);

function square(num) {
    return num * num
}

console.log(square(22));

// Activity 2
const maxOfTwo = function (a, b) {
    if (a > b)
        console.log(`${a} is maximum`);
    else 
        console.log(`${b} is maximum`);
}

maxOfTwo(45, 21)

const concat = function (s1, s2) {
    console.log(`${s1} ${s2}`);
}

concat("Sounak", "is the guy")

// Activity 3
const sumOfTwo = (s1, s2) => {
    let sum = s1 + s2;
    console.log(`Sum of ${s1} and ${s2} is ${sum}`);
}

sumOfTwo(56, 32)

const charInString = (str, ch) => {
    let idx = str.indexOf(ch)
    if (idx == -1)
        return false
    return true
}

console.log(charInString("Sounak", 'o'))

// Activity 4
const product = (n1, n2 = 2) => {
    console.log(`Product of ${n1} and ${n2} (dafault: 2) is ${n1 * n2}`);
}

product(23)

const greet = (personName, age=18) => {
    console.log(`Hi ${personName} with age ${age}, Good Morning!`);
}

greet("Ankan")

// Activity 5
const callback = () => console.log('Hi Callback.');
const hof = (callback, num) => {
    return () => {
        for (let i = 0; i < num; i++) {
            callback();
        }
    };
};

hof(callback, 5)()
 
const addTwo = (num) => num + 2;
const addFive = (num) => num + 5;

const hof2 = (c1, c2, val) => {
    val = c1(val)
    const result = c2(val)
    return result
}

console.log(hof2(addTwo, addFive, 5))