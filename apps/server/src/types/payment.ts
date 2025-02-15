
export interface PaymentGateway {
    createOrder(amount: number, currency: string): Promise<any>;
    verifyPayment(paymentId: string, orderId?: string, signature?: string): Promise<boolean>;
  }
  
export interface PaymentResponse {
  success: boolean;
  error?: string;
  data?: any;
}

export interface Payment {
  success: boolean; 
  error?: string;
  data?: any,
}