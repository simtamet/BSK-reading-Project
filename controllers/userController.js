const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const USERS_FILE = path.join(__dirname, '../models/users.json');



function loadUsers() {
    try {
        if (!fs.existsSync(USERS_FILE)) {
            console.log("No users file found.");
            return [];
        }

        const usersData = fs.readFileSync(USERS_FILE, 'utf8');
        if (!usersData) {
            console.log("Users file is empty.");
            return [];
        }

        return JSON.parse(usersData); // แปลงข้อมูล JSON กลับเป็นอาร์เรย์
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


exports.showSignInPage = (req, res) => {
    res.render('signin', { error: req.query.error || null });
};


exports.signin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.render('signin', { error: 'Please provide email or username and password' });
    }

    let users = loadUsers(); // โหลดข้อมูลผู้ใช้จากไฟล์

    // ค้นหาผู้ใช้ที่ตรงกับ email หรือ username
    const user = users.find(user => user.email === email || user.username === email);
    if (!user) {
        return res.render('signin', { error: 'Email or Username not found' });
    }

    // เปรียบเทียบรหัสผ่านที่กรอกกับรหัสผ่านที่เก็บไว้ในไฟล์
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        return res.render('signin', { error: 'Incorrect password' });
    }

    req.session.user = user.email;  // บันทึกอีเมลผู้ใช้ใน session
    console.log(`${user.email} has logged in`);

    res.redirect('/homePage');
};



exports.showHomePage = (req, res) => {
    res.render('homePage', { error: req.query.error || null });
};


// หน้า HomePage
exports.homePage = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/signin');  // ถ้าไม่ได้เข้าสู่ระบบให้กลับไปที่หน้า signin
    }

    let users = loadUsers();
    const user = users.find(user => user.email === req.session.user);

    res.render('homePage', { username: user.username });  // ส่ง username ไปที่ homePage
};


// Show Sign Up Page
exports.showSignUpPage = (req, res) => {
    res.render('signup', { error: req.query.error || null });
};


// Handle Sign Up
exports.signup = async (req, res) => {
    console.log('Received signup request');
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        console.log('Missing fields');
        return res.render('signup', { error: 'Please provide username, email, password, and confirm password' });
    }

    if (password !== confirmPassword) {
        console.log('Passwords do not match');
        return res.render('signup', { error: 'Passwords do not match' });
    }

    let users = loadUsers();
    console.log('Loaded users:', users);

    if (users.some(user => user.email === email)) {
        console.log('Email already exists');
        return res.render('signup', { error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // สร้าง ID อัตโนมัติ
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;  // กำหนด ID โดยการหาค่ามากสุดจาก ID ที่มีอยู่แล้ว

    // เพิ่มข้อมูลใหม่
    users.push({ id: newId, username, email, password: hashedPassword });

    saveUsers(users);

    console.log(`New user signed up: ${email}`);
    res.redirect('/signin');
};

exports.showUserProfilePage = (req, res) => {
    res.render('user_profile', { error: req.query.error || null });
};
