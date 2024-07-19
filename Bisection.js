function calculate() {
  // Get input values
  let fx = document.getElementById("fx").value;
  let xl = parseFloat(document.getElementById("xl").value);
  let xu = parseFloat(document.getElementById("xu").value);
  let error = parseFloat(document.getElementById("error").value);

// Check for valid input
if (isNaN(xl) || isNaN(xu) || isNaN(error) || fx.trim() === "") {
  alert("Please Enter Valid Input.");
  return;
}


// Clear previous output
let outputTable = document.getElementById("output");
let rows = outputTable.rows.length;
for (let i = rows - 1; i > 0; i--) {
  outputTable.deleteRow(i);
} 
document.getElementById("root").value = "";


// Calculate bisection
let xr;
let ea = "--";
let xrold = 0; // initialize to 0


let f = function(x) {
  return eval(fx);
};

let i = 0;
let row;
while (ea === "--" || ea > error) {
  i++;
  xr = (xl + xu) / 2;
  ea = Math.abs((xr - xrold) / xr) * 100;

  // Add result to table
  row = outputTable.insertRow(i);
  row.insertCell(0).innerHTML = i;
  row.insertCell(1).innerHTML = xl;
  row.insertCell(2).innerHTML = f(xl);
  row.insertCell(3).innerHTML = xu;
  row.insertCell(4).innerHTML = f(xu);
  row.insertCell(5).innerHTML = xr;
  row.insertCell(6).innerHTML = f(xr);
  row.insertCell(7).innerHTML = i === 1 ? "--" : ea.toFixed(5); // display "--" in first iteration

  // Update bounds
   if (f(xr) === 0) {
      break;
    } else if (f(xr) * f(xl) < 0) {
      xu = xr;
    } else {
      xl = xr;
    }
    xrold = xr; // update xrold
  }

  // Output results
  document.getElementById("root").value = xr.toFixed(5);
}

function clearInputs() {
    document.getElementById("fx").value = "";
    document.getElementById("xl").value = "";
    document.getElementById("xu").value = "";
    document.getElementById("error").value = "";
    document.getElementById("root").value = "";
  
    let outputTable = document.getElementById("output");
    let rows = outputTable.rows.length;
    for (let i = rows - 1; i > 0; i--) {
    outputTable.deleteRow(i);
    }
  }