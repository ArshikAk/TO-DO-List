
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
  li.appendChild(t);
  li.appendChild(span);
  document.getElementById("inputValue").value = "";

  if (inputValue === '') {
    alert("ENter a Valid Task");
  } else {
    document.getElementById("Task").appendChild(li);
  }
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

