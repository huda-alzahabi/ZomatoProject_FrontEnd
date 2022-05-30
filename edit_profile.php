<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Profile</title>
    <link rel="stylesheet" href="styles/edit.css">
</head>

<body>
    <?php include "./header.html" ?>
    <div class="editBox" id="editBox"> <img class="userImg" src="./assets/pizza1.png" height="100px" width="100px">
        <h2>EDIT PROFILE</h2>
        <form>
            <div class="inputBox">
                <input id="fullname" type="text" name="fullname" placeholder="Full Name">
                <input id="login_email" type="text" name="Email" placeholder="Email">

            </div>
            <button class="update">Update</button>
        </form>
        <script src="edit.js"></script>
</body>

</html>