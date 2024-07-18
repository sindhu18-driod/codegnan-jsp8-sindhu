console.log('Meta Characters in reg exp');
// \d
var pattern=/\d/g;
var text='my day is 18th june.day';
var res=text.match(pattern);
console.log(res);

// \D
var pattern1=/\D/g;
console.log(text.match(pattern1));

// /s
var pattern2=/\s/g;
console.log(text.match(pattern2));

// \S
var pattern3=/\S/g;
console.log(text.match(pattern3));

// \w
var pattern4=/\w/g;
console.log(text.match(pattern4));

// \W
var pattern5=/\W/g;
console.log(text.match(pattern5));

// \b
var pattern6=/\bday\b/g;
console.log(text.match(pattern6));