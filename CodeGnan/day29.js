//importing and exporting through multiple files
/*
import {fun1,fun2} from './day29_1.js';
fun1("Sindhu Priya");
fun2('18');
//renaming feature in importing
import {fun1 as a,fun2 as b} from './day29_1.js';
a("Sindhu");
b('1234');
*/
//renaming feature in exporting
import * as ase from './day29_1.js';
ase.name("priya");
ase.number("1234567");