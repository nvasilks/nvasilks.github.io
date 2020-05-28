window.addEventListener("DOMContentLoaded", function () {

	// smooth scroll
	$(document).ready(function () {
		// Add smooth scrolling to all links
		$("a").on('click', function (event) {
			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
				// Store hash
				var hash = this.hash;
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 500, function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
  });
  
	// get the form elements defined in your form HTML above
	var form = document.getElementById("my-form");
	var button = document.getElementById("my-form-button");
	var status = document.getElementById("my-form-status");
	// Success and Error functions for after the form is submitted
	function success() {
		form.reset();
		button.style = "display: none";
		status.style = "display: flex";
		status.innerHTML = "Thank you, your message has been sent!";
		dataLayer.push({
			'event': 'form_submitted'
		});
	}

	function error() {
		status.innerHTML = "Oops! There was a problem.";
	}
	// handle the form submission event
	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
	// helper function for sending an AJAX request
	function ajax(method, url, data, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				success(xhr.response, xhr.responseType);
			} else {
				error(xhr.status, xhr.response, xhr.responseType);
			}
		};
		xhr.send(data);
  }
  
	// mouseleave
	$(document).one('mouseleave', function () {
		$('#myModal').modal('show');
  });
  
});// End DOMContentLoaded