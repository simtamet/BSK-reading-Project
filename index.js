const express = require('express');
const path = require('path');
const session = require('express-session');
//const taskController = require('./controllers/taskController');
const authController = require('./controllers/authController'); 
const ratingController = require('./controllers/ratingController');

// Initialize Express app
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

// Routes
app.get('/', authController.showSignInPage);
app.get('/signin', authController.showSignInPage);
app.post('/signin', authController.signin);
app.get('/signup', authController.showSignUpPage);
app.post('/signup', authController.signup);
app.get('/homePage', authController.showHomePage);

app.get('/ratingPage', ratingController.showRatingPage);
app.get('/logout', authController.logout);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
