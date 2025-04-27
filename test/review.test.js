// ใช้ require แทน import
require('jest-localstorage-mock');
const { Review } = require('../models/review');


describe('Review Class', () => {
    let newReview;

    beforeEach(() => {
        // จำลอง reviewsContainer
        const container = document.createElement('div');
        container.id = 'reviewsContainer';
        document.body.appendChild(container); // เพิ่ม container ลงใน DOM
    });

    afterEach(() => {
        // ลบ element หลังการทดสอบเสร็จ
        const container = document.getElementById('reviewsContainer');
        if (container) {
            document.body.removeChild(container);
        }
    });
    test('should add a review to the page', () => {
        const newReview = new Review('John Doe', 5, 'This book was amazing!', '2025-04-25');
        newReview.addReviewToPage();

        // ตรวจสอบว่ารีวิวถูกเพิ่มเข้าไปใน reviewsContainer
        const reviewElement = document.querySelector('.review-card');
        expect(reviewElement).not.toBeNull(); // ควรจะมี .review-card ใน DOM
        const reviewsContainer = document.getElementById('reviewsContainer');
        expect(reviewsContainer.contains(reviewElement)).toBe(true); // ตรวจสอบว่ารีวิวถูกเพิ่มเข้าไปใน container
    });


    test('should save review to localStorage', () => {
        // Save the review
        newReview.saveReview();

        // Check if setItem was called to save the new review
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'reviews',
            JSON.stringify([newReview])
        );
    });

});
