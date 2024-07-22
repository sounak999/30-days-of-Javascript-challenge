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

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.
document.getElementById('temporary-text').remove();

// Task 6: Remove the last child of a specific HTML element.
document.getElementById('removable-list').lastElementChild.remove()


// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.getElementsByTagName('img')[0].src = 'https://fastly.picsum.photos/id/121/200/300.jpg?hmac=2fXySXN_YXZfcWVqSvYNuH7podc4E9cEj89RqtBW238'

// Task 8: Add and remove a CSS class to/from an HTML element.
const classChangeElement = document.getElementById('class-change');

classChangeElement.classList.add('highlight');
// classChangeElement.classList.remove('highlight');


// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const para = document.getElementById('interactive-paragraph')
document.getElementById('action-button').addEventListener('click', () => para.textContent = 'This content comes with the click!')

// Task 10: Add a mouseover event listener to an element that changes its border color.
para.addEventListener('mouseover', () => {
    para.classList.add('hovered')
})

para.addEventListener('mouseout', () => {
    para.classList.remove('hovered')
})