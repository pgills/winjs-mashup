knockout-winjs
=============

An Example to smooth the KnockoutJS/WinJS interaction, this code is a shim layer which facilitates usage of WinJS UI controls in an Knockout application. It achieves this by creating bindings for the various controls which allow them to show up in Knockout data-bind attributes like:
```html
    The current rating is: <span data-bind="text: userRating"></span><br/>
    <div data-bind="winRating: {userRating: userRating}"></div>
```

How to use this in your Knockout project?
----------------------------------------

Just make sure to include WinJS, and then include the shim.

```html
    <link href="css/Microsoft.WinJS.2.1/css/ui-dark.css" rel="stylesheet" />
    <script src="js/Microsoft.WinJS.2.1/js/base.js"></script>
    <script src="js/Microsoft.WinJS.2.1/js/ui.js"></script>
    <script src="/js/knockout-winjs.js"></script>
```

__Note: this shim library has only been tested against Knockout 3.1.0__

Examples of control usage
-------------------------

### AppBar and AppBarCommand
```html
    <!-- Shows up on the bottom of the screen, use right-click or touch edgy gesture to show -->
    <div data-bind="winAppBar: {placement: 'bottom'}">
        <button data-bind="winAppBarCommand: {label: 'AppBarButton', type: 'button', icon:'add'}"></button>
    </div>
```
### BackButton
```html
    <!-- Won't show up unless you use WinJS.Navigation stack -->
    <button data-bind="winBackButton"></button>
```
### DatePicker
```html
    <div data-bind="winDatePicker: {current: date}"></div>
```
### FlipView
```html
    <div class="flipView" data-bind="winFlipView: {itemTemplate: templateName, itemDataSource: flipViewArray}"></div>
    <script type="text/html" id="flipViewTemplate">
      <div>
        <span>Name: </span><span data-bind="text: text"></span>
      </div>
      <div>
        <span>Rating: </span><span data-bind="text: rating"></span>
      </div>
    </script>
```
### Flyout
```html
    <button id="flyoutAnchor">Show a flyout!</button>
    <div data-bind="winFlyout: {anchor: '#flyoutAnchor', placement: 'right'}">
        <div>This is a flyout</div>
    </div>
```
### Hub and HubSection
```html
    <div class="hub" data-bind="winHub">
      <div class="hubSection" data-bind="winHubSection: {header: 'Section1'}"></div>
      <div class="hubSection" data-bind="winHubSection: {header: 'Section2'}"></div>
      <div class="hubSection" data-bind="winHubSection: {header: 'Section3'}"></div>
    </div>
```
### ItemContainer
```html
    <!-- shown here used within a ko foreach -->
    <div data-bind="foreach: ratings">
      <div class="item" data-bind="winItemContainer: {swipeBehavior: 'select', swipeOrientation: 'horizontal', selected: selected}">
        <div class="content"><span>Person: </span><span data-bind="text: text"></span>&nbsp;
        <span>Rating: </span><span data-bind="text: rating"></span>&nbsp;
        <span>Selected: </span><span data-bind="text: selected"></span></div>
      </div>
    </div>
 ```   
### ListView
```html
    <div class="listView" data-bind="winListView: {itemTemplate: 'listViewItemTemplate', itemDataSource: listViewArray, layout: {type: WinJS.UI.GridLayout}}"></div>
    <script type="text/html" id="listViewItemTemplate">
      <div class="listViewItem">
        <div>
          <span>Name: </span><span data-bind="text: text"></span>
        </div>
        <div>
          <span>Rating: </span><span data-bind="text: rating"></span>
        </div>
      </div>
    </script>
```
### Menu and MenuCommand
```html
    <button id="menuAnchor">Show a menu!</button>
    <div data-bind="winMenu: {anchor: '#menuAnchor', placement: 'right' }">
      <button data-bind="winMenuCommand: {id: 'menu2', label: 'Menu2', type: 'button'}"></button>
      <hr data-bind="winMenuCommand: {type: 'separator'}" />
      <button data-bind="winMenuCommand: {id: 'menu3', label: 'Menu3', type: 'button'}"></button>
    </div>
 ```   
### NavBar and friends
```html
    <!-- Shows up on the top of the screen, use right-click or touch edgy gesture to show -->
    <div data-bind="winNavBar">
      <div data-bind="winNavBarContainer">
        <div data-bind="winNavBarCommand: {label: 'Navigation Item', icon: 'add'}"></div>
      </div>
    </div>
```
### Rating
```html
    The current rating is: <span data-bind="text: userRating"></span><br/>
    <div data-bind="winRating: {userRating: userRating}"></div>
```
### SearchBox
```html
    <div data-bind="winSearchBox"></div>
```
### TimePicker
```html
    <div data-bind="winTimePicker: {current: time}"></div>
```
### ToggleSwitch
```html   
    <div data-bind="winToggleSwitch: {checked: toggleValue, title: toggleTitle, labelOff: toggleLabelOff, labelOn: 'world'}"></div>
```
### Tooltip
```html
    <div data-bind="winTooltip: {contentElement: '#tip', infotip: true}">
      <div>Hover for infoTip</div>
    </div>
    <div style="display: none">
      <div id="tip">
        <div>Tooltip only allows one time binding of with contentElement:</div>
        <div data-bind="text: toolTipContent"></div>
      </div>
    </div>
```