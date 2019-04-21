// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: App routing

let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
//router.get('/', indexController.displayHomePage);

/* GET about page. */
//router.get('/about', indexController.displayAboutPage);

/* GET products page. */
//router.get('/products', indexController.displayProductsPage);

/* GET services page. */
//router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
//router.get('/contact', indexController.displayContactPage);

/* GET - displays the Login Page */
//router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post("/login", indexController.processLoginPage);

/* GET - displays the User Registration Page */
//router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post("/register", indexController.processRegisterPage);
router.post("/register/:id", indexController.processUpdateProfile);

/* GET - perform user logout */
router.get("/logout", indexController.performLogout);

module.exports = router;
