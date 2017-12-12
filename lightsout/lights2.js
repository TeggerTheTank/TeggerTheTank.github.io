// JavaScript Document
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};



var text = '{"employees":[' +
'{"insult":"Turn all of the lights off to win!"},' +
'{"insult":"But-... you... HOW!?"},' +
'{"insult":"Oh man, you are doing so well..."},' +
'{"insult":"Better than Brandon!"},' +
'{"insult":"Oh diddly dang! So close! MAN how does that feel!?"},' +
'{"insult":"You did it!!!"}]}';




obj = JSON.parse(text);
document.getElementById("insult").innerHTML =
obj.employees[0].insult;

//variables
//row A
var light1A = true;
var light2A = true;
var light3A = true;
var light4A = true;
var light5A = true;
//row B
var light1B = true;
var light2B = true;
var light3B = true;
var light4B = true;
var light5B = true;
//row C
var light1C = true;
var light2C = true;
var light3C = true;
var light4C = true;
var light5C = true;
//row D
var light1D = true;
var light2D = true;
var light3D = true;
var light4D = true;
var light5D = true;
//Row E
var light1E = true;
var light2E = true;
var light3E = true;
var light4E = true;
var light5E = true;

//holds how many lights are off
var x = 0;

//array for the buttons
var lights = [light1A, light2A, light3A, light4A, light5A, light1B, light2B, light3B, light4B, light5B, light1C, light2C, light3C, light4C, light5C, light1D, light2D, light3D, light4D, light5D, light1E, light2E, light3E, light4E, light5E];

//variable to check which array position
var i = 0;

//aray for the ID names
var id = ["box1A", "box2A", "box3A", "box4A", "box5A", "box1B", "box2B", "box3B", "box4B", "box5B", "box1C", "box2C", "box3C", "box4C", "box5C", "box1D", "box2D", "box3D", "box4D", "box5D", "box1E", "box2E", "box3E", "box4E", "box5E"];

// onclick functions to change the color of the boxes

//displays number of unlit boxes
document.getElementById("x").innerHTML = x;






//switches in the center


function lightswitch() {
    "use strict";
	
	
	


    if (lights[i] === true) {
        document.getElementById(id[i]).style.backgroundColor = "black";
        lights[i] = false;
		x++;
		

    } else if (lights[i] === false) {
        document.getElementById(id[i]).style.backgroundColor = "yellow";
        lights[i] = true;
		x--;
    }

    if (lights[i + 1] === true) {
        document.getElementById(id[i + 1]).style.backgroundColor = "black";
        lights[i + 1] = false;
		x++;
		
    } else if (lights[i + 1] === false) {
        document.getElementById(id[i + 1]).style.backgroundColor = "yellow";
        lights[i + 1] = true;
		x--;
    }

    if (lights[i - 1] === true) {
        document.getElementById(id[i - 1]).style.backgroundColor = "black";
        lights[i - 1] = false;
		x++;
		
    } else if (lights[i - 1] === false) {
        document.getElementById(id[i - 1]).style.backgroundColor = "yellow";
        lights[i - 1] = true;
		x--;
    }

    if (lights[i + 5] === true) {
        document.getElementById(id[i + 5]).style.backgroundColor = "black";
        lights[i + 5] = false;
		x++;

    } else if (lights[i + 5] === false) {
        document.getElementById(id[i + 5]).style.backgroundColor = "yellow";
        lights[i + 5] = true;
		x--;
    }

    if (lights[i - 5] === true) {
        document.getElementById(id[i - 5]).style.backgroundColor = "black";
        lights[i - 5] = false;
		x++;

    } else if (lights[i - 5] === false) {
        document.getElementById(id[i - 5]).style.backgroundColor = "yellow";
        lights[i - 5] = true;
		x--;
    }
document.getElementById("x").innerHTML = x;
	
	
	if (x === 0){
obj = JSON.parse(text);
document.getElementById("insult").innerHTML =
obj.employees[1].insult;
}
	else if (x >= 5 && 10 >= x){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[2].insult;
	}
	
	else if (x >= 15 && 20 >= x){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[3].insult;
	}
	
	else if (x >= 22 && 24 >= x){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[4].insult;
	}
	
	else if (x === 25){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[5].insult;
		
		
		
    
     $("#hide").fadeOut(5000);
    

	}
	
}

//switches on the left

