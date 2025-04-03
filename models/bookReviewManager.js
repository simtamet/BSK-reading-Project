const fs = require('fs');
const Encryption = require('../util');

util = new Encryption();


class Book {
    constructor(id, title, author, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.reviews = [];
    }


    addReview(review) {
        this.reviews.push(review);
    }

    getReviews() {
        return this.reviews.map((review) => this.encryptReview(review));
    }


    getAverageRating() {
        const totalRating = this.reviews.reduce((acc, review) => acc + review.rating, 0);
        return this.reviews.length > 0 ? totalRating / this.reviews.length : 0;
    }
}



// Class for Review data structure
class Review {
    constructor(username, rating, reviewText, datePosted) {
        this.username = username;
        this.rating = rating;
        this.reviewText = reviewText;
        this.datePosted = datePosted;
    }
}

// Class for managing Books and Reviews
class BookReviewManager {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getBookById(id) {
        return this.books.find((book) => book.id === id);
    }

    getAllBooks() {
        return this.books.map((book) => ({
            ...book,
            averageRating: book.getAverageRating(),
        }));
    }

    saveBooksToFile(filePath) {
        fs.writeFileSync(filePath, JSON.stringify(this.books, null, 2));
    }

    loadBooksFromFile(filePath) {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath);
            const booksData = JSON.parse(data);
            this.books = booksData.map((bookData) => {
                const book = new Book(bookData.id, bookData.title, bookData.author, bookData.genre);
                book.reviews = bookData.reviews;
                return book;
            });
        }
    }
    searchBooks(searchQuery) {
        return this.books.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Summary by rating
    summarizeByRating() {
        const summary = {};
        this.books.forEach((book) => {
            book.reviews.forEach((review) => {
                summary[review.rating] = (summary[review.rating] || 0) + 1;
            });
        });
        return summary;
    }

    // Sort books by average rating
    sortByRating() {
        return this.books.sort((a, b) => {
            const avgRatingA = a.getAverageRating();
            const avgRatingB = b.getAverageRating();
            return avgRatingB - avgRatingA; 
        });
    }
}

module.exports = { Book, Review, BookReviewManager };
