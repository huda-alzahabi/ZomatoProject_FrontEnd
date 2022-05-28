window.addEventListener("load", showSignUp, false);

function showSignUp() {
    document.getElementById("signup").addEventListener("click", function() {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("signupBox").style.display = "block";
    });
    document.getElementById("back").addEventListener("click", function() {
        document.getElementById("signupBox").style.display = "none";
        document.getElementById("loginBox").style.display = "block";
    });

    document.getElementById("s").addEventListener("click", function() {
        let data = new FormData();

        data.append("signup_email", "Test@hotmail.com");
        data.append("signup_pass", "9898");
        data.append("full_name", "Huda");
        axios({
            method: "post",
            url: "http://localhost:8080/ZomatoProject_BackEnd/signup.php",
            data: data,
        }).then(function(response) {
            console.log(response);
            location.href = "../main_page.html";
        });
    });
}