function validateForm1(){
    var fname = document.getElementById("t1").value;
    var lname = document.getElementById("t2").value;
    var email = document.getElementById("t3").value;
    var comment = document.getElementById("t4").value;
    var isValid = true;
    if (fname == ""){
        document.getElementById("t1result").innerHTML = "First name is required";
        isValid = false;
    }
    else{
        document.getElementById("t1result").innerHTML = "";
    }
    if (lname == ""){
        document.getElementById("t2result").innerHTML = "Last name is required";
        isValid = false;
    }
    else{
        document.getElementById("t2result").innerHTML = "";
    }
    if (email == ""){
        document.getElementById("t3result").innerHTML = "Email is required";
        isValid = false;
    }
    else{
        document.getElementById("t3result").innerHTML = "";
    }
    if (comment == ""){
        document.getElementById("t4result").innerHTML = "A comment is required";
        isValid = false;
    }
    else{
        document.getElementById("t4result").innerHTML = "";
    }
    if(isValid ==true){
        document.getElementById("f1").submit();
    }
}
function validateForm2(){
    var age = document.getElementById("t1").value;
    var range = document.getElementById("b1").value;
    var topic = document.getElementById("t2").value;
    var comment = document.getElementById("t7").value;
    var isValid = true;
    if (age == ""){
        document.getElementById("t1result").innerHTML = "Age is required";
        isValid = false;
    }
    else if (age<14 || age>90){
        document.getElementById("t1result").innerHTML = "Age permitted between 16 and 90";
        isValid = false;
    }
    else{
        document.getElementById("t1result").innerHTML = "";
    }
    
    if (range > 0){
        document.getElementById("b1result").innerHTML = "";
    }
    else{
        document.getElementById("b1result").innerHTML = "A range is required";
        isValid = false;
    }
    
    if (topic == ""){
        document.getElementById("t2result").innerHTML = "Select an option!";
        document.getElementById("t2").style.borderColor = "red";
        isValid = false;
    }
    else{
        document.getElementById("t2").style.borderColor = "black";
        document.getElementById("t2result").innerHTML = "";
    }
    
    if (comment == ""){
        document.getElementById("t7result").innerHTML = "A comment is required";
        isValid = false;
    }
    else{
        document.getElementById("t7result").innerHTML = "";
    }
    
    if((document.getElementById("r1a").checked) || (document.getElementById("r2a").checked) || (document.getElementById("r3a").checked) || (document.getElementById("r4a").checked))
    {
        document.getElementById("t3result").innerHTML = "";
    }
    else{
        document.getElementById("t3result").innerHTML = "Select an option!";
        isValid = false;
    }
    
    if((document.getElementById("c1a").checked) || (document.getElementById("c2a").checked) || (document.getElementById("c3a").checked))
    {
        document.getElementById("t4result").innerHTML = "";
    }
    else{
        document.getElementById("t4result").innerHTML = "Select an option!";
        isValid = false;
    }
    
    if((document.getElementById("c1").checked) || (document.getElementById("c2").checked) || (document.getElementById("c3").checked) || (document.getElementById("c4").checked))
    {
        document.getElementById("t5result").innerHTML = "";
    }
    else{
        document.getElementById("t5result").innerHTML = "Select an option!";
        isValid = false;
    }

    if((document.getElementById("r1").checked) || (document.getElementById("r2").checked) || (document.getElementById("r3").checked) || (document.getElementById("r4").checked))
    {
        document.getElementById("t6result").innerHTML = "";
    }
    else{
        document.getElementById("t6result").innerHTML = "Select an option!";
        isValid = false;
    }
    
    if(isValid ==true){
        document.getElementById("f2").submit();
    }
}