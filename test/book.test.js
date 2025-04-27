// book.test.js
const fs = require('fs');
const { Book } = require('../models/book');

// Mock fs.writeFileSync
jest.mock('fs');

describe('Book Class', () => {
    let bookManager;

    beforeEach(() => {
        bookManager = new Book();
    });

    test('should add books correctly', () => {
        const book1 = { title: 'Book 1', rating: '4.5' };
        const book2 = { title: 'Book 2', rating: '3.5' };

        bookManager.addBook(book1);
        bookManager.addBook(book2);

        expect(bookManager.books).toHaveLength(2);
        expect(bookManager.books[0]).toEqual(book1);
        expect(bookManager.books[1]).toEqual(book2);
    });

    test('should save books to file correctly', () => {
        const book1 = { title: 'Book 1', rating: '4.5' };
        const book2 = { title: 'Book 2', rating: '3.5' };

        bookManager.addBook(book1);
        bookManager.addBook(book2);

        const filePath = './books.json';

        // Call saveBooksToFile
        bookManager.saveBooksToFile(filePath);

        // ตรวจสอบว่า fs.writeFileSync ถูกเรียก
        expect(fs.writeFileSync).toHaveBeenCalledWith(
            filePath,
            JSON.stringify(bookManager.books, null, 2)
        );
    });

    test('should sort books by rating correctly in descending order', () => {
        const book1 = { title: 'Book 1', rating: '4.5' };
        const book2 = { title: 'Book 2', rating: '3.5' };
        const book3 = { title: 'Book 3', rating: '5.0' };

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        const sortedBooks = bookManager.sortBooksByRating(bookManager.books, 'desc');

        expect(sortedBooks).toEqual([book3, book1, book2]);
    });

    test('should sort books by rating correctly in ascending order', () => {
        const book1 = { title: 'Book 1', rating: '4.5' };
        const book2 = { title: 'Book 2', rating: '3.5' };
        const book3 = { title: 'Book 3', rating: '5.0' };

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        const sortedBooks = bookManager.sortBooksByRating(bookManager.books, 'asc');

        expect(sortedBooks).toEqual([book2, book1, book3]);
    });
});
