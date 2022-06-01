function viewRestaurants() {
    axios({
        method: "GET",
        url: "http://localhost:8080/ZomatoProject_BackEnd/view_restaurants.php",
    }).then(function(response) {
        for (let i = 0; i < response.data.length; i++) {
            var view = document.querySelector("#tab");
            var viewClone = view.cloneNode(true);

            viewClone.id = "viewss";
            viewClone.querySelector("#id").innerText = response.data[i]["id"];

            viewClone.querySelector("#name").innerText = response.data[i]["name"];

            viewClone.querySelector("#description").innerText =
                response.data[i]["description"];

            document.body.appendChild(viewClone);
        }
        document.querySelector("#view").remove;
    });
}
viewRestaurants();

document.getElementById("href").addEventListener("click", function() {
    location.href = "./add_restaurants.php";
});