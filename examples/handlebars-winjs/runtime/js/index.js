var Templates = Templates || {};

(function (WinJS, Handlebars, Templates) {
    "use strict";
    
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
})(WinJS, Handlebars, Templates);