function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = false;//true;
    clearErrors();
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*contact number should be 10 digits");
        returnval = false;
    }

    var regex_mail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var mailId = document.getElementById("mailId");
    check_mail = mailId.value;

    console.log(check_mail);
    console.log(check_mail.match(regex_mail));

    if (mailId.value.match(regex_mail)) {
        // seterror("email", "you have entered correct email");
        returnval = true;
    }
    else {
        seterror("email", "*Invalid email");
        returnval = false;
    }
    return returnval;
}


    