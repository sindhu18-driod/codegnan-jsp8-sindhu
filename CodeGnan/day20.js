console.log("conditional Statements")
/*
//if statement
let a=20;
if (a>=18){
    console.log('yes you can vote!');
}
//if-else statement
let a=10;
if (a>=18){
    console.log('yes you can vote!');
}
else{
    console.log('You Cannot Vote');
}
//if-else if else
let a=1;
voter=true;
if (a>=18){
    console.log('yes you can vote!');
}
else if (voter){
    console.log('You Can Vote');
}
let count=3;
switch(count){
    case 1:
        console.log('You Gained 10% Discount');
        break;
    case 2:
        console.log('You Gained 20% Discount');
        break;
    case 3:
        console.log('You Gained 30% Discount');
        break;
    case 4:
        console.log('You Gained 40% Discount');
        break;
    case 5:
        console.log('You Gained 50% Discount');
        break;
    case 6:
        console.log('You Gained 60% Discount');
        break;
    default:
        console.log('You Gained Discount');
        break;
}
//nested conditional statements
let a=19;
voter=false;
if (a>=18){
    if(voter){
        console.log('You Can Vote')
    }
    else{
        console.log('You Cannot Vote');
    }
}
console.log('LOOPING STATEMENTS:');
//for loop
for (var i=0;i<=5;i++){
    console.log(i);
}
for (var i=5;i>0;i--){
    console.log(i);
}
//for in
let s={
    name:"sindhu",
    number:7702124310,
    email:"c.sindhupriya2003@gmail.com"
}
for (i in s){
    console.log(i+":"+s[i]);
}
// for of
let p=[2,3,4,5,6]
for(i of p){
    console.log(i);
}
//while
while(o<=15){
    console.log(o);
    o++;
}
let p=-20;
while(p<0){
    console.log(p);
    p++;
}

let a=5;
do{
    console.log(a);\
    a++
}
while(a<=10);
*/
let a=14;
let b=13;
let c=12;
if (((a<b) && (a>c))||((a>b) && (a<c))){
    console.log(a)
}
else if (((b<c) && (b>a))||((a>b) && (b>c))){
    console.log(b)
}
else{
    console.log(c) 
}