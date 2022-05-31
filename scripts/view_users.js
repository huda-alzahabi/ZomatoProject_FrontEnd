// viewUsers() allows admin to view registered users

function viewUsers() {
    axios({
        method: "GET",
        url: "http://localhost/ZomatoProject_BackEnd/view_users.php",
    }).then(function(response) {
        for (let i = 0; i < response.data.length; i++) {
            var view = document.querySelector("#tab");
            var viewClone = view.cloneNode(true);

            viewClone.id = "viewss";
            viewClone.querySelector("#id").innerText = response.data[i]["id"];

            viewClone.querySelector("#name").innerText =
                response.data[i]["full_name"];

            viewClone.querySelector("#email").innerText = response.data[i]["email"];

            document.body.appendChild(viewClone);
        }
        document.querySelector("#view").remove;
    });
}

viewUsers();