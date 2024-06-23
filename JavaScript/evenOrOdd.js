//INPUT 1
var input1 = prompt("Enter a number between 1 and 10: ");
input1 = parseInt(input1);
//loops until a number between 1 and 10 is entered
while (isNaN(input1)|| input1 < 1 || input1 > 10) {
    if (isNaN(input1)) {
        alert("ERROR: Enter a number!");
    } else if (input1 < 1 || input1 > 10) {
        alert("ERROR: Number must be within the range of 1 to 10!");
    }
    input1 = prompt("Enter a number between 1 and 10: ");
    input1 = parseInt(input1);
}

//INPUT 2
var input2 = prompt("Enter a number between 10 and 20: ");
input2 = parseInt(input2);
//loops until a number between 10 and 20 is entered
while (isNaN(input2)|| input2 < 10 || input2 > 20) {
    if (isNaN(input2)) {
        alert("ERROR: Enter a number!");
    } else if (input2 < 10 || input2 > 20) {
        alert("ERROR: Number must be within the range of 10 to 20!");
    }
    input2 = prompt("Enter a number between 10 and 20: ");
    input2 = parseInt(input2);
}

//MULTIPLICATION
var product = input1 * input2;
//tests if product is even or odd and prints the result to the console.
if (product % 2 == 0) {
    console.log(input1 + " * " + input2 + " produces an even number.");
} else {
    console.log(input1 + " * " + input2 + " produces an odd number.");
}