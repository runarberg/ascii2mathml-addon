var buttons = require("sdk/ui/button/action");
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "ascii2mathml",
  label: "Ascii2MathML",
  icon: {
    "16": "./img/a2ml-16.png",
    "32": "./img/a2ml-32.png",
    "64": "./img/a2ml-64.png"
  },

  onClick(state) {
    tabs.open('./index.html');
  }
});
