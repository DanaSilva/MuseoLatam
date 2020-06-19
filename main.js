function buildDropDown(name,index,array) {
	var opt = document.createElement("option");
	opt.value = name; 
	opt.innerHTML = name; 
	dropdown.appendChild(opt); 
}

var container = document.getElementById("flexbox"),
array = container.querySelectorAll("img"), 
filter = document.getElementById("filter"),
categories = [];
for (var i = 0; i < array.length ;i++) {
	categories[i] = array[i].dataset.group;	
}
var unique = categories.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
unique.reverse();
unique.unshift("todos");

var dropdown = document.createElement("select"); 
dropdown.id = "categories";
var dropdownLabel = document.createElement("label"); 
dropdownLabel.for = dropdown.id; 
dropdownLabel.innerHTML = "Buscar por categoria"; 
unique.forEach(buildDropDown); 
filter.appendChild(dropdownLabel); 
filter.appendChild(dropdown); 

dropdown.addEventListener("change", function() { 
  console.log("Change"); 
if (this.value === "todos") { 
	for (var i = 0; i < array.length; ++i) {	array[i].classList.remove("diminish");
		}
} else { 
	var hide = document.querySelectorAll('#flexbox img:not([data-group="'+this.value+'"])');
	for (var j = 0; j < hide.length; ++j) {
 	hide[j].classList.add("diminish");
		} 
		var show = document.querySelectorAll('#flexbox img[data-group="'+this.value+'"]');
	for (var k = 0; k < show.length; ++k) {	show[k].classList.remove("diminish");
		}
	}
});