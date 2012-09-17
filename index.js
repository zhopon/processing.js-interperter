document.getElementById('form').addEventListener(
    'submit', run_code, false
);		

function run_code(evt) {
	var sketch_code = document.getElementById('sketch_code').value;
    pjs_interpert.execute(sketch_code);
	evt.preventDefault();
}