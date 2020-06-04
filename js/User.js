class User {

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

    login(email, password) {
        this.usersAllwoed.map(function(item, index) {
            if (item.email == email) {

                if (item.password == password) {
                    alert("Usário tem permissão para acessar")
                } else {
                    alert("Seu email esta certo, mas sua senha esta errada")
                }
            }
        })
    }

    logout() {

    }
}