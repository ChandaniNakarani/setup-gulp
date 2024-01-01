// let displayValue = "";

// function appendToDisplay(value) {
//   displayValue += value;
//   updateDisplay();
// }

// function clearDisplay() {
//   displayValue = "";
//   updateDisplay();
// }

// function updateDisplay() {
//   const display = document.getElementById("display");
//   display.value = displayValue;
// }

// function calculate() {
//   try {
//     const result = eval(displayValue); // Using eval() here can be risky if not handled properly
//     displayValue = result.toString();
//     updateDisplay();
//   } catch (error) {
//     displayValue = "Error";
//     updateDisplay();
//   }
// }



// Temprature 

// var a = prompt("temprature of outside");
// // console.log (a);

// if (a > 30) {
//   document.getElementById("temp").innerHTML = "Today, is a very hot temparature,so u not go to outside of your house";
// }
// else
//   if (a <= 30 && a > 20) {
//     document.getElementById("temp").innerHTML = "Today, is a normal temparature, Get enjoy atmosphere";
//   }
//   else
//     if (a <= 20 && a>=15) {
//       document.getElementById("temp").innerHTML = "Today, is a cool temparature";

//     }
//     else {
//       document.getElementById("temp").innerHTML = "Today, is a very low temparature";

//     }



// Log in page

  //   function checkLogin() {
  //     var username = document.getElementById("username").value;
  //     var password = document.getElementById("password").value;
  //     var messageElement = document.getElementById("loginMessage");
      
  //     if (username === "Chandani Sangani" && password === "CA@123") {
  //         messageElement.textContent = "Login successful!";
  //         messageElement.style.color = "#00ff00";
  //     } else {
  //         messageElement.textContent = "Login failed. Please check your credentials.";
  //         messageElement.style.color = "#ff0000";
  //     }
  // }



  // Calculater
//   function calculate() {
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);
//     var operator = document.getElementById("operator").value;
//     var resultElement = document.getElementById("result");
    
//     var result;
    
//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = "Cannot divide by zero";
//         }
//     }
    
//     resultElement.textContent = "Result: " + result;
// }



// Convert temprature

function convertTemperature() {
        var temperature = parseFloat(document.getElementById("temperature").value);
        var unit = document.getElementById("unit").value;
        var resultElement = document.getElementById("convertedResult");
        
        var convertedTemperature;
        
        if (unit === "celsius") {
            convertedTemperature = (temperature * 9/5) + 32;
            resultElement.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " °F";
        } else if (unit === "fahrenheit") {
            convertedTemperature = (temperature - 32) * 5/9;
            resultElement.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " °C";
        }
    }