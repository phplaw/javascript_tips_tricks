 // all about databtable.js
allFilters = currentFilters.join('|').replace("&", "\\&").replace(/\s/g, "\\s");
table.columns(columnIndex).search(allFilters, true).draw();
// for working with export excel here is start document
// https://datatables.net/reference/button/excelHtml5
