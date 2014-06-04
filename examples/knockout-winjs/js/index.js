(function (WinJS, ko) {
	"use strict";

	document.addEventListener("DOMContentLoaded", function (ev){
		WinJS.UI.processAll().done(function (){
			console.log("WinJS:UI:processAll");

			var ControlModel = function () {
                this.toggleValue = ko.observable(false);
                this.toggleTitle = ko.observable("This is a toogle switch");
                this.toggleLabelOff = ko.observable("hello");


                this.userRating = ko.observable(3);

                this.date = ko.observable(new Date());

                this.ratings = ko.observableArray([
                    { text: "Josh", rating: ko.observable(4), selected: ko.observable(true) },
                    { text: "Paul", rating: ko.observable(5), selected: ko.observable(false) },
                    { text: "Chris", rating: ko.observable(3), selected: ko.observable(false) },
                    { text: "Edgar", rating: ko.observable(2), selected: ko.observable(true) }
                ]);

                this.time = ko.observable(new Date());

                // Push something on the back stack so that the back button shows up
                WinJS.Navigation.history.backStack.push(document.location);

                // Flyout
                this.flyoutAnchor = ko.observable("#a");

                // Menu
                this.menuAnchor = ko.observable("#c");

                // Menu with inline commands
                this.menuAnchorInline = ko.observable("#e");

                // Hub
                this.hubSections = ko.observableArray([{ text: 'Section1' }, { text: 'Section2' }, { text: 'Section3' }]);

                // ToolTip
                this.toolTipContent = ko.observable("This is a tool tip");

                // FlipView
                this.templateName = ko.observable('flipViewTemplate');
                this.flipViewArray = this.ratings;
                var count = 0;
                this.pushItem = function (e) {
                    this.flipViewArray.push({ text: "Pushed" + count++, rating: ko.observable(5), selected: ko.observable(false) });
                }
                this.popItem = function (e) {
                    this.flipViewArray.pop();
                };

                // ListView
                this.listViewArray = ko.observableArray([
                    { text: "Josh", rating: ko.observable(4) },
                    { text: "Paul", rating: ko.observable(5) },
                    { text: "Chris", rating: ko.observable(3) },
                    { text: "Edgar", rating: ko.observable(2) }
                ]);

                var listViewCount = 0;
                this.listViewUnshift = function (e) {
                    this.listViewArray.unshift({ text: 'Pushed ' + listViewCount++, rating: ko.observable(5) });
                };
                this.listViewShift = function (e) {
                    this.listViewArray.shift();
                }
                this.listViewReplace = function (e) {
                    this.listViewArray.replace(this.listViewArray()[1], { text: 'Replaced ' + listViewCount++, rating: ko.observable(4) });
                }
                this.listViewPush = function (e) {
                    this.listViewArray.push({ text: 'Pushed ' + listViewCount++, rating: ko.observable(4) });
                }
                this.listViewPop = function (e) {
                    this.listViewArray.pop();
                }

                this.onselected = function (e) {
                    var element = e.srcElement;
                    var listView = element.winControl;
                    if (listView) {

                    }
                }

            };

            ko.applyBindings(new ControlModel());

		});
	});
})(WinJS, ko);