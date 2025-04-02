const express = require("express");
const path = require("path");
const session = require("express-session");
const fs = require("fs");

const userController = require("./controllers/userController");
const ratingController = require("./controllers/ratingController");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // รองรับ JSON data

// Session middleware
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "public")));

// Routes
app.get("/", userController.showSignInPage);
app.get("/signin", userController.showSignInPage);
app.post("/signin", userController.signin);
app.get("/signup", userController.showSignUpPage);
app.post("/signup", userController.signup);
app.get("/homePage", userController.showHomePage);
app.get("/ratingPage", ratingController.showRatingPage);
app.get("/reviewPage", ratingController.showReviewPage);

// API สำหรับบันทึกหนังสือ
app.post("/save-book", ratingController.saveBook);

// API ดึงข้อมูลหนังสือทั้งหมด
app.get("/books", ratingController.getBooks);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
