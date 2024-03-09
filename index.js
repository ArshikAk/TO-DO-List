
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked')
  }
}, false);


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputValue").value;
    var t = document.createTextNode(inputValue);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    
    li.appendChild(t);
    li.appendChild(span);


    if (inputValue === '') {
      alert("Enter a Valid Task");
      document.getElementById("myInput").value = "";
    } else {
      document.getElementById("Task").appendChild(li);
      document.getElementById("myInput").value = "";
    }
  }