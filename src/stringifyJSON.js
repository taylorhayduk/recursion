// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Should be same as: return JSON.stringify(obj);
  console.log("-------------------------------------------------------");
  console.log("The obj is: "+ obj);
  console.log("The obj is of type: "+ typeof(obj))
  console.log("The Stringified Actual is: "+JSON.stringify(obj));
  
  if (typeof(obj) === 'object') {
  	if (obj === null) {
  		return 'null';
  	}
  	if (Array.isArray(obj)) {
  		var result = [];
  		for (var i = 0; i < obj.length; i++) {
  			result[i] = stringifyJSON(obj[i]);
  		}
  		console.log("["+result.toString()+"]");
  		return ("["+result.toString()+"]");
  	}
  	var returnStr = "";
  	for (key in obj) {
  		returnStr.concat(key);
  	}
  	console.log("I'm in the obj loop!!!");
  	console.log(returnStr);
  	return '[]';
  }
  if (typeof(obj) === 'string') {
  	var emptyStr = "\"";
  	emptyStr = emptyStr.concat(obj);
	emptyStr = emptyStr.concat("\"");
	return emptyStr;
  }
  else {
  	console.log("It was not an object.  It returned: "+obj.toString());
  	return obj.toString();
  }
};
