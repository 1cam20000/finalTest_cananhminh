function numberOneTriangle1() {
  var number = parseInt(document.getElementById("number").value);
  var output = document.getElementById("output");
  if (number >= 1 && number <= 10) {
    var triangle = "";
    for (var i = 1; i <= number; i++) {
      var line = "";
      for (var j = 0; j < i; j++) {
        line = line + "*";
        console.log(line);
      }
      triangle = triangle + line + "<br>";
      console.log(triangle);
    }
    output.innerHTML = triangle;
  } else {
    output.innerHTML = "nhap so tu 1 den 10";
  }
}
