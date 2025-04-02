const fs = require("fs");
const path = require("path");

const BOOKS_FILE = path.join(__dirname, "../models/books.json");


// อ่านไฟล์ JSON (ถ้าไม่มีให้คืนค่าเป็น [])
const readBooksFile = () => {
    try {
        if (fs.existsSync(BOOKS_FILE)) {
            const data = fs.readFileSync(BOOKS_FILE, "utf8");
            return JSON.parse(data);
        }
    } catch (error) {
        console.error("Error reading books.json:", error);
    }
    return [];
};

// บันทึกข้อมูลลงไฟล์ JSON
const saveBooksFile = (books) => {
    fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2), "utf8");
};

// API บันทึกหนังสือ (ต่อข้อมูลเข้าไฟล์เดิม)
exports.saveBook = (req, res) => {
    const newBook = req.body;

    if (!newBook.bookName || !newBook.author || !newBook.review || !newBook.rating || !newBook.coverImage) {
        return res.status(400).json({ error: "กรุณากรอกข้อมูลให้ครบถ้วน" });
    }

    const books = readBooksFile(); // ✅ อ่านข้อมูลเดิมก่อน
    books.push(newBook); // ✅ เพิ่มหนังสือใหม่เข้าไปใน array เดิม
    saveBooksFile(books); // ✅ บันทึกลงไฟล์ books.json

    res.json({ message: "บันทึกข้อมูลสำเร็จ!" });
};

// API ดึงข้อมูลหนังสือทั้งหมด
exports.getBooks = (req, res) => {
    const books = readBooksFile();
    res.json(books);
};


// แสดงหน้า book_list
const showBookListPage = (req, res) => {
    res.render("book_list"); // เปลี่ยนจาก "streak_page" เป็น "book_list"
};

// API บันทึกหนังสือ
const saveBook = (req, res) => {
    const newBook = req.body;

    // ตรวจสอบข้อมูลให้ครบถ้วน
    if (!newBook.bookName || !newBook.author || !newBook.review || !newBook.rating || !newBook.coverImage) {
        return res.status(400).json({ error: "กรุณากรอกข้อมูลให้ครบถ้วน" });
    }

    // อ่านข้อมูลหนังสือเก่าจากไฟล์
    const books = readBooksFile();

    // เพิ่มข้อมูลหนังสือใหม่เข้าไปใน array
    books.push(newBook);

    // บันทึกข้อมูลลงในไฟล์
    saveBooksFile(books);

    // ส่งข้อความยืนยัน
    res.json({ message: "บันทึกข้อมูลสำเร็จ!" });
};

// API ดึงข้อมูลหนังสือทั้งหมด
const getBooks = (req, res) => {
    const books = readBooksFile();
    res.json(books);
};

// ส่งออกฟังก์ชันทั้งหมด
module.exports = { showBookListPage, saveBook, getBooks };
