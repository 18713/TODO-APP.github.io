
var pass = document.getElementById("pass");
function func5() {
    var addText = document.getElementById("add");
    var li = document.createElement("li");
    var liText = document.createTextNode(add.value)
    li.appendChild(liText)

    // create deletebtn
 var delBtn = document.createElement("button");
 var delText = document.createTextNode("DELETE")
 delBtn.appendChild(delText)
 delBtn.setAttribute("class","btn")
 delBtn.setAttribute("onClick","myFunc(this)")

 li.appendChild(delBtn)

 // create editbtn

 var editBtn = document.createElement("button");
 var editText = document.createTextNode("edit")
 editBtn.appendChild(editText)
 editBtn.setAttribute("class","edit")
 editBtn.setAttribute("onClick","abc(this)")
li.appendChild(editBtn)

    pass.appendChild(li)
    add.value = ""
    console.log(li)
}
function myFunc(e) {
    console.log(e.parentNode.remove())
}

function delelteAll(){
    pass.innerHTML = ""
    
}

function abc(e) {
   var val = e.parentNode.firstChild.nodeValue
   var editValue = prompt("enter a text value","val")
   e.parentNode.firstChild.nodeValue = editValue
}
