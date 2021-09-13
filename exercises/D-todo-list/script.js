let content = document.getElementById("content");


function todoList(todos) {
  let ul = document.createElement("ul");
  content.appendChild(ul);
  for(i = 0; i < todos.length; i++){
    let li = document.createElement("li");
    let text = document.createTextNode(todos[i].todo);
    ul.appendChild(li);
    li.appendChild(text); 
    
    document.querySelector("li").addEventListener("click", function(){
     document.querySelector("li").style.textDecoration = "line-through"; 
    });
       
  }
 

  }
  

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);