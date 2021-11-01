const arr = document.getElementsByTagName("input");
let output = "";
const text = document.getElementById("showText"); 

for(let i = 0 ;i < arr.length; i++) {
    arr[i].addEventListener("click", addText);
}


function addText(e) {
    output = output + e.target.value + "\n";
    text.innerHTML = output;
}