//Class-MOvie Task 1

class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var m1=new movie("Casino Royale","Eon Productions",getPG(arr));
var arr=[];
function getPG(arr){
    return ["PG13","R"];
}

console.log(m1.title+" "+m1.studio+" "+m1.rating);
