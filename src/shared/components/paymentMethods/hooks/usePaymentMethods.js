import { ApplePay, GooglePay, Mastercard, Paypal, Visa } from "@/shared/assets/methodsPayment";

export default function usePaymentMethods() {
  const methods = [
    {
      id: '1',
      title: 'Paypal',
      icon: Paypal,
    },
    {
      id: '2',
      title: 'Apple Pay',
      icon: ApplePay,
    },
    {
      id: '3',
      title: 'Google Pay',
      icon: GooglePay,
    },
    {
      id: '4',
      title: 'VISA',
      icon: Visa,
    },
    {
      id: '5',
      title: 'Mastercard',
      icon: Mastercard,
    },
  ]
  return {
    methods
  }
}
