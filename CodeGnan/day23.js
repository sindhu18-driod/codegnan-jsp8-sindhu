console.log('Arrays');
//creation
var a=[1,'abc','sindhu',8.9];
var b= new Array('sindhu',18,'taruni',14,'sathvika',10);
console.log(a);
console.log(b);
//Accesing
console.log(a[0])
console.log(b[1])
//Array methods
//push()
a.push('123');
console.log(a);
//pop()
d=a.pop();
console.log(d);
//shift()
a.shift();
console.log(a);
//unshift();
a.unshift('oops');
console.log(a);
//slice
d=a.slice(1,3);
console.log(d);
//concat
d=a.concat(b);
console.log(d);
//join
d=['1','2','3','5'];
console.log(d.join(' '))
//indexOf
console.log(d.indexOf('3'))
//forEach
x=[12,13,23,4,55,56]
var y=x.forEach(function(i){
    console.log(y);
});
//map
y=[1,2,3,4,5,6]
z=y.map(function(i){
    i=i**2
    return i
});
console.log(z);
//filter
y=[1,2,3,4,5,6,8]
z=y.filter(function(i){
    if (i%2==0){
        return i;
    }
});
console.log(z);
//reduce
y=[1,2,3,4,5]
z=y.reduce(function(a,b){
    a+=b;
    return a
},0);
console.log(z)
