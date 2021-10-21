function compute()
{
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rate;
    var years = document.getElementById('years').value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * year * rate / 100;
}
function updateRate()
{
    var rateval = document.getElementById('rate').value;
    document.getElementById('result').innerText=rateVal;
}