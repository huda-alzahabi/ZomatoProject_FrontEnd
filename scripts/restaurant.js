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
            let result = response.data;
            let message = result.status;
            if (message == "Message Sent!") {
                document.getElementById("container").style.display = "none";
                document.getElementById("thanks").style.display = "block";
            }
        });
    });
}
rateUs();