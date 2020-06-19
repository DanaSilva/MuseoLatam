function buildDropDown(name,index,array) {
	var opt = document.createElement("option");
	opt.value = name; // Each option's name in the select menu will have a value
	opt.innerHTML = name; // Write each value with the proper name
	dropdown.appendChild(opt); // Add the options inside the dropdown select menu
}

var container = document.getElementById("flexbox"),
array = container.querySelectorAll("img"), // Create a variable called array with collecting all the figures inside the container
filter = document.getElementById("filter"),
categories = []; // Create an empty array that will store all the data-group-values used by the figure elements
for (var i = 0; i < array.length ;i++) {
	categories[i] = array[i].dataset.group;	
}
var unique = categories.filter(function(item, i, ar){ return ar.indexOf(item) === i; }); // unique then filters the array to keep only unique values, reverses it before adding all as the first array value.
unique.reverse();
unique.unshift("Todos");

var dropdown = document.createElement("select"); // create a select element with a variable name "dropdown"
dropdown.id = "categories"; // add an id called categories
var dropdownLabel = document.createElement("label"); // create a label element
dropdownLabel.for = dropdown.id; // fill in the for value with the dropdown's id
dropdownLabel.innerHTML = "Show : "; // add the select form on the document
unique.forEach(buildDropDown); // call on the buildDropDown using forEach
filter.appendChild(dropdownLabel); // add the label
filter.appendChild(dropdown); // add the select

dropdown.addEventListener("change", function() { // listen for a change in the select menu for the dropdown menu
  console.log("Change"); 
if (this.value === "Todos") { // if the value of the dropdown is all then for each item in the array will remove the class diminish 
	for (var i = 0; i < array.length; ++i) {	array[i].classList.remove("diminish");
		}
} else { // if the user chooses a specific option then hide all the items that do not have the selected value; otherwise, add the diminish class
	var hide = document.querySelectorAll('#flexbox img:not([data-group="'+this.value+'"])');
	for (var j = 0; j < hide.length; ++j) {
 	hide[j].classList.add("diminish");
		} // then only the items with the selected value will show and remove the diminish class
		var show = document.querySelectorAll('#flexbox img[data-group="'+this.value+'"]');
	for (var k = 0; k < show.length; ++k) {	show[k].classList.remove("diminish");
		}
	}
});