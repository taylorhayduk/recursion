// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Should be same as: return JSON.stringify(obj);
/*  console.log("-------------------------------------------------------");
  console.log("The obj is: "+ obj);
  console.log("The obj is of type: "+ typeof(obj))
  console.log("The Stringified Actual is: "+JSON.stringify(obj));*/
  console.log(obj);

  if (typeof(obj) === 'object') {
  	if (obj === null) {
  		return 'null';
  	}
  	if (Array.isArray(obj)) {
  		var result = [];
  		for (var i = 0; i < obj.length; i++) {
  			result[i] = stringifyJSON(obj[i]);
  		}
  		return ("["+result.toString()+"]");
  	}
  	else {
  		var objResult = "";
  		for (var key in obj) {
  			if ((typeof(obj[key]) !== "function") && (key !== "undefined")) {
  				console.log("the key is: " +key);
	  			var newKey = stringifyJSON(key);
	  			var newVal = stringifyJSON(obj[key]);
	  			objResult = objResult.concat(newKey+":"+newVal+",");
  			}
  		}
  		if (objResult.length === 0) {
  			return '{}';
  		}
  		objResult = objResult.substring(0, objResult.length-1);
  		return ("{"+objResult+"}");
  	}
  }

  if (typeof(obj) === 'string') {
  	var emptyStr = "\"";
  	emptyStr = emptyStr.concat(obj);
	emptyStr = emptyStr.concat("\"");
	return emptyStr;
  }

  if (typeof(obj) === 'function') {
  	return;
  }


  else {
  	if (obj === undefined) {
  		return "";
  	}
  	return (obj.toString());
  }
};
