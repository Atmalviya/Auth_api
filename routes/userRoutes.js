const express = require('express');
const passport = require('passport');
const { registerUser, loginUser, getUserProfile, updateUserProfile, getUsers } = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/').get(protect, getUsers);

// Google OAuth routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/'); // Redirect to your desired route after successful login
});

module.exports = router;
