const text = document.getElementById("ptag").innerText;
var appendP = document.getElementById("appendP");
var myArray = text.split(" ");
for( let i = 0; i < myArray.length;i++){

    if(myArray[i].length > 5){
        appendP.append(myArray[i] + " ");
        appendP.style.color = "red";
    }
    // else {
    //     appendP.append (myArray[i] , " ");
    //     appendP.style.color = "black";
    // }
}