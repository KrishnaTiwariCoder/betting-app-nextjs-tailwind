import { NextApiRequest, NextApiResponse } from 'next';
import { getPaymentGateway } from '../lib/paymentGateway/index';
import { PaymentResponse } from '../types/payment';

export default async function handler(req: NextApiRequest, res: NextApiResponse<PaymentResponse>) {
  if (req.method === 'POST') {
    const { gateway, amount, currency } = req.body;

    try {
      const paymentGateway = getPaymentGateway(gateway);
      const paymentDetails = await paymentGateway.createOrder(amount, currency);

      res.status(200).json({ success: true, data: paymentDetails });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}