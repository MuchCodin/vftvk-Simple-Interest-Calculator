function compute()
{

    // initiallizing variables for principal, rate and years
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // formula for calculating interest
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");  
    result.innerHTML = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+ interest +",\<br\>in the year "+year+"\<br\>"
    
}
// function to change the rate as you drag the slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
// function to check for a valid amount entered by user
function dataValidation(){
    var Principal = document.getElementById("principal").value;
    if(Principal <= 0){
        alert("Please enter a positive number");
            Principal.focus();
    }
}