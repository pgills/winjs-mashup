var Templates = Templates || {};

(function (WinJS, Mustache, Templates) {
	"use strict";

	var template = "<li><span>Id: </span><span>{{id}} </span><span>Text: </span><span>{{text}}</span></li>";

	function renderTemplate(context) {
		var fragment = document.createElement("div");
		fragment.innerHTML = Mustache.render(template, context);

		// Take the first child of the fragment
		return fragment.children[0];
	}

	// Export so renderTemplate function can be used with declarative controls
	Templates.render = WinJS.Utilities.markSupportedForProcessing(renderTemplate);

	document.addEventListener("DOMContentLoaded", function (ev){
		WinJS.UI.processAll().done(function (){
			console.log("WinJS:UI:processAll");

			// Repeater host
			var element = document.querySelector(".pprepeater");
			var repeater = new WinJS.UI.Repeater(element, {data: Data.items, template: renderTemplate});

		});
	});
})(WinJS, Mustache, Templates);