function postBlog() {
	alert('Your creation has been finish');
	var title = document.getElementById('title').value;
	var fname = document.getElementById('fname').value;
	var mname = document.getElementById('mname').value;
	var lname = document.getElementById('lname').value;
	var content = document.getElementById('content').value;

	document.getElementById('input_title').innerHTML = title;
	document.getElementById('input_author').innerHTML = fname + " " + mname + " " + lname;
	document.getElementById('input_content').innerHTML = content;
}