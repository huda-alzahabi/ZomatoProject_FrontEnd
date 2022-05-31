function goToResto() {
    var div = document.getElementsByClassName("all_restaurants");
    div[0].addEventListener("click", function(e) {
        var para = new URLSearchParams();
        para.append("KEY", e.target.id);
        location.href =
            "http://localhost:8080/ZomatoProject_FrontEnd/restaurant.php?restaurant_id=" +
            para.toString();
    });
}
goToResto();