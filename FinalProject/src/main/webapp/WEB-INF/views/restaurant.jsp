<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>POPEYE</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="CSS/restaurant.css">
    <link rel="stylesheet" href="CSS/footer.css">
    <link rel="stylesheet" type="text/css" href="CSS/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src=" https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js "></script>
    <script src="JS/restaurant.js"></script>
    <!-- Add Google Maps -->
    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script>
    var myCenter = new google.maps.LatLng(42.339222, -71.087520);

    function initialize() {

        var mapProp = {

            center: myCenter,

            zoom: 12,

            scrollwheel: false,

            draggable: false,

            mapTypeId: google.maps.MapTypeId.ROADMAP

        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var marker = new google.maps.Marker({

            position: myCenter,

        });
        marker.setMap(map);

    }
    google.maps.event.addDomListener(window, 'load', initialize);
    </script>
    <style>
    .restaurant-theme-img-sm {
        margin-top: 0;
        height: 150px;
        background-image: url('img/background.jpg');
        background-size: cover;
    }
    
    .restaurant-theme-img-lg {
        margin-top: 0;
        height: 300px;
        background-image: url('img/background.jpg');
        background-size: cover;
        color: #fff;
    }
    </style>
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
                <a class="navbar-brand" href="#">FOOD</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="restaurantList.html">LIST</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- img header -->
    <div class="container-fluid" id="theme-img-container">
        <div class="restaurant-theme-img-lg">
            <div class="restaurant-info row">
                <div class="col-xs-1 col-sm-4">
                    <img src="img/logo.jpg" width="130">
                </div>
                <div class="col-xs-11 col-sm-8">
                    <h1>POPEYES</h1>
                    <p><b>360 Huntington Street, Boston, MA 02115 | Chicken, Tender, Fastfood</b></p>
                    <p><b>Min $20.00</b></p>
                    <p><b>Estimated time 35-40 min</b></p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <nav class="col-sm-3" id="myScrollspy">
                <div class="panel panel-default">
                    <div class="panel-body" data-spy="affix" data-offset-top="350">
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#section0">Resturant Info</a></li>
                            <li><a href="#section1">Real Meals</a></li>
                            <li><a href="#section2">Louisiana Travelers</a></li>
                            <li><a href="#section3">Big Easy</a></li>
                            <li><a href="#section4">Local Favorites</a></li>
                            <li><a href="#section5">Desserts</a></li>
                            <li><a href="#section6">Beverages</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- food menu -->
            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-body" id="foodlist">
                        <div id="section0">
                            <h2>POPEYES</h2>
                            <p>Open time: 10 am - 23 pm</p>
                        </div>
                        <div id="section1">
                            <h2>Real Meals</h2>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="1">
                                        <span id="food1">3 Pieces Combo</span>
                                        <span class="label label-primary">
                                            <span>$</span>
                                        <span id="price1">7.89</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="2"><span id = "food2" >4 Pieces Combo</span><span class="label label-primary"><span>$</span><span id="price2">9.89</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="3"><span id = "food3" >5 Wings Combo</span><span class="label label-primary"><span>$</span><span id="price3">6.00</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="4"><span id = "food4" >Cajun Fish Combo</span><span class="label label-primary"><span>$</span><span id="price4">9.89</span></span></a></li>
                            </ul>
                        </div>
                        <div id="section2">
                            <h2>Louisiana Travelers</h2>
                            <ul class="list-group">
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="5"><span id = "food5" >3 Tenders</span><span class="label label-primary"><span>$</span><span id="price5">4.89</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="6"><span id = "food6" >5 Tenders</span><span class="label label-primary"><span>$</span><span id="price6">6.89</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="7"><span id = "food7" >6 Nuggets</span><span class="label label-primary"><span>$</span><span id="price7">7.59</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="8"><span id = "food8" >9 Nuggets</span><span class="label label-primary"><span>$</span><span id="price8">10.89</span>9</span></a></li>
                            </ul>
                        </div>
                        <div id="section3">
                            <h2>Big Easy</h2>
                            <ul class="list-group">
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="9"><span id = "food9" >Loaded Chicken Wrap</span><span class="label label-primary"><span>$</span><span id="price9">8.89</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="10"><span id = "food10" >Chicken Tender Sandwich</span><span class="label label-primary"><span>$</span><span id="price10">6.89</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="11"><span id = "food11" >Popcorn Shrimp Sandwich</span><span class="label label-primary"><span>$</span><span id="price11">6.58</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="12"><span id = "food12" >Chicken Sausage Bowl</span><span class="label label-primary"><span>$</span><span id="price12">4.89</span></span></a></li>
                            </ul>
                        </div>
                        <div id="section4">
                            <h2>Local Favorites</h2>
                            <ul class="list-group">
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="13"><span id = "food13" >Loaded Chicken Wrap</span><span class="label label-primary"><span>$</span><span id="price13">5.89</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="14"><span id = "food14" >Chicken Tender Sandwich</span><span class="label label-primary"><span>$</span><span id="price14">6.89</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="15"><span id = "food15" >Popcorn Shrimp Sandwich</span><span class="label label-primary"><span>$</span><span id="price15">4.89</span></span></a></li>
                            </ul>
                        </div>
                        <div id="section5">
                            <h2>Desserts</h2>
                            <ul class="list-group">
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="16"><span id = "food16" >Hot Cinnamon Apple Pie</span><span class="label label-primary"><span>$</span><span id="price16">3.89</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="17"><span id = "food17" >Mardi Gras Cheesecake</span><span class="label label-primary"><span>$</span><span id="price17">2.89</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="18"><span id = "food18" >Pecan Pie</span><span class="label label-primary"><span>$</span><span id="price18">2.89</span></span></a></li>
                            </ul>
                        </div>
                        <div id="section6">
                            <h2>Beverages</h2>
                            <ul class="list-group">
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="19"><span id = "food19" >Bottled Water</span><span class="label label-primary"><span>$</span><span id="price19">2.19</span></span></a></li>
                                <li class="list-group-item"><a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="20"><span id = "food20" >Fountain Soda</span><span class="label label-primary"><span>$</span><span id="price20">1.69</span></span></a></li>
                            </ul>
                        </div>
                        <!-- add item Modal -->
                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog  modal-sm" role="document">
                                <div class="modal-content">
                                    <!-- modal header -->
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title" id="myModalLabel"></h4>
                                    </div>
                                    <!-- modal body -->
                                    <div class="modal-body"></div>
                                    <!-- modal footer -->
                                    <div class="modal-footer">
                                        <div class="input-group number-spinner">
                                            <span class="input-group-btn">
                                                <button class="btn btn-default" data-dir="dwn"><span class="glyphicon glyphicon-minus"></span></button>
                                            </span>
                                            <input id="quantityinput" type="text" class="form-control text-center" value="1">
                                            <span class="input-group-btn">
                                                <button class="btn btn-default" data-dir="up"><span class="glyphicon glyphicon-plus"></span></button>
                                            </span>
                                        </div>
                                        <button type="button" class="btn btn-primary btn-addtocart" onclick="addtobag()" data-dismiss="modal">Add to Bag
                                            <span class="badge" id="myModalPrice"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- My bag -->
            <div class="col-sm-3">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <h2>Your Bag</h2>
                        <select class="form-control" name="Type">
                            <option value="Delivery">Delivery</option>
                            <option value="Takeout">Takeout</option>
                        </select>
                        <table class="table">
                            <tbody>
                            </tbody>
                        </table>
                        <p>Total Price: $<span id="totalprice">0</span></p>
                        <button class="btn btn-default"><a href="order.html">Go To Checkout</a></button>
                        <hr>
                        <!-- Set height and width with CSS -->
                        <div id="googleMap" style="height:300px;width:100%;"></div>
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
