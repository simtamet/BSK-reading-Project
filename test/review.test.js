const { Review } = require('../models/review'); // นำเข้า Review class

describe('Review Class', () => {
    let newReview;

    // ก่อนการทดสอบทุกครั้ง
    beforeEach(() => {
        // สร้าง element สำหรับ reviewsContainer
        const container = document.createElement('div');
        container.id = 'reviewsContainer';
        document.body.appendChild(container);

        // เตรียมรีวิวตัวอย่าง
        newReview = new Review('John Doe', 5, 'This book was amazing!', '2025-04-25');

        // Mock localStorage
        localStorage.clear();
    });

    // หลังการทดสอบทุกครั้ง
    afterEach(() => {
        const container = document.getElementById('reviewsContainer');
        if (container) {
            document.body.removeChild(container);
        }
    });

    // ทดสอบการสร้างรีวิว
    test('should create a review instance', () => {
        expect(newReview.username).toBe('John Doe');
        expect(newReview.rating).toBe(5);
        expect(newReview.reviewText).toBe('This book was amazing!');
        expect(newReview.datePosted).toBe('2025-04-25');
    });

    // ทดสอบการบันทึกรีวิวลงใน localStorage
    test('should save the review to localStorage', () => {
        newReview.saveReview();

        // ตรวจสอบว่า localStorage.setItem ถูกเรียก
        const savedReviews = JSON.parse(localStorage.getItem('reviews'));
        expect(savedReviews.length).toBe(1);
        expect(savedReviews[0].username).toBe('John Doe');
    });


    // ทดสอบการโหลดรีวิวจาก localStorage
    test('should load reviews from localStorage and display them', () => {
        // บันทึกรีวิวลงใน localStorage
        newReview.saveReview();

        // โหลดรีวิวจาก localStorage
        Review.loadReviews();

        // ตรวจสอบว่ารีวิวถูกแสดงใน DOM
        const reviewElement = document.querySelector('.review-card');
        expect(reviewElement).not.toBeNull();
        expect(reviewElement.querySelector('.username').textContent).toBe('John Doe');
    });

   
    // ทดสอบการลบรีวิว
    test('should delete the review from the page', () => {
        newReview.addReviewToPage();

        // คลิกที่ปุ่ม "Delete"
        const deleteBtn = document.querySelector('.delete-btn');
        deleteBtn.click();

        // ตรวจสอบว่ารีวิวถูกลบออกจาก DOM
        const reviewElement = document.querySelector('.review-card');
        expect(reviewElement).toBeNull();
    });

    describe('Review Class - addReviewToPage', () => {
        let newReview;

        // จำลองการตั้งค่า DOM
        beforeEach(() => {
            // จำลอง reviewsContainer ใน DOM
            const container = document.createElement('div');
            container.id = 'reviewsContainer';
            document.body.appendChild(container);

            // สร้างรีวิวตัวอย่าง
            newReview = new Review('John Doe', 5, 'This book was amazing!', '2025-04-25');

            // จำลองการทำงานของ localStorage
            global.localStorage = {
                getItem: jest.fn(() => JSON.stringify([])),
                setItem: jest.fn(),
            };

            // เรียกใช้ addReviewToPage() เพื่อเพิ่มรีวิว
            newReview.addReviewToPage();
        });

        afterEach(() => {
            const container = document.getElementById('reviewsContainer');
            if (container) {
                document.body.removeChild(container);
            }

            // รีเซ็ตการจำลอง localStorage
            global.localStorage = originalLocalStorage;
        });


        test('should delete the review when delete button is clicked', () => {
            const deleteBtn = document.querySelector('.delete-btn');
            const reviewCard = document.querySelector('.review-card');

            // ตรวจสอบว่ามีรีวิวใน DOM ก่อนการลบ
            expect(reviewCard).not.toBeNull();

            // คลิกที่ปุ่ม delete
            deleteBtn.click();

            // ตรวจสอบว่ารีวิวถูกลบออกจาก DOM
            expect(document.querySelector('.review-card')).toBeNull();
        });

        test('should edit the review when edit button is clicked', () => {
            const editBtn = document.querySelector('.edit-btn');
            const reviewCard = document.querySelector('.review-card');
            const reviewTextElement = reviewCard.querySelector('.review-text');

            // ตรวจสอบข้อความรีวิวก่อนการแก้ไข
            expect(reviewTextElement.textContent).toBe('This book was amazing!');

            // คลิกที่ปุ่ม edit
            editBtn.click();

            // จำลองการแก้ไขรีวิว
            const editTextArea = document.querySelector('.edit-review-text');
            editTextArea.value = 'This book was excellent!';

            // คลิกที่ปุ่ม Save Changes
            const saveBtn = document.querySelector('.save-edit-btn');
            saveBtn.click();

            // ตรวจสอบว่ารีวิวถูกอัปเดตใน DOM
            expect(reviewTextElement.textContent).toBe('This book was excellent!');
        });
    });
    beforeEach(() => {
        // Mock localStorage
        const localStorageMock = (() => {
            let store = {};
            return {
                getItem: (key) => store[key] || null,
                setItem: (key, value) => { store[key] = value; },
                clear: () => { store = {}; },
            };
        })();
        Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    });
    test('should toggle options menu when clicking options button', () => {
        // Mock the DOM for the review card
        document.body.innerHTML = `
            <div id="reviewsContainer">
                <div class="review-card">
                    <button class="options-btn">⋮</button>
                    <div class="options-menu" style="display: none;">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            </div>
        `;

        // Create the Review instance
        const review = new Review('John Doe', 5, 'Amazing book!', '2025-04-25');
        review.addReviewToPage(); // Add review to DOM

        const optionsBtn = document.querySelector('.options-btn');
        const optionsMenu = document.querySelector('.options-menu');

        // Click to toggle the options menu
        optionsBtn.click();
        expect(optionsMenu.style.display).toBe('block'); // Menu should be visible

        // Click again to hide the options menu
        optionsBtn.click();
        expect(optionsMenu.style.display).toBe('none'); // Menu should be hidden
    });

    test('should remove review on delete', () => {
        // Mock the DOM for the review card
        document.body.innerHTML = `
            <div id="reviewsContainer">
                <div class="review-card">
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
        `;

        // Create the Review instance
        const review = new Review('John Doe', 5, 'Amazing book!', '2025-04-25');
        review.addReviewToPage(); // Add review to DOM

        const deleteBtn = document.querySelector('.delete-btn');
        const reviewCard = document.querySelector('.review-card');

        // Click to delete the review
        deleteBtn.click();
        expect(reviewCard).toBeNull(); // The review should be removed from the DOM
    });
    test('should save review to localStorage', () => {
        // Mock the localStorage
        const localStorageMock = (() => {
            let store = {};
            return {
                getItem: (key) => store[key] || null,
                setItem: (key, value) => { store[key] = value; },
                clear: () => { store = {}; },
            };
        })();
        Object.defineProperty(window, 'localStorage', { value: localStorageMock });

        // Create the Review instance
        const review = new Review('John Doe', 5, 'Amazing book!', '2025-04-25');

        // Call saveReview
        review.saveReview();

        // Check if the review was saved in localStorage
        const savedReviews = JSON.parse(localStorage.getItem('reviews'));
        expect(savedReviews.length).toBe(1); // Should have one review
        expect(savedReviews[0].username).toBe('John Doe'); // Should match the username
    });



});
