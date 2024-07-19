function calculate() {
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const z1 = parseFloat(document.getElementById("z1").value);
    const c1 = parseFloat(document.getElementById("c1").value);
  
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);
    const z2 = parseFloat(document.getElementById("z2").value);
    const c2 = parseFloat(document.getElementById("c2").value);
  
    const x3 = parseFloat(document.getElementById("x3").value);
    const y3 = parseFloat(document.getElementById("y3").value);
    const z3 = parseFloat(document.getElementById("z3").value);
    const c3 = parseFloat(document.getElementById("c3").value);
  
    const detA = x1 * y2 * z3 + y1 * z2 * x3 + z1 * x2 * y3 - z1 * y2 * x3 - y1 * x2 * z3 - x1 * z2 * y3;
    const detX = c1 * y2 * z3 + y1 * z2 * c3 + z1 * c2 * y3 - z1 * y2 * c3 - y1 * c2 * z3 - c1 * z2 * y3;
    const detY = x1 * c2 * z3 + c1 * z2 * x3 + z1 * x2 * c3 - z1 * c2 * x3 - c1 * x2 * z3 - x1 * z2 * c3;
    const detZ = x1 * y2 * c3 + y1 * c2 * x3 + c1 * x2 * y3 - c1 * y2 * x3 - y1 * x2 * c3 - x1 * c2 * y3;
  
    const x = detX / detA;
    const y = detY / detA;
    const z = detZ / detA;
  
    const output = `detA = ${detA}\n detX = ${detX}\n detY = ${detY}\n detZ = ${detZ}\n x = ${x}\n y = ${y}\n z = ${z}`;
    document.getElementById("output").textContent = output;
  }
  