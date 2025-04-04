const { Review,BookReviewManager } = require('../models/bookReviewManager');
const { Book } = require('../models/bookModel');


describe('BookModel Tests', () => {
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


    test('should calculate average rating correctly', () => {
        expect(book1.getAverageRating()).toBe(4.5);
        expect(book2.getAverageRating()).toBe(2.5);
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
        expect(bookManager.getBookById(4).getAverageRating()).toBe(0); 
    });


});
