class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
}
var c1=new Circle(1.0,"red");

function circle(radius){
    return radius;
}
console.log(circle(c1.radius));

function circle(radius,color){
    return radius+" "+color
}
console.log(circle(c1.radius,c1.color));

function getRadius(radius){
    return radius;
}
console.log(getRadius(c1.radius));

function setRadius(radius){
    return radius;
}
console.log(setRadius(2.0));

function getColor(color){
    return color;
}
console.log(getColor(c1.color));

function setColor(color){
    return color;
}
console.log(setColor("blue"));

function toString(radius,color){
    return radius+" "+color;
}
console.log(toString("1.0","red"));

function getArea(radius){
    var A=3.14*radius;
    return A;
}
console.log(getArea(c1.radius));

function getCircumference(radius){
    var A=2*3.14*radius;
    return A;
}
console.log(getCircumference(c1.radius));
