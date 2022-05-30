<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/main.css">
    <title>Main Page</title>
</head>

<body>
    <?php include "./header.html" ?>
    <!--Section 1 : Images Slider-->
    <div class="general_food_images container">
        <div class="overview">
            <h2>Hundreds of flavors under one roof.</h2>
            <div class="empty">
                <div class="slidershow middle">
                    <div class="slides">
                        <input type="radio" name="r" class="r1" id="r1" checked>
                        <input type="radio" name="r" class="r2" id="r2">
                        <input type="radio" name="r" class="r3" id="r3">
                        <input type="radio" name="r" class="r4" id="r4">
                        <input type="radio" name="r" class="r5" id="r5">
                        <div class="slide s1">
                            <img src="./assets/pizza.jpg">
                        </div>
                        <div class="slide">
                            <img src="./assets/burger.jpg">
                        </div>
                        <div class="slide">
                            <img src="./assets/egg.jpg">
                        </div>
                        <div class="slide">
                            <img src="./assets/pasta.jpg">
                        </div>
                        <div class="slide">
                            <img src="./assets/frenchfood.jpg">
                        </div>
                    </div>
                    <div class="navigation">
                        <label for="r1" class="bar"></label>
                        <label for="r2" class="bar"></label>
                        <label for="r3" class="bar"></label>
                        <label for="r4" class="bar"></label>
                        <label for="r5" class="bar"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Section 2: Statistics-->
    <section class="stats container">
        <div class="restaurant-numbers mobile">
            <div class="restaurant-numbers-part">
                <p class="restaurant-stat">450+</p>
                <p class="stat-description">Restaurants</p>
            </div>
            <div class="restaurant-numbers-part">
                <p class="restaurant-stat">30+</p>
                <p class="stat-description">Cuisines</p>
            </div>
            <div class="restaurant-numbers-part">
                <p class="restaurant-stat">165+</p>
                <p class="stat-description">Locations</p>
            </div>
        </div>
    </section>
    <!--Section 3: Restaurants-->
    <section class="restos container">
        <div class="all_restaurants mobile">
            <div class="restaurants_set">
                <img src="./assets/chopsticks.png" alt="">
                <h2>Chopsticks</h2>

            </div>
            <div class="restaurants_set">
                <img src="./assets/kfc.png" alt="">
                <h2>KFC</h2>

            </div>
            <div class="restaurants_set">
                <img src="./assets/pizzanini.jpg" alt="">
                <h2>Pizzanini</h2>

            </div>
        </div>
    </section>

    <!--Section 4: Contact Us-->
    <section class="container">
        <div class="contact mobile">
            <!--Animated Heart-->
            <div class="heart"></div>
            <div class="reachus">
                <h3>REACH US</h3>
                <p>Please do not hesitate to reach out:</p>
                <a href="emailto:food_masters@restos.com">Email: food_masters@restos.com</a><br>
                <a href="Tel:+96178718645">Call Center: +961-78-718645</a>

            </div>
        </div>
    </section>
      <?php include "./footer.html" ?>
    <script src="./scripts/main.js"></script>

</body>