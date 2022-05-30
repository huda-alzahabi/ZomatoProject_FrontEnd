function addRestaurants() {
  let add_rest = document.getElementById("sbmt");
  console.log(add_rest);
  let name = document.getElementById("name").value;
  let desc = document.getElementById("desc").value;

  add_rest.addEventListener("click", function () {
    //let pic = document.getElementById("pic").value;

    console.log(name);
    let data = new FormData();
    data.append("name", name);
    data.append("desc", desc);
    //data.append("signup_pass", signup_pass);

    axios({
      method: "post",
      url: "http://localhost/ZomatoProject_BackEnd/add_restaurants.php",
      data: data,
    })
      .then(function (response) {
        console.log(response);
        location.href = "../main_page.html";
      })
      .catch(function (response) {
        console.log(response);
      });
  });
}
addRestaurants();
