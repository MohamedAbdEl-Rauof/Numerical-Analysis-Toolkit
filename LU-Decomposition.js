function decompose() {
  // Get values for A and B matrices
  const a11 = parseFloat(document.getElementById("a11").value);
  const a12 = parseFloat(document.getElementById("a12").value);
  const a13 = parseFloat(document.getElementById("a13").value);
  const a21 = parseFloat(document.getElementById("a21").value);
  const a22 = parseFloat(document.getElementById("a22").value);
  const a23 = parseFloat(document.getElementById("a23").value);
  const a31 = parseFloat(document.getElementById("a31").value);
  const a32 = parseFloat(document.getElementById("a32").value);
  const a33 = parseFloat(document.getElementById("a33").value);
  const b1 = parseFloat(document.getElementById("b1").value);
  const b2 = parseFloat(document.getElementById("b2").value);
  const b3 = parseFloat(document.getElementById("b3").value);

  // Perform LU decomposition
  const l11 = 1,
    l21 = a21 / a11,
    l31 = a31 / a11;
  const u11 = a11,
    u12 = a12,
    u13 = a13;
  const u22 = a22 - u12 * l21,
    u23 = a23 - u13 * l21;
  const u33 = a33 - u13 * l31 - u23 * (a32 - l31 * u12) / u22;
  const l22 = 1,
    l32 = (a32 - l31 * u12) / u22;
 
// Calculate x using forward and backward substitution
const y1 = b1,
y2 = b2 - l21 * y1,
y3 = b3 - l31 * y1 - l32 * y2;
const x3 = y3 / u33,
x2 = (y2 - u23 * x3) / u22,
x1 = (y1 - u12 * x2 - u13 * x3) / u11;

 // Display results
 document.getElementById("l").textContent = `${l11} 0 0\n${l21} ${l22} 0\n${l31} ${l32} 1`;
 document.getElementById("u").textContent = `${u11} ${u12} ${u13}\n0 ${u22} ${u23}\n0 0 ${u33}`;
 document.getElementById("x").textContent = `${x1}\n${x2}\n${x3}`;
}