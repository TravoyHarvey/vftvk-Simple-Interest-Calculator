//This function updates the rate dynamically using a slider
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

//Interest Formula compute()
function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * rate * years / 100);
  var year = new Date().getFullYear() + parseInt(years);

  document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest  + ",\<br\>in the year " + year + "\<br\>"

}

//If the user enters zero or negative values, show an alert "Enter a positive number"
//Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box
function principalVal() {
	var principal = document.getElementById("principal").value;
  
  if(principal.value == '' || principal.value < 1 || (isNaN(principal.value))) {
 		alert("Enter a positive number");
  	document.getElementById("principal").focus();
	}
  else if (principal.value >= 1) {
  compute();
  }
  else {
  return true;
  }
}
