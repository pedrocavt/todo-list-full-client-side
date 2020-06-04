let myUser = new User()

$(document).ready(function() {

    $("#buttonSignIn").click(function() {

        let inputEmail = $("#inputEmail").val()
        let inputPassword = $("#inputPassword").val()

        myUser.login(inputEmail, inputPassword)
    })
})