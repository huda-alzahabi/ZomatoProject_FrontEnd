function addRestaurants() {
    let add_rest = document.getElementById("submit");
    add_rest.addEventListener("click", function(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let desc = document.getElementById("description").value;
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