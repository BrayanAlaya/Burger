export interface Sale {
  id: string;
  burgerName: string;
  quantity: number;
  totalPrice: number;
  date: Date;
  customer?: string;
  paymentMethod: 'Yape' | 'Tarjeta de Crédito' | 'Tarjeta de Débito';
}