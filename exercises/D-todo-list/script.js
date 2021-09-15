let content = document.getElementById("content");

function todoList(todos) {
  let ul = document.createElement("ul");
  content.appendChild(ul);
  for(i = 0; i < todos.length; i++){
    let li = document.createElement("li");
    let text = document.createTextNode(todos[i].todo);
    ul.appendChild(li);
    li.appendChild(text);    
    li.addEventListener("click", function(event) {
      if (li.classList.contains("lineThrough")) {
            li.classList.remove("lineThrough");
          } else {
            li.classList.add("lineThrough");
          }
    })
  }
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);