// PREVENT TRIGGER CLICK ON PARENT WHEN CLICK ON A LIK
$("#clickable a").click(function(e) {
   // Do something
   e.stopPropagation();
});
// get element after click

$(document).click(function(event) {
    //var target = $( event.target );
    //filterList
    //if ( target.is( "li" ) ) {
    //    target.children().toggle();
    //}
});

// attributes selector 
/*
$("[attribute]")	Select all matched elements with the specified attribute.
$("[attribute='value']")	Select all matched elements with the specified attribute and the specified value.
$("[attribute^='value']")	Select all matched elements with the specified attribute and start with the specified value.
$("[attribute$='value']")	Select all matched elements with the specified attribute and end with the specified value.
$("[attribute*='value']")	Select all matched elements with the specified attribute and the value contains specified substring.
$("[attribute!='value']")	Select all matched elements that do not contain the specified attribute with the specified value.
*/
