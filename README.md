The best tools make by javascript
===================
https://github.com/PrismJS/prism

https://codemirror.net/5/doc/manual.html


jquery_ui_tips_tricks
=====================

jquery ui tips &amp; tricks

Auto Complete with ajax post

```javascript

$("#search").autocomplete({
  source : function(request, response) 
  {
   $.post("/manager/Assets/ajax_adpsearch", 
   {
    term : request.term
   }, function(data) 
   {
    response(data)
   }, 'json');
  },
  select : function(event, ui) 
  {
   var selectedObj = ui.item;
   console.log(selectedObj.id) //selected id
  }
 });
 
 ```
 
 server script
 ```php
 $data = array( 
     "id" => 1, "value" => "Apple" , "data" => "Fresh"
     ,"id" => 2, "value" => "Mango" , "data" => "Rotten"
     ,"id" => 3, "value" => "Orange" , "data" => "Rotten"
     ,"id" => 4, "value" => "Green Apple" , "data" => "Fresh"
);
header('Content-Type: application/json');
json_encode($data)
```
