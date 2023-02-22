// Create 50 dots and add them to the background
for (var i = 0; i < 50; i++) {
  var dot = document.createElement("div");
  dot.className = "dot";
  document.getElementById("background").appendChild(dot);
}

// Move the dots randomly every 2 seconds
setInterval(function() {
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < dots.length; i++) {
    dots[i].style.top = Math.floor(Math.random() * 101) + "%";
    dots[i].style.left = Math.floor(Math.random() * 101) + "%";
  }
}, 2000);
