    // Automatic Slideshow - change image every 4 seconds
    var myIndex = 0;
    carousel();
    
    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
    }
    
   // Used to toggle the menu on small screens when clicking on the menu button
   function myFunction() {
       var x = document.getElementById("navDemo");
       if (x.className.indexOf("w3-show") == -1) {
       x.className += " w3-show";
       } else { 
       x.className = x.className.replace(" w3-show", "");
       }
   }
   
   // When the user clicks anywhere outside of the modal, close it
   var modal = document.getElementById('ticketModal');
   window.onclick = function(event) {
       if (event.target == modal) {
       modal.style.display = "none";
       }
   }
   // Get the modal
   var modal = document.getElementById("myModal");

   // Get the button that opens the modal
   var btn = document.getElementById("trigger-modal");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // When the user clicks on the button, open the modal
   btn.onclick = function() {
   modal.style.display = "block";
   }

   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
   modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
   }