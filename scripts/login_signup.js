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
    /*When the user fills the values and submits, send the values to the url to save them in the db*/
    submit_signup.addEventListener("click", function() {
        /*Defining Variables*/
        let full_name = document.getElementById("full_name").value;
        let signup_email = document.getElementById("signup_email").value;
        let signup_pass = document.getElementById("signup_pass").value;

        /*Append the variables set by the user to the Form Data to send them to url*/
        let data = new FormData();
        data.append("full_name", full_name);
        data.append("signup_email", signup_email);
        data.append("signup_pass", signup_pass);

        axios({
            method: "post",
            url: "http://localhost:8080/ZomatoProject_BackEnd/signup.php",
            data: data,
        }).then(function(response) {
            console.log(response);
        });
    });
}

/*If the user clicks on login*/
function loginToMain() {
    /*Defining variables*/
    let login_email = document.getElementById("login_email").value;
    let login_pass = document.getElementById("login_pass").value;
    let data = new FormData();

    /*Append the variables set by the user to the Form Data to send them to url*/
    data.append("login_email", login_email);
    data.append("login_pass", login_pass);
    axios({
        method: "post",
        url: "http://localhost:8080/ZomatoProject_BackEnd/login.php",
        data: data,
    }).then(function(response) {
        let result = response.data;
        /*When logged in check if he's an admin or user and direct him to the next page accordingly*/
        let type = result.type;
        if (type == 1) {
            location.href = "../admin_page.html";
        } else {
            location.href = "../main_page.html";
        }
        localStorage.setItem("user_id", result.id);
    });
}
loginSignup();