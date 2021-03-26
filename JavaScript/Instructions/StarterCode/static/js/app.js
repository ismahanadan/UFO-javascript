// from data.js
var tableData = data;
console.log(data);


// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// // Step 1: Loop Through `data` and console.log each data object
data.forEach(function(UfoSighting) {
    console.log(UfoSighting);
  });
  
  


