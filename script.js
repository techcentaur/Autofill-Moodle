window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

var text = document.body.textContent;
console.log("[*][*] Autofill Moodle Running...")
var n = text.search("Please ");
var str = text.substring(n, n+42);

console.log("[*][*] Captcha Rendered");
console.log(str);

var array = str.split(' ');

var captchval;

if(text.search("Please add")===n){
	console.log("[*][*] Addition operation detected ");
	console.log("[*] operator 1 is : " + array[4]);
	console.log("[*] operator 2 is: " + array[6]);
	captchval = parseInt(array[4]) + parseInt(array[6]);
	console.log("[*] Addition result is: " + captchval);
}
else if(text.search("Please subtract")===n){
	console.log("[*][*] Subtraction operation detected ");
	console.log("[*] operator 1 is : " + array[4]);
	console.log("[*] operator 2 is: " + array[6]);
	captchval = parseInt(array[4]) - parseInt(array[6]);
	console.log("[*] Subtraction result is: " + captchval);
}
else if(text.search("Please enter first")===n){
	console.log("[*][*] Logical evaluation detected ");
	console.log("[*] first value is : " + array[6]);
	captchval = parseInt(array[6]);
}
else if(text.search("Please enter second")===n){
	console.log("[*][*] Logical evaluation detected ");
	console.log("[*] second value is : " + array[8]);
	captchval = parseInt(array[8]);
}


console.log("[*][*] Filling captcha value...")

var delay = 500;
setTimeout(function() {
 document.getElementById("valuepkg3").value = captchval;
}, delay);
console.log("[*][*] Captcha Filled Successfully")

// // Filling username and password

// console.log(" ");
// console.log("[/][/] Filling Username and Password")

// var my = JSON.parse("config");

// document.getElementById("username").value = my[0].user;
// document.getElementById("password").value = my[1].pass;
