/* Generic Page Object. */

Namespace.PageName = {
	// Page constants.
	CONSTANT_1: true,
	CONSTANT_2: 10,

	// Page methods.
	method1: function() {

	},
	method2: function() {

	},

	// Initialization method.
	init: function() {

	}
}


// Invoke the initialization method after the page loads.
addLoadEvent(Namespace.PageName.init);


var GiantCorp = window.GiantCorp || {};

/* RegPage singleton, page handler object. */
GiantCorp.RegPage = {

	//Constants.
	FORM_ID: 'reg-form',
	OUTPUT_ID: 'reg-results',

	// Form handling methods.
	handleSubmit: function(e) {
		e.preventDefault(); // Stop the normal form submission.

		var data = {};
		var inputs = GiantCorp.RegPage.formEl.getElementsByTagName('input');

		// Collect the values of the input fields in the form.
		for (var i = 0, len = inputs.length; i < len; i++) {
			data[inputs[i].name] = inputs[i].value;
		}

		// Send the form values back to the server.
		GiantCorp.RegPage.sendRegistration(data);
	},
	sendRegistration: function(data) {

	},
	displayResult: function(response) {

	},
	init: function() {

	}
};

// Invoke the initialization method after the page loads.
addLoadEvent(GiantCorp.RegPage.init);