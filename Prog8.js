/*if else condition*/
let player="Dhone",score=150;
let result='';
if(score==0)
{
    result=player + " Scores Dock Out" ;
}
else if(score>0 && score<50)
{
    result=player + " Scores Below Half Century " + score ;
}
else if(score==50)
{
    result=player + " Scores Half Century " + score ;
}
else if(score>50 && score<100)
{
    result=player + " Scores Below  Century " + score ;
}
else if(score==100)
{
    result=player + " Scores Century " + score ;
}
else if(score>100)
{
    result=player + " Scores Above Century " + score ;
}
else{
    result="Some Going Wrong";
}

console.log(result);