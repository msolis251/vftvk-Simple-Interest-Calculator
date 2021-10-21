function compute()
{
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rate;
    var years = document.getElementById('years').value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate / 100;
    console.log(interest, years, principal, rate);
    console.log(interest);
    document.getElementById('result').innerHTML="If you deposit "+ principal +",<br> at an interest rate of "+ rate + "%. <br>You will receive an amount of " + interest + ",<br>in the year "+ year;
}
function updateRate()
{
    var rateval = document.getElementById('rate').value;
    console.log(rateval);
    document.getElementById("rate_val").innerText=rateval;
}