function gaussElimination() {
    // Get input matrix values
    var matrix = [];
    for (var i = 0; i < 3; i++) {
      matrix[i] = [];
      for (var j = 0; j <4; j++) {
        matrix[i][j] = Number(document.getElementById(i.toString() + j.toString()).value);
        }
        }
        
        // Perform Gauss Elimination
        for (var k = 0; k < 3; k++) {
        for (var i = k + 1; i < 3; i++) {
        var factor = matrix[i][k] / matrix[k][k];
        for (var j = k; j < 4; j++) {
        matrix[i][j] = matrix[i][j] - factor * matrix[k][j];
        }
        }
        }
        
        // Calculate solution
        var x = [];
        for (var i = 2; i >= 0; i--) {
        var sum = 0;
        for (var j = i + 1; j < 3; j++) {
        sum += matrix[i][j] * x[j];
        }
        x[i] = (matrix[i][3] - sum) / matrix[i][i];
        }
        
        // Display output matrix and solution
        for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
        document.getElementById('r' + i.toString() + j.toString()).innerHTML = matrix[i][j].toFixed(2);
        }
        document.getElementById('x' + (i+1).toString()).innerHTML = x[i].toFixed(2);
        }
        // Display additional matrix values
        document.getElementById('m21').innerHTML = matrix[1][0].toFixed(2);
        document.getElementById('m31').innerHTML = matrix[2][0].toFixed(2);
        document.getElementById('m32').innerHTML = matrix[2][1].toFixed(2);
 }
  
