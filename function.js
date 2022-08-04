/*
const age = prompt("Entrez votre age :");

alert("Bonjour, vous avez "+ age +" ans."  );
*/

const button = document.querySelector("#submit");
const mainTitle = document.querySelector(".main-title");


button.addEventListener("click", function (event) {
	mainTitle.classList.toggle("spectacular");
	
	console.log(event);
	
});































