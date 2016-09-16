	
// # Digital Clock Workshop: Individual - approx 10 hours

// **Goal:** 
// To create a single page app demonstrating understanding of basic JavaScript skills. 

// **Assignment:**

// For this assignment you will be creating a digital clock using HTML, CSS and JavaScript. The finished product will be fully functional, styled and ready to show off to friends! 

// *Note:* You will choose one of the two different options below to complete this assignment. Details for each are below. Remember whichever you don't do now you can return to later as a fun side project! 

// *Hint:* This assignment is to gain the skills needed for development, do NOT submit copied code. 

// *Option 1:*

// **The hex clock** is a hex code that reflects the time of day in #hhmmss format instead of hh:mm:ss format. The background color of the screen is then changed based on the hex code which is created by the current time. 

// *Option 2:*

// **The greeting display clock** that displays a random background image to the user with the time and a custom greeting based on the time of day. Ex: "Good morning" 

// **Grading criteria:** 

// *Option 1:* 
//   * JS clock is fully functional and throws zero errors
//   * The time is in digital format to resemble a hex code
//   * The time is displayed centered in the middle of the screen
//   * The screen background color changes based on the current time 

// *Option 2:*
//   * JS clock is fully functional and throws zero errors
//   * The time is in digital format
//   * The time is displayed centered in the middle of the screen
//   * The screen background image changes based on time of day
//   * The greeting is based on time of day (good morning, good afternoon, good evening..)

// **Complete =** Meets ALL grading criteria points above. 

// **Incomplete =** Does not meet all grading criteria points above. Needs improvement or missing submission. 
window.onload = function() {

var text = document.getElementById("startclock");
	text.addEventListener("click", clock)
		// text.innerHTML = "displayclock";
}

var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var second = "";
	var minute = "";
	var hours = "";

function mytimer() {

// 	function displayTime() {
// 	var currentTime = new Date();
// 	var hours = currentTime.getHours();
// 	var minutes = currentTime.getMinutes();
//    	var seconds = currentTime.getSeconds();
// }

sec = sec +1;	

if (sec > 59) {
	min = min + 1;
	sec = 0; 
}

if (min > 59) {
	hour = min + 1;
	min = 0; 
}

if (hour > 12) {
	hours = hour - 12;
} else {
	hours = hour;
} 

if (sec < 10) {
	second = "0" + sec;
} else {
	second = sec;
}

if (min < 10) {
	minute = "0" + min;
} else {
	minute = min;
}

if (hour < 10) {
	hours = "0" + hour;
} else {
	hours = hour;
}

var bolts = document.querySelector("#thunderbolts");

if (min % 2 == 0) {
	bolts.style.display = "none";
	} else {
	bolts.style.display = "block";
	}

var backgroundcolor = document.querySelector("#body");

//var backgroundcolor = document.querySelector("#body").style.color = color;


if (min % 2 == 0) {
	backgroundcolor.style.background = "#4dd2ff";
	} 
else {
	backgroundcolor.style.background = "grey";
	}

var clouds = document.querySelector("#clouds");

if (min % 2 == 0) {
	clouds.style.display = "none";
	} 
else {
	clouds.style.display = "block";
	}

document.getElementById("displayclock").innerHTML = hour + ":" + minute + ":" + second;

}

function clock(){
mytimer();
setInterval(mytimer, 1000); }



