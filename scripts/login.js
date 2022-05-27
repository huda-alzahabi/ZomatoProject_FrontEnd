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
}

