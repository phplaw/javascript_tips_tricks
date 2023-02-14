 // all about databtable.js
allFilters = currentFilters.join('|').replace("&", "\\&").replace(/\s/g, "\\s");
table.columns(columnIndex).search(allFilters, true).draw();
