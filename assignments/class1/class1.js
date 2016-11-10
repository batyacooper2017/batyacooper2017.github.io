document.getElementById("myButton").onclick = changeColor;
var currentColor = "deepskyblue";

function changeColor(){

    if(currentColor == "deepskyblue"){
        document.body.style.color = "green";
        currentColor = "green";
    } else {
        document.body.style.color = "deepskyblue";
        currentColor = "deepskyblue";
    }

    return currentColor;

}
