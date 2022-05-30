var ajax = new XMLHttpRequest();
ajax.open(
    "GET",
    "http://localhost:8080/ZomatoProject_BackEnd/restaurant.php",
    true
);
ajax.send();

ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);

        for (var a = 0; a < data.length; a++) {
            document.getElementById("name").innerHTML = data[a].name;
            document.getElementById("description").innerHTML = data[a].description;
            document.getElementById("image").innerHTML = data[a].image;
        }
    }
};
// const btn = document.querySelector("button");
// const post = document.querySelector(".post");
// const widget = document.querySelector(".star-widget");
// const editBtn = document.querySelector(".edit");
// btn.onclick = () => {
//     widget.style.display = "none";
//     post.style.display = "block";
//     editBtn.onclick = () => {
//         widget.style.display = "block";
//         post.style.display = "none";
//     };
//     return false;
// };