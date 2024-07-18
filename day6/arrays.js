// Activity 1
const arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(`first => ${arr[0]}`)
console.log(`last => ${arr[arr.length - 1]}`)

// Activity 2
arr.push(6)
console.log(`After push ${arr}`);
arr.pop();
console.log(`After pop ${arr}`);
arr.shift()
console.log("Shift " + arr)
arr.unshift(77)
console.log("Unshift " + arr)

// Activity 3
const doubleArray = arr.map(ele => 2 * ele);
console.log(doubleArray);

const evenArray = arr.filter(ele => ele%2 == 0);
console.log(evenArray);

const sumOfArray = arr.reduce((res, ele) => res + ele, 0);
console.log(sumOfArray);

// Activity 4
console.log('for loop =>');
for (let i=0; i<arr.length; i++)
    console.log(arr[i]);

console.log('foreach loop =>');
arr.forEach(element => {
    console.log(element);
});

// Activity 5
let twoDArray = [
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 0, 0]
];
console.log(twoDArray);

console.log(twoDArray[0][1]);
console.log(twoDArray[2][3]);