function submitForm(event) {
        event.preventDefault();
        var methodSelect = document.getElementById("method-select");
        var matrixMethodSelect = document.getElementById("matrix-method-select");

        if (methodSelect.value === "" && matrixMethodSelect.value === "") {
          alert("Please Select a Method OR Matrix ");
          return false;
        } else if (methodSelect.value !== "" && matrixMethodSelect.value === "") {
          switch (methodSelect.value) {
            case "Bisection":
              window.location.href = "Bisection.html";
              break;
            case "False-Position":
              window.location.href = "False-Position.html";
              break;
            case "Simple-Fixed-Point":
              window.location.href = "Simple-Fixed-Point.html";
              break;
            case "Newton":
              window.location.href = "Newton.html";
              break;
            case "Secant":
              window.location.href = "Secant.html";
              break;
            default:
              alert("Please select a valid method");
              return false;
          }
        } else if (methodSelect.value === "" && matrixMethodSelect.value !== "") {
          switch (matrixMethodSelect.value) {
            case "Gauss-Elimination":
              window.location.href = "Gauss-Elimination.html";
              break;
            case "LU-Decomposition":
              window.location.href = "LU-Decomposition.html";
              break;
            case "Cramer's-Rule":
              window.location.href = "Cramer's-Rule.html";
              break;
            default:
              alert("Please select a valid matrix method");
              return false;
          }
        } else {
          alert("Please Select Only One Method OR One Matrix");
          return false;
        }

        return true;
      }


