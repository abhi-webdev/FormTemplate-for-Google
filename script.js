

function validation(event) {
    const pass = document.getElementById("password").value;
    const conpass = document.getElementById("conpass").value;
    if(pass==""){
        alert("Please enter Password");
        event.preventDefault();
        return false;
    }else if(conpass==""){
        alert("Please enter confirm password");
        event.preventDefault();
        return false;
    }    else if(pass===conpass){
        alert("Yep! Password Matches");
        window.open('https://www.google.com/');
        return true;
    }
    else{
        alert("Password do not match: Please try again...");
        event.preventDefault();
        return false;
    }
}



