// function myFunction(){
//     let x = document.getElementById("myTopnav");
//     if(x.className === "header"){
//         x.className += " responsive";
//     }else{
//         x.className = "header";
//     }
// }

// let harmburgerMenu = document.getElementById("menu");
// harmburgerMenu.addEventListener("click",toggleMenu);
// function toggleMenu() {
//     let x = document.querySelector(".menuItems");
//     console.log(x.classList)
//      x.classList.toggle("active");     
  // }
  // function showOrHideNav(navmenu) {
  //   if (navmenu.style.display === "") navmenu.style.display = "none";
  //   else if (navmenu.style.display === "none") navmenu.style.display = "";
  // }
function showOrHideNav(menuBar) {
  if (menuBar.style.display === "") menuBar.style.display = "none";
  else if (menuBar.style.display === "none") menuBar.style.display = "";
}
  
  window.onload = function () {
    const menuBar = document.getElementById("menuBar");
    const menu = document.getElementsById("menu");
    const mylinks = document.getElementsByTagName("a");
  
    hamburger.addEventListener("click", () => {
      showOrHideNav(menuBar);
    });
  
    for (const link of mylinks) {
      link.addEventListener("click", () => {
        showOrHideNav(menuBar);
      });
    }
  };
  