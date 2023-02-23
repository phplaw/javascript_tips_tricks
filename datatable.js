 // all about databtable.js
allFilters = currentFilters.join('|').replace("&", "\\&").replace(/\s/g, "\\s");
table.columns(columnIndex).search(allFilters, true).draw();
// for working with export excel here is start document
// https://datatables.net/reference/button/excelHtml5

// get unique data in columns 
var unique_data = [];
 datatables_instance.column(_index).data().unique().sort().each(function (d, j) {
                if(d!=='') {
                    unique_data.push(d);
                }
            });
