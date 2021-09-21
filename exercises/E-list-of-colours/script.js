let content = document.getElementById("content");
let select = document.createElement("select");
content.appendChild(select);

p ="";


function listOfColours(colours) {
  for(i = 0; i < colours.length; i++){
    let option = document.createElement("option");
    let colour = document.createTextNode(colours[i]);
    select.appendChild(option);
    option.appendChild(colour);
    option.value = colours[i];

    select.onchange = function(){
     
      p = document.createElement("p");
      let pText = document.createTextNode("You have selected: " + select.value);
      p.style.color = select.value;
      content.appendChild(p);
      p.appendChild(pText);
    }

    /*option.addEventListener("click", getColour);*/
  }
}




const colours = ["red", "blue", "green", "yellow", "pink", "brown"];



listOfColours(colours);
