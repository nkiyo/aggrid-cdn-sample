var columnDefs = [
  {headerName: "Make", field: "make", editable:true},
  {headerName: "Model", field: "model"},
  {headerName: "Price", field: "price"},
];
var rowData = [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxter", price: 72000}
];
var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // quick filter
    //gridOptions.api.setQuickFilter('toyota')
    // chrome console にて、以下のような関数実行すると、フィルタできる
    // gridOptions.api.setQuickFilter('toyo cela')
});

