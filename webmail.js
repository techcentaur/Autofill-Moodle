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


for(var i=0;i < s.length; i++){
	if(s[i]=="and not a"){
		s.splice(i, 2);
	}
}

for(var i=0;i < s.length; i++){
	console.log(s[i]);
}