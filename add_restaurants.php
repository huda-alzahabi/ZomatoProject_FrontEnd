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

    <?php include "adminHeader.html" ?>

    <div class="editBox" id="editBox">
        <h3>ADD a RESTAURANT</h3>
        <form method="post" enctype="multipart/form-data">
            <div class="inputBox">
                <input id="name" type="text" name="name" placeholder="Name">
                <input id="desc" type="text" name="desc" placeholder="Description">
                <input type="file" name="img" required="required"/>
                
              
            </div>
            <input class="submit" type="submit" value="Add Restaurant" name="sbmt"/>
           
        </form>
       
    </div>   
       
    
    <script src="edit.js"></script>
   
</body>

</html>