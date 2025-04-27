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

    saveReview() {
        if (!this.username || !this.rating || !this.reviewText || !this.datePosted) {
            console.error('Invalid review data:', this);
            return;  // ไม่บันทึกถ้าข้อมูลไม่สมบูรณ์
        }
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.unshift(this); // ใส่รีวิวใหม่ไว้ข้างหน้า
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    static loadReviews() {
        let reviews = [];
        try {
            reviews = JSON.parse(localStorage.getItem('reviews')) || [];
            // กรองรีวิวที่ไม่สมบูรณ์ออก
            reviews = reviews.filter(review =>
                review.username && review.rating && review.reviewText && review.datePosted
            );
        } catch (error) {
            console.error('Error loading reviews:', error);
            reviews = [];  // รีเซ็ตให้เป็น array ว่างๆ
        }
        return reviews;
    }


}

// ตัวอย่างการใช้งาน
const newReview = new Review('John Doe', 5, 'This book was amazing!', '2025-04-25');
newReview.saveReview();  // Save the review to localStorage

// เมื่อโหลดหน้าเว็บ, โหลดรีวิวจาก localStorage (จะได้แค่ข้อมูลที่บันทึก)
window.onload = () => {
    const loadedReviews = Review.loadReviews();
    console.log(loadedReviews);  // ดูรีวิวที่โหลดมาในคอนโซล
};

module.exports = { Review };
