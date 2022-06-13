/*Check whether the user wants to signup or login and act accordingly*/
function loginSignup() {
    document.getElementById("register").addEventListener("click", showSignUp);
    document.getElementById("login").addEventListener("click", loginToMain);
}

/*If the user clicks on signup*/
function showSignUp() {
    /*Defining variables*/
    let loginbox = document.getElementById("loginBox");
    let signupbox = document.getElementById("signupBox");
    let backbtn = document.getElementById("back");
    let submit_signup = document.getElementById("s");

    /*If clicked on signup, go to signup box and hide login box*/
    loginbox.style.display = "none";
    signupbox.style.display = "block";
    backbtn.addEventListener("click", function() {
        signupbox.style.display = "none";
        loginbox.style.display = "block";
    });

    submit_signup.addEventListener("click", function() {
        /*Defining Variables*/
        let full_name = document.getElementById("full_name").value;
        let signup_email = document.getElementById("signup_email").value;
        let signup_pass = document.getElementById("signup_pass").value;
        let conf_pass = document.getElementById("conf_pass").value;

        /*Append the variables set by the user to the Form Data to send them to url*/
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/v1/register",
            data: {
                name: full_name,
                email: signup_email,
                password: signup_pass,
                password_confirmation: conf_pass,
            },
        }).then((response) => {
            console.log(response);
            result = response.data;
            location.href = "../pages/login_signup.html";
        });
    });
}
/*If the user clicks on login*/
function loginToMain() {
    /*Defining variables*/
    let login_email = document.getElementById("login_email").value;
    let login_pass = document.getElementById("login_pass").value;

    /*Append the variables set by the user to the Form Data to send them to url*/
    axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/v1/login",
        data: {
            email: login_email,
            password: login_pass,
        },
    }).then(function(response) {
        result = response.data;
        console.log(result);
        location.href = "../index.html";
    });
}
loginSignup();