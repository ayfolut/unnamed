// const list = document.getElementById("newTask");
// const input = document.getElementById("task")
// const

// function todo(myTask, id, done, trash){
  
// if(trash){
// 	return;
// }

//  const DONE = done ? CHECK : UNCHECK;
//  const LINE = done ? LINE_THROUGH : "";

//   const text = ` <li class="items">
//                 <p> ${myTask} </p>
//                 <i class="fas ${DONE} fa-check-double" job="complete" id="${id}"></i>
//                 <i class="fas fa-calendar-plus"></i>
//                 <i class="fas fa-share"></i>
//                 <i class="fas fa-trash-alt" job="delete" id="${id}"></i>
//                 </li> 
//                `;

// const position = "beforeend";
// list.inserAdjacentHTML(position, text);

// }

// document.addEventListener("keyup",function(even){
// 	if(event.keyCode == 13){
// 		const myTask = input.value;

// 		if(myTask){
// 			task(myTask)
// 		}
// 		input.value = "";
// 	}
// });




// const todoInput = document.getElementById("task");
// const todoButton = document.querySelector('.btn');
// const todoList = document.querySelector('.newTask');

// todoButton.addEventListener("click", addTodo)
// todoList.addEventListener("click", deleteCheck)


// function addTodo(event) {
//     event.preventDefault();
    
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');
    
//     const newTodo = document.createElement('li');
//     newTodo.innerText = todoInput.value;
//     newTodo.classList.add('todo_item');
//     todoDiv.appendChild(newTodo);
//     if(todoInput.value === ""){
//         return null
//     }
    
//     const completedButton = document.createElement('button');
//     completedButton.innerHTML = '<i class="fas fa-check"></i>';
//     completedButton.classList.add('complete_btn')
//     todoDiv.appendChild(completedButton);
    
//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//     deleteButton.classList.add('delete_btn')
//     todoDiv.appendChild(deleteButton);
    
//     todoList.appendChild(todoDiv);
    
//     todoInput.value = ""
// }


// function deleteCheck(e) {
//     const item = e.target;
    

//     if (item.classList[0] === "delete_btn") {
//         const todo = item.parentElement;
        


//         todo.classList.add("fall")
//         todo.addEventListener('transitionend', function () {
//             todo.remove()
//         })
//     }
    



//     if (item.classList[0] === "complete_btn") {
//         const todo = item.parentElement;
//         todo.classList.toggle("completedItem")
//     }
// }







// Create a "close" button and append it to each list item
// Create a "close" button and append it to each list item
// var shareicon = document.querySelector('.fa-share');
// var addicon = document.querySelector('fa-calendar-plus');
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   var share = document.createTextNode("");
//   var add = document.createTextNode(addicon);

//   span.className = "close";
//   span.appendChild(txt);
//   span.appendChild(share);
//   span.appendChild(add);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var done = document.getElementsByClassName("done");
var i;
for ( i = 0; i < done.length; i++) {
	done[i].onclick = function (){
	var div = this.parentElement;
	div.style.background = "red";
 }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must add something!");
  } else {
    document.querySelector('.newTask').appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


















