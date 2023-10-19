function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function tong() {
  var numA = parseInt(document.getElementById("numA").value);
  var numB = parseInt(document.getElementById("numB").value);
  if (numA >= numB) {
    alert("false; a > b!");
  } else {
    var sum = 0;
    for (var i = numA; i <= numB; i++) {
      if (isPrime(i)) {
        sum = sum + i;
        console.log(sum);
      }
    }
    console.log(sum);
    alert("tong cac so tu " + numA + " den " + numB + " la " + sum);
  }
}
