const { Review } = require('../models/review');  // นำเข้า Review

require('jest-localstorage-mock');  // Mock localStorage

describe('Review Class', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        localStorage.clear(); // เคลียร์ข้อมูล localStorage ก่อนการทดสอบทุกครั้ง
    });

    afterEach(() => {
        console.error.mockRestore();
    });

    it('should save a review to localStorage', () => {
        console.time('saveReview'); // เริ่มจับเวลา
        const review = new Review('John Doe', 5, 'This book was amazing!', '2025-04-25');
        review.saveReview();  // Save the review to localStorage
        console.timeEnd('saveReview'); // จบจับเวลา

        // ตรวจสอบว่ารีวิวถูกบันทึกใน localStorage
        const savedReviews = JSON.parse(localStorage.getItem('reviews'));
        expect(savedReviews).toHaveLength(1);
        expect(savedReviews[0].username).toBe('John Doe');
        expect(savedReviews[0].rating).toBe(5);
        expect(savedReviews[0].reviewText).toBe('This book was amazing!');
        expect(savedReviews[0].datePosted).toBe('2025-04-25');
    });

    it('should load reviews from localStorage and return them', () => {
        console.time('loadReviews'); // เริ่มจับเวลา
        const review = new Review('Jane Doe', 4, 'Good book', '2025-04-26');
        review.saveReview();

        const loadedReviews = Review.loadReviews();
        console.timeEnd('loadReviews'); // จบจับเวลา

        expect(loadedReviews).toHaveLength(1);
        expect(loadedReviews[0].username).toBe('Jane Doe');
        expect(loadedReviews[0].rating).toBe(4);
        expect(loadedReviews[0].reviewText).toBe('Good book');
        expect(loadedReviews[0].datePosted).toBe('2025-04-26');
    });

    it('should initialize localStorage with an empty array if no reviews exist', () => {
        console.time('loadReviewsEmpty'); // เริ่มจับเวลา
        const loadedReviews = Review.loadReviews();
        console.timeEnd('loadReviewsEmpty'); // จบจับเวลา

        expect(loadedReviews).toEqual([]);  // คาดหวังว่ารีวิวจะเป็น array ว่างๆ
    });

    it('should load multiple reviews from localStorage', () => {
        console.time('loadMultipleReviews'); // เริ่มจับเวลา
        const review1 = new Review('John Doe', 5, 'This book was amazing!', '2025-04-25');
        const review2 = new Review('Jane Doe', 4, 'Good book', '2025-04-26');
        review1.saveReview();
        review2.saveReview();

        const loadedReviews = Review.loadReviews();
        console.timeEnd('loadMultipleReviews'); // จบจับเวลา

        expect(loadedReviews).toHaveLength(2);
        expect(loadedReviews[0].username).toBe('Jane Doe');
        expect(loadedReviews[1].username).toBe('John Doe');
    });

    it('should handle saving and loading when localStorage is empty', () => {
        console.time('loadWhenEmpty'); // เริ่มจับเวลา
        localStorage.clear();
        const loadedReviews = Review.loadReviews();
        console.timeEnd('loadWhenEmpty'); // จบจับเวลา

        expect(loadedReviews).toEqual([]);
    });

    it('should handle invalid data in localStorage gracefully', () => {
        console.time('handleInvalidData'); // เริ่มจับเวลา
        // สมมุติว่า localStorage มีข้อมูลที่ไม่ถูกต้อง
        localStorage.setItem('reviews', 'invalid data');

        const loadedReviews = Review.loadReviews();
        console.timeEnd('handleInvalidData'); // จบจับเวลา

        // คาดหวังว่าโหลดกลับมาเป็น array ว่างๆ
        expect(loadedReviews).toEqual([]);
    });

    it('should handle corrupted data in localStorage gracefully', () => {
        console.time('handleCorruptedData'); // เริ่มจับเวลา
        // สมมุติว่า localStorage มีข้อมูลที่ถูกทำลาย
        localStorage.setItem('reviews', JSON.stringify([{ username: 'John Doe', rating: 5 }]));

        const loadedReviews = Review.loadReviews();
        console.timeEnd('handleCorruptedData'); // จบจับเวลา

        // คาดหวังว่าเมื่อโหลดข้อมูลที่ไม่สมบูรณ์, ค่าที่จะได้รับต้องเป็น array ว่างๆ
        expect(loadedReviews).toEqual([]);
    });

    it('should allow saving multiple reviews at once', () => {
        console.time('saveMultipleReviews'); // เริ่มจับเวลา
        const review1 = new Review('Alice', 5, 'Great book!', '2025-04-27');
        const review2 = new Review('Bob', 4, 'Interesting book', '2025-04-28');
        review1.saveReview();
        review2.saveReview();

        const loadedReviews = Review.loadReviews();
        console.timeEnd('saveMultipleReviews'); // จบจับเวลา

        // ตรวจสอบว่ารีวิวสองรายการถูกบันทึก
        expect(loadedReviews).toHaveLength(2);
        expect(loadedReviews[0].username).toBe('Bob');
        expect(loadedReviews[1].username).toBe('Alice');
    });

    it('should update reviews correctly in localStorage', () => {
        console.time('updateReview'); // เริ่มจับเวลา
        const review = new Review('Alice', 5, 'Fantastic read!', '2025-04-29');
        review.saveReview();

        const updatedReview = new Review('Alice', 4, 'Good book', '2025-04-30');
        updatedReview.saveReview();

        const loadedReviews = Review.loadReviews();
        console.timeEnd('updateReview'); // จบจับเวลา

        // ตรวจสอบว่ารีวิวถูกอัพเดตใน localStorage
        expect(loadedReviews[0].rating).toBe(4);
        expect(loadedReviews[0].reviewText).toBe('Good book');
    });

    it('should not allow saving undefined or null reviews', () => {
        console.time('saveInvalidReview'); // เริ่มจับเวลา
        const invalidReview = new Review();
        invalidReview.saveReview();

        const loadedReviews = Review.loadReviews();
        console.timeEnd('saveInvalidReview'); // จบจับเวลา

        // ตรวจสอบว่าไม่มีการบันทึกข้อมูลที่ไม่สมบูรณ์
        expect(loadedReviews).toHaveLength(0);
    });
});
