// Side-nav hamburger menu
 const mainNav = document.getElementsByClassName("main-nav");

 // Toggle menu when clicking on hamburger icon:
 document.getElementById("hamburger").onclick = toggleNav;
 
 // Show hamburger menu
 function toggleNav() {
   mainNav.className =
     mainNav.className === "showHamburger" ? "" : "showHamburger";
 }