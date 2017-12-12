// JavaScript Document Copyright Thomas Egger 2017
var $ = function (id) {
	"use strict";
    return document.getElementById(id);
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	
    acc[i].onclick = function(){
		"use strict";
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
			
			
			
        } else {
            panel.style.display = "block";
        }
    };
}

