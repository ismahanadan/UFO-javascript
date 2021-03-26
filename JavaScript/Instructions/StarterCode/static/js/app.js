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

  // // Step 2:  Use d3 to append one table row `tr` for each data object
 
  data.forEach(function(UfoSighting) {
    console.log(UfoSighting);
    var row = tbody.append("tr");
  });
  
  
  // // Step 3:  Use `Object.entries` to console.log each data value
  data.forEach(function(UfoSighting) {
    console.log(UfoSighting);
    var row = tbody.append("tr");

    Object.entries(UfoSighting).forEach(function([key, value]) {
        console.log(key, value);
      });
    });

    // // Step 4: Use d3 to append 1 cell per UFO sighting value  (datetime, city, state, shape etc)
    // data.forEach(function(UfoSighting) {
    //     console.log(UfoSighting);
    //     var row = tbody.append("tr");
      
    //     Object.entries(UfoSighting).forEach(function([key, value]) {
    //           console.log(key, value);
    //       //     // Append a cell to the row for each value
    //       //     // in the weather report object
    //           var cell = row.append("td");
    //         });
    //       });

           // // Step 5: Use d3 to update each cell's text with
      // // UFO sighting values 
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

      var button = d3.select("#datetime");

      
      function handleClick() {
        console.log(d3.event.target);

      
}

      
          
         
    
      
  
  
  
  
  
  
  
  
  
    
    
  
  
  
    
    