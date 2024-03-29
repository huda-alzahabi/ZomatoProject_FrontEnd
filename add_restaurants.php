<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Restaurant</title>
    <link rel="stylesheet" href="styles/add_rest.css">
</head>
<body>

    <?php include "admin_header.html" ?>
    <div class="editBox" id="editBox">
        <h3>ADD a RESTAURANT</h3>
        <form method="post" enctype="multipart/form-data">
           
            <div class="inputBox">
                <label >Name:</label><input id="name" type="text" name="name" >
                <label >Description:</label><input id="description" type="text" name="desc" >
                <label >Image:</label><input id="image" type="file" name="img"/>
            </div>
            <button class="submit" id="submit">Add Restaurant</button>

        </form>

    </div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="./scripts/add_restaurants.js"></script>

</body>

</html>