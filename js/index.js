// function myFunction(){
//     let x = document.getElementById("myTopnav");
//     if(x.className === "header"){
//         x.className += " responsive";
//     }else{
//         x.className = "header";
//     }
// }
const harmbuger = document.querySelector(".harmbuger");
const navMenu= document.querySelector(".nav-menu");

harmbuger.addEventListener("click", () =>{
    harmbuger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelector(".nav-link").forEach(n => n.addEventListener("click",()=>{
    harmbuger.classList.remove("active");
    navMenu.classList.remove("active");
}));