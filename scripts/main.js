function goToRestaurant() {
    var div = document.getElementsByClassName("all_restaurants");
    console.log(div[0]);
    div[0].addEventListener("click", function(e) {
        let restaurant_id = e.target.id;
        let data = new FormData();
        data.append("restaurant_id", restaurant_id);
        axios({
            method: "post",
            url: "http://localhost:8080/ZomatoProject_BackEnd/main.php",
            data: data,
        }).then(function(response) {
            console.log(response);
        });
    });
}
goToRestaurant();