console.log('Funtion Declaration');
/*
function reverse(n){
    res=0
    while(n!=0){
        r=n%10
        res=res*10+r
        n=parseInt(n/10);
    }
    return res;
}

var x=-123;
if (x>=0){
    x=reverse(123);
    console.log(x);
}
else{
    x=x*-1
    z=reverse(x);
    console.log(-1*z);

}
    */
console.log('Funtion Expression');
/*
var reverse=function(n){
    res=0
    while(n!=0){
        r=n%10
        res=res*10+r
        n=parseInt(n/10);
    }
    return res;
}

var x=125;
var y=4;
var res=x*10+y;
res=reverse(res);
res=(res*10)+y;
res=reverse(res);
console.log(res);
*/
//Arrow Funtion
console.log('Arrow Funtion');
/*
var res = (a,s) => {
    console.log(a%s);
}
res(11,2);
*/
console.log('IIFE');
/*
(function(){
    var n=5;
    var res=1;
    for(i=n;i>=1;i--){
        res*=i
    }
    console.log(res);
})();
*/
console.log('Named Funtion');
var check= function checkfun(n){
    if (n%2==0){
        console.log('even');
    }
    else{
        console.log('Odd');
    }
}
check(19);
console.log('user Defined Funtions');
//with parameters with return type
function wpwr(a,b,c){
    return a+b+c;
}
console.log(wpwr(20,40,90));
//with parameters without return type
function wopwr(a,b,c){
    console.log(a+b+c);
}
wopwr(20,40,30);
//without parameters with return type
function wopwr(){
    return 20+30+50;
}
console.log(wopwr());
//without parameters with return type
function wopwor(){
    console.log(20+20+90);
}
wopwor();
//Armstrong Number
function isArmstrong(number) {
    let temp = number;
    let sum = 0;
    while (temp!=0) {
        remainder = temp % 10;
        temp = parseInt(temp / 10);
        sum = sum + remainder**order(temp);
    }
    if (sum === number) {
        console.log(number + " is an Armstrong Number");
    }
    else {
        console.log(number + " is Not an Armstrong Number");
    }
}
 
// Function to calculate number of digits
function order(number) {
    let n = 0;
    while (number > 0) {
        n++;
        number = parseInt(number / 10);
    }
    return n;
}

isArmstrong(152);