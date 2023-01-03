interface GPS{
    x:number;
    y:number;
    getcoordinates();
}
interface mediaPlayer{
    start:boolean;
    stop:boolean;
    pause:boolean;
    getmode():void;
}
class Smartphone implements GPS,mediaPlayer{
    public x:number
    public y:number
    public start:boolean
    public stop:boolean
    public pause:boolean
    constructor(x:number,y:number,s:boolean,st:boolean,p:boolean)
    {
        this.x=x;
        this.y=y;
        this.start=s;
        this.stop=st;
        this.pause=p;
    }
    public getcoordinates() {
        console.log(`Coordinates X : ${this.x}, Y : ${this.y}`);
    }
    public getmode(): void {
        console.log(`Start : ${this.start}, Stop : ${this.stop}, Pause : ${this.pause}`);
    }

}
var obj:Smartphone=new Smartphone(3,66,true,false,false);
obj.getcoordinates();
obj.getmode();
