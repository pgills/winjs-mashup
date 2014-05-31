(function (WinJS) {
	"use strict";
	document.addEventListener("DOMContentLoaded", function (ev){
		WinJS.UI.processAll().done(function (){
			console.log("WinJS:UI:processAll");
		});
	});
})(WinJS);