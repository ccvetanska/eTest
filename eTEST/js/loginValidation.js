function validateForm() {
    var un = document.loginform.login.value;
    var pw = document.loginform.password.value;
    var username = "i.ivanov";
    var password = "123456";
    if ((un == username) && (pw == password)) {
        return true;
    }
    else {
        alert("Login was unsuccessful, please check your username and password");
        return false;
    }
}