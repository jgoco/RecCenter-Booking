const router = require('express').Router();
const { loginUser, registerUser } = require('../controllers/userAuthenticationController');

router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;