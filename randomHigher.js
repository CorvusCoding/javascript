var randomInteger = function() {
	var ival = Math.random()*26+65;
	// console.log(ival);
	ival = Math.floor(ival);
	return ival;
}
// main 
var i, rInt ;
var letter = ' ' ;
var tst = 0;
for (i = 0; i < 65536; i++){
rInt	= randomInteger();
if (rInt == 87)tst++;
//console.log(rInt+" ");
letter = parseInt(rInt);
letter = String.fromCharCode(rInt);
process.stdout.write(letter);
}
console.log("\n\n Count B = "+tst);
