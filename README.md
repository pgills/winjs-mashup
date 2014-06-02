winjs-mashup
============

A series of examples of using popular JavaScript libraries with [WinJS](http://try.buildwinjs.com).

List of examples:
* [Handlebars Templates with WinJS](examples/handlebars-winjs)
* [Mustache Templates with WinJS](examples/mustache-winjs)

# Installation Steps

Clone a copy of the master winjs-mashup git repo:
```
git clone https://github.com/pgills/winjs-mashup.git
```

Change to the `winjs-mashup` directory:
```
cd winjs-mashup
```

Install the [grunt command-line interface](https://github.com/gruntjs/grunt-cli) globally:
```
npm install -g grunt-cli
```

> **Note:** You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to install Grunt globally.

Grunt dependencies are installed separately in each cloned git repo. Install the dependencies with:
```
npm install
```

Install bower
```
npm install -g bower
```

> **Note:** You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to install Bower globally.

Update bower dependencies for the current project
```
bower update
```

Run the following to test out the mashup examples:
```
grunt test
```
