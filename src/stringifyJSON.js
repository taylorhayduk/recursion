// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  /*ALL OBJECT TYPES*/
  if (typeof(obj) === 'object') {
  	// watch for null
  	if (obj === null) {
  		return 'null';
  	}
  	// if array, iterate thru array and append stringified elements
  	if (Array.isArray(obj)) {
  		var result = [];
  		for (var i = 0; i < obj.length; i++) {
  			result[i] = stringifyJSON(obj[i]);
  		}
  		return ("["+result.toString()+"]");
  	}

  	// if Object isn't null or array, iterate thru key/value pairs
  	else {
  		var objResult = "";
  		for (var key in obj) {
  			// ensure value is not function and key is defined, then append as string
  			if ((typeof(obj[key]) !== "function") && (key !== "undefined")) {
  				console.log("the key is: " +key);
	  			var newKey = stringifyJSON(key);
	  			var newVal = stringifyJSON(obj[key]);
	  			objResult = objResult.concat(newKey+":"+newVal+",");
  			}
  		}
  		// is object was empty, return brackets
  		if (objResult.length === 0) {
  			return '{}';
  		}
  		// take off last comma and return with brackets
  		objResult = objResult.substring(0, objResult.length-1);
  		return ("{"+objResult+"}");
  	}
  }
  // return string nested in string
  if (typeof(obj) === 'string') {
  	var emptyStr = "\"";
  	emptyStr = emptyStr.concat(obj);
	emptyStr = emptyStr.concat("\"");
	return emptyStr;
  }

  // all other cases convert obj to string
  else {
  	return (obj.toString());
  }
};
