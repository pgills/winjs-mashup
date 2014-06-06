# Handlebars and WinJS
This example demonstrates how to use both runtime and precompiled [Handlebars](http://handlebarsjs.com/) templates with [WinJS](http://try.buildwinjs.com/) controls that accept [Binding Templates](http://try.buildwinjs.com/#bindingtemplates).

# Examples
The `lib` directory contains the following files:
* `data.js` - Exposes sample data as a WinJS [Binding List](http://msdn.microsoft.com/en-us/library/windows/apps/hh700774.aspx)
* `HandlebarsTemplate.js` - Provides a wrapper class that uses Handlebars for templating. 

## Runtime Example
This example shows how to use Handlebars and WinJS both declaratively and programmatically.

It uses a WinJS [Repeater](http://try.buildwinjs.com/#repeater) with a [Handlebars](http://handlebarsjs.com/) template.

![Handlebars and WinJS screen shot](https://raw.githubusercontent.com/pgills/winjs-mashup/master/examples/handlebars-winjs/sceenshots/handlebarsAndWinJS.PNG)

## Precompiled 
This example shows how to use a precompiled Handlebars template with a WinJS control.

The template has already been precompiled. The source template is the `mashup.itemTemplate.handlebars` file and the precompiled JavaScript is the `mashupItemTemplate.js` file.

### How to precompile your own template with this example:

Install Handlebars globably
```
npm install handlebars -g
```

Create a Handlebars template file called `itemTemplate.handlebars` with a template:
```html
<li>
    <span>Id: {{id}} </span></span>Text: {{text}}</span>
</li>
```

Precompile the `itemTemplate.handlebars` file and specify the output JavaScript file:
```
handlebars itemTemplate.handlebars -f itemTemplate.js
```

Include the `itemTemplate.js` file in your example. Also make sure you are including the Handlebars runtime file `handlebars.runtime.js` in your HTML file:
```html
<script src="bower_components/handlebars.runtime.js"></script>
<script src="js/itemTemplate.js"></script>
```

Visit the [Handlebars website](http://handlebarsjs.com) for more information.
