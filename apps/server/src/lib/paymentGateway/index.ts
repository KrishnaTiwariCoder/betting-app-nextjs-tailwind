import { PaymentGateway } from '../../types/payment';
import * as razorpay from './razorpay';
// import other payment gateways here


export const getPaymentGateway = (gateway: string): PaymentGateway => {
  switch (gateway) {
    case 'razorpay':
      return razorpay;
    // add other gateways
    default:
      throw new Error('Unsupported payment gateway');
  }
};