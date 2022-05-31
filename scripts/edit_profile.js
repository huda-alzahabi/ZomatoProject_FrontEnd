function editProfile() {
    /*Defining variables*/
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("login_email").value;
    let data = new FormData();

    /*Append the variables set by the user to the Form Data to send them to url*/
    data.append("login_email", name);
    data.append("login_pass", email);
    axios({
        method: "post",
        url: "http://localhost:8080/ZomatoProject_BackEnd/edit_profile.php",
        data: data,
    }).then(function(response) {
        console.log(response);
    });
}
editProfile();