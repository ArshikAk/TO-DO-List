let Task = document.querySelector(".taskList");


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked')
    // save();
  }
  else{
    // save();
  }
}, false);


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputValue").value;
    var p = document.createElement("p");

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("❌");
    span.className = "close";
    span.appendChild(txt);
    
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        // save();
    }
    p.innerHTML = inputValue;
    li.appendChild(p);
    li.appendChild(span);


    if (inputValue === '') {
      alert("Enter a Valid Task");
      document.getElementById("inputValue").value = "";
    } else {
      document.getElementById("Task").appendChild(li);
      document.getElementById("inputValue").value = "";
    }
    // save();
    
  }

  // function save(){
  //   localStorage.setItem("taskDetails",document.getElementById("Task").innerHTML)
  // }

  // function display(){
  //   document.getElementById("Task").innerHTML =  localStorage.getItem("taskDetails");
  // }

  // function remove(){
  //   localStorage.removeItem()
  // }

  // display();