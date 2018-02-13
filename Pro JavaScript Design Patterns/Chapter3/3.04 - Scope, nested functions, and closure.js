function foo() {
	var a = 10;

	function bar() {
		a *= 2;
	}

	bar();
	return a;
}




function foo() {
	var a = 10;

	function bar() {
		a *= 2;
		return a;
	}

	return bar;
}

var baz = foo(); // baz is now a reference to function bar.
baz();	// returns 20.
baz();	// returns 40.
baz();	// reutrns 80.

var blat = foo(); // blat is another reference to bar.
blat(); // returns 20, becasue a new copy of a is being used.