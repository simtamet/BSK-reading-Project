const fs = require('fs');
const Encryption = require('../util');

util = new Encryption();

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
        console.time('GetAllBooks');
        const booksWithAvgRating = this.books.map((book) => ({
            ...book,
            averageRating: book.getAverageRating(),
        }));
        console.timeEnd('GetAllBooks');
        return booksWithAvgRating;
    }

    saveBooksToFile(filePath) {
        console.time('SaveBooksToFile');
        fs.writeFileSync(filePath, JSON.stringify(this.books, null, 2));
        console.timeEnd('SaveBooksToFile');
    }

    loadBooksFromFile(filePath) {
        console.time('LoadBooksFromFile');
        try {
            if (fs.existsSync(filePath)) {
                const data = fs.readFileSync(filePath, 'utf8');
                const booksData = JSON.parse(data);

                // แปลงข้อมูลและสร้าง Book แม้ว่าข้อมูลบางส่วนจะขาดหาย
                this.books = booksData.map(bookData => {
                    // ตรวจสอบว่ามีข้อมูลครบถ้วนหรือไม่
                    if (bookData.id && bookData.title && bookData.author && bookData.genre) {
                        return new Book(bookData.id, bookData.title, bookData.author, bookData.genre);
                    } else {
                        // ไม่ทำอะไร (หรืออาจจะ return undefined ถ้าคุณต้องการ)
                        return new Book(bookData.id, bookData.title, bookData.author, bookData.genre);
                    }
                });
            } else {
                console.warn('File does not exist:', filePath);
            }
        } catch (error) {
            console.error('Error loading books from file:', error);
        }
        console.timeEnd('LoadBooksFromFile');
    }


    searchBooks(searchQuery) {
        console.time('SearchBooks');
        const searchResult = this.books.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        console.timeEnd('SearchBooks');
        return searchResult;
    }

    // Summary by rating
    summarizeByRating() {
        console.time('SummarizeByRating');
        const summary = {};
        this.books.forEach((book) => {
            book.reviews.forEach((review) => {
                summary[review.rating] = (summary[review.rating] || 0) + 1;
            });
        });
        console.timeEnd('SummarizeByRating');
        return summary;
    }

    // Sort books by average rating
    sortByRating() {
        console.time('SortByRating');
        const sortedBooks = this.books.sort((a, b) => {
            const avgRatingA = a.getAverageRating();
            const avgRatingB = b.getAverageRating();
            return avgRatingB - avgRatingA;
        });
        console.timeEnd('SortByRating');
        return sortedBooks;
    }
}

module.exports = { Review, BookReviewManager };
