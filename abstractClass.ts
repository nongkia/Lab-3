abstract class ShippingCaculator {
    standard: number;

    constructor(standard:number){
        this.standard = standard
    }
    Shipping():void{
        console.log(`ค่าจัดส่ง ${this.standard} /กิโลดรัม`)
    }
}
class StandardShipping extends ShippingCaculator {
    Kiro: number;
    constructor(standard:number , Kiro: number){
        super(standard);
        this.Kiro = Kiro
    }
    override Shipping():void {
        console.log(`ค่าบริการพื้นฐาน ${this.standard} บาท นํ้าหนัก ${this.Kiro} กิโลกรัม อัตรขนส่ง ${this.Shipping}`)
    }
}
class ExpressShipping extends StandardShipping {
    speed:number;
    constructor(standard:number , Kiro:number , speed: number){
        super(standard, Kiro);
        this.speed = speed
    }
    override Shipping(): void {
        console.log(`ค่าบริการพื้นฐาน ${this.standard} บาท นํ้าหนัก ${this.Kiro} กิโลกรัม ความเร็วในการส่งเร็วขึ้น ${this.speed} เท่า รวมทั้งหมด ${((this.standard+this.Kiro)*20)*this.speed} บาท`)
    }
}
const Shipping1 = new ExpressShipping(10, 20 , 2)
Shipping1.Shipping();
