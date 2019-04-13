let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let surveyController = require('../controllers/survey');

function requireAuth(req, res, next) {
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Contact List page - READ Operation */
router.get('/', surveyController.displaySurveyList);

router.get('/:id', surveyController.displaySurvey);

/* GET Contact List page - READ Operation */
router.get('mysurvey/:username', surveyController.displayMySurveys);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', passport.authenticate('jwt', {session: false}), surveyController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', passport.authenticate('jwt', {session: false}), surveyController.processAddPage);

// /* GET request - display the Edit page */
// router.get('/edit/:id', passport.authenticate('jwt', {session: false}), surveyController.displayEditPage);

// /* POST request - Update the database with data from the Edit Page */
// router.post('/edit/:id', passport.authenticate('jwt', {session: false}), surveyController.processEditPage);

// /* GET request to perform the delete action */
// router.get('/delete/:id', passport.authenticate('jwt', {session: false}), surveyController.performDelete);

module.exports = router;