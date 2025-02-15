import { NextApiRequest, NextApiResponse } from 'next';
import { getPaymentGateway } from "../lib/paymentGateway/index";
import { PaymentResponse } from '../types/payment';

export default async function handler(req: NextApiRequest, res: NextApiResponse<PaymentResponse>) {
  if (req.method === 'POST') {
    const { gateway, ...paymentData } = req.body;

    try {
      const paymentGateway = getPaymentGateway(gateway);
      const isVerified = await paymentGateway.verifyPayment(paymentData);

      if (isVerified) {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false, error: 'Payment verification failed' });
      }
    } catch (error: any) {
      res.status(500).json({success: false, error: "Failed"});
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}