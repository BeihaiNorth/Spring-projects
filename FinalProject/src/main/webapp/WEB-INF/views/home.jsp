<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ page session="false" %>

<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

  
  <!-- bootstrap -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  

  <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
  <link href="<c:url value='/resources/css/index.css' />" rel="stylesheet" />
  <link href="<c:url value='/resources/css/navbar.css' />" rel="stylesheet"/>
  <link href="<c:url value='/resources/css/reset.css' />" rel="stylesheet"/>
  <link href="<c:url value='/resources/css/footer.css' />" rel="stylesheet"/>
  
  <script src="<c:url value='/resources/js/modernizr.js' />"></script><!-- Modernizr -->
  <script src="<c:url value='/resources/js/indexmain.js' />"></script><!-- Gem jQuery -->



   <!-- autocomplete -->
  <script>
   $(function() {
    var availableTags = [
     "Northeastern University",
     "Boston University",
     "Boston College",
     "Chinatown",
      "Fenway Park"];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });



  </script>
 
    <title>Food Delivery</title>  
</head>

<body class="main">

<!-- get  contextPath for url mapping -->
<c:set var="contextPath" value="${pageContext.request.contextPath}" />
  <header role="banner">
    <div id="cd-logo"><a class = "main-nav-brand" href="#main"><img src="<c:url value='/resources/img/homelogo.png' />" alt="Logo"></a>
    </div>

    <nav class="main-nav">
      <ul class= "main-nav-nav">
      <li><a href="#aboutus">ABOUT</a></li>
      <li><a href="#row1">FEEDBACK</a></li>
      <li><a href="#row2">CONTACT</a></li>

        <!-- inser more links here -->
   	    	<li><a class="cd-signin" href="#0">Sign in</a></li>
        	<li><a class="cd-signup" href="#0">Sign up</a></li>
      </ul>
    </nav>
  </header>

  <div class="cd-user-modal"> <!-- this is the entire modal form, including the background -->
    <div class="cd-user-modal-container"> <!-- this is the container wrapper -->
      <ul class="cd-switcher">
   	    	<li><a href="#0">Sign in</a></li>
        	<li><a href="#0">New account</a></li>
      </ul>

      <div id="cd-login"> <!-- log in form -->
        <form class="cd-form" action="signin" method="post">
          <p class="fieldset">
            <label class="image-replace cd-email" for="signin-email">E-mail</label>
            <input class="full-width has-padding has-border" name="signin-username" id="signin-username" type="text" placeholder="Username" required>
            <span class="cd-error-message">Error message here!</span>
          </p>

          <p class="fieldset">
            <label class="image-replace cd-password" for="signin-password">Password</label>
            <input class="full-width has-padding has-border" name="signin-password" id="signin-password" type="password"  placeholder="Password" required>
            <a href="#0" class="hide-password">Hide</a>
            <span class="cd-error-message">Error message here!</span>
          </p>

          <p class="fieldset">
            <input type="checkbox" id="remember-me" checked>
            <label for="remember-me">Remember me</label>
          </p>

          <p class="fieldset">
            <input class="full-width" type="submit" value="Login">
          </p>
        </form>
        
        <p class="cd-form-bottom-message"><a href="#0">Forgot your password?</a></p>
        <!-- <a href="#0" class="cd-close-form">Close</a> -->
      </div> <!-- cd-login -->

	  <!-- sign up form -->
      <div id="cd-signup">
        <form class="cd-form" action="signup" method="post">
          <p class="fieldset">
            <label class="image-replace cd-username" for="signup-username">Username</label>
            <input class="full-width has-padding has-border" id="signup-username" name="signup-username" type="text" placeholder="Username" required="required" />
            <span id="registerError"></span>
          </p>

          <p class="fieldset">
            <label class="image-replace cd-email" for="signup-email">E-mail</label>
            <input class="full-width has-padding has-border" id="signup-email" name="signup-email" type="email" placeholder="E-mail" required="required" />
          </p>

          <p class="fieldset">
            <label class="image-replace cd-password" for="signup-password">Password</label>
            <input class="full-width has-padding has-border" id="signup-password" name="signup-password" type="password"  placeholder="Password" required="required" />
            <a href="#0" class="hide-password">Hide</a>
          </p>

<!--           <p class="fieldset">
            <input type="checkbox" id="accept-terms">
            <label for="accept-terms">I agree to the <a href="#0">Terms</a></label>
          </p> -->

          <p class="fieldset">
            <input class="full-width has-padding" type="submit" value="Create account">
          </p>
        </form>

        <!-- <a href="#0" class="cd-close-form">Close</a> -->
      </div> <!-- cd-signup -->

      <div id="cd-reset-password"> <!-- reset password form -->
        <p class="cd-form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>

        <form class="cd-form">
          <p class="fieldset">
            <label class="image-replace cd-email" for="reset-email">E-mail</label>
            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail" >
            <span class="cd-error-message">Error message here!</span>
          </p>

          <p class="fieldset">
            <input class="full-width has-padding" type="submit" value="Reset password">
          </p>
        </form>

        <p class="cd-form-bottom-message"><a href="#0">Back to log-in</a></p>
      </div> <!-- cd-reset-password -->
      <a href="#0" class="cd-close-form">Close</a>
    </div> <!-- cd-user-modal-container -->
  </div> <!-- cd-user-modal -->


