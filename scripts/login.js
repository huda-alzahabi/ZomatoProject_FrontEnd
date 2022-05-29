window.addEventListener("load", showSignUp, false);

function showSignUp() {
    let first_signup = document.getElementById("signup");
    let loginbox = document.getElementById("loginBox");
    let signupbox = document.getElementById("signupBox");
    let backbtn = document.getElementById("back");
    let submit_signup = document.getElementById("s");
    let username = document.getElementById("full_name").value;
    let email = document.getElementById("signup_email").value;
    let password = document.getElementById("signup_pass").value;

    first_signup.addEventListener("click", function() {
        loginbox.style.display = "none";
        signupbox.style.display = "block";
    });
    backbtn.addEventListener("click", function() {
        signupbox.style.display = "none";
        loginbox.style.display = "block";
    });

    submit_signup.addEventListener("click", function() {
        console.log(document.getElementById("full_name").value);
        console.log(document.getElementById("signup_email").value);
        console.log(document.getElementById("signup_pass").value);
        let vdata = new FormData();
        vdata.append("full_name", document.getElementById("full_name").value);
        vdata.append("email", document.getElementById("signup_email").value);
        vdata.append("password", document.getElementById("signup_pass").value);
        console.log(vdata);

        //     axios
        //         .post("http://localhost:8080/ZomatoProject_BackEnd/signup.php", data)
        //         .then(function(response) {
        //             console.log(response);
        //             location.href = "../main_page.html";
        //         });
        // });

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
                //handle error
                console.log(response);
            });
    });
}