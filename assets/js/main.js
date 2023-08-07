jQuery(document).ready(function($) {
	// Calculate masthead height and set margin for elements
	var mastheadheight = $('.ds-header').outerHeight();
	$(".ds-banner, .ds-main-section").css("margin-top", mastheadheight);
  
	// Add scroll event listener to handle fixed header behavior
	$(window).scroll(function() {
	  if ($(window).scrollTop() >= 10) {
		$('.ds-header').addClass('ds-fixed-header');
	  } else {
		$('.ds-header').removeClass('ds-fixed-header');
	  }
	}).scroll();
  
	// Number of items to display per page and total number of items
	var itemsPerPage = 4;
	var totalItems = $(".ds-work-list-section .ds-work-list").length;
	var totalPages = Math.ceil(totalItems / itemsPerPage);
  
	// Show the first page by default
	showPage(1);
  
	// Add click event listener to page links
	$(".pagination .page-link").click(function(e) {
	  e.preventDefault();
	  var page = $(this).data("page");
	  showPage(page);
	});
  
	// Function to show the specified page
	function showPage(page) {
	  // Hide all portfolio items
	  $(".ds-work-list-section .ds-work-list").hide();
	  // Calculate the start and end index of items to show
	  var startIndex = (page - 1) * itemsPerPage;
	  var endIndex = startIndex + itemsPerPage;
	  // Show the selected items
	  $(".ds-work-list-section .ds-work-list").slice(startIndex, endIndex).show();
	  // Update active page link
	  $(".pagination .page-link").removeClass("active");
	  $(".pagination .page-link[data-page='" + page + "']").addClass("active");
	}
  
	// Get all the navigation links inside the .ds-header-inner list
	const navLinks = document.querySelectorAll(".ds-header-inner li a");
  
	// Add event listeners to handle the hover effect and active link for navigation links
	navLinks.forEach(link => {
	  link.addEventListener("mouseenter", function() {
		// Change background and text color on hover
		link.style.backgroundColor = "#F06000";
		link.style.color = "#FFF";
		link.style.borderRadius = "20px";
	  });
  
	  link.addEventListener("mouseleave", function() {
		// Reset background and text color on hover exit if the link is not active
		if (!link.classList.contains("active")) {
		  link.style.backgroundColor = "";
		  link.style.color = "";
		  link.style.borderRadius = "";
		}
	  });
  
	  // Add click event listener to handle the active link
	  link.addEventListener("click", function(event) {
		// Remove "active" class from all links
		navLinks.forEach(navLink => {
		  navLink.classList.remove("active");
		  navLink.style.backgroundColor = "";
		  navLink.style.color = "";
		  navLink.style.borderRadius = "";
		});
  
		// Apply "active" class to the clicked link
		link.classList.add("active");
		link.style.backgroundColor = "#F06000";
		link.style.color = "#FFF";
		link.style.borderRadius = "20px";
	  });
	});
  });
  