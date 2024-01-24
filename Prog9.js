let a=[1,2,3,4,5,6];
console.log(a[0])
console.log(a[1])
console.log(a);
console.log(a.length-1)
console.log(a.length-2)
a.push(7);//it adds element at end of the array
console.log(a);
a.unshift(0);//it adds element at begining of the array
console.log(a);
a[0]=10;//array updating specified position
console.log(a);
a.pop();
console.log(a);//to remove end of the element
a.shift();//it remove begining of the array element
console.log(a);
//spread operators
let b=[7,8,9,10,11];
let c=[...a,...b];
console.log(a);
console.log(b);
console.log(c);
let l=a.length;
console.log("Print Array using For Loop");
for(let i=0;i<l;i++)
{
    console.log(a[i]);
}
console.log("Print Arry in reverse");
for(let i=l-1;i>=0;i--)
{
    console.log(a[i]);
}
console.log("Print Array using While Loop");
let i=0;
while(i<l)
{
    console.log(a[i]); 
    //i=i+1;
    //i++; //Incremental and Decremental Operators
    i+=1;//Assignment Operators
}

console.log("Print Array using Do While");
i=0;
do{
    console.log(a[i])
    i++;
}while(i<l);
console.log("Print Array using For Each")
//Modern Java Script
a.forEach(function(element){
console.log(element);
})
//foreach using arrow function
console.log("Print Array Using ForEach Arrow")
a.forEach((element)=>console.log(element))

//print array using Map
console.log("Print Array using Map");
a.map(function(element){
    console.log(element);
})
//print array Using Map with arrow function
console.log("Print Array using Map with arrow");
a.map((element)=>console.log(element));

