class User {

    KEY_USER_LOGGED = "user_logged" //Variavel para chamar na SessionStorage
    KEY_USER_LOGGED_EMAIL = "user_logged_email" //Variavel para chamar na SessionStorage

    usersAllwoed = [

        {
            email: "pedrocavt@gmail.com",
            password: "123456"
        },

        {
            email: "anamaria@gmail.com",
            password: "123456"
        }
    ]

    login(email, password, rememberMe) {
        var result = false

        var self = this

        this.usersAllwoed.map(function(item, index) {


            if (item.email == email) {
                if (item.password == password) {
                    result = true

                    if (rememberMe == true) {
                        localStorage.setItem(self.KEY_USER_LOGGED, true) //registrar no SessionStorage que o usuario esta logado
                        localStorage.setItem(self.KEY_USER_LOGGED_EMAIL, email) //registrar no SessionStorage o email do usuário

                    } else {
                        sessionStorage.setItem(self.KEY_USER_LOGGED, true) //registrar no SessionStorage que o usuario esta logado
                        sessionStorage.setItem(self.KEY_USER_LOGGED_EMAIL, email) //registrar no SessionStorage o email do usuário
                    }


                }
            }
        })
        return result

    }

    logout() {

    }

    isAuthenticated() {

        var sessionStorageLogged = sessionStorage.getItem(this.KEY_USER_LOGGED)
        var localStorageLogged = localStorage.getItem(this.KEY_USER_LOGGED)

        if (localStorageLogged == "true") {
            return true
        }

        if (sessionStorageLogged == "true") {
            return true
        }
    }
}