// Disable inversion of colors, if enabled. This fixes a bug with FF's "Night Mode." //
// It could override a legitimate setting, though, too. It's a temporary workaround. //
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

// Log a download via email. //
function sendEmail() {
    Email.send({
      Host : "smtp.gmail.com",
      Username : "pm3ltaq9Y4s6xfg6c@gmail.com",
      Password : "ftgtffviyulmtpaq",
      To : 'logs@inquerex.com',
      From : "pm3ltaq9Y4s6xfg6c@gmail.com",
      Subject : "Download",
      Body : "Someone downloaded Inquerex.dmg.",
    });
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