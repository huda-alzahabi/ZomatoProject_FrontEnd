function viewResto() {
    var para = new URLSearchParams(window.location.search);
    var restaurant_id = para.get("KEY");
    console.log(restaurant_id);
    let url = "http://localhost:8080/ZomatoProject_BackEnd/main.php";
    url += "?restaurant_id=" + restaurant_id;
    axios({
        method: "GET",
        url,
    }).then(function(response) {
        console.log(response);
        let result = response.data;
        let message = result.status;
        let name = result.name;
        let description = result.description;
        if (message == "Message Sent!") {
            document.getElementById("name").innerHTML = name;
            document.getElementById("description").innerHTML = description;
        }
    });
    rateUs();
}

function rateUs() {
    /*When the user clicks rate us, the stars will appear so he can submit the rate*/
    document.getElementById("rateus").addEventListener("click", function() {
        document.getElementById("container").style.display = "inline-block";
        document.getElementById("rateus").style.display = "none";
    });

    /*When the user submits rate and review, send them to the database*/
    document.getElementById("button").addEventListener("click", function(e) {
        /*Counting stars rate submitted by the user*/
        let star_count = 0;
        var radios = document.getElementsByName("rate");
        /*get the id of the checked star, but since ids are rate-number, i put a regex to take only the number*/
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                star_count = radios[i].id;
                var rate = star_count.match(/\d/g)[0];
            }
        }

        /*Getting the comments sent by the user*/
        let comment = document.getElementById("comment").value;
        let data = new FormData();

        /*Append the variables set by the user to the Form Data to send them to url*/
        data.append("rate", rate);
        data.append("comment", comment);
        axios({
            method: "post",
            url: "http://localhost:8080/ZomatoProject_BackEnd/reviews.php",
            data: data,
        }).then(function(response) {
            /*If the review is sent, thank the user*/
            let result = response.data;
            let message = result.status;
            if (message == "Message Sent!") {
                document.getElementById("container").style.display = "none";
                document.getElementById("thanks").style.display = "block";
            }
        });
    });
}
viewResto();