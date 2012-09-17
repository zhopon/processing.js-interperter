var pjs_interpert = function() {
	
	var canvas = document.getElementById('sketch');
    var processingInstance;    

    var _execute = function(code) {
	    var result = eval(code);
		    if (result !== undefined) {
	        // console.log(result);
	    }
	}

    return {
    	execute: function(code) {
    		
    		var processing_template = "void draw() {" + code + "}";

    		var proc = function($) {
	    		$.draw = function() {
			        eval(code);
			        // return Processing.compile(code);
			    }            

			    $.noLoop();
			    $.redraw();
			}		

    		processingInstance = new Processing(canvas, proc);
    	},
    	getInstance: function() {
    		return processingInstance;
    	}
    }
}();