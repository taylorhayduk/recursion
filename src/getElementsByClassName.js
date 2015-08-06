// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var body = document.body;
  var result = [];

  // recursive function goes thru all parent's decendants
  // and appends ones with className to result
  var getChildClasses = function(parent, className) {
  	// push current element if className exists
  	if (parent.classList.contains(className)) {
  		result.push(parent);
  	}
  	// recursive call on all children of current (parent) element
  	if (parent.hasChildNodes()) {
  		var children = parent.childNodes;
  		_.each(children, function(child){
  			// skip #text nodes
  			if (child.nodeType !== 3) {
  			  getChildClasses(child, className);
  			}
  		});
  	  }
    };
  // call the function
  getChildClasses(body, className);
  return result;
};
