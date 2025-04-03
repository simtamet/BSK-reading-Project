
const { Book, Review, BookReviewManager } = require('../models/bookReviewManager');

describe('BookReviewManager Tests', () => {
    let bookManager;
    let book1;
    let book2;

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

    test('should add books correctly', () => {
        expect(bookManager.books.length).toBe(2);
        expect(bookManager.getBookById(1).title).toBe('Book 1');
        expect(bookManager.getBookById(2).title).toBe('Book 2');
    });

    test('should add reviews correctly', () => {
        const reviews1 = bookManager.getBookById(1).getReviews();
        expect(reviews1.length).toBe(2);
        expect(reviews1[0].reviewText).toBe('Great book!');

        const reviews2 = bookManager.getBookById(2).getReviews();
        expect(reviews2.length).toBe(2);
        expect(reviews2[1].reviewText).toBe('Not my style');
    });

    test('should calculate average rating correctly', () => {
        expect(book1.getAverageRating()).toBe(4.5);
        expect(book2.getAverageRating()).toBe(2.5);
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

    test('should load and save books correctly', () => {
        const filePath = './books.json';

        // Save books to file
        bookManager.saveBooksToFile(filePath);
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const savedBooks = JSON.parse(fileData);

        expect(savedBooks.length).toBe(2);

        // Load books from file
        const newManager = new BookReviewManager();
        newManager.loadBooksFromFile(filePath);
        expect(newManager.books.length).toBe(2);
    });

    test('should add new book correctly', () => {
        const newBook = new Book(3, 'Book 3', 'Author C', 'Fantasy');
        bookManager.addBook(newBook);
        expect(bookManager.books.length).toBe(3);
        expect(bookManager.getBookById(3).title).toBe('Book 3');
    });

    test('should add review to existing book', () => {
        const review = new Review('User5', 5, 'Amazing read!', '2025-04-03');
        book1.addReview(review);
        const reviews = bookManager.getBookById(1).getReviews();
        expect(reviews.length).toBe(3);
        expect(reviews[2].reviewText).toBe('Amazing read!');
    });
    test('should handle book with no reviews correctly', () => {
        const book3 = new Book(4, 'Book 4', 'Author D', 'Thriller');
        bookManager.addBook(book3);
        expect(bookManager.getBookById(4).getReviews().length).toBe(0);
        expect(bookManager.getBookById(4).getAverageRating()).toBe(0); // ไม่มีรีวิว ควรคืนค่าเป็น 0
    });

    test('should load books from file correctly', () => {
        const filePath = './books.json';

        // Save books to file
        bookManager.saveBooksToFile(filePath);

        // Create new manager and load books
        const newManager = new BookReviewManager();
        newManager.loadBooksFromFile(filePath);

        // Check if books are loaded correctly
        expect(newManager.books.length).toBe(2);
        expect(newManager.getBookById(1).title).toBe('Book 1');
        expect(newManager.getBookById(2).title).toBe('Book 2');
    });


});
