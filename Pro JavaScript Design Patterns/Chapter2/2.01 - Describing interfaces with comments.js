/*

interface Composite {
	function add(child);
	function remove(child);
	function getChild(index);
}

interface FormItem {
	function save();
}

*/

var CompositeForm = function(id, method, action) { // implements Composite, FormItem
	...
};

// Imlement the Composite interface.

CompositeForm.prototype.add = fuction(child) {
	...
};
CompositeForm.prototype.remove = function(child) {
	...
};
CompositeForm.prototype.getChild = function(index) {
	...
};


// Implement the FormItem interface.

CompositeForm.prototype.save = function() {
	...
};