var head = document.getElementsByTagName('HEAD')[0]; 
var link = document.createElement('link');
link.rel = 'stylesheet';  
link.type = 'text/css';
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    link.href = 'index_fixed.css';
    $().ready(function() {
        $("#menu").html("<div class=\"dropdown\"><button class=\"dropbutton\"><img src='images/menu.png' onmouseover=\"this.src='images/menu_hover.png';\" onmouseout=\"this.src='images/menu.png';\"></button><div class=\"dropdown-content\"><a href='texts/features.html'>Features</a><a href='mailto:support@inquerex.com'>Feedback</a><a href='https://www.inquerex.com/texts/userguide_v.Prototype_1.0.html'>User Guide</a></div></div>");
    });
} else {
    link.href = 'index_flexed.css';
    $().ready(function() {
        $("#menu").html("<td><p>  </p></td><td><h2><a href=\"https://www.inquerex.com/texts/features.html\">Features</a></h2></td><td><p> : : </p></td><td<h2><a href=\"mailto:support@inquerex.com\">Feedback</a></h2></td><td><p> : : </p></td><td><h2><a href=\"https://www.inquerex.com/texts/userguide_v.Prototype_1.0.html\">User Guide</a></h2></td>");
    });
}     
head.appendChild(link); 