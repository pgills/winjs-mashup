var Templates = Templates || {};

(function (WinJS, Handlebars, Templates) {
	"use strict";

	// Export so renderTemplate function can be used with declarative controls
	Templates.itemTemplate = new MashUp.Handlebars.PrecompiledTemplate(Handlebars.templates['mashup.itemTemplate']);

	document.addEventListener("DOMContentLoaded", function (ev){
		WinJS.UI.processAll().done(function (){
			console.log("WinJS:UI:processAll");
		});
	});
})(WinJS, Handlebars, Templates);