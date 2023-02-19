// PREVENT TRIGGER CLICK ON PARENT WHEN CLICK ON A LIK
$("#clickable a").click(function(e) {
   // Do something
   e.stopPropagation();
});
