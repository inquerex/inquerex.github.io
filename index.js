// Disable FF Night Mode; Night Mode inverts dark color schemes. //
if(window.__firefox__){window.__firefox__.NightMode.setEnabled(false);}

// Hide and show navigation buttons. //
function toggleNav() {
  var x = document.getElementById("navButtons");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}