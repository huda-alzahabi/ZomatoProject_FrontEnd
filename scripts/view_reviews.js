//viewReviews() allows admin to view all reviews added by users
function viewReviews() {
  axios({
    method: "GET",
    url: "http://localhost/ZomatoProject_BackEnd/view_reviews.php",
  }).then(function (response) {
    for (let i = 0; i < response.data.length; i++) {
      var view = document.querySelector("#tab");
      var viewClone = view.cloneNode(true);

      viewClone.id = "viewss";
      viewClone.querySelector("#id").innerText = response.data[i]["id"];

      viewClone.querySelector("#stars").innerText = response.data[i]["stars"];

      viewClone.querySelector("#reviews").innerText =
        response.data[i]["reviews"];

      document.body.appendChild(viewClone);
    }
    document.querySelector("#view").remove;
  });
}
viewReviews();
