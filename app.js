"use strict";
window.onload = function()
{
	var S = document.getElementById("btn")
	
	S.addEventListener("click", Heroalert);
	
	function Heroalert()
	{
		const xhttp = new XMLHttpRequest();
		xhttp.onload = function() {
		alert(this.responseText);
		}
		xhttp.open("GET", "superheroes.php");
		xhttp.send();
	}
}