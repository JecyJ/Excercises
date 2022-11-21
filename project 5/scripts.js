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
let dragEndIndex;
let createList = creation();

function creation() {
    [...richestPeople]
    .map(a => ({value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {        
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);
        

        listItem.innerHTML = `
        <div class = " dragme flex flex-row">
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
    addEventListener();
}

function dragStart() {
    // console.log('Event: ', 'dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex);
    swapItems(dragStartIndex, dragEndIndex);
}

function dragEnter() {
    // console.log('Event: ', 'dragenter');
    this.classList.add('over');
}

function dragLeave() {
    // console.log('Event: ', 'dragleave');
    this.classList.remove('over');
}
function dragOver(e) {
    // console.log('Event: ', 'dragover');
    e.preventDefault();
}

function dragDrop() {
    // console.log('Event: ', 'drop');
    const dragEndIndex = +this.getAttribute('data-index');

    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');

}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function checkOrder() {
    listItems.forEach((listItem, index) => {
        const personName = listItem.querySelector('.draggable').innerText.trim();

        if (personName !== richestPeople[index]) {
            listItem.classList.add('wrong');
        }
        else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }
    })
}

function addEventListener() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}


checkBtn.addEventListener("click", checkOrder);