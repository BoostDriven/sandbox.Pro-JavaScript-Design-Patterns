/* Singleton as an Object Literal. */

MyNamespace.Singleton = {};

/* singleton with Private Members, step 1. */
MyNamespace.Singleton = (function() {
	return {};
})();


/* singleton with Private Members, step 2. */
MyNamespace.Singleton = (function() {
	return {	// Public members.
		publicAttribute1: true,
		publicAttribute2: 10,

		publicMethod1: function() {}
		publicMethod2: function() {}
	};
})();



/* singleton with Private Members, step 3. */
MyNamespace.Singleton = (function() {
	// Private members.
	var privateAttribute1 = false;
	var privateAttribute2 = [1, 2, 3];

	function privateMethod1() {};
	function privateMethod2(arg) {};

	return {	// Public members.
		publicAttribute1: true,
		publicAttribute2: 10,

		publicMethod1: function() {}
		publicMethod2: function() {}
	};
})();