const express = require('express');
const { createFlashcard, getFlashcards } = require('../controllers/flashcardController');
const auth = require('../middleware/authMiddleware'); 

const router = express.Router();

router.post('/', auth, createFlashcard);

router.get('/', auth, getFlashcards);

module.exports = router;
