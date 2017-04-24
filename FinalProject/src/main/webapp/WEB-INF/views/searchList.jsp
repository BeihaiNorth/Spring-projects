<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>
    <title>restaurant list</title>
    <!-- <link rel="stylesheet" href="images/main.css">  -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="JS/jquery-1.js" type="text/javascript"></script>
    <script src="JS/restaurantList.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="CSS/restaurant.css">
    <link rel="stylesheet" href="CSS/footer.css">
    <!-- <link rel="stylesheet" href="CSS/restaurantList.css"> -->
    <link rel="stylesheet" href="CSS/restaurantList2.css">
    <link rel="stylesheet" type="text/css" href="CSS/main.css">
</head>

<body data-spy="scroll" data-target="#myScrollspy" data-offset="10" ng-app="myShoppingList" ng-controller="myCtrl">
    <!-- navbar -->
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">FOOD</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <img src="images/resListTop.jpg" width="100%">
    <div class="container-fluid">
        <div class="row content">
            <div class="col-sm-3 sidenav">
                <h1>Restaurant List</h1>
                <br>
                <form id="filter">
                    <fieldset>
                        <legend>Filter by cusine type</legend>
                        <ul class="filterSection">
                            <li>
                                <label>
                                    <input name="type" value="all" type="radio" checked="checked">All restaurants</label>
                            </li>
                            <li>
                                <label>
                                    <input name="type" value="assian" type="radio">Assian Cuisine</label>
                            </li>
                            <li>
                                <label>
                                    <input name="type" value="chicken" type="radio">Chicken</label>
                            </li>
                            <li>
                                <label>
                                    <input name="type" value="coffee" type="radio">Coffee</label>
                            </li>
                            <li>
                                <label>
                                    <input name="type" value="pizza" type="radio">Pizza</label>
                            </li>
                        </ul>
                    </fieldset>
                    <br>
                    <fieldset>
                        <legend>Sort by</legend>
                        <ul>
                            <li>
                                <label>
                                    <input name="sort" value="price" checked="checked" type="radio">Price</label>
                            </li>
                            <li>
                                <label>
                                    <input name="sort" value="time" type="radio">Time</label>
                            </li>
                            <li>
                                <label>
                                    <input name="sort" value="name" type="radio">Name</label>
                            </li>
                            <li>
                                <label>
                                    <input name="sort" value="rating" type="radio">Rating</label>
                            </li>
                        </ul>
                    </fieldset>
                </form>
            </div>
            <div class="col-sm-9">
                <div class="panel panel-default">
                    <div class="panel-body" id="foodlist">
                        <br>
                        <div class="list-group">
                            <ul id="applications" class="image-grid">
                                <li class="list-group-item" data-id="id-1" data-type="assian">
                                    <a href="restaurant2.html"><img class="float" src="img/logo4.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant2.html"><strong>FACTORY of KEBAB</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">4</span></p>
                                    <p>Assian, Indian
                                        <br>
                                    </p><img src="images/rating4.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time"> 30min</span> | Average Consumption: &#36 <span data-type="price">12</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-2" data-type="assian">
                                    <a href="restaurant4.html"><img class="float" src="img/logo3.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant4.html"><strong>ICHIBAN</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">3</span></p>
                                    <p>Assian, Japanese
                                        <br>
                                    </p><img src="images/rating3.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time"> 35min</span> | Average Consumption:&#36 <span data-type="price">14</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-3" data-type="assian">
                                    <a href="restaurant6.html"><img class="float" src="img/logo6.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant6.html"><strong>Asian Kitchen</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">5</span></p>
                                    <p>Assian
                                        <br>
                                    </p><img src="images/rating5.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time">40min</span> | Average Consumption:&#36 <span data-type="price">8</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-4" data-type="assian">
                                    <a href="restaurant9.html"><img class="float" src="img/logo9.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant9.html"><strong>MALA</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">3</span></p>
                                    <p>Assian, Chinese
                                        <br>
                                    </p><img src="images/rating3.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time">28min</span> | Average Consumption:&#36 <span data-type="price">7.5</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-5" data-type="chicken">
                                    <a href="restaurant.html"><img class="float" src="img/logo.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant.html"><strong>POPEYES</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">2</span></p>
                                    <p>Chicken
                                        <br>
                                    </p><img src="images/rating2.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time">29min</span> | Average Consumption: &#36 <span data-type="price">9.5</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-6" data-type="chicken">
                                    <a href="restaurant10.html"><img class="float" src="img/logo10.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant10.html"><strong>Temptations</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">5</span></p>
                                    <p>Chicken
                                        <br>
                                    </p><img src="images/rating5.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time">29min</span> | Average Consumption: &#36 <span data-type="price">8.7</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-7" data-type="chicken">
                                    <a href="restaurant11.html"><img class="float" src="img/logo11.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant11.html"><strong>UBURGER</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">4</span></p>
                                    <p>Chicken, Burger
                                        <br>
                                    </p><img src="images/rating4.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time">22min</span> | Average Consumption: &#36 <span data-type="price">9</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-8" data-type="coffee">
                                    <a href="restaurant5.html"><img class="float" src="img/logo5.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant5.html"><strong>JAVAJAM COFFEE HOUSE</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">4</span></p>
                                    <p>Coffee, Bread
                                        <br>
                                    </p><img src="images/rating4.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time">29min</span> | Average Consumption: &#36 <span data-type="price">4.5</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-9" data-type="coffee">
                                    <a href="restaurant12.html"><img class="float" src="img/logo12.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant.html"><strong>Coffee coffee</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">3</span></p>
                                    <p>Coffee
                                        <br>
                                    </p><img src="images/rating3.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time">32min</span> | Average Consumption: &#36 <span data-type="price">3</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-10" data-type="pizza">
                                    <a href="restaurant3.html"><img class="float" src="img/logo2.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant3.html"><strong>CAPPY'S PIZZA</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">4</span></p>
                                    <p>Pizza
                                        <br>
                                    </p><img src="images/rating4.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time">20min</span> | Average Consumption: &#36 <span data-type="price">9.2</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-11" data-type="pizza">
                                    <a href="restaurant7.html"><img class="float" src="img/logo7.jpg" alt="" height="90" width="90"></a>
                                    <a href="restaurant7.html"><strong>PAPA JOHN'S</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">2</span>
                                        <p>Pizza
                                            <br>
                                        </p><img src="images/rating2.png" class="resListRight" height="20">
                                        <p>Estimated Time: <span data-type="time">42min</span> | Average Consumption: &#36 <span data-type="price">6.3</span></p>
                                </li>
                                <li class="list-group-item" data-id="id-12" data-type="pizza">
                                    <a href="restaurant8.html"><img class="float" src="img/logo8.jpg"" alt="" height="90" width="90"></a>
                                    <a href="restaurant8.html"><strong>Domino's</strong></a>
                                    <br>
                                    <p class="resListRight">Rating <span data-type="rating">3</span></p>
                                    <p>Pizza
                                        <br>
                                    </p><img src="images/rating3.png" class="resListRight" height="20">
                                    <p>Estimated Time: <span data-type="time">33min</span> | Average Consumption: &#36 <span data-type="price">5.8</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer id="footer">
        <div class="container">
            <div class="footerLinks">
                <div>
                    <a class="footerLinksLink" href=#>About us</a>
                    <a class="footerLinksLink" href=#>Jobs</a>&nbsp;&nbsp;
                    <a class="footerLinksLink" href=#>Blog</a>&nbsp;&nbsp;
                    <a class="footerLinksLink" href=#>FAQ</a>
                </div>
            </div>
            <div class="footerSocialIcons">
                <a class="footerSocialIconsIcon" href="https://twitter.com/" target="_blank">
                    <img class="icon" src="img/twitter.svg" alt="twitter">
                </a>
                <a class="footerSocialIconsIcon" href="https://facebook.com/" target="_blank">
                    <img class="icon" src="img/facebook.svg" alt="facebook">
                </a>
                <a class="footerSocialIconsIcon" href="https://instagram.com/" target="_blank">
                    <img class="icon" src="img/instagram.svg" alt="instagram">
                </a>
                <a class="footerSocialIconsIcon" href="https://google.com/" target="_blank">
                    <img class="icon" src="img/google.svg" alt="google">
                </a>
            </div>
            <div class="footerLegal">
                Copyright &copy; 2016 Designed and built by WYT, Tweety, Leslie and Hailie.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
    </footer>
</body>

</html>

