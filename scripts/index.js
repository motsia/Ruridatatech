
$(document).ready(function () {

  // Load external HTML content for header and footer
  
  $("#hdr").load("header.html", function (response, status, xhr) {
    if (status == "error") {
      console.error("Error loading header: " + xhr.status + " " + xhr.statusText);
    }
  });
  
  $("#ftr").load("footer.html", function (response, status, xhr) {
    if (status == "error") {
      console.error("Error loading footer: " + xhr.status + " " + xhr.statusText);
    }
  });
  

  // Toggle functionality for team details
  $("#teamLink").click(function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Toggle visibility with sliding effect
    $("#teamDetails").slideToggle();
     
    // Dynamically update link text
    const linkText = $(this).text() === "View Team Details" ? "Hide Team Details" : "View Team Details";
    $(this).text(linkText);
  });
});


    