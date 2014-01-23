'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Whoa, you clicked me!");	
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);
	function projectClick(e) {
   		 // Cancel the default action, which prevents the page from reloading
    	e.preventDefault();
	    // In an event listener, $(this) is the element that fired the event	    console.log("confirm1");
	    var projectTitle = $(this).find("p").text();
	    var jumbotronHeader = $(".jumbotron h1");
	    jumbotronHeader.text(projectTitle);

	    var containingProject = $(this).closest(".project");
	    var description = $(containingProject).find(".project-description");
		
		if (description.length == 0) {
			$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
		} else {
	    	description.fadeOut();
		}
	}

	$("#submitBtn").click(updateProject);
}

function updateProject(e){
	var projectTitle = $('#project').val();
	var newWidth = $('#width').val();
	var newDesc = $('#description').val();
	$(projectTitle).animate({width: newWidth});
	$(projectTitle + " .project-description").text(newDesc);
}