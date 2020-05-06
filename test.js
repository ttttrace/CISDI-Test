function CISDI_JS(x){

	var sum = function(y) {
		x+=y;
		return sum;
	};
  
	sum.toString = function() {
    	return x;
    };

  	return sum;
}
console.log(CISDI_JS (0).toString()); //输出0
console.log(CISDI_JS (0)(1).toString()); //输出1 
console.log(CISDI_JS (0)(1)(2).toString()); //输出3
var v = CISDI_JS (0)(1) ; 
console.log(v(2).toString()); //输出3