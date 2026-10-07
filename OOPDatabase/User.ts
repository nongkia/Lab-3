class Entity {
    private Id: number;
    private UserName: string;
    private point: number;
    constructor(private Id: number , private UserName: string , private point: number){
        this.Id = Id
        this.UserName = UserName
        this.point = point
    }
    getpoint():number{
        return this.point = this.point
    }
    setpoint(point: number):void {
        this.point = point
    }
    UserInfo():void{point:Boolean}{
        return true
    }
}