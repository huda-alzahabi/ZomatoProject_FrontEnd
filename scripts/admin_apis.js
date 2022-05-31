
document.getElementById("submit").addEventListener("click", addRestaurants());
//addRestaurants() Allows the admin to add resaturants
function addRestaurants() {
    /*If the user clicks on add restaurant*/
    let add_rest = document.getElementById("submit");
    add_rest.addEventListener("click", function(e) {
        e.preventDefault();

        /*Declaring variables*/
        let name = document.getElementById("name").value;
        let desc = document.getElementById("description").value;
        let image = document.getElementById("image").value;

        /*Append the variables set by the user to the Form Data to send them to url*/
        let data = new FormData();
        data.append("name", name);
        data.append("description", desc);
        // const imagefile = document.getElementById('#file');
        // data.append("image", imagefile.files[0]);
        // axios.post('image', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data'

        //     }
        // })

        axios({
            method: "post",
            url: "http://localhost/ZomatoProject_BackEnd/add_restaurants.php",
            data: data,
        }).then(function(response) {
            document.getElementById("name").value = "";
            desc = document.getElementById("description").value = "";
            /*If the restaurant is added, inform the admin*/
            let result = response.data;
            let message = result.status;
            if (message == "Message Sent!") {
             alert("Restaurant Added!");
                
            }
        });
    });
}

//addRestaurants();

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