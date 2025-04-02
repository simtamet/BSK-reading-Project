const fs = require("fs");
const path = require("path");

const BOOKS_FILE = path.join(__dirname, "../books.json");

// อ่านไฟล์ JSON แบบ synchronous
const readBooksFile = () => {
  try {
    const data = fs.readFileSync(BOOKS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    // ถ้าไม่พบไฟล์หรือเกิดข้อผิดพลาดให้ส่งคืน array ว่าง
    return [];
  }
};

// บันทึกข้อมูลลงไฟล์ JSON แบบ synchronous
const saveBooksFile = (books) => {
  fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2), "utf8");
};

// แสดงหน้าให้คะแนนหนังสือ
exports.showRatingPage = (req, res) => {
  res.render("ratingPage"); // ใช้ EJS template (สร้างไฟล์ `views/ratingPage.ejs`)
};

// API บันทึกหนังสือ
exports.saveBook = (req, res) => {
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
exports.getBooks = (req, res) => {
  const books = readBooksFile();
  res.json(books);
};

exports.showReviewPage = (req, res) => {
  fs.readFile(path.join(__dirname, "../models/books.json"), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading books.json:", err);
      return res.status(500).send("Error loading books.");
    }

    const books = JSON.parse(data);
    res.render("reviewPage", { books });
  });
};
