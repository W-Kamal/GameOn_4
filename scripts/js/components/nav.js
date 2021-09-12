const mainNav = document.getElementById('main__nav');

/* Open or close side-nav on smartphone when clicking on hamburger icon */
const sideToggleBtn = document.getElementById("hamburgerToggle");
sideToggleBtn.onclick = toggleSideNav;
/* Add or remove a CSS class that display the menu as a side-nav */
function toggleSideNav() {
  mainNav.className = mainNav.className === "side__nav" ? "" : "side__nav";
}