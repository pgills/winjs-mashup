(function (WinJS) {
    "use strict";

    WinJS.Namespace.define("Data", {
        items: new WinJS.Binding.List([
            {id: 1, text: "Item 1" },
            {id: 2, text: "Item 2" },
            {id: 3, text: "Item 3" },
            {id: 4, text: "Item 4" },
            {id: 5, text: "Item 5" },
            {id: 6, text: "Item 6" },
            {id: 7, text: "Item 7" }
        ])
    })
    
})(WinJS);