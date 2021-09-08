function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for(i = 0; i < arrayOfPeople.length; i++){ 
    let h1 = document.createElement("H1");
    let text = document.createTextNode(arrayOfPeople[i].name);
    content.appendChild(h1);
   h1.appendChild(text);

    let h2 = document.createElement("H2");
    let text2 = document.createTextNode(arrayOfPeople[i].job);
    content.appendChild(h2);
    h2.appendChild(text2);
  }
  


  
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

