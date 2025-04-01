const express = require('express');
const path = require('path');
const session = require('express-session');
const signupController = require('./controllers/signUpController');
const signinController = require('./controllers/signInController');
//const logoutController = require('./controllers/logOutController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', signinController.showSignInPage);  // เปลี่ยนจาก signInController เป็น signinController
app.get('/signin', signinController.showSignInPage);  // เปลี่ยนจาก signInController เป็น signinController
app.post('/signin', signinController.signin);
// ตรวจสอบว่า /signup เชื่อมโยงกับ controller ที่ถูกต้อง
app.get('/signup', signupController.showSignUpPage);
app.post('/signup', signupController.signup);

app.get('/homePage', signinController.showHomePage);
//app.get('/logout', logoutController.logout);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
