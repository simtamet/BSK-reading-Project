const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const USERS_FILE = path.join(__dirname, '../models/users.json');

// ฟังก์ชันเพื่อโหลดข้อมูลผู้ใช้จากไฟล์
function loadUsers() {
    try {
        if (!fs.existsSync(USERS_FILE)) {
            console.log("No users file found. Creating a new one.");
            return [];
        }

        const usersData = fs.readFileSync(USERS_FILE, 'utf8');
        if (!usersData) {
            console.log("Users file is empty.");
            return [];
        }

        console.log("Users loaded from file:", usersData); // แสดงข้อมูลที่โหลด
        return JSON.parse(usersData);
    } catch (error) {
        console.error("Error reading users.json:", error);
        return [];
    }
}

function saveUsers(users) {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
        console.log("Users saved to users.json successfully.");
    } catch (error) {
        console.error("Error saving users to users.json:", error);
    }
}


// Show Sign Up Page
exports.showSignUpPage = (req, res) => {
    res.render('signup', { error: req.query.error || null });
};

// Handle Sign Up
// ใน signUpController.js
exports.signup = async (req, res) => {
    console.log('Received signup request'); // เพิ่มการแสดงข้อความเพื่อเช็คว่าโค้ดถูกเรียก
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        console.log('Missing fields'); // ตรวจสอบว่าเข้ามาหรือไม่
        return res.render('signup', { error: 'Please provide email, password, and confirm password' });
    }

    if (password !== confirmPassword) {
        console.log('Passwords do not match');
        return res.render('signup', { error: 'Passwords do not match' });
    }

    let users = loadUsers(); // โหลดข้อมูลผู้ใช้จากไฟล์
    console.log('Loaded users:', users); // แสดงข้อมูล users ที่โหลดมา

    if (users.some(user => user.email === email)) {
        console.log('Email already exists');
        return res.render('signup', { error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });

    saveUsers(users);

    console.log(`New user signed up: ${email}`);
    res.redirect('/signin');
};
