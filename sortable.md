The jQuery UI sortable feature includes a serialize method to do this. 
It's quite simple, really. 
Here's a quick example that sends the data to the specified URL as soon as an element has changes position.
```javascript
$('#element').sortable({
    axis: 'y',
    update: function (event, ui) {
        var data = $(this).sortable('serialize');

        // POST to server using $.post or $.ajax
        $.ajax({
            data: data,
            type: 'POST',
            url: '/your/url/here'
        });
    }
});
```
What this does is that it creates an array of the elements using the elements id. So, I usually do something like this:
```html
<ul id="sortable">
   <li id="item-1"></li>
   <li id="item-2"></li>
   ...
</ul>
```
When you use the serialize option, it will create a POST query string like this: item[]=1&item[]=2 etc. So if you make use - for example - your database IDs in the id attribute, you can then simply iterate through the POSTed array and update the elements' positions accordingly.

For example, in PHP:
```php
$i = 0;

foreach ($_POST['item'] as $value) {
    // Execute statement:
    // UPDATE [Table] SET [Position] = $i WHERE [EntityId] = $value
    $i++;
}
```
~~Other way~~
```javascript
$(function() {
    $( '#sort-list' ).sortable({
        stop: function () {
            var inputs = $('input.currentposition');
            var nbElems = inputs.length;
            $('input.currentposition').each(function(idx) {
                $(this).val(nbElems - idx);
            });
        }
    });
});
```
http://jsfiddle.net/AJnDR/
