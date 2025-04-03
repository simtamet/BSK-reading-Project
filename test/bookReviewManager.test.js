const fs = require('fs');
const { Review, BookReviewManager } = require('../models/bookReviewManager');
const { Book } = require('../models/bookModel');

describe('BookReviewManager Tests', () => {
    let bookManager;
    let book1;
    let book2;
    const filePath = './books.json'; // เพิ่มไฟล์สำหรับทดสอบการโหลดบันทึก

    beforeEach(() => {
        bookManager = new BookReviewManager();

        book1 = new Book(1, 'Book 1', 'Author A', 'Fiction');
        book2 = new Book(2, 'Book 2', 'Author B', 'Non-fiction');

        book1.addReview(new Review('User1', 5, 'Great book!', '2025-04-01'));
        book1.addReview(new Review('User2', 4, 'Enjoyed it', '2025-04-02'));

        book2.addReview(new Review('User3', 3, 'Interesting but slow', '2025-04-01'));
        book2.addReview(new Review('User4', 2, 'Not my style', '2025-04-02'));

        bookManager.addBook(book1);
        bookManager.addBook(book2);
    });

    afterEach(() => {
        // Cleanup: ลบไฟล์หลังทดสอบเสร็จ
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    });

    test('should add books correctly', () => {
        expect(bookManager.books.length).toBe(2);
        expect(bookManager.getBookById(1).title).toBe('Book 1');
        expect(bookManager.getBookById(2).title).toBe('Book 2');
    });

    test('should summarize reviews by rating correctly', () => {
        const summary = bookManager.summarizeByRating();
        expect(summary[5]).toBe(1);
        expect(summary[4]).toBe(1);
        expect(summary[3]).toBe(1);
        expect(summary[2]).toBe(1);
    });

    test('should sort books by average rating correctly', () => {
        const sortedBooks = bookManager.sortByRating();
        expect(sortedBooks[0].title).toBe('Book 1');
        expect(sortedBooks[1].title).toBe('Book 2');
    });

    test('should search books by title or author correctly', () => {
        const searchResult = bookManager.searchBooks('Fiction');
        expect(searchResult.length).toBe(1);
        expect(searchResult[0].title).toBe('Book 1');

        const searchResult2 = bookManager.searchBooks('Author B');
        expect(searchResult2.length).toBe(1);
        expect(searchResult2[0].title).toBe('Book 2');
    });



    test('should not load books if file does not exist', () => {
        const invalidPath = './invalid_books.json';
        const newManager = new BookReviewManager();
        newManager.loadBooksFromFile(invalidPath);

        // Check if books remain empty when file does not exist
        expect(newManager.books.length).toBe(0);
    });

    test('should get all books correctly', () => {
        const allBooks = bookManager.getAllBooks();
        expect(allBooks.length).toBe(2); // ตรวจสอบจำนวนทั้งหมดของหนังสือ
        expect(allBooks[0].title).toBe('Book 1');
        expect(allBooks[1].title).toBe('Book 2');
    });



    test('should save books to file correctly', () => {
        // Save books to file
        bookManager.saveBooksToFile(filePath);

        // Check if the file exists
        expect(fs.existsSync(filePath)).toBe(true);

        // Read the file and verify its content
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const savedBooks = JSON.parse(fileData);

        expect(savedBooks.length).toBe(2);
        expect(savedBooks[0].title).toBe('Book 1');
        expect(savedBooks[0].reviews.length).toBe(2);
    });

    test('should load books from file correctly', () => {
        const booksData = [
            { id: 1, title: 'Book 1', author: 'Author A', genre: 'Fiction' },
            { id: 2, title: 'Book 2', author: 'Author B', genre: 'Non-fiction' }
        ];

        // เขียนข้อมูลลงในไฟล์
        fs.writeFileSync(filePath, JSON.stringify(booksData, null, 2));

        // ทดสอบการโหลดข้อมูล
        bookManager.loadBooksFromFile(filePath);

        // ตรวจสอบว่ามีการโหลดข้อมูลที่ถูกต้อง
        expect(bookManager.books.length).toBe(2);
        expect(bookManager.books[0].title).toBe('Book 1');
        expect(bookManager.books[1].author).toBe('Author B');
    });


    test('should skip incomplete books when loading', () => {
        const booksData = [
            { id: 1, title: 'Book 1', author: 'Author A', genre: 'Fiction' },
            { id: 2, title: '', author: 'Author B', genre: 'Non-fiction' }, // ข้อมูลไม่สมบูรณ์
            { id: 3, title: 'Book 3', author: 'Author C', genre: 'Mystery' }
        ];

        fs.writeFileSync(filePath, JSON.stringify(booksData, null, 2));

        bookManager.loadBooksFromFile(filePath);

        expect(bookManager.books.length).toBe(2); // ควรจะมี 2 รายการที่สมบูรณ์
        expect(bookManager.books[0].title).toBe('Book 1');
        expect(bookManager.books[1].title).toBe('Book 3');
    });

    

    

});
