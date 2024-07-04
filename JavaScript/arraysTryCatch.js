//variable initialization
var siteTopics = ["insects", "millipedes", "isopods", "spiders", "snails"];
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var myName = "Lynsey";
var myBirthday = new Date("2002-04-02");

//adds the string to the end of the array
siteTopics[siteTopics.length] = "scorpions";
console.log("The length of the siteTopics array is " + siteTopics.length);

//loop through siteTopics array & print items
var i = 0;
while (i < siteTopics.length) {
    console.log(siteTopics[i]);
    i++;
}

//reverse dayNames array
dayNames = dayNames.reverse();
for (var j = 0; j < dayNames.length; j++) {
    console.log(dayNames[j]);
}

//remove first item in dayNames
dayNames.shift()

//try...catch block
try {
    if (dayNames[0] === "Sunday") {
        throw "Error: Sunday should be missing!";
    }
} catch (e) {
    console.log(e)
} finally {
    console.log(myName + " was born in the year " + myBirthday.getFullYear() +
                ". I think the day was either a " + dayNames[1] + " or " + dayNames[3]);
}