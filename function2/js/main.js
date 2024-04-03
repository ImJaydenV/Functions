function stringToArray(inputString) {
    var resultArray = [];
    for (var i = 0; i < inputString.length; i++) {
        resultArray.push(inputString[i]);  
    }
    return resultArray;
}

function omzetten() {
    var inputString = document.getElementById("inputString").value;
    var woord = stringToArray(inputString);
    document.getElementById("woord").innerText = woord.join(", ");
}
