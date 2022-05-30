<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/restaurants.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <title>Restaurant</title>
</head>

<body>
    <?php include "./header.html" ?>

    <div class="resto">
        <div class="info">
            <h2 id="name">Chopsticks</h2>
            <p id="description">Chopsticks serves up a contemporary twist on Chinese food. Here authentic flavors combine in a unique, casual yet refined setting. The ambiance is relaxing and welcoming, making Chopsticks ideal for business meals, family outings, lunch with friends and romantic dinners.</p>
        </div>
         <div class="img"><img src="./assets/chopsticks.png" id="img"></div>
    </div>

    <div class="rating">
        <div class="container">
            <div class="star-widget">
                <input type="radio" name="rate" id="rate-5">
                <label for="rate-5" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-4">
                <label for="rate-4" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-3">
                <label for="rate-3" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-2">
                <label for="rate-2" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-1">
                <label for="rate-1" class="fas fa-star"></label>
                <form action="#">
                    <header></header>
                    <div class="textarea">
                        <textarea cols="30" placeholder="Describe your experience.."></textarea>
                    </div>
                    <div class="btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
     <?php include "./footer.html" ?>
    <script src="./scripts/restaurant.js"></script>
</body>
</html>