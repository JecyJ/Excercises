const draggableList = document.querySelector('.draggable-list');
const checkBtn = document.querySelector('.check-btn');

const richestPeople = [
    'Elon Musk',
    'Bernard Arnault',
    'Gautam Adani',
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Larry Ellison',
    'Larry Page',
    'Mukesh Ambani',
    'Sergey Brin'
]

const listItems = [];

let dragStartIndex;
let createList = creation();

function creation() {
    [...richestPeople]
    .map(a => ({value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
        // console.log(person)
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <div class = "flex flex-row">
        <Span class = "number border text-4xl w-12 h-12 text-center bg-sky-400">${index + 1}</Span>
        <div class = "draggable flex flex-row justify-between items-center border px-4 w-48" draggable = "true">
        <p class = "person-name text-base">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        </div>
        `;
        listItems.push(listItem);
        draggableList.append(listItem);
    })
}
