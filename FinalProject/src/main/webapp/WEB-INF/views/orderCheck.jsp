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
    <title>Food Delivery | Order checkout</title>
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
                <a class="navbar-brand" href="#">Logo</a>
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
    <div class="container-fluid">
        <div class="row content">
            <!-- Right Column: Bag Review -->
            <div class="col-sm-4 col-sm-push-8">
                <div class="panel panel-default">
                    <div class="panel-heading">Your bag</div>
                    <div class="panel-body">
                        <h5 id="storename" style="margin-bottom: 20px;">Popeyes NEU</h5>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">3</td>
                                    <td style="color: #881a23;">3 Piece Combo</td>
                                    <td>$23.67</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">2</td>
                                    <td style="color: #881a23;">4 Piece Combo</td>
                                    <td>$19.78</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">2</td>
                                    <td style="color: #881a23;">Fountain Soda</td>
                                    <td>$3.38</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Total Price: $46.83</p>
                        <button class="btn btn-default btn-block" style="background-color: #fdc743;"><a style=" color:#c32632;" href="order.html">Edit</a>
                            <br>
                            <button class="btn btn-default  btn-block" style="background-color: #fdc743;"><a style=" color:#c32632;" href="ordersuccess.html">Place Order</a></button>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Left column: Order Info -->
            <div class="col-sm-8 col-sm-pull-4">
                <div class="alert alert-warning" style="margin-top: 25px;">
                    Please review your order.
                </div>
                <!-- Delivery Information -->
                <div class="panel panel-default" style="margin-top: 30px;">
                    <div class="panel-heading" style="margin: 10px;">Delivery Information</div>
                    <div class="panel-body">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">Name</td>
                                    <td>Liujun Xue</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">Street Address</td>
                                    <td>Huntington Ave #350 Snell Library</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">City</td>
                                    <td>Boston</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">State</td>
                                    <td>MA</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">Zip code</td>
                                    <td>02108</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">Phone number</td>
                                    <td>8571234567</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Payment Information Tabs -->
                <div id="payment" class="panel panel-default" style="margin-top: 30px;">
                    <div class="panel-heading" style="margin: 25px;">Payment Information</div>
                    <div class="panel-body">
                        <table class="table" style="border:none;">
                            <tbody>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">Card type</td>
                                    <td>Master Card</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">Card Number</td>
                                    <td>0086 9986 5673 5392</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">Expire Date</td>
                                    <td>Feb. 2020</td>
                                </tr>
                                <tr>
                                    <td style="color: #881a23;font-weight: bold;">Billing Zip</td>
                                    <td>02357</td>
                                </tr>
                            </tbody>
                        </table>
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
        </div>
    </footer>
</body>

</html>
