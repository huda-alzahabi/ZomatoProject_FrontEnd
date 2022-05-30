
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
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
