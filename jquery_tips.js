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
