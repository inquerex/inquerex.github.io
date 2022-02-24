// Remove FF's Night Mode, if present. //
Array.from(document.querySelectorAll("style")).forEach((sheet) => {
    if (
      sheet.textContent?.includes(
        "-webkit-filter: hue-rotate(180deg) invert(100%) !important;"
      )
    ) {
      sheet.parentNode?.removeChild(sheet);
    }
  });

// Hide and show navigation buttons. //
function toggleNav() {
  var navButtons = document.getElementById("navButtons");
  if (navButtons.style.visibility === "hidden") {
    navButtons.style.visibility = "visible";
  } else {
    navButtons.style.visibility = "hidden";
  }
}

// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if(mql.matches) {  
	console.log(mql)
} else {  
	console.log(mql)
}

// Add a media query change listener
mql.addEventListener(function(m) {
	if(m.matches) {
		// Changed to portrait
	}
	else {
		// Changed to landscape
	}
});