function validateFrom() {
    //Get input values
    let username = document.getElementsById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    //Reset previous messages
    document.getElementById("userError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("rsult").innerHTML = "";

    let valid = true;

    //Username validation
    let userPattern = /^[A-Za-z][A-Za-z0-9_.]{7,}$/;

    if(!userPattern.test(username)){
        document.getElementById("userError").innerHTML = "Username must start with alphabet and hava minimum 8 characters";
        
        valid = false;
    }
    let passPattern = /^(?=.*[a-z](?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&*]){8,}$/);

    if(!passPattern.test(password)){
        document.getElementById("passError").innerHTML = "Password must contain uppercase, lowercase, number and special character";

        valid = false;
    }
        //Email validation 
        let emailPattern = /^[A-Za-z0-9][A-Za-z0-9._+-]*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
        if(!emailPattern.test(email)){
            document.getElementById("emailError").innerHTML = "Please enter the valid email address.";
            
            valid = false;
        }
        //Final result
        if(valid){
            document.getElementById("result").innerHTML = "Registration Successful!";
            document.getElementById("result").innerHTML = "Success";
        }
        return false;
}