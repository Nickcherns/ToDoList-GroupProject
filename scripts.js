
function addList() {
    let input = document.getElementById('input').value;
    let ul = document.getElementById('list');
    let newLi = document.createElement('li');

    newLi.innerHTML = input;
    ul.appendChild(newLi);

    //Checks if input field is empty when button clicked
    if (input === '') {
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(newLi);
    }

    document.getElementById("input").value = "";
  
    let removBtn = document.createElement("span");
    let remove = document.createTextNode("\u00D7");
    newLi.className = 'checked'
    removBtn.className = "close";
    removBtn.appendChild(remove);
    newLi.appendChild(removBtn);


    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  // Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



let button = document.getElementById('button');
button.addEventListener('click', addList);


