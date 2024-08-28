const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const flashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
  userId: String,
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

app.post('/api/flashcards', async (req, res) => {
  const { question, answer, userId } = req.body;
  const flashcard = new Flashcard({ question, answer, userId });
  await flashcard.save();
  res.status(201).send(flashcard);
});

app.get('/api/flashcards/:userId', async (req, res) => {
  const flashcards = await Flashcard.find({ userId: req.params.userId });
  res.send(flashcards);
});

app.post('/api/checkout', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
