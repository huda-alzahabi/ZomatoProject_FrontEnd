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
            url: "http://localhost:8080/ZomatoProject_BackEnd/add_restaurants.php",
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

addRestaurants();