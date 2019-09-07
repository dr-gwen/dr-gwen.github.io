// show a hidden div or hide a visible div

function showhide(arg) {
  var x = document.getElementById(arg);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
