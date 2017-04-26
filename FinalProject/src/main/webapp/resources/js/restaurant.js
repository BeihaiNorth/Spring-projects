var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = [];
    $scope.food1 = "3 Pieces Chicken Combo";
    $scope.fo1 = "3 Tenders";


    $scope.addItem = function() {
        $scope.total += $scope.price * $scope.quantity;
        $scope.errortext = "";
        if (!$scope.addMe) {
            return;
        }
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function(x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
    // $scope.price = p;
    $scope.quantity = 1;
    $scope.total = 0;


    var popyeys = {
        food1: { name: '3 Pieces Combo', price: 7.89 },
        food2: { name: '4 Pieces Combo', price: 9.89 },
        food3: { name: '5 Wings Combo', price: 7.89 },
        food4: { name: 'Cajun Fish Combo', price: 9.89 },
        food5: { name: '3 Tenders', price: 6.79 },
        food6: { name: '5 Tenders', price: 7.89 },
        food7: { name: '3 Nuggets', price: 5.68 },
        food8: { name: '5 Nuggets', price: 6.79 },
        food9: { name: 'Loaded Chicken Wrap', price: 4.89 },
        food10: { name: 'Chicken Tender Sandwich', price: 5.89 },
        food11: { name: 'Popcorn Shrimp Sandwich', price: 6.89 },
        food12: { name: 'hicken & Sausage Bowl', price: 7.89 },
        food13: { name: 'Loaded Chicken Wrap', price: 5.89 },
        food14: { name: 'Chicken Tender Sandwich', price: 5.89 },
        food15: { name: 'Popcorn Shrimp Sandwich', price: 6.89 },
        food16: { name: 'Hot Cinnamon Apple Pie', price: 4.59 },
        food17: { name: 'Mardi Gras Cheesecake', price: 3.59 },
        food18: { name: 'Pecan Pie', price: 4.59 },
        food19: { name: 'Bottled Water', price: 2.29 },
        food20: { name: 'Soda', price: 1.99 },
    }
});

function showModal(a) {
    //Modal heading showing food name
    var foodname = $("#food" + a.id).html();
    console.log(foodname);
    $('#myModalLabel').text(foodname);
    //Modal body
    var price = parseFloat($("#price" + a.id).html());
    $('.modal-body').html('<span>Price: $</span><span id="p">' +price +'</span>');
    //Modal foot showing quatity and price
    var price = parseFloat($("#price" + a.id).html());
    var q = $('input[name=quantity]').html();
    // console.log(price);
    // console.log(q);
    // $('input:text').val(1);

}

// add to bag quantity spinner
$(document).on('click', '.number-spinner button', function () {    
    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;
    
    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
});

var count =0;
function addtobag(){
    var p = parseFloat($('.modal-body #p').html());
        q1 = $('input:text').val().trim();
        subtotal = p*q1;
        // subtotal = (subtotal).toFixed(2);
        fn = $('#myModalLabel').text();
        carttotal = parseFloat($('#totalprice').html());

    console.log(p);
    console.log(q1);
    console.log(subtotal);

    // fixed to 2 digit
    var subtotalfix2 = (subtotal).toFixed(2);
    $('.panel-body table').append("<tr><td><input type='text' size='2' name='quantity"+count+"' value='"+ q1 +"' disabled />"
    		+"</td><td><input type='text' size='20' name='food"+count+"' value='"+ fn +"' disabled /></td><td>$"+ subtotalfix2 +'</td></tr>');
    carttotal += subtotal;
    carttotalfix2 = (carttotal).toFixed(2);
    $('#totalprice').html(carttotalfix2);
    count++;
    console.log('count'+count);
    $('#foodcount').attr('value',count);
    $('#totalpriceinput').attr('value',carttotalfix2);

}

