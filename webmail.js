var text = document.body.textContent;
console.log("[*][*] Autofill Moodle Running...")
var n = text.search("\n--\n");
var str = text.substring(n, n+115);
console.log(str)
var captcha="";

var array = [];

var s = str.split('\n');

var checkphrase = [
"followed by",
"and",
"but",
"and then",
"&",
";",
"-",
",",
"--"
];

for(var i = 0; i < checkphrase.length; i++){
	for(var j = 0; j < s.length; j++){
		if(s[j]==checkphrase[i]){
			s.splice(j,1);
		}
	}
}

for(var i=0; i < s.length; i++){
	if(s[i]=="and not a"){
		s.splice(i, 2);
	}
}
for(var i=0;i < s.length; i++){
	console.log(s[i]);
}

for(var i=0; i<s.length; i++){
	if(s[i].slice(-1)==","){
		s[i] = s[i].slice(0,-1);
	}
}
for(var i=0; i<s.length; i++){
	if(s[i].slice(-1)==";"){
		s[i] = s[i].slice(0,-1);
	}
}
for(var i=0; i<s.length; i++){
	if(s[i].search("chars before")!=-1){
		var spl = s[i].split(" ");
		if(s[i].search("small")!=-1){
			var v = (String.fromCharCode(spl[4].charCodeAt(0) - parseInt(spl[0]) + 32));
			captcha = captcha.concat(v);
		}
		else{
			var v = (String.fromCharCode(spl[3].charCodeAt(0) - parseInt(spl[0])));
			captcha = captcha.concat(v);		
		}
	}
	else if(s[i].slice(-1)=='_' && s[i].slice(0,1)=='_'){
		var v = (s[i].slice(1,2));
		captcha = captcha.concat(v);
	}
	else if(s[i].slice(-1)=='"'&& s[i].slice(0,1)=='"'){
		var v = (s[i].slice(1,2));
		captcha = captcha.concat(v);
	}
	else if(s[i].slice(-1)=='-'&& s[i].slice(0,1)=='-'){
		var v = (s[i].slice(1,2));
		captcha = captcha.concat(v);
	}
	else if(s[i].slice(-1)==':'&& s[i].slice(0,1)==':'){
		var v = (s[i].slice(1,2));
		captcha = captcha.concat(v);
	}
	else if(s[i].slice(-1)=="'"&& s[i].slice(0,1)=="'"){
		var v = (s[i].slice(1,2));
		captcha = captcha.concat(v);
	}
	else if(s[i].slice(-1)=='/'&& s[i].slice(0,1)=='/'){
		var v = (s[i].slice(1,2));
		captcha = captcha.concat(v);
	}
	else if(s[i].search("letter")!=-1){
		if(s[i].search("small")!=-1){
			var spl = s[i].split(" ");
			var num = spl[2].slice(1);
			var char = spl[1].slice(1,2);
			var v = (String.fromCharCode(char.charCodeAt(0) + parseInt(num) + 32));
			captcha = captcha.concat(v);
		}
		else{
			var spl = s[i].split(" ");
			var num = spl[1].slice(1);
			var char = spl[0].slice(1,2);
			var v = (String.fromCharCode(char.charCodeAt(0) + parseInt(num)));
			captcha = captcha.concat(v);
		}
	}
	else if(s[i].search(" = ")!=-1){
		var stripped="";
		stripped = (s[i].split('(').join(''));
		stripped = (stripped.split(')').join(''));
		var spl = stripped.split(" ");
		for(var j=0; j<spl.length; j++){
			console.log(spl[j]);
		}
		var ans = parseInt(spl[spl.length-1]);
		for(var i=spl.length-3; i > 0 ; i=i-2){
			if(spl[i-1]=="-"){
				ans = ans + parseInt(spl[i]);
			}else if(spl[i-1]=="+"){
				ans = ans - parseInt(spl[i]);
			}else if(spl[i-1]=="*"){
				ans = ans/parseInt(spl[i]);
			}else if(spl[i-1]=="/"){
				ans = ans*parseInt(spl[i]);
			}
		}
		var v = (ans);
		console.log(ans);
		captcha = captcha.concat(v);
	}
}


var delay = 500;
setTimeout(function() {
 document.getElementsByName("captcha_input")[0].value = captcha;
}, delay);
