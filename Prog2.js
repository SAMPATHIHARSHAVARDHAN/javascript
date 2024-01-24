//var,let,const
//Var is a Global Scope
//let Local Scope or Block Scope
//const works only intialization purpose not to re-initiliaze
//ES6 onwards it will be works
var a=10;
const d=40;
console.log(a);
console.log(d);
{
    let b=20;
    var c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
   console.log(a);
   //console.log(b);
   console.log(c);
 
