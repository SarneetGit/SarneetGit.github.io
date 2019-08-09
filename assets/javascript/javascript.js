// Animations initialization
new WOW().init();

function validateForm() {
    var name = $('#formName').val();
    if (name == "") {
        alertify.alert().set('message', 'Try adding your name.').setHeader('Something looks off...').show();
        return false;
    }
    var email = $('#formEmail').val();
    if (email == "") {
        alertify.alert().set('message', 'Try adding your input an email address.').setHeader('Something looks off...').show();
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            alertify.alert().set('message', 'Make sure you input a valid email address.').setHeader('Something looks off...').show();
            return false;
        }
    }
    var message = $('#message').val();
    if (message == "") {
        alertify.alert().set('message', 'Try adding a message so I can do my best to reply to your email.').setHeader('Something looks off...').show();
        return false;
    }
    //Initialize spinner
    $(".spinner").removeClass("d-none")
    return true
}