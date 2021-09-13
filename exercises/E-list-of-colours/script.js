let content = document.getElementById("content");
let select = document.createElement("select");
content.appendChild(select);


function listOfColours(colours) {
  for(i = 0; i < colours.length; i++){
    let option = document.createElement("option");
    let colour = document.createTextNode(colours[i]);
    select.appendChild(option);
    option.appendChild(colour);

   
  }
  
 option.forEach(function(i){
   i.addEventListener("click", function(){
    pText.style.colour = colours[i]
   });
 });


}



let p = document.createElement("p");
let pText = document.createTextNode("You have selected: " );
content.appendChild(p);
p.appendChild(pText);

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];



listOfColours(colours);

