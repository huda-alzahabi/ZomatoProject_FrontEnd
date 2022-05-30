function addRestaurants() {
    /*If the user clicks on add restaurant*/
    let add_rest = document.getElementById("submit");
    add_rest.addEventListener("click", function(e) {
        e.preventDefault();

        /*Declaring variables*/
        let name = document.getElementById("name").value;
        let desc = document.getElementById("description").value;

        /*Append the variables set by the user to the Form Data to send them to url*/
        let data = new FormData();
        data.append("name", name);
        data.append("description", desc);

        axios({
                method: "post",
                url: "http://localhost:8080/ZomatoProject_BackEnd/add_restaurants.php",
                data: data,
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(response) {
                console.log(response);
            });
    });
}
addRestaurants();