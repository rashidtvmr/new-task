let isSidebarShowing = false;
let backdrop = document.querySelector(".backdrop-sidebar");
let sideBar = document.querySelector(".sidebar");
backdropClicked = () => {
  showSidebar();
};
showSidebar = () => {
  if (isSidebarShowing) {
    sideBar.style.display = "none";
    backdrop.style.display = "none";
    isSidebarShowing = !isSidebarShowing;
  } else {
    backdrop.style.display = "block";
    sideBar.style.display = "block";
    isSidebarShowing = !isSidebarShowing;
  }
};
