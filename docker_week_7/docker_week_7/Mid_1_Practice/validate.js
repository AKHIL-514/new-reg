function validate (){
    var name=document.getElementById("name").value.trim();
    var fname=document.getElementById("fname").value.trim();
    var mname=document.getElementById("mname").value.trim();
    var email=document.getElementById("email").value.trim();
    var pno=document.getElementById("pno").value.trim();
    var dob=document.getElementById("dob").value;
    var gender=document.querySelector("input[name='gender']:checked");
    var quali=document.getElementById("quali").value;

    if(name=='' || fname=='' || mname=='' || email=='' || pno=='' || dob=='' || quali== '')
    {
        alert('Please fill out all the fields.');
        return;
    }

    if(!gender)
    {
        alert('Please select a gender.');
        return;
    }

    var emailPattern = /@*\.com$/;
    if(!emailPattern.test(email))
    {
        alert("Please enter a valid email.");
        return;
    }

    if(pno.length !== 10 || isNaN(pno))
    {
        alert("Please enter a valid phone number.");
        return;
    }

    document.write(
        "ENTERED DETAILS ARE:<hr>"+
        "<br>Full name: " + name +
        "<br>Father's name: " + fname +
        "<br>Mother's name: " + mname +
        "<br>E-mail: " + email +
        "<br>Phone number: " + pno +
        "<br>Date of Birth: " + dob +
        "<br>Gender: " + gender.value +
        "<br>Qualification " + quali
    )

    alert("Registered Successfully.");
    return;
}