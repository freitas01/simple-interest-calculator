function compute(){

    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseInt(interest);
    
         /*document.getElementById("result").innerText=interest;*/
   // document.getElementById("result").innerHTML = interest + "<br><br>" + "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + amount + ",\<br\>in the year " + year + "\<br\>";
   
   if (principal <= 0 ) {
   alert('Enter a positive number')
   return document.getElementById("principal").focus();
   
   }
   else {
    document.getElementById("result").innerHTML="If you deposit "+"<span style='background:yellow;'>"+principal+"</span>"+",\<br\>at an interest rate of "+"<span style='background:yellow;'>"+rate+"</span>"+"<span style='background:yellow;'>%</span>\<br\>You will receive an amount of "+"<span style='background:yellow;'>"+amount+"</span>"+",\<br\>in the year "+"<span style='background:yellow;'>"+year+"</span>"+"\<br\>"
   }

    
    /*console.log(principal);
    console.log(interest);
    console.log(principal+interest);*/

}


      

function updateRate() {

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
   
}
