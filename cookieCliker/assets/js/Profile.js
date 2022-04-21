export default (mail = null, password = null)=>({
    email: mail,
    password: password,
    changeEmail(){
        fetch("/mail", {
            method: "POST",
            body: JSON.stringify({smail: mail})
        })
    },

    changePassword(){
        fetch("/password", {
            method: "POST",
            body: JSON.stringify({spassword: password})
        })
    },

    deleteAnUser(){

    }

})