import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-public-stripe-key');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment('client-secret-from-server', {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      console.error(error);
    } else if (paymentIntent) {
      console.log('Payment succeeded:', paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="bg-dark-purple p-4 rounded-lg border border-light-purple" />
      <button type="submit" className="bg-light-purple px-4 py-2 rounded-lg mt-4">Pay</button>
    </form>
  );
};

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex items-center justify-center h-screen">
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Payment;
