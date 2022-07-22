
//Get the strings from the page


function getValue(){

    document.getElementById("alert").classList.add("invisible");
    let userString  = document.getElementById("userString").value;
    let revString = reverseString(userString);
    
    displayString(revString);
}



//Reverse the string
function reverseString(userString){

    let revString = [];
    //reverse the string with a for loop
    
    for (let index = userString.length -1; index >= 0; index--) {
        revString += userString[index];
        
    }
    return revString;
}



///Display the reverse string
function displayString(revString){

    //Write to the page
    //show the alert box
    document.getElementById("msg").innerHTML = `Your String reversed is: ${revString}`;
    //Show athe alert box
    document.getElementById("alert").classList.remove("invisible");
}