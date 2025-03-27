const Encryption = require('../util');

const util = new Encryption(); // ใช้ const เพื่อป้องกันข้อผิดพลาด

// Hardcoded username and password
const credentials = {
    username: 'admin',
    password: '6002968392b901e9305d87e3', 
};

// Middleware to check authentication
exports.authenticate = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/signin');
    }
};

// Handle logout
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/signin');
    });
};

// Show Sign In Page
exports.showSignInPage = (req, res) => {
    res.render('signin', { error: req.query.error || null });
};

// Show Sign Up Page
exports.showSignUpPage = (req, res) => {
    res.render('signup', { error: req.query.error || null });
};

// Show Home Page
exports.showHomePage = (req, res) => {
    res.render('homePage', { error: req.query.error || null });
};

// Handle Sign In
exports.signin = (req, res) => {
    const { username, password } = req.body;
    const secret = util.encrypt(password); 

    if (username === credentials.username && secret === credentials.password) {
        req.session.user = username;
        console.log(username + " has logged in");
        res.redirect('/homePage');
    } else {
        const error = `Invalid credentials for username: ${username}`;
        console.log("username or password is not correct");
        res.render('signin', { error });
    }
};

// Handle Sign Up 
exports.signup = (req, res) => {
    const { username, password } = req.body;
    
    if (username && password) {
        console.log(`New user signed up: ${username}`);
        res.redirect('/signin');
    } else {
        res.render('signup', { error: 'Please provide username and password' });
    }
};
