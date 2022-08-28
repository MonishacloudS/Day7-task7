class Person{
    constructor(firstname,lastname,age,phonenumber,clg,dept,address){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.phonenumber=phonenumber;
        this.clg=clg;
        this.dept=dept;
        this.address=address;
    }
}

var p1=new Person();
p1.firstname="Vijay";
p1.lastname="kumar";
p1.age=23;
p1.phonenumber=9876543210;
p1.clg="PSG";
p1.dept="CSE";
p1.address="SELAM";

console.log(p1.firstname+" "+p1.lastname+" "+p1.age+" "+p1.phonenumber+" "+p1.clg+" "+p1.dept+" "+p1.address);
