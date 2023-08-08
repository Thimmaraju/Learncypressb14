class loginPage{

    orangeHRMLogo(){

        return 'img[alt="company-branding"]'
    }

    usernameInput(){

        return 'input[name="username"]'
    }

    passwordInput(){
        
        return 'input[type="password"]'
    }

    loginButton(){

        return 'button[type="submit"]'
    }


}

const login = new loginPage()

export default login

//coding guide lines 

//camel casing - code guide line