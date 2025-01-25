

function successful(event) {
    
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if(user!=="" && pass!==""){
        alert("Login Successful!");
        window.open(www.google.com);
        location =location['href'];
    }
    else{
        alert("Invalid Username or password! Please try Again");
        event.preventDefault();
        return false;
   }
}