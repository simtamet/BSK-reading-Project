const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const USERS_FILE = path.join(__dirname, '../models/users.json');



// ฟังก์ชันเพื่อโหลดข้อมูลผู้ใช้จากไฟล์
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


// Handle Sign In
exports.signin = async (req, res) => {
    const { email, password } = req.body;

    // ตรวจสอบว่าอีเมลหรือรหัสผ่านไม่ได้กรอกมา
    if (!email || !password) {
        return res.render('signin', { error: 'Please provide email and password' });
    }

    let users = loadUsers(); // โหลดข้อมูลผู้ใช้จากไฟล์

    // ค้นหาผู้ใช้ที่อีเมลตรงกัน
    const user = users.find(user => user.email === email);
    if (!user) {
        // หากไม่พบผู้ใช้ที่ตรงกับอีเมล
        return res.render('signin', { error: 'Email not found' });
    }

    // เปรียบเทียบรหัสผ่านที่กรอกกับรหัสผ่านที่เก็บไว้ในไฟล์
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        // หากรหัสผ่านไม่ตรงกัน
        return res.render('signin', { error: 'Incorrect password' });
    }

    // หากอีเมลและรหัสผ่านตรงกัน ให้ทำการล็อกอิน
    req.session.user = email;  // บันทึกอีเมลผู้ใช้ใน session
    console.log(`${email} has logged in`);

    // ไปที่หน้า homePage
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
    res.render('homePage');  // ถ้าเข้าสู่ระบบแล้วให้ไปที่หน้า homePage
};


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
