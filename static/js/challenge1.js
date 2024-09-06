function clickMe(){
    
    let age = prompt("How old are you?");
    let ageInDays = parseInt(age) * 365;
    let h1Output = document.createElement("h1");
    let textOutput = document.createTextNode("You are " + ageInDays + " days old!");
    h1Output.appendChild(textOutput);
    document.getElementById("challenge1-output").innerHTML = h1Output.outerHTML;

}

function reset(){
    document.getElementById("challenge1-output").innerText="";
}