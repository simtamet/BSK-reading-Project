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
        console.time('AverageRating'); 
        const totalRating = this.reviews.reduce((acc, review) => acc + review.rating, 0);
        const avgRating = this.reviews.length > 0 ? totalRating / this.reviews.length : 0;
        console.timeEnd('AverageRating');  
        return avgRating;
    }
}
module.exports = { Book };