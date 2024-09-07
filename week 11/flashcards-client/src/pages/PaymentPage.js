import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutPage from './CheckoutPage'; 


const stripePromise = loadStripe('pk_test_51PwLRvDvX0XHuqH0rFm7BdnulS9J07Gsm0LOVaZY6qh1KCmnVUaUEdW2AB6vmppzTYrQNR45SzGhembIMVlcnEpa001qtqMgbX');

const PaymentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Buy Premium</h1>
      <p className="text-lg mb-6">Upgrade your plan for unlimited flashcards!</p>

      <Elements stripe={stripePromise}>
        <CheckoutPage />
      </Elements>
    </div>
  );
};

export default PaymentPage;
