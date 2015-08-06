// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var body = document.body;
  var result = [];
  var getChildClasses = function(parent, className) {
  	if (parent.classList.contains(className)) {
  		result[result.length] = parent;
  	}
  	if (parent.hasChildNodes()) {
  		var children = parent.childNodes;
  		_.each(children, function(child){
  			if (child.nodeType !== 3) {
  			  getChildClasses(child, className);
  			}
  		});
  	  }
    };

  getChildClasses(body, className);
  return result;
};
