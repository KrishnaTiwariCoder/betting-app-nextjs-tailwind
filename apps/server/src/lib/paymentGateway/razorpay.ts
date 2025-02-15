import Razorpay from "razorpay"
import crypto from 'crypto';
import { PaymentGateway } from '../../types/payment';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export const createOrder: PaymentGateway['createOrder'] = async (amount, currency) => {
  const options = {
    amount: amount * 100, // Convert to paise
    currency,
    receipt: `receipt_${Date.now()}`,
  };
  return razorpay.orders.create(options);
};

export const verifyPayment: PaymentGateway['verifyPayment'] = async (paymentId, orderId, signature) => {
  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return generatedSignature === signature;
};