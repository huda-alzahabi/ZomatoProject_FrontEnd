<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>View Users</title>
  <link rel="stylesheet" href="styles/view.css">


</head>


<body>
  <?php include("admin_header.html"); ?>
  <?php include("admin_sidenav.html"); ?>



  <div id="view" >
    <h3>View Users</h3>


  

    <table id = "tab" class="tab">
      <tr>
        <th id="id">ID</th>
        <th id="name">Name</th>
        <th id="email">Email</th>
      </tr>

</table>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="scripts/admin_apis.js"></script>
</body>
</html>