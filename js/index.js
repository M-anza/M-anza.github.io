// function myFunction(){
//     let x = document.getElementById("myTopnav");
//     if(x.className === "header"){
//         x.className += " responsive";
//     }else{
//         x.className = "header";
//     }
// }

let harmburgerMenu = document.getElementById("menu");
harmburgerMenu.addEventListener("click",toggleMenu);
function toggleMenu() {
    let x = document.querySelector(".menuItems");
    console.log(x.classList)
     x.classList.toggle("active") 
     
  }
  let anch = document.getElementsByClassName("anch");
  console.log(anch[0])
  
  anch[0].addEventListener("click",()=>{toggleMenu
    console.log(anch[0])
});