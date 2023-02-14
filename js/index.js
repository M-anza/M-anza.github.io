function myFunction(){
    let x = document.getElementById("myTopnav");
    if(x.className === "header"){
        x.className += " responsive";
    }else{
        x.className = "header";
    }
}


function myFunction() {
    let x = document.getElementsByClassName("menuItems");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }