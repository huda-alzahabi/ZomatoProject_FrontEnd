function loginSignup() {
    document.getElementById("signup").addEventListener("click", showSignUp);
    document.getElementById("login").addEventListener("click", loginToMain);
}

function showSignUp() {
    let loginbox = document.getElementById("loginBox");
    let signupbox = document.getElementById("signupBox");
    let backbtn = document.getElementById("back");
    let submit_signup = document.getElementById("s");
    loginbox.style.display = "none";
    signupbox.style.display = "block";
    backbtn.addEventListener("click", function() {
        signupbox.style.display = "none";
        loginbox.style.display = "block";
    });

    submit_signup.addEventListener("click", function() {
        console.log(document.getElementById("full_name").value);
        console.log(document.getElementById("signup_email").value);
        console.log(document.getElementById("signup_pass").value);
        console.log("Pressed");

        let vdata = new FormData();
        vdata.append("full_name", document.getElementById("full_name").value);
        vdata.append("signup_email", document.getElementById("signup_email").value);
        vdata.append("signup_pass", document.getElementById("signup_pass").value);

        axios({
                method: "post",
                url: "http://localhost:8080/ZomatoProject_BackEnd/signup.php",
                data: vdata,
            })
            .then(function(response) {
                console.log(response);
                location.href = "../main_page.html";
            })
            .catch(function(response) {
                console.log(response);
            });
    });
}

function loginToMain() {
    let data = new FormData();
    data.append("login_email", document.getElementById("login_email").value);
    data.append("login_pass", document.getElementById("login_pass").value);
    console.log(data);
    axios({
            method: "post",
            url: "http://localhost:8080/ZomatoProject_BackEnd/login.php",
            data: data,
        })
        .then(function(response) {
            console.log(response);
            location.href = "../main_page.html";
        })
        .catch(function(response) {
            console.log(response);
        });
}
loginSignup();