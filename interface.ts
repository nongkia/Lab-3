interface PaymentMethod {
    card():void
}
class Payment implements PaymentMethod{
    card(): void {
        console.log(`ชำระเงิน ${this.payment} บาท โดยใช้บัตรเครดิตหมายเลข ${this.cardNumber}`);
    }

    payment: number;
    cardNumber: number;

    constructor(payment:number , cardNumber: number){
    this.payment = payment;
    this.cardNumber = cardNumber;
    }
}

const Payment1 = new Payment(550, 684245097);
Payment1.card();