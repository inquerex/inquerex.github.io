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
  if (navButtons.style.visibility === "visible") {
    navButtons.style.visibility = "hidden";
  } else {
    navButtons.style.visibility = "visible";
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
      Subject : "Downloads",
      Body : "Someone downloaded Inquerex.dmg.",
    });
}

// Get OS. //
{
    var OSName = "Unknown OS";
    if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
    if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
    if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
    if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
}

// Redirect if OS isn't Macintosh. //
function checkOS() {
    if (OSName !== "Macintosh") {
        var compatibilityLink = document.createElement('a');
        compatibilityLink.setAttribute('href', 'compatibility.html');
        compatibilityLink.click();
    } else {
        var downloadLink = document.createElement('a');
        downloadLink.setAttribute('href', 'https://www.dropbox.com/s/soahb4jbsb9trt9/Inquerex%20%28Prototype%201.2%29.pkg?dl=1');
        downloadLink.click();
        sendEmail();
    }
}