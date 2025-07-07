const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authentic');

// Controllers
const { register} = require('../controllers/authController');
const authentic = require( '../middleware/authentic' );

// Routes
router.post('/auth/register', register);


module.exports = router;
