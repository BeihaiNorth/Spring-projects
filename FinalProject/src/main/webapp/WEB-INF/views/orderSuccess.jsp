<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Lastest version JQuery -->
    <script>
    document.write('<base href="' + document.location + '" />');
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <!-- Bootstrap  -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- Angular -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script src="JS/order.js"></script>
    <!-- css style -->
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" href="CSS/footer.css">
    <title>Food Delivery | Order success</title>
</head>

<body>
    <!-- navbar -->
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="http://localhost:8080/final/delivery/">Logo</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#about">ABOUT</a></li>
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
        <div class="restaurant-theme-img-sm"></div>
    </div>
    <!-- main content -->
    <div style="text-align:center;margin: 100px;">
        <h1 style="font-weight: bold;color: #881a23;">Order placed successfully!</h1>
        <h3 style="font-style: italic; color: #881a23;">your food id ariving in 45 min</h3>
        <button class="btn btn-default btn-lg" style="background-color: #fdc743;margin: 10px;"><a href="restaurantList.html" style="font-style: italic; color:#c32632;">go order something more</a></button>
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
        </div>
    </footer>
</body>

</html>
