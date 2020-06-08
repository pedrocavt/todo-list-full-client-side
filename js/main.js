var myUser = new User()

function showTodoListContent() {
    $("#loginContent").hide("slow")
    $("#todoListContent").show("slow")
}


$(document).ready(function() {

    var resultIsAuthenticated = myUser.isAuthenticated()
    if (resultIsAuthenticated) {
        showTodoListContent()
    } else {
        $("#loginContent").show('slow')
    }


    $("#buttonSignIn").click(function() {

        let inputEmail = $("#inputEmail").val()
        let inputPassword = $("#inputPassword").val()

        var rememberMe = $("#rememberMe").is(":checked")

        var resultLogin = myUser.login(inputEmail, inputPassword, rememberMe)

        if (resultLogin == true) {
            alert("Usuário logado com sucesso")
            showTodoListContent()

        } else {
            alert("Verifique seus dados e tente novamente")
        }
    })
})