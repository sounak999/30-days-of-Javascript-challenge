// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
const htmlId = document.getElementById('intro-text')
htmlId.textContent = `Task 1: text content changed by capturing HTML element's ID`

// Task 2: Select an HTML element by its class and change its background color.
const htmlCls = document.getElementsByClassName('highlight')[0]
htmlCls.style.backgroundColor = 'yellow'


// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement("div");
newDiv.textContent = 'New Div Element added as per Task 3';
document.body.append(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.
const ul = document.getElementById('item-list')
const newList = document.createElement('li')
let textNode = document.createTextNode('New item 3 added')
newList.appendChild(textNode)
ul.appendChild(newList)