(function (WinJS, Mustache) {
    "use strict";

    WinJS.Namespace.define("MashUp.Mustache", {
        Template: WinJS.Class.define(function ctor(element, options) {
            // WinJS control conventions
            this.element = element;
            element.winControl = this;
            WinJS.Utilities.addClass(this.element, "mashup-template");

            // Extract the Mustache template
            this.template = this.element.innerHTML;

        }, {
            // Instance properties and functions
            render: function (context, host) {
                var output = Mustache.render(this.template, context);
                host.innerHTML = output;
            },

            template: null,
        })

    });
})(WinJS, Mustache);