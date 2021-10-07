
//managing all password protected projects

//project 1 - groupon booking

function openProject1() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
    while (testV < 3) {
    if (!pass1)
    history.go(-1);
    if (pass1.toLowerCase() == "letmein") {
    alert('You Got it Right!');
    window.location.href="html/g_booking.html"
    break;
    }
    testV+=1;
    var pass1 =
    prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3)
    history.go(-1);
    return " ";
}
    
    var cta = document.getElementById("cta_project1")
    cta.addEventListener("click", openProject1());
    

    
    