let content = document.getElementById("content");

function shoppingList(arrayOfPeople) {
  let ul = document.createElement("UL");

  for(i = 0; i < arrayOfPeople.length; i++){
    let li = document.createElement("LI");
    let text = document.createTextNode(arrayOfPeople[i]);
    content.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(text);
   }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
