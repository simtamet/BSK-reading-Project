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

// หน้า HomePage
exports.homePage = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/signin');  // ถ้าไม่ได้เข้าสู่ระบบให้กลับไปที่หน้า signin
    }
    res.render('homePage');  // ถ้าเข้าสู่ระบบแล้วให้ไปที่หน้า homePage
};
