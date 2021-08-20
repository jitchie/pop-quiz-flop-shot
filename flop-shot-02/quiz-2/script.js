// what will we see on the screen?


var element = document.createElement('h1');


element.textContent = "I 💚 the DOM";
document.body.appendChild(element)


element.style.fontSize = "50px";

element.setAttribute("style", "margin: 0; font-size: 40px;")

/*
Initial nothing will be seen on the screen as the element has not been appended to the document
'document.body.appendChild(element);' will have the element and its text content display on the screen.

as for setting styles setAttribute will override font size as it was the last style declared in the script.

*/



