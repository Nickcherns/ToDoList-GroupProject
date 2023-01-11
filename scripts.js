//functions
function addList() {
    let input = document.getElementById('input').value;
    let ul = document.getElementById('list');
    let newLi = document.createElement('li');
    let checkmark = document.createElement('span');
    let removBtn = document.createElement("span");

    //action list variables
    let listEvent = document.createElement('li');
    let actions = document.getElementById('actions');
  
    removBtn.className = "close";
    removBtn.textContent = "\u00D7";

    checkmark.textContent = '\u2713';
    checkmark.className = 'checkmark';

    newLi.className = 'added'

    listArray.push(input);
    let content = document.createElement('span');
    content.textContent = listArray.slice(-1);
    content.className = 'content';

    newLi.append(checkmark);
    newLi.append(content);
    newLi.append(removBtn);
    ul.appendChild(newLi);

    //adding last added entry to listEvent
    listEvent.textContent = '"' + listArray.slice(-1) + '"' + ' was added to the list';
    actions.append(listEvent);

    //clear input field
    document.getElementById("input").value = "";

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        let deleteAction = document.createElement('li');
        div.style.display = "none";
        deleteAction.textContent = '"' + this.previousSibling.innerHTML + '"' + ' was removed from the list';
        actions.append(deleteAction);
      } 
    }

    //Checks if input field is empty when button clicked
    if (input === '') {
    alert("You must write something!");
    } else {
      document.getElementById("list").append(newLi);
    }


}




// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";   
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);



let listArray = []

let button = document.getElementById('button');
button.addEventListener('click', addList);



