// book class
class Book {
    constructor(title,author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class
class UI {
    static displayBooks() {
        const storedBook = [
            {
                title: 'Jecy',
                author: 'Jecy',
                isbn: 1234
            },
            {
                title: 'Jehu',
                author: 'Jehu',
                isbn: 12345
            }
        ];
        const books = storedBook;

        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('.book-list')

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <a href="#" class="delete-btn border rounded px-1 bg-red-500 transition duration-200 ease-in active:scale-50">X</a>
            </td>
        `;

        list.append(row)
    }

    static clearInputField(book) {
        const title = document.querySelector('.title').value = '';
        const author = document.querySelector('.author').value = '';
        const isbn = document.querySelector('.isbn').value = ''; 
    }

    static deleteInputField(el) {
        if(el.classList.contains('delete-btn')){
            el.parentElement.parentElement.remove();
        }
    }
    static alertField(message, className) {
        const div = document.querySelector('div');


        div.className = `alert alert-${(className)}`;

        div.append(document.createTextNode(message));

        const container = document.querySelector('.container');
        const bookInput = document.querySelector('.book-input');

        container.insertBefore(div ,bookInput);


        // if()

        // div.innerHTML = `<div class="alertRight"></div>`
        // div.innerHTML = `<div class="alertWrong"></div>`
    }
}
//store class: handle storage

// events: add a book
document.addEventListener('DOMContentLoaded', UI.displayBooks)


// events: add books
document.querySelector('.book-input').addEventListener('submit', (e) => {

    e.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const isbn = document.querySelector('.isbn').value;
    // const checkBtn = document.querySelector('.check-btn');
    
    if(title === '' || author === '' || isbn === ''){
        UI.alertField('Please Input Fields', 'bg-red-500')
    } else {
        const book = new Book(title,author,isbn);

        UI.addBookToList(book);
    
        UI.clearInputField(book);
    }    
    
});


// events: remove books
document.querySelector('.book-list').addEventListener('click', (e) => {
    UI.deleteInputField(e.target);
});