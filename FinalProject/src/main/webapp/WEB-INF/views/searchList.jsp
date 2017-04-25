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

    <script src="<c:url value='/resources/js/jquery-1.js'/>" type="text/javascript"></script>
    <script src="<c:url value='/resources/js/restaurantList.js'/>" type="text/javascript"></script>

    <!-- bootstrap -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <link rel="stylesheet" href="<c:url value='/resources/css/restaurant.css'/>" >
    <link rel="stylesheet" href="<c:url value='/resources/css/footer.css'/>" />
    <link rel="stylesheet" href="<c:url value='/resources/css/restaurantList2.css'/>" />
    <link rel="stylesheet" href="<c:url value='/resources/css/main.css'/>" />

    <script type="text/javascript">
        function gotorestaurant(){
        	alert("1");
            document.getElementById("restaurant${restaurant.restaurantId}form").submit();
            alert("hi");
        }
    </script>
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
    <img src="<c:url value='/resources/images/resListTop.jpg'/>" width="100%">
    <div class="jumbotron text-center">
		<p>Restaurants delivering in ${param.key}!</p> 
  		<form class="form-inline" action="search" method="get">
    		<div class="input-group">
      		<input type="text" class="form-control" size="50" name="key" id="tags" placeholder="Zip Code" required>
        		<div class="input-group-btn">
        		<button type="submit" class="btn btn-danger" id="search">Search</button>
        		</div>
    		</div>
  		</form>
	</div>
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
                                <c:forEach items="${list}" var="restaurant">
                                    <li class="list-group-item" data-id="id-${restaurant.restaurantId}" data-type="${restaurant.type}">
                                        <a href="restaurant.htm?id=${restaurant.restaurantId}"><img class="float" src="<c:url value='/resources/img/logo.jpg'/>" alt="" height="90" width="90"></a>
                                        <form id="restaurant${restaurant.restaurantId}form" action="restaurant.htm" method="get">
                                        	<input type="hidden" name="restaurant" value="1" />
                                        </form>
                                        <a href="restaurant.htm?id=${restaurant.restaurantId}"><strong>${restaurant.name}</strong></a>
                                        <br>
                                        <p class="resListRight">Rating <span data-type="rating">${restaurant.rate}</span></p>
                                        <p>${restaurant.street}, ${restaurant.zipcode}
                                            <br>
                                        </p><img src="<c:url value='/resources/images/rating${restaurant.rate}.png'/>" class="resListRight" height="20">
                                        <p>Estimated Time: <span data-type="time">29min</span> | Average Consumption: &#36 <span data-type="price">9.5</span></p>
                                    </li>
                                </c:forEach>
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
    </footer>
</body>

</html>

