var randomInterger = function(val) {
	var ival = Math.random()*256;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival

}
// main
var rInt ;
var i;
var erik = 0
for (i = 0; i < 65536; i++){
	rInt 	= randomInterger();
	if (rInt == 6)erik++;
	console.log(rInt+",");
	process.stdout.write(rInt+",");
	
}
console.log("\n\n Counting 8 = "+erik);
