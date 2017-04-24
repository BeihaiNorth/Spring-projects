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
                        <button class="btn btn-default btn-block" style="background-color: #fdc743;"><a style=" color:#c32632;" href="ordercheck.html">Go To Checkout</a></button>
                    </div>
                </div>
            </div>
            <!-- Left column: Order Info -->
            <div class="col-sm-8 col-sm-pull-4">
                <!-- Reminder & Delivery Information -->
                <div class="panel panel-default">
                    <div class="panel-heading">Delivery Information</div>
                    <div class="panel-body">
                        <div class="alert alert-danger">
                            Please finish the required field.
                        </div>
                        <div class="tab-pane fade in active">
                            <form id="deliver_info_form" ng-app="myApp" ng-controller="validateCtrl" name="myForm" novalidate>
                                <div class="form-group col-xs-6 col-sm-6">
                                    <label class="control-label">First name</label>
                                    <div>
                                        <input type="text" class="form-control" name="firstname" ng-model="firstname" required>
                                    </div>
                                    <span style="color:red" ng-show="myForm.$submitted || myForm.firstname.$touched">
                                    <span ng-show="myForm.firstname.$error.required">First name is required.</span>
                                    </span>
                                </div>
                                <div class="form-group col-xs-6 col-sm-6">
                                    <label class="control-label">Last name</label>
                                    <div>
                                        <input type="text" class="form-control" name="lastname" ng-model="lastname" required />
                                    </div>
                                    <span style="color:red" ng-show="myForm.$submitted || myForm.lastname.$touched">
                                    <span ng-show="myForm.lastname.$error.required">Last name is required.</span>
                                    </span>
                                </div>
                                <div class="form-group col-xs-12">
                                    <label class="control-label">Street address</label>
                                    <div>
                                        <input type="text" class="form-control" name="street" ng-model="street" required />
                                    </div>
                                    <span style="color:red" ng-show="myForm.$submitted || myForm.street.$touched">
                                    <span ng-show="myForm.street.$error.required">Address is required.</span>
                                    </span>
                                </div>
                                <div class="form-group col-xs-6">
                                    <label class="control-label">State</label>
                                    <div class="selectContainer">
                                        <select class="form-control" name="state">
                                            <option value="STATE"></option>
                                            <option value="AL">AL</option>
                                            <option value="AK">AK</option>
                                            <option value="AZ">AZ</option>
                                            <option value="AR">AR</option>
                                            <option value="CA">CA</option>
                                            <option value="CO">CO</option>
                                            <option value="CT">CT</option>
                                            <option value="DE">DE</option>
                                            <option value="DC">DC</option>
                                            <option value="FL">FL</option>
                                            <option value="GA">GA</option>
                                            <option value="HI">HI</option>
                                            <option value="ID">ID</option>
                                            <option value="IL">IL</option>
                                            <option value="IN">IN</option>
                                            <option value="IA">IA</option>
                                            <option value="KS">KS</option>
                                            <option value="KY">KY</option>
                                            <option value="LA">LA</option>
                                            <option value="ME">ME</option>
                                            <option value="MD">MD</option>
                                            <option value="MA">MA</option>
                                            <option value="MI">MI</option>
                                            <option value="MN">MN</option>
                                            <option value="MS">MS</option>
                                            <option value="MO">MO</option>
                                            <option value="MT">MT</option>
                                            <option value="NE">NE</option>
                                            <option value="NV">NV</option>
                                            <option value="NH">NH</option>
                                            <option value="NJ">NJ</option>
                                            <option value="NM">NM</option>
                                            <option value="NY">NY</option>
                                            <option value="NC">NC</option>
                                            <option value="ND">ND</option>
                                            <option value="OH">OH</option>
                                            <option value="OK">OK</option>
                                            <option value="OR">OR</option>
                                            <option value="PA">PA</option>
                                            <option value="RI">RI</option>
                                            <option value="SC">SC</option>
                                            <option value="SD">SD</option>
                                            <option value="TN">TN</option>
                                            <option value="TX">TX</option>
                                            <option value="UT">UT></option>
                                            <option value="VT">VT</option>
                                            <option value="VA">VA</option>
                                            <option value="WA">WA</option>
                                            <option value="WV">WV</option>
                                            <option value="WI">WI</option>
                                            <option value="WY">WY</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-xs-6">
                                    <label class="control-label">City</label>
                                    <div>
                                        <input type="text" class="form-control" name="city" ng-model="city" required/>
                                    </div>
                                    <span style="color:red" ng-show="myForm.$submitted || myForm.city.$touched">
                                    <span ng-show="myForm.city.$error.required">Please enter your city.</span>
                                    </span>
                                </div>
                                <div class="form-group col-xs-6">
                                    <label class="control-label">Zip code</label>
                                    <div>
                                        <input type="text" class="form-control" name="zipcode" ng-model="zipcode" ng-minlength="5" ng-maxlength="5" data-ng-pattern="/^[0-9]+$/" required/>
                                    </div>
                                    <span style="color:red" ng-show="myForm.zipcode.$touched">
                                    <span ng-show="myForm.zipcode.$error.required">Please enter zip code.</span>
                                    <span class="help-block" style="color:red" ng-show="((myForm.zipcode.$error.minlength || myForm.zipcode.$error.maxlength ||myForm.zipcode.$error.pattern) &&  myForm.zipcode.$dirty) ">
                                                   Zip code should be 5 digits and contain only numbers 
                                    </span>
                                    </span>
                                </div>
                                <div class="form-group col-xs-6">
                                    <label class="control-label">Phone number</label>
                                    <div>
                                        <input type="text" class="form-control" name="phone" ng-model="phone" ng-minlength="10" ng-maxlength="10" data-ng-pattern="/^[0-9]+$/" required/>
                                    </div>
                                    <span style="color:red" ng-show="myForm.$submitted || myForm.phone.$touched">
                                    <span class="help-block" style="color:red"
                                          ng-show="myForm.phone.$error.required || myForm.phone.$error.number">
                                                   Valid phone number is required
                                    </span>
                                    <span class="help-block" style="color:red" ng-show="((myForm.phone.$error.minlength || myForm.phone.$error.maxlength) || myForm.phone.$error.pattern)">
                                                   Phone number should be 10 digits and contain only numbers.
                                    </span>
                                    </span>
                                </div>
                                <br>
                                <div class="form-group">
                                    <!-- 为什么添加了checkbox类所有的空就无法选中了？？？ -->
                                    <label>
                                        <input type="checkbox"> Save for future purchase</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Payment Information Tabs -->
                <div id="payment" class="panel panel-default">
                    <div class="panel-heading">
                        <ul class="nav nav-tabs nav-justified">
                            <li class="active"><a data-toggle="tab" href="#card">Card</a></li>
                            <li><a data-toggle="tab" href="#paypal">PayPal</a></li>
                            <li><a data-toggle="tab" href="#cash">Cash</a></li>
                        </ul>
                    </div>
                    <div class="panel-body">
                        <div class="tab-content">
                            <div id="card" class="tab-pane fade in active">
                                <form id="paymentValidation" novalidate name="paymentForm" ng-app="app" id="app2" ng-controller="MainCtrl" required>
                                    <div class="form-group col-xs-12">
                                        <label for="ex1">Credit card number</label>
                                        <input class="form-control" id="ex1" type="text" name="creditCard" ng-model="ccinfo.number" required data-credit-card-type data-ng-pattern="/^[0-9]+$/" data-ng-minlength="15" maxlength="19"> Card Type: {{ccinfo.type}}
                                        <br/>
                                        <span style="color:red" class="payment-card" ng-show="paymentForm.creditCard.$touched">
                                                  <span ng-show="paymentForm.creditCard.$error.required">Credit card required<br></span>
                                        <span ng-show="paymentForm.creditCard.$error.pattern || paymentForm.creditCard.$error.minlength">Credit card must be 15-19 numbers<br></span>
                                        <span ng-show="paymentForm.creditCard.$error.invalid">Credit card must be a valid Amex, Visa, Discover, or Master Card</span>
                                        </span>
                                    </div>
                                    <div class="form-group col-xs-5">
                                        <label class="control-label">Exp. month</label>
                                        <div class="selectContainer">
                                            <select class="form-control" name="size">
                                                <option value="1">Jan</option>
                                                <option value="2">Feb</option>
                                                <option value="3">March</option>
                                                <option value="4">April</option>
                                                <option value="5">May</option>
                                                <option value="6">June</option>
                                                <option value="7">July</option>
                                                <option value="8">Aug</option>
                                                <option value="9">Sep</option>
                                                <option value="10">Oct</option>
                                                <option value="11">Nov</option>
                                                <option value="12">Dec</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-xs-7">
                                        <label class="control-label">Exp. year</label>
                                        <div class="cselectContainer">
                                            <select class="form-control" name="color">
                                                <option value="2016">2016</option>
                                                <option value="2017">2017</option>
                                                <option value="2018">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-xs-5">
                                        <label for="ex2">CCV</label>
                                        <input class="form-control" id="ex2" type="text" name="securityCode" ng-model="ccinfo.securityCode" required data-ng-pattern="/^[0-9]+$/" data-ng-minlength="3" maxlength="4">
                                        <span class="payment-card" style="color:red" ng-show="paymentForm.securityCode.$touched">
                                          <span ng-show="paymentForm.securityCode.$error.minlength||paymentForm.securityCode.$error.pattern">Security code must be 3-4 numbers</span>
                                        <span ng-show="paymentForm.securityCode.$error.required">Security code required</span>
                                        </span>
                                    </div>
                                    <div class="form-group col-xs-7">
                                        <label for="ex3">Billing zip</label>
                                        <input class="form-control" id="ex3" type="text" name="zipcode" ng-model="zipcode" ng-minlength="5" ng-maxlength="5" data-ng-pattern="/^[0-9]+$/" required/>
                                        <span style="color:red" ng-show="paymentForm.zipcode.$touched">
                                        <span ng-show="paymentForm.zipcode.$error.required">Please enter billing zip code.</span>
                                        <span class="help-block" style="color:red" ng-show="((paymentForm.zipcode.$error.minlength || myForm.zipcode.$error.maxlength ||myForm.zipcode.$error.pattern) &&  myForm.zipcode.$dirty) ">
                                                       Billing zip code should be 5 digits and contain only numbers 
                                        </span>
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <label>
                                            <input type="checkbox"> Save for future purchase</label>
                                    </div>
                                </form>
                            </div>
                            <div id="paypal" class="tab-pane fade">
                                <h4>Pay with your PayPal account. <br><small>Make sure to review your order details now.Once you press "Place Your Order" you'll be directed to PayPal to enter your payment information and process the order.</small></h4>
                            </div>
                            <div id="cash" class="tab-pane fade">
                                <h4>You will be paying with cash. <br><small>Note: cash cannot be combined with any other payments (i.e. giftcards, or promotional code).</small></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Tip -->
                <div class="panel panel-default">
                    <div class="panel-body">Tip Amount</div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