function lightswitchleft() {
    "use strict";
	

    if (lights[i] === true) {
        document.getElementById(id[i]).style.backgroundColor = "black";
        lights[i] = false;
		x++;

    } else if (lights[i] === false) {
        document.getElementById(id[i]).style.backgroundColor = "yellow";
        lights[i] = true;
		x--;
    }

    if (lights[i + 1] === true) {
        document.getElementById(id[i + 1]).style.backgroundColor = "black";
        lights[i + 1] = false;
		x++;

    } else if (lights[i + 1] === false) {
        document.getElementById(id[i + 1]).style.backgroundColor = "yellow";
        lights[i + 1] = true;
		x--;
    }


    if (lights[i + 5] === true) {
        document.getElementById(id[i + 5]).style.backgroundColor = "black";
        lights[i + 5] = false;
		x++;

    } else if (lights[i + 5] === false) {
        document.getElementById(id[i + 5]).style.backgroundColor = "yellow";
        lights[i + 5] = true;
		x--;
    }

    if (lights[i - 5] === true) {
        document.getElementById(id[i - 5]).style.backgroundColor = "black";
        lights[i - 5] = false;
		x++;

    } else if (lights[i - 5] === false) {
        document.getElementById(id[i - 5]).style.backgroundColor = "yellow";
        lights[i - 5] = true;
		x--;
    }
	
	
	if (x === 0){
obj = JSON.parse(text);
document.getElementById("insult").innerHTML =
obj.employees[1].insult;
}
	else if (x >= 5 && 10 >= x){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[2].insult;
	}
	
	else if (x >= 15 && 20 >= x){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[3].insult;
	}
	
	else if (x >= 22 && 24 >= x){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[4].insult;
	}
	
	else if (x === 25){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[5].insult;
		
			
    
    $("#hide").fadeOut(5000);
    

	}
	
document.getElementById("x").innerHTML = x;
}

//switches on the right side
function lightswitchright() {
    "use strict";
	

    if (lights[i] === true) {
        document.getElementById(id[i]).style.backgroundColor = "black";
        lights[i] = false;
		x++;

    } else if (lights[i] === false) {
        document.getElementById(id[i]).style.backgroundColor = "yellow";
        lights[i] = true;
		x--;
    }


    if (lights[i - 1] === true) {
        document.getElementById(id[i - 1]).style.backgroundColor = "black";
        lights[i - 1] = false;
		x++;

    } else if (lights[i - 1] === false) {
        document.getElementById(id[i - 1]).style.backgroundColor = "yellow";
        lights[i - 1] = true;
		x--;
    }

    if (lights[i + 5] === true) {
        document.getElementById(id[i + 5]).style.backgroundColor = "black";
        lights[i + 5] = false;
		x++;

    } else if (lights[i + 5] === false) {
        document.getElementById(id[i + 5]).style.backgroundColor = "yellow";
        lights[i + 5] = true;
		x--;
    }

    if (lights[i - 5] === true) {
        document.getElementById(id[i - 5]).style.backgroundColor = "black";
        lights[i - 5] = false;
		x++;

    } else if (lights[i - 5] === false) {
        document.getElementById(id[i - 5]).style.backgroundColor = "yellow";
        lights[i - 5] = true;
		x--;
    }

	if (x === 0){
obj = JSON.parse(text);
document.getElementById("insult").innerHTML =
obj.employees[1].insult;
}
	else if (x >= 5 && 10 >= x){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[2].insult;
	}
	
	else if (x >= 15 && 20 >= x){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[3].insult;
	}
	
	else if (x >= 22 && 24 >= x){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[4].insult;
	}
	
	else if (x === 25){
	obj = JSON.parse(text);
	document.getElementById("insult").innerHTML =
	obj.employees[5].insult;
		
			
    
    $("#hide").fadeOut(5000);
    

	}
	
	document.getElementById("x").innerHTML = x;
}


//button presses
function lights1A() {
    "use strict";
    i = 0;
    lightswitchleft();
}

function lights2A() {
    "use strict";
    i = 1;
    lightswitch();
}

function lights3A() {
    "use strict";
    i = 2;
    lightswitch();
}

function lights4A() {
    "use strict";
    i = 3;
    lightswitch();
}

function lights5A() {
    "use strict";
    i = 4;
    lightswitchright();
}

function lights1B() {
    "use strict";
    i = 5;
    lightswitchleft();
}

function lights2B() {
    "use strict";
    i = 6;
    lightswitch();
}

function lights3B() {
    "use strict";
    i = 7;
    lightswitch();
}

function lights4B() {
    "use strict";
    i = 8;
    lightswitch();
}

function lights5B() {
    "use strict";
    i = 9;
    lightswitchright();
}

function lights1C() {
    "use strict";
    i = 10;
    lightswitchleft();
}

function lights2C() {
    "use strict";
    i = 11;
    lightswitch();
}

function lights3C() {
    "use strict";
    i = 12;
    lightswitch();
}

function lights4C() {
    "use strict";
    i = 13;
    lightswitch();
}

function lights5C() {
    "use strict";
    i = 14;
    lightswitchright();
}

function lights1D() {
    "use strict";
    i = 15;
    lightswitchleft();
}

function lights2D() {
    "use strict";
    i = 16;
    lightswitch();
}

function lights3D() {
    "use strict";
    i = 17;
    lightswitch();
}

function lights4D() {
    "use strict";
    i = 18;
    lightswitch();
}

function lights5D() {
    "use strict";
    i = 19;
    lightswitchright();
}

function lights1E() {
    "use strict";
    i = 20;
    lightswitchleft();
}

function lights2E() {
    "use strict";
    i = 21;
    lightswitch();
}

function lights3E() {
    "use strict";
    i = 22;
    lightswitch();
}

function lights4E() {
    "use strict";
    i = 23;
    lightswitch();
}

function lights5E() {
    "use strict";
    i = 24;
    lightswitchright();
}

