var button = d3.select("#filter-btn");

var inputField = d3.select(".form-control");

var filtereddata;

// from data.js
var tableData = data;
// console.log(data);


// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");
function buildTable(table){
  tbody.html("");


   // Step 1: Loop Through `data` and console.log each data object
  table.forEach(function(UfoSighting) {
    // console.log(UfoSighting);
  });


 // // Step 3:  Use `Object.entries` to console.log each data value
table.forEach(function(UfoSighting) {
    // console.log(UfoSighting);
    var row = tbody.append("tr");
 

Object.entries(UfoSighting).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
          cell.text(value);


  });
}); 
    



//     // Append a cell to the row for each value
      //     // in the Ufo data object
          
      

}


buildTable(data);

function filterdata(){
  var date = d3.select("#Date").property("value");
  console.log(date);
  filtereddata = []


  data.forEach(function(Rows){

    if (date === Rows.datetime){
      filtereddata.push(Rows)

      


    }
        



  });
  console.log(filtereddata);
  buildTable(filtereddata);



  






}
button.on("click", filterdata);





  // // Step 2:  Use d3 to append one table row `tr` for each data object
 
  
  
  
 


      

    

  








      
          
         
    
      
  
  
  
  
  
  
  
  
  
    
    
  
  
  
    
    