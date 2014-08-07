document.write('<h2>hello world</h2>');
var theDate = new Date();
document.write(theDate);


// declaring function with parameters
function findArea(height, width){
	return height * width;
}

// calling above function with data
findArea(12,14);;

// arguments as variables
wallHeight = 39;
wallWidth = 41;

findArea(wallWidth, wallHeight);

// returning single value
function measureArea(width, height){
	var total = width * height;
}

var wallA = measureArea(23,12);
var wallB = measureArea(21,23);

// returning multiple values
function returnSizes(a,b,c){
	var area = a * b;
	var volume = a * b * c;
	var sizes = [area, volume];
	return sizes;   // this will return 2 values  { a and b in an array}
}
var measureOne = returnSizes(2,1,4)[0];  //returns first in array
var measureTwo = returnSizes(3,6,2)[1];  //returns second in array

// anon functions and function expressions
// anon:
function anon(){
	// do something
}

// expressions:
var anon = function(){
	// do something
}

// immediately invoked function expressions
var helloWorldNow = (function(){
	console.log('hello world right now!');
}());















