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
        console.time('AddBooks'); // เริ่มวัดเวลา

        const book1 = { title: 'Book 1', rating: '4.5' };
        const book2 = { title: 'Book 2', rating: '3.5' };

        bookManager.addBook(book1);
        bookManager.addBook(book2);

        expect(bookManager.books).toHaveLength(2);
        expect(bookManager.books[0]).toEqual(book1);
        expect(bookManager.books[1]).toEqual(book2);

        console.timeEnd('AddBooks'); // จบการวัดเวลา
    });

    test('should save books to file correctly', () => {
        console.time('SaveBooksToFile'); // เริ่มวัดเวลา

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

        console.timeEnd('SaveBooksToFile'); // จบการวัดเวลา
    });

    test('should sort books by rating correctly in descending order', () => {
        console.time('SortBooksDesc'); // เริ่มวัดเวลา

        const book1 = { title: 'Book 1', rating: '4.5' };
        const book2 = { title: 'Book 2', rating: '3.5' };
        const book3 = { title: 'Book 3', rating: '5.0' };

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        const sortedBooks = bookManager.sortBooksByRating(bookManager.books, 'desc');

        expect(sortedBooks).toEqual([book3, book1, book2]);

        console.timeEnd('SortBooksDesc'); // จบการวัดเวลา
    });

    test('should sort books by rating correctly in ascending order', () => {
        console.time('SortBooksAsc'); // เริ่มวัดเวลา

        const book1 = { title: 'Book 1', rating: '4.5' };
        const book2 = { title: 'Book 2', rating: '3.5' };
        const book3 = { title: 'Book 3', rating: '5.0' };

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        const sortedBooks = bookManager.sortBooksByRating(bookManager.books, 'asc');

        expect(sortedBooks).toEqual([book2, book1, book3]);

        console.timeEnd('SortBooksAsc'); // จบการวัดเวลา
    });
    test('should sort books by rating correctly when ratings are the same', () => {
        console.time('SortBooksSameRating'); // เริ่มวัดเวลา

        const book1 = { title: 'Book 1', rating: '4.5' };
        const book2 = { title: 'Book 2', rating: '4.5' };
        const book3 = { title: 'Book 3', rating: '4.5' };

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        // Testing sorting by descending order
        const sortedBooksDesc = bookManager.sortBooksByRating(bookManager.books, 'desc');
        expect(sortedBooksDesc).toEqual([book1, book2, book3]); // การจัดเรียงในกรณีที่คะแนนเท่ากันอาจไม่เปลี่ยนแปลง

        // Testing sorting by ascending order
        const sortedBooksAsc = bookManager.sortBooksByRating(bookManager.books, 'asc');
        expect(sortedBooksAsc).toEqual([book1, book2, book3]);

        console.timeEnd('SortBooksSameRating'); // จบการวัดเวลา
    });

    test('should handle sorting when there are no books', () => {
        console.time('SortBooksEmpty'); // เริ่มวัดเวลา

        const sortedBooks = bookManager.sortBooksByRating([], 'desc');
        expect(sortedBooks).toEqual([]); // ควรจะเป็นอาร์เรย์ว่าง

        console.timeEnd('SortBooksEmpty'); // จบการวัดเวลา
    });

    test('should sort books correctly when ratings are a mix of integers and decimals', () => {
        console.time('SortBooksMixRatings'); // เริ่มวัดเวลา

        const book1 = { title: 'Book 1', rating: '4.0' }; // จำนวนเต็ม
        const book2 = { title: 'Book 2', rating: '3.5' }; // ทศนิยม
        const book3 = { title: 'Book 3', rating: '4.25' }; // ทศนิยม

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        // Sorting by descending order (แปลงคะแนนเป็นตัวเลขก่อน)
        const sortedBooksDesc = bookManager.sortBooksByRating(bookManager.books, 'desc');
        expect(sortedBooksDesc).toEqual([book3, book1, book2]); // 4.25 > 4.0 > 3.5

        // Sorting by ascending order (แปลงคะแนนเป็นตัวเลขก่อน)
        const sortedBooksAsc = bookManager.sortBooksByRating(bookManager.books, 'asc');
        expect(sortedBooksAsc).toEqual([book2, book1, book3]);

        console.timeEnd('SortBooksMixRatings'); // จบการวัดเวลา
    });

    test('should sort books correctly when ratings are mixed types (string and number)', () => {
        console.time('SortBooksMixedTypes'); // เริ่มวัดเวลา

        const book1 = { title: 'Book 1', rating: 4.5 };  // ตัวเลข
        const book2 = { title: 'Book 2', rating: '3.5' };  // สตริง
        const book3 = { title: 'Book 3', rating: 4.25 };  // ตัวเลข

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        // Sorting by descending order
        const sortedBooksDesc = bookManager.sortBooksByRating(bookManager.books, 'desc');
        expect(sortedBooksDesc).toEqual([book1, book3, book2]); // 4.5 > 4.25 > 3.5

        // Sorting by ascending order
        const sortedBooksAsc = bookManager.sortBooksByRating(bookManager.books, 'asc');
        expect(sortedBooksAsc).toEqual([book2, book3, book1]); // 3.5 < 4.25 < 4.5

        console.timeEnd('SortBooksMixedTypes'); // จบการวัดเวลา
    });

    test('should sort books correctly when ratings are negative', () => {
        console.time('SortBooksNegativeRatings'); // เริ่มวัดเวลา

        const book1 = { title: 'Book 1', rating: '-1.5' };  // คะแนนลบ
        const book2 = { title: 'Book 2', rating: '-3.5' };  // คะแนนลบ
        const book3 = { title: 'Book 3', rating: '-2.0' };  // คะแนนลบ

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        // Sorting by descending order (จากคะแนนมากไปหาน้อย)
        const sortedBooksDesc = bookManager.sortBooksByRating(bookManager.books, 'desc');
        expect(sortedBooksDesc).toEqual([book1, book3, book2]); // -1.5 > -2.0 > -3.5

        // Sorting by ascending order (จากคะแนนน้อยไปหามาก)
        const sortedBooksAsc = bookManager.sortBooksByRating(bookManager.books, 'asc');
        expect(sortedBooksAsc).toEqual([book2, book3, book1]); // -3.5 < -2.0 < -1.5

        console.timeEnd('SortBooksNegativeRatings'); // จบการวัดเวลา
    });

    test('should sort books correctly when ratings have multiple decimal points', () => {
        console.time('SortBooksMultipleDecimals'); // เริ่มวัดเวลา

        const book1 = { title: 'Book 1', rating: '4.123' };  // ทศนิยมหลายตำแหน่ง
        const book2 = { title: 'Book 2', rating: '4.1234' };  // ทศนิยมหลายตำแหน่ง
        const book3 = { title: 'Book 3', rating: '4.12' };    // ทศนิยมหลายตำแหน่ง

        bookManager.addBook(book1);
        bookManager.addBook(book2);
        bookManager.addBook(book3);

        // Sorting by descending order
        const sortedBooksDesc = bookManager.sortBooksByRating(bookManager.books, 'desc');
        expect(sortedBooksDesc).toEqual([book2, book1, book3]); // 4.1234 > 4.123 > 4.12

        // Sorting by ascending order
        const sortedBooksAsc = bookManager.sortBooksByRating(bookManager.books, 'asc');
        expect(sortedBooksAsc).toEqual([book3, book1, book2]); // 4.12 < 4.123 < 4.1234

        console.timeEnd('SortBooksMultipleDecimals'); // จบการวัดเวลา
    });

    test('sorts books by rating descending (default)', () => {
        const books = [
            { title: "Book A", rating: "4.0" },
            { title: "Book B", rating: "5.0" },
            { title: "Book C", rating: "3.0" }
        ];
        const sorted = sortBooksByRating(books); // ไม่ใส่ order
        expect(sorted.map(b => b.title)).toEqual(["Book B", "Book A", "Book C"]);
    });


});
