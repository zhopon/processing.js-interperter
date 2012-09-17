var proc = function($) {
    $.draw = function() {
        
        execute($);
        
    }
    
    
}

function execute(processing) {
    var result = eval(sketch_code.value);
    if (result !== undefined) {
        console.log(result);
    }
}


var sketch = document.getElementById('sketch');
var sketch_code = document.getElementById('sketch_code');

sketch_code.onkeypress = function() {
    var processingInstance = new Processing(sketch, proc);    
}
