// Select color input
// Select size input

var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
var color;

// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function (event){
    event.preventDefault();
    let x = width.value;
    let y = height.value;
    makeGrid(x, y);

})


// Canvas Function
function makeGrid(x, y) {
    const pixelCanvas = document.getElementById('pixelCanvas');

    // Resets the grid
    if ('submit') {
        if (pixelCanvas.hasChildNodes()){
            do {

                pixelCanvas.firstElementChild.remove();
            } while(pixelCanvas.hasChildNodes());
        } else {
            null
        }
    }

    // Creates the columns and rows  
    for(var h = 1; h <= y; h++) {
        var column = document.createElement('tr');
        column.id = ('table=' + w);
        pixelCanvas.appendChild(column);
        for(var w = 1; w <= x; w++) {
            var rows = document.createElement('td');
            column.appendChild(rows);

        }
    }

    // Adds color
    var shade = document.querySelectorAll('td');
    shade.forEach(function(cell){
        cell.addEventListener('click', function(event){
            color = document.getElementById('colorPicker').value;
            console.log(color);
            if (cell.getAttribute('style')){
                cell.removeAttribute('style');
                console.log('erase');
            } else {
                cell.setAttribute('style', 'background-color:'+color);
                console.log('draw');
            }
        })
    })

}
