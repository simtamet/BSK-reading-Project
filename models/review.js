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

    // ฟังก์ชันเพื่อเก็บรีวิวลงใน localStorage
    saveReview() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.unshift(this); // ใส่รีวิวใหม่ไว้ข้างหน้า
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    // ฟังก์ชันเพื่อเพิ่มรีวิวในหน้าเว็บ
    addReviewToPage() {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review-card');
        reviewElement.innerHTML = `
            <img src="images/default-profile.jpg" alt="Profile Picture" class="profile-pic">
            <div class="review-content">
                <div class="review-header">
                    <div class="username">${this.username}</div>
                    <span class="rated-it"> rated it</span>
                    <div class="rating">${"⭐".repeat(this.rating)}</div>
                    <span class="post-date">Posted on: ${this.datePosted}</span>
                    <div class="options-container">
                        <button class="options-btn">⋮</button>
                        <div class="options-menu" style="display: none;">
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="review-text">${this.reviewText}</div>
                <div class="review-footer">
                    <div class="review-actions">
                        <button class="like-btn">
                            <i class="fas fa-thumbs-up"></i> Like <span class="like-count">0</span>
                        </button>
                        <button class="comment-btn">
                            <i class="fas fa-comment"></i> Comment <span class="comment-count">0</span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        const reviewsContainer = document.getElementById("reviewsContainer");
        reviewsContainer.prepend(reviewElement);

        // ฟังก์ชันแสดง/ซ่อนเมนูสามจุด
        reviewElement.querySelector('.options-btn').addEventListener('click', function (event) {
            const optionsMenu = reviewElement.querySelector('.options-menu');
            const isVisible = optionsMenu.style.display === 'block';
            optionsMenu.style.display = isVisible ? 'none' : 'block';
            event.stopPropagation(); // ป้องกันคลิกที่อื่นทำให้ปิดเมนู
        });

        // ปิดเมนูหากคลิกที่พื้นที่อื่น
        document.addEventListener('click', function (event) {
            const optionsMenu = reviewElement.querySelector('.options-menu');
            const optionsBtn = reviewElement.querySelector('.options-btn');
            if (!optionsBtn.contains(event.target) && !optionsMenu.contains(event.target)) {
                optionsMenu.style.display = 'none';
            }
        });

        // ฟังก์ชันลบรีวิว
        reviewElement.querySelector('.delete-btn').addEventListener('click', function () {
            reviewElement.remove(); // ลบรีวิวออกจาก DOM
        });

        // ฟังก์ชันแก้ไขรีวิว
        reviewElement.querySelector('.edit-btn').addEventListener('click', function () {
            const reviewCard = reviewElement;
            const reviewTextElement = reviewCard.querySelector('.review-text');
            const ratingElement = reviewCard.querySelector('.rating');

            // แสดงฟอร์มให้ผู้ใช้แก้ไขรีวิวและ Rating
            reviewTextElement.innerHTML = `
                <textarea class="edit-review-text">${reviewTextElement.textContent}</textarea>
                <div class="edit-rating">
                    <label for="rating">Rating: </label>
                    <select class="edit-rating-select">
                        <option value="1">1 ⭐</option>
                        <option value="2">2 ⭐</option>
                        <option value="3">3 ⭐</option>
                        <option value="4">4 ⭐</option>
                        <option value="5">5 ⭐</option>
                    </select>
                </div>
                <button class="save-edit-btn">Save Changes</button>
            `;

            // ตั้งค่าคะแนนที่มีอยู่ในตอนแรก
            const currentRating = ratingElement.textContent.trim().length;
            reviewCard.querySelector('.edit-rating-select').value = currentRating;

            // เมื่อกดปุ่ม Save Changes
            reviewCard.querySelector('.save-edit-btn').addEventListener('click', function () {
                const newReviewText = reviewCard.querySelector('.edit-review-text').value;
                const newRating = reviewCard.querySelector('.edit-rating-select').value;

                // อัปเดตรีวิวและ Rating
                ratingElement.innerHTML = "⭐".repeat(newRating); // แสดง Rating ใหม่
                reviewTextElement.textContent = newReviewText; // แสดงข้อความรีวิวใหม่

                // ซ่อนฟอร์มแก้ไข
                reviewTextElement.innerHTML = newReviewText;
                reviewCard.querySelector('.edit-rating').remove();
                reviewCard.querySelector('.save-edit-btn').remove();
            });
        });
    }

    // ฟังก์ชันเพื่อโหลดรีวิวจาก localStorage และแสดง
    static loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.forEach(reviewData => {
            const review = new Review(reviewData.username, reviewData.rating, reviewData.reviewText, reviewData.datePosted);
            review.addReviewToPage();
        });
    }
}

// Example usage:
const newReview = new Review('John Doe', 5, 'This book was amazing!', '2025-04-25');
newReview.saveReview();  // Save the review to localStorage
newReview.addReviewToPage();  // Add the review to the page

// Load reviews when the page loads
window.onload = () => {
    Review.loadReviews();
};

module.exports = { Review };