//these are for password-protected projects
function openProject_illo() {
    var testV = 1;
    var pass1 = prompt('Please Enter Password',' ');
    while (testV < 3) {
    if (!pass1)
    history.go(-1);
    if (pass1.toLowerCase() == "letmein") {
    window.location.href="html/g_illo.html"
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
    
 
function openProject_booking() {
    var testV = 1;
    var pass1 = prompt('Please Enter Password',' ');
    while (testV < 3) {
    if (!pass1)
    history.go(-1);
    if (pass1.toLowerCase() == "letmein") {
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
        
      