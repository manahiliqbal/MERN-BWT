const Flashcard = require('../models/Flashcard');

exports.createFlashcard = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const flashcard = new Flashcard({
      question,
      answer,
      userId: req.user.id,
    });

    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (error) {
    console.error('Error creating flashcard:', error);
    res.status(500).json({ message: 'Failed to create flashcard', error });
  }
};

exports.getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ userId: req.user.id });
    res.status(200).json(flashcards);
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    res.status(500).json({ message: 'Failed to retrieve flashcards', error });
  }
};
