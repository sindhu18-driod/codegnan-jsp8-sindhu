/*console.log('string Methods')
//charAt()
x='sindhu priya'
console.log(x.charAt(5));
//charCodeAt();
console.log(x.charCodeAt(1));
//concat();
y=x.concat("....");
console.log(y);
//startsWith();
console.log(x.startsWith('sin'));
//endsWith();
console.log(x.endsWith('riya'));
//includes()
console.log(x.includes('.'));
console.log(y.includes('.'));
//indexOf()
console.log(x.indexOf("i"));
//lastIndexOf()
console.log(x.lastIndexOf('i'));
//repeate()
console.log(x.repeat(3));
//replace()
console.log(y.replace('.','*'));
//slice()
console.log(x.slice(0,3));
//split()
console.log(x.split(' '));
//substring()
console.log(x.substring(1,5));
//toLowerCase()
console.log(x.toLowerCase());
//toUpperCase()
console.log(x.toUpperCase());
//trim()
a="    sindhu priya    ";
console.log(a.trim());
//creating string expressions;
//literal form
var x=/J.*t/m;
var y='Java Script';
console.log(x.test(y));
console.log(x.exec(y));
//object notation
var z= new RegExp('j.*t','m');
var y= 'java script';
console.log(z.test(y));
console.log(z.exec(y));
*/
//factorial
var arr=[109,2,4,7,6,21];
for (j of arr){
    if (j%2 == 0){
        let f=1;
        for(var i=1;i<=j;i++){
            f=f*i
        }
        console.log(f);
    } 
}


//perfect number
/*var a
var s=0;
for (var i=1;i<a;i++){
    if(a%i==0){
       s+=i
    }
    if(s==a){
    console.log('');
    }

}

*/