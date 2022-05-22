var a,
  c,
  z,
  y,
  x,
  d = false,
  b = document.getElementById("dis"),
  e = 0;
function non(a) {
  e = b.innerText.length;
  if (e <= 14 && a != 555 && a != 666) {
    if (a == 00) {
      b.innerHTML += "00";
    } else if (a == 888) {
      b.innerHTML += "0";
    } else if (a == 1) {
      b.innerHTML += "1";
    } else if (a == 2) {
      b.innerHTML += "2";
    } else if (a == 3) {
      b.innerHTML += "3";
    } else if (a == 4) {
      b.innerHTML += "4";
    } else if (a == 5) {
      b.innerHTML += "5";
    } else if (a == 6) {
      b.innerHTML += "6";
    } else if (a == 7) {
      b.innerHTML += "7";
    } else if (a == 8) {
      b.innerHTML += "8";
    } else if (a == 9) {
      b.innerHTML += "9";
    } else if (a == 777) {
      if (d == false) {
        b.innerHTML += ".";
        d = true;
      } else b.innerHTML += "";
    } else b.innerHTML = "syntax error";
  } else if (a == 555) {
    b.innerHTML = "";
  } else if (a == 666) {
    b.innerHTML = c;
  } else b.innerHTML += "";
}

function opp(z) {
  c = parseFloat(b.innerText);
  b.innerHTML = "";
  y = z;
  d = false;
}
function opp1() {
  console.log(c);
  x = parseFloat(b.innerText);
  if (y == 4) {
    w = c + x;
    b.innerHTML = w;
  } else if (y == 6) {
    w = c / x;
    b.innerHTML = w;
  } else if (y == 3) {
    w = c - x;
    b.innerHTML = w;
  } else {
    w = (c / x) * 100;
    b.innerHTML = w;
  }
  console.log(x);
  w = c = x = 0;
  d = false;
}
