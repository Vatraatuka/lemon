// Add event listener to submenu toggle buttons
document.querySelectorAll(".submenu-toggle").forEach((button) => {
  button.addEventListener("click", function () {
    // Toggle visibility of submenu list
    let submenuList = this.nextElementSibling;
    if (submenuList.style.display === "block") {
      submenuList.style.display = "none";
    } else {
      submenuList.style.display = "block";
    }
  });
});
