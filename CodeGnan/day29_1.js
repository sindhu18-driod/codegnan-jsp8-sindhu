//importing and exporting through multiple files
/*
function fun1(name){
    console.log('My name is:'+name);
}
function fun2(number){
    console.log('My fav number:'+number);
}
export{fun1,fun2};
//renaming feature in importing
function fun1(name){
    console.log('My name is:'+name);
}
function fun2(number){
    console.log('My fav number:'+number);
}
export{fun1,fun2};
*/
//renaming feature in exporting
function fun1(name){
    console.log('My name is:'+name);
}
function fun2(number){
    console.log('My fav number:'+number);
}
export{fun1 as asc,fun2 as asc1};


