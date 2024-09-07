const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config(); 

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const flashcardRoutes = require('./routes/flashcardRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();


app.use(cors());
app.use(express.json()); 


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api/flashcards', flashcardRoutes); 
app.use('/api/payment', paymentRoutes);
app.use('/', require('./routes/authRoutes'));

app.use(express.static(path.join(__dirname, '..', 'flashcards-client', 'build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'flashcards-client', 'build', 'index.html'));
});

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, 
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
