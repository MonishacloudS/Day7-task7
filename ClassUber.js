class uberPrice{
    constructor(firstmile,lastmile,numofseats,phoneno,productno,perkmprice,totalprice,location){
        this.firstmile=firstmile;
        this.lastmile=lastmile;
        this.numofseats=numofseats;
        this.phoneno=phoneno;
        this.productno=productno;
        this.perkmprice=perkmprice;
        this.totalprice=totalprice;
        this.location=location;
    }
}

var p1=new uberPrice();
    p1.firstmile=2;
    p1.lastmile=5;
    p1.numofseats=3;
    p1.phoneno=9876543201;
    p1.productno="#nahdg@jabfdsdjb&887122@njnjdnw2";
    p1.perkmprice=10
    p1.totalprice=70;
    p1.location="Kindy";

console.log(p1.firstmile+" "+p1.lastmile+" "+p1.numofseats+" "+p1.phoneno+" "+p1.productno+" "+p1.perkmprice+" "+p1.totalprice+" "+p1.location);
