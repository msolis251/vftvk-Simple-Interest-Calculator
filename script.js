// Function to compute the total interest
function compute()
{
    //collecting principal amount from user input.
    var principal = document.getElementById('principal').value;
    //Form validation
    if (principal <= 0) {
   	 	//validation shows alert if the amount is <=0
      alert("Enter a positive number.");
      //Focus on principal input if the input is <=0
      document.getElementById("principal").focus();
      //break function and return false if the form is invalid.
    	return false;
      }
    var rate = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rate;
    var years = document.getElementById('years').value;
    // Use the built in JS function to parse years int to calendar year.
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate / 100;
    //Console logs for debugging.
    console.log(interest, years, principal, rate);
    //Display the output for the interest calculator.
    document.getElementById('result').innerHTML="If you deposit <mark>"+ principal +"</mark>,<br> at an interest rate of <mark>"+ rate + "%</mark>. <br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>"+ year +"</mark>";
}
//Function to update the interest rate shown next to slider.
function updateRate()
{
    var rateval = document.getElementById('rate').value;
    //Console log to debug slider.
    console.log(rateval);
    document.getElementById("rate_val").innerText=rateval;
}