console.log("Reg Exp-2 and Objects");
//dot(.)
var re=/h.t/g;
var text="The I wear a hot hat pot";
var res=text.match(re);
console.log(res);
//Caret(^)
var re=/^The/g;
var text="The apple.";
var res=text.match(re);
console.log(res);
//dollar($)
var re=/apple.$/g;
var text="The apple.";
var res=text.match(re);
console.log(res);
//astrisk(*)
var re=/ab*c/g;
var text="abc bac abbc abd";
var res=text.match(re);
console.log(res);
//plus(+)
var re=/ab+c/g;
var text="abc bac abbc abd";
var res=text.match(re);
console.log(res);
//Question Mark(?)
var re=/colors?/gi;
var text="I HAVE BLACK COLOR COLORS colorss Toy";
var res=text.match(re);
console.log(res);
//curly braces({})
var re=/\d{3}-\d{3}-\d{4}/g;
var text="123-234-2334";
var res=text.match(re);
console.log(res);
//square braces([])
//pipes(|)

//Objects-literal notation
var del={
    name:"Sindhupriya",
    age:21,
    mobile:"7702124310"
}
console.log(del);
//accesing
console.log(del.name);
//adding
del.email="c.sindhupriya2003@gmail.com";
console.log(del);
//modifying
del.name="chamarthi sindhu priya";
console.log(del);
//deleting
delete del.email;
console.log(del);
//Methods
console.log(Object.keys(del));
//values
console.log(Object.values(del));
//entries
console.log(Object.entries(del));

//object constructor
var del1=new Object();
//adding
del1["name"]="c.sindhupriya";
del1["age"]="21";
del1["mobile"]="7702124310"
console.log(del1);
//modifying
del1["name"]="chamarthi";
console.log(del1);
//deleting
delete del1["age"];
console.log(del1);
//Methods
console.log(Object[keys(del1)]);
//values
console.log(Object[values(del1)]);
//entries
console.log(Object[entries(del1)]);      

