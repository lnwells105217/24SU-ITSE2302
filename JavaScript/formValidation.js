
//event listener listening for a submit event triggered by the submit button on the contactUs.html form
document.getElementById("contact-form").addEventListener("submit", onFieldSubmit);

//FUNCTION 1: CALLED BY FORM SUBMIT EVENT
function onFieldSubmit(event) {
    //prevents the page from reloading
    event.preventDefault();

    //VARIABLES THAT HOLD REQUIRED FORM ELEMENTS
    var uName = document.getElementById('name');
    var email = document.getElementById('email');
    var reason = document.querySelector('#reason option:checked');
    var details = document.getElementById('comments');

    //if field values aren't valid, exit this method
    if (!validateContactForm(uName, email, reason)) {
        return;
    }

    //VARIABLES FOR OTHER FORM ELEMENTS
    var orderItems = document.querySelectorAll('input[name="order"]:checked');
    var gift = document.querySelector('input[name="gift"]:checked');
    
    //PRINT INPUT FIELD VALUES 
    console.log("Name: " + uName.value);
    console.log("Email: " + email.value);
    console.log("Reason for Contact: " + reason.innerText);
    console.log("Details: " + details.value);
    console.log("Items Purchased: ");
    //prints the label of each checked item
    for (var i = 0; i < orderItems.length; i++) {
        //get the label with the for attribute matching the current input's id attribute
        console.log("\t" + document.querySelector('#order-checkbox > label[for="' + orderItems[i].id + '"]').innerText);
    }
    //prints the label of the selected radio button
    console.log("Gift: " + document.querySelector('#gift-radio > label[for="' + gift.id + '"]').innerText);
   
    var total = calculateTotal(orderItems);

    console.log("Total: $" + total.toFixed(2));

    var totalElement = document.getElementById("order-total")
    totalElement.hidden = false;
    totalElement.innerHTML = "Order Total: $" + total.toFixed(2) + "\nThank you for ordering!";

}

//FUNCTION 2: VALIDATES FORM FIELD VALUES
function validateContactForm(uName, email, reason) {
    /* REG EXPRESSION TO VALIDATE EMAIL ADDRESS 
    ** '\S' represents a non-whitespace char
    ** '\S+' represents at least one non-whitespace char
    ** '\w{2,4}' means there must be 2 to 4 word characters
    ** '$' means the pattern must be at the end of the string*/
    var emailRegEx = /\S@\S+\.\w{2,4}$/

    //if the name field is empty, put it in focus state & alert the user
    if (uName.value === '') {
        alert("Enter a name.");
        uName.focus();
        return false;
    }

    //if email is empty OR the email is invalid, put the field in focus state & alert the user
    if (email.value === '') {
        alert("Enter an email address.");
        email.focus();
        return false;
    } else if (!emailRegEx.test(email.value)) {
        alert("Invalid email entered. Must contain '@' and a domain.\nEX: johndoe@gmail.com");
        email.focus();
        return false;
    }

    if (reason === '') {
        alert("Please select a contact reason");
        reason.focus();
        return false;
    }

    return true;
}

//FUNCTION 3: CALCULATES ORDER TOTAL FROM CHECKED CHECKBOX VALUES
function calculateTotal(list) {
    var total = 0;
    for (var i = 0; i < list.length; i++) {
        total += parseFloat(list[i].value);
    }
    return total;
}