<!-- main -->
<div class="jumbotron text-center">
<div id="box">
<h1>Food Delivery</h1><br> 
<p>We specialize in BEST Food Delivery!</p> 
  <form class="form-inline" action="search" method="get">
    <div class="input-group">
      <input type="text" class="form-control" size="50" name="key" id="tags" placeholder="Zip Code" required>
        <div class="input-group-btn">
        <button type="submit" class="btn btn-danger" id="search">Search</button>
        </div>
    </div>
  </form>
  </div>
</div>

<div class="container text-center" id="aboutus">
<h2>Why Order with Us?</h2>
 <div class="row">
    <div class="col-sm-4">
      <img src="<c:url value='/resources/img/search.png' />" alt="search" class="whyUsIcon" width="150" height="150">
      <p><br><strong>Find Favorites and Discover New Ones Online</strong></p>
      <p><br>Browse thousands of restaurants and stores on website or on our App to get the best of your neighborhood delivered.</p>
    </div>
    <div class="col-sm-4">
      <img src="<c:url value='/resources/img/orderonline.png' />" alt="orderonline" class="whyUsIcon" width="150" height="150">
      <p><br><strong>Free, Easy, and Essential to Order</strong></p>
      <p><br>It's free to order, so save time tackling your to-do list at home, at work, or on the go.</p>
    </div>

    <div class="col-sm-4">
       <img src="<c:url value='/resources/img/delivery.png' />" alt="delivery" class="whyUsIcon" width="150" height="150">
       <p><br><strong>Fast Delivery Ganranteed</strong></p>
       <p><br>We promise to delivery your food as soon as possible. If there is a delay, we offer you twice refund.</p>    
    </div>
  </div>  
</div>

<center>
<!-- Add a Carousel -->
<div class = "customer" id="row1">
<h2>What our customers say?</h2>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="<c:url value='/resources/img/customer1.jpg' />" alt="1">
      <div class="carousel-caption">
        <h3>"This food delivery company is the best. I am so happy with the food!"<br>
        <span style="font-style:normal;">-- Kobe Bryant, Basketball Player</span></h3>
      </div> 
    </div>

    <div class="item">
      <img src="<c:url value='/resources/img/customer2.jpg' />" alt="2">
      <div class="carousel-caption">
         <h3>"My favorite is Chicken Tender Sandwich in POPEYES!"<br><span style="font-style:normal;">-- Justin Bieber, Student in NEU</span></h3>

      </div> 
    </div>

    <div class="item">
      <img src="<c:url value='/resources/img/customer3.jpg' />" alt="3">
      <div class="carousel-caption">
        <h3>"Could I... BE any more happy with this company?"<br><span style="font-style:normal;">-- Bree Van de Kamp, Housewife</span></h3>

      </div> 
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 
</div>


<!-- Contact Us -->
<div class ="contact" id="row2">
<h2 class="text-center">Contact Us</h2>
<div class="container-fluid bg-grey">
  <h3 class="text-center">Contact Information</h3>
  <div class="row">
    <div class="col-sm-5">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span class="glyphicon glyphicon-map-marker"></span> Boston, US</p>
      <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
      <p><span class="glyphicon glyphicon-envelope"></span> pleasegiveushighscore@bestteacher.com</p> 
    </div>

<div class="col-sm-5">
      <div class="row">

        <div class="col-sm-5 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
        </div>
        <div class="col-sm-5 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br>
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-default pull-right sumbit" type="submit">Send</button>
        </div>
      </div> 
    </div> 


  </div>
</div>
</div>
</center>

<footer id="footer">
        <div class = "container">
            <div class = "footerLinks">
                <div>
                    <a class="footerLinksLink" href=#>About us</a>
                    <a class="footerLinksLink" href=#>Jobs</a>&nbsp;&nbsp;
                    <a class="footerLinksLink" href=#>Blog</a>&nbsp;&nbsp;
                    <a class="footerLinksLink" href=#>FAQ</a>

                </div>
                            

            </div>
            <div class = "footerSocialIcons">
                <a class="footerSocialIconsIcon" href="https://twitter.com/" target="_blank">
                    <img class="icon" src="<c:url value='/resources/img/twitter.svg' />" alt="twitter">
                </a>
                <a class="footerSocialIconsIcon" href="https://facebook.com/" target="_blank">
                    <img class="icon" src="<c:url value='/resources/img/facebook.svg' />" alt="facebook">
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
