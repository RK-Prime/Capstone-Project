function form_func(){
    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;

    let email_exp = "admin@admin.com";
    let pass_exp = "123456";

    if ((email === email_exp) & (password === pass_exp)){

        alert("Login Successful")
        
        setTimeout(function(){
            location.reload();
        }, 5);
        
        console.log("Login Succesful");
        
    }

    else{
        alert("Incorrect email or password");
        
        setTimeout(function(){
            location.reload();
        }, 5);

        console.log("Login Error");
    }
}

console.log("Email : admin@admin.com");
console.log("Password : 123456")