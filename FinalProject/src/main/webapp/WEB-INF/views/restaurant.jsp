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
    <link rel="stylesheet" href="<c:url value='/resources/css/restaurant.css'/>">
    <link rel="stylesheet" href="<c:url value='/resources/css/footer.css'/>">
    <link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/main.css'/>">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src=" https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js "></script>
    <script src="<c:url value='/resources/js/restaurant.js'/>"></script>
    <!-- Add Google Maps -->
    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script>
    var myCenter = new google.maps.LatLng(${restaurant.lattitude}, ${restaurant.longtitude});

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
        background-image: url("<c:url value='/resources/img/background.jpg'/>");
        background-size: cover;
    }
    
    .restaurant-theme-img-lg {
        margin-top: 0;
        height: 300px;
        background-image: url("<c:url value='/resources/img/background.jpg'/>");
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
                <a class="navbar-brand" href="http://localhost:8080/final/delivery/">FOOD</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <!-- <li><a href="restaurantList.html">LIST</a></li> -->
                    <c:if test="${not empty sessionScope.user}">
   						<li><a href="#">Hello, ${sessionScope.user.username}</a></li>
   	    			</c:if>
   	    			<c:if test="${empty sessionScope.user}">
   	    				<li><a class="cd-signin" href="#0">Sign in</a></li>
        				<li><a class="cd-signup" href="#0">Sign up</a></li>
   	    			</c:if>
                </ul>
            </div>
        </div>
    </nav>
    <!-- img header -->
    <div class="container-fluid" id="theme-img-container">
        <div class="restaurant-theme-img-lg">
            <div class="restaurant-info row">
                <div class="col-xs-1 col-sm-4">
                    <img src="<c:url value='/resources/img/logo.jpg'/>" width="130">
                </div>
                <div class="col-xs-11 col-sm-8">
                    <h1>${restaurant.name}</h1>
                    <p><b>${restaurant.street}, ${restaurant.zipcode} | ${restaurant.type}</b></p>
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
                            <h2>${restaurant.name}</h2>
                            <p><STRONG>Open time:</STRONG> ${restaurant.hours }</p>
                        </div>
                        <div id="section1">
                            <h2>Menu</h2>
                            <ul class="list-group">
                            	<c:forEach items="${restaurant.foods}" var="food">
                                <li class="list-group-item">
                                    <a href=# data-toggle="modal" data-target="#myModal" onclick="showModal(this)" id="${food.id}">
                                        <span id="food${food.id}">${food.name}</span>
                                        <span class="label label-primary">
                                            <span>$</span>
                                        <span id="price${food.id}">${food.price}</span>
                                        </span>
                                    </a>
                                    <p style="color:grey;">${food.description}</p>
                                </li>
                                </c:forEach>
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
                        <form action="checkout" method="get">
                        	<select class="form-control" name="Type">
                        	    <option value="Delivery">Delivery</option>
                        	    <option value="Takeout">Takeout</option>
                        	</select>
                        	<table class="table">
                        	    <tbody>
                        	    </tbody>
                        	</table>
                        	<p>Total Price: $<span id="totalprice">0</span></p>
                            <input type="hidden" name="restaurantid" value="${restaurant.restaurantId}" />
                            <input type="hidden" name="foodcount" id="foodcount" value="0" />
                            <input type="hidden" name="totalprice" id="totalpriceinput" value="0" />
                        	<button class="btn btn-default" type="submit">Go To Checkout</button>
                        </form>
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
                    <img class="icon" src="<c:url value='/resources/img/twitter.svg'/>" alt="twitter">
                </a>
                <a class="footerSocialIconsIcon" href="https://facebook.com/" target="_blank">
                    <img class="icon" src="<c:url value='/resources/img/facebook.svg'/>" alt="facebook">
                </a>
                <a class="footerSocialIconsIcon" href="https://instagram.com/" target="_blank">
                    <img class="icon" src="<c:url value='/resources/img/instagram.svg'/>" alt="instagram">
                </a>
                <a class="footerSocialIconsIcon" href="https://google.com/" target="_blank">
                    <img class="icon" src="<c:url value='/resources/img/google.svg'/>" alt="google">
                </a>
            </div>
            <div class="footerLegal">
                Copyright &copy; 2016 Designed and built by WYT, Tweety, Leslie and Hailie.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            </div>
    </footer>
</body>

</html>
