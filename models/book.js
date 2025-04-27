const fs = require('fs');
const Encryption = require('../util');

util = new Encryption();

class Book {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }


    saveBooksToFile(filePath) {
        console.time('SaveBooksToFile');
        fs.writeFileSync(filePath, JSON.stringify(this.books, null, 2));
        console.timeEnd('SaveBooksToFile');
    }


    sortBooksByRating(books, order = 'desc') {
        return [...books].sort((a, b) => {
            const ratingA = parseFloat(a.rating);
            const ratingB = parseFloat(b.rating);
            return order === 'asc' ? ratingA - ratingB : ratingB - ratingA;
        });
    }

}

module.exports = { Book };
