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

// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(UfoSighting) {
  console.log(UfoSighting);
});

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(UfoSighting) {
  console.log(UfoSighting);
  var row = tbody.append("tr");
});


// // Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(UfoSighting) {
  console.log(UfoSighting);
  var row = tbody.append("tr");

  Object.entries(UfoSighting).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(UfoSighting) {
  console.log(UfoSighting);
  var row = tbody.append("tr");

  Object.entries(UfoSighting).forEach(function([key, value]) {
        console.log(key, value);
    //     // Append a cell to the row for each value
    //     // in the weather report object
        var cell = row.append("td");
      });
    });
    
    // // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(function(UfoSighting) {
  console.log(UfoSighting);
  var row = tbody.append("tr");
  Object.entries(UfoSighting).forEach(function([key, value]) {
    console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});






