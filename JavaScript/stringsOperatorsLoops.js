var family = "Oscar has 5 kids and a beautiful wife named Stella." +
            "4 of the children are identical twins and the other child is the oldest by 1 year."
var relatives = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area."
var visit = "This summer they plan on traveling to El Paso to visit as many family members as possible."

//NUMBER EXTRACTION
/* The .search() method is used to find the index of each single-digit number. 
** The index is then used to extract the numeric character with square brackets.*/
var five = family[family.search("5")];
var four = family[family.search("4")];
var one = family[family.search("1")];
var six = relatives[relatives.search("6")];
var two = relatives[relatives.search("2")];
//The .substr() method is used to extract multi-digit numbers.
var oneHundred = relatives.substr(relatives.search("100"), 3); //.search() returns the starting index for the number.

//EXTRACTS 10 AND 0 FROM oneHundred
var ten = oneHundred.substr(0, 2);
var zero = oneHundred[2];

//CONVERT STRINGS TO INTEGERS
five = parseInt(five);
four = parseInt(four);
one = parseInt(one);
six = parseInt(six);
two = parseInt(two);
oneHundred = parseInt(oneHundred);
ten = parseInt(ten);
zero = parseInt(zero);

//ADD NUMBERS & DISPLAY SUM
var sumTotal = five + four + one + six + two + ten;
console.log("The variable sumTotal is storing " + sumTotal);

//EXTRACT "San Antonio"
var city = relatives.substr(relatives.indexOf("San"), 11);

//REPLACE "El Paso" WITH "San Antonio"
visit = visit.replace("El Paso", city);
console.log(visit); 

//LOOP
while (one <= 10) {
    console.log("I saw " + one + " car(s) on my trip");
    one++; 
}