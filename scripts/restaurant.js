var ajax = new XMLHttpRequest();
ajax.open("GET", "restaurant.php", true);
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