function clearErrors() {
    errors = document.getElementsByClassName("formerrors");
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function setErrors(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm() {
    var returnv = true;
    clearErrors();
    //name
    var x = document.forms["sign-up"]["signup-nm"].value;
    if (x.length > 20) {
        setErrors("full-nm", "Name is too long");
        return false;
    }
    if (x.length < 5) {
        setErrors("full-nm", "Name is too short");
        return false;
    }
    //email
    var y = document.forms["sign-up"]["signup-email"].value;
    if (y.length > 30) {
        setErrors("email", "Email is too long");
        returnv = false;
    }
    //psd
    var password = document.forms['sign-up']["signup-password"].value;
    if (password.length < 8) {
        setErrors("psd", "Password should be at least 8 characters long!");
        returnv = false;
    }
    var cpassword = document.forms['sign-up']["signup-cpassword"].value;
    if (cpassword != password) {
        setErrors("c-psd", "Password and Confirm password should match!");
        returnv = false;
    }
    return returnv;
}