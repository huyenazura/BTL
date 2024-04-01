document.addEventListener("DOMContentLoaded", function () {
  var mainItems = document.querySelectorAll(".main-item");

  mainItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var subMenu = this.querySelector(".sub-menu");
      toggleSubMenu(subMenu);
    });
  });
});

function toggleSubMenu(subMenu) {
  var isSubMenuVisible = window.getComputedStyle(subMenu).display !== "none";

  if (isSubMenuVisible) {
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "block";
  }
}
