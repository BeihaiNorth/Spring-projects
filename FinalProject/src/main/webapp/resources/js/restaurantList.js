 // Custom sorting plugin
		(function($) {
          	$.fn.sorted = function(customOptions) {
          		var options = {
          			reversed: false,
          			by: function(a) { return a.text(); }
          		};
          		$.extend(options, customOptions);
          		$data = $(this);
          		arr = $data.get();
          		arr.sort(function(a, b) {
          		   	var valA = options.by($(a));
          		   	var valB = options.by($(b));
          			if (options.reversed) {
          				return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
          			} else {		
          				return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
          			}
          		});
          		return $(arr);
          	};
          })(jQuery);    
		  
		  /*
			function checkAll() {
				var x = document.getElementsByName("type");
				var i;
				for (i = 0; i < x.length; i++) {
					if (x[i].type == "checkbox") {
						x[i].checked = true;
					}
				}
			}	
		  */
		  /*
var itemsToFilter = document.querySelectorAll("#applications li");
  
//setup click event handlers on our checkboxes
var checkBoxes = document.querySelectorAll(".filterSection li input");
  
for (var i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener("click", filterItems, false);
    checkBoxes[i].checked = true;
}
  
// the event handler!
function filterItems(e) {
    var clickedItem = e.target;
      
    if (clickedItem.checked == true) {
        hideOrShowItems(clickedItem.value, "hideItem", "showItem");
    } else if (clickedItem.checked == false) {
        hideOrShowItems(clickedItem.value, "showItem", "hideItem");
    } else {
        // deal with the indeterminate state if needed
    }
}
  
// add or remove classes to show or hide our content
function hideOrShowItems(itemType, classToRemove, classToAdd) {
    for (var i = 0; i < itemsToFilter.length; i++) {
        var currentItem = itemsToFilter[i];
          
        if (currentItem.getAttribute("data-type") == itemType) {
            removeClass(currentItem, classToRemove);
            addClass(currentItem, classToAdd);
        }
    }
}
  
//
// Helper functions for adding and removing class values
//
function addClass(element, classToAdd) {
    var currentClassValue = element.className;
        
    if (currentClassValue.indexOf(classToAdd) == -1) {
        if ((currentClassValue == null) || (currentClassValue === "")) {
            element.className = classToAdd;
        } else {
            element.className += " " + classToAdd;
        }
    }
}
        
function removeClass(element, classToRemove) {
    var currentClassValue = element.className;
  
    if (currentClassValue == classToRemove) {
        element.className = "";
        return;
    }
  
    var classValues = currentClassValue.split(" ");
    var filteredList = [];
  
    for (var i = 0 ; i < classValues.length; i++) {
        if (classToRemove != classValues[i]) {
            filteredList.push(classValues[i]);
        }
    }
  
    element.className = filteredList.join(" ");
}
*/
      
          // DOMContentLoaded
          $(function() {
          
            // bind radiobuttons in the form
          	var $filterType = $('#filter input[name="type"]');
          	var $filterSort = $('#filter input[name="sort"]');
        	
          	// get the first collection
          	var $applications = $('#applications');
        	
          	// clone applications to get a second collection
          	var $data = $applications.clone();

            // attempt to call Quicksand on every form change
			
          		
			
			
			
			$filterType.add($filterSort).change(function(e) {	
			
				if ($($filterType+':checked').val() == 'all') {
          			var $filteredData = $data.find('li');
          		} else {
          			var $filteredData = $data.find('li[data-type=' + $($filterType+":checked").val() + ']');
          		}
				
				
				/*
				for (var i = 0; i < itemsToFilter.length; i++) {
					var currentItem = itemsToFilter[i];
							  
					if (currentItem.getAttribute("data-type") == itemType) {
						removeClass(currentItem, classToRemove);
						addClass(currentItem, classToAdd);
					}
				}
			}
					  
					
			// Helper functions for adding and removing class values
					
			function addClass(element, classToAdd) {
				var currentClassValue = element.className;
							
				if (currentClassValue.indexOf(classToAdd) == -1) {
					if ((currentClassValue == null) || (currentClassValue === "")) {
						element.className = classToAdd;
					} else {
						element.className += " " + classToAdd;
					}
				}
			}
							
			function removeClass(element, classToRemove) {
				var currentClassValue = element.className;
					  
				if (currentClassValue == classToRemove) {
				element.className = "";
					return;
				}
					  
				var classValues = currentClassValue.split(" ");
				var filteredList = [];
					  
				for (var i = 0 ; i < classValues.length; i++) {
					if (classToRemove != classValues[i]) {
						filteredList.push(classValues[i]);
					}
				}
					  
				element.className = filteredList.join(" ");
			}
			*/
			
			
				 // if sorted by price
          	if ($('#filter input[name="sort"]:checked').val() == "price") {
          		var $sortedData = $filteredData.sorted({
          			by: function(v) {
          				return parseFloat($(v).find('span[data-type=price]').text());
          			}
          		});
          	}
				// if sorted by time
          	else if ($('#filter input[name="sort"]:checked').val() == "time") {
          		var $sortedData = $filteredData.sorted({
          			by: function(v) {
          				return parseFloat($(v).find('span[data-type=time]').text());
          			}
          		});
          	}// if sorted by rating
			else if ($('#filter input[name="sort"]:checked').val() == "rating") {
          		var $sortedData = $filteredData.sorted({
          			by: function(v) {
          				return parseFloat($(v).find('span[data-type=rating]').text());
          			}
          		});
          	}
			else {
          	// if sorted by name
          		var $sortedData = $filteredData.sorted({
          			by: function(v) {
          				return $(v).find('strong').text().toLowerCase();
          			}
          		});
          	}   
        		
				
			
          	// finally, call quicksand
            $applications.quicksand($sortedData, {
				duration: 800,
          	    easing: 'easeInOutQuad'
          	});  
          });
		});	