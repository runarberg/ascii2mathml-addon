var byId = document.getElementById.bind(document);

var input = byId("input");
var output = byId("output");

var display = byId("display-checkbox");
var dir = byId("dir-checkbox");
var decimalMark = byId("decimal-mark-input");
var colSep = byId("col-sep-input");
var rowSep = byId("row-sep-input");

[display, dir].forEach(el => {
  el.addEventListener("change", input.focus.bind(input));
});

[decimalMark, colSep, rowSep].forEach(el => {
  el.addEventListener("input", e => {
    el.style.width = (1.3 * el.value.length) + "ex";
  });
  el.addEventListener("keypress", e => {
    if (e.key === "Escape") {
      input.focus();
    };
  });
});

dir.addEventListener("change", e => {
  input.dir = dir.checked ? "rtl" : "ltr";
});

input.addEventListener("input", render);
document.querySelector(".controls").addEventListener("change", render);
document.addEventListener("DOMContentLoaded", () => {
  input.dir = dir.checked ? "rtl" : "ltr";
  input.focus();
  render();
});

function render() {
  var ascii = input.value;
  var mathML = ascii2mathml(ascii, {
    display: display.checked ? "block" : "inline",
    dir: dir.checked ? "rtl" : "ltr",
    decimalMark: decimalMark.value,
    colSep: colSep.value,
    rowSep: rowSep.value
  });
  output.innerHTML = mathML;
}
