document.getElementById("myButton").onclick = changeColor;
var currentColor = "crimson";

function changeColor(){


    if(currentColor == "crimson"){
        document.body.style.color = "purple";
        currentColor = "purple";
    } else {
        document.body.style.color = "crimson";
        currentColor = "crimson";
    }
    return currentColor;
}
