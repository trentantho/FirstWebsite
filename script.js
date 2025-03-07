var globe = true;

function func1() {
  if (globe) {
    document.getElementById("demo").innerHTML = "changed!";
    globe = false;
  }
  else if (!globe) {
    document.getElementById("demo").innerHTML = "changed again!";
    globe = true;
  }
}

function isDarkModeEnabled() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}

