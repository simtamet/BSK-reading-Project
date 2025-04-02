const fs = require("fs");
const path = require("path");

const BOOKS_FILE = path.join(__dirname, "../models/books.json");
// อ่านไฟล์ JSON แบบ synchronous
const readBooksFile = () => {
  try {
    if (!fs.existsSync(BOOKS_FILE)) {
      return []; // ถ้าไม่มีไฟล์ ให้คืนค่าเป็นอาร์เรย์ว่าง (แต่ไม่สร้างไฟล์ใหม่)
    }
    const data = fs.readFileSync(BOOKS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading books.json:", error);
    return [];
  }
};

// บันทึกข้อมูลลงไฟล์ JSON แบบ synchronous
const saveBooksFile = (newBook) => {
  const books = readBooksFile(); // อ่านข้อมูลเดิม
  books.push(newBook); // เพิ่มข้อมูลใหม่เข้าไปใน array
  fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2), "utf8");
};

// API บันทึกหนังสือใหม่ โดยต่อท้ายใน `/models/books.json`
exports.saveBook = (req, res) => {
  const newBook = req.body;

  // ตรวจสอบข้อมูลให้ครบถ้วน
  if (!newBook.bookName || !newBook.author || !newBook.review || !newBook.rating || !newBook.coverImage) {
    return res.status(400).json({ error: "กรุณากรอกข้อมูลให้ครบถ้วน" });
  }

  saveBooksFile(newBook); // บันทึกข้อมูลใหม่ลงไฟล์

  res.json({ message: "บันทึกข้อมูลสำเร็จ!" });
};


exports.showReviewPage = (req, res) => {
  const books = readBooksFile();
  res.render("reviewPage", { books });
};

// แสดงหน้าให้คะแนนหนังสือ
exports.showRatingPage = (req, res) => {
  res.render("ratingPage"); // ใช้ EJS template (สร้างไฟล์ `views/ratingPage.ejs`)
};