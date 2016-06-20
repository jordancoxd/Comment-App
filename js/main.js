function addtoList() {
	// get value from input and assign variable
	var name = document.getElementById("username").value
	var com = document.getElementById("comment").value

	// create text node from input fields
	var user = document.createTextNode("name: " + name)
	var data = document.createTextNode("comment: " + com)

	// create new elements/add a class for bstrap/append textnode inputs
	var newName = document.createElement("li")
	newName.className = "list-group-item"
	var newCom = document.createElement("h3")
	newCom.appendChild(user)
	var newP = document.createElement("p")
	newP.appendChild(data)

	// append new elements to <ol>
	newName.appendChild(newCom)
	newName.appendChild(newP)
	document.getElementById("commentList").appendChild(newName)






}
