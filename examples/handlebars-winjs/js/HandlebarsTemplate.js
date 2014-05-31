(function (WinJS, Handlebars) {
	"use strict";

	WinJS.Namespace.define("MashUp.Handlebars", {
		Template: WinJS.Class.define(function ctor(element, options) {
			// WinJS control conventions
			this.element = element;
			element.winControl = this;
			WinJS.Utilities.addClass(this.element, "mashup-template");

			// Compile the Handlebars template
			this.template = Handlebars.compile(this.element.innerHTML);

		}, {
			// Instance properties and functions
			render: function (context, host) {
				host.innerHTML = this.template(context);
			},

			template: null,
		},
		{
			// Statics
		})
	});
})(WinJS, Handlebars);