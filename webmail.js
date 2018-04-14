var text = document.body.textContent;
console.log("[*][*] Autofill Moodle Running...")
var n = text.search("\n--\n");
var str = text.substring(n, n+120);
console.log(str)

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
// for(var i=0;i < s.length; i++){
// 	console.log(s[i]);
// }

for(var i=0; i<s.length; i++){
	if(s[i].slice(-1)==","){
		s[i] = s[i].slice(0,-1);
	}
}

for(var i=0; i<s.length; i++){
	if(s[i].search("chars before")!=-1){
		var spl = s[i].split(" ");
		if(s[i].search("small")!=-1){
			if (spl[4].slice(-1)==";")
			{
				spl[4] = spl[4].slice(0,-1);
			}
			console.log(String.fromCharCode(spl[4].charCodeAt(0) - parseInt(spl[0]) + 32));
		}
		else{
			if (spl[3].slice(-1)==";")
			{
				spl[3] = spl[3].slice(0,-1);
			}
			console.log(String.fromCharCode(spl[3].charCodeAt(0) - parseInt(spl[0])));
		}
	}
	else if(s[i].slice(-1)=='_' && s[i].slice(0,1)=='_'){
		console.log(s[i].slice(1,2));
	}
	else if(s[i].slice(-1)=='"'&& s[i].slice(0,1)=='"'){
		console.log(s[i].slice(1,2));
	}
	else if(s[i].slice(-1)=='-'&& s[i].slice(0,1)=='-'){
		console.log(s[i].slice(1,2));
	}
	else if(s[i].slice(-1)==':'&& s[i].slice(0,1)==':'){
		console.log(s[i].slice(1,2));
	}
	else if(s[i].slice(-1)=="'"&& s[i].slice(0,1)=="'"){
		console.log(s[i].slice(1,2));
	}
	else if(s[i].search("letter")!=-1){
		if(s[i].search("small")!=-1){
			var spl = s[i].split(" ");
			var num = spl[2].slice(1);
			var char = spl[1].slice(1,2);
			console.log(String.fromCharCode(char.charCodeAt(0) + parseInt(num)));
		}
		else{
			var spl = s[i].split(" ");
			var num = spl[1].slice(1);
			var char = spl[0].slice(1,2);
			console.log(String.fromCharCode(char.charCodeAt(0) + parseInt(num) + 32));
		}
	}
}