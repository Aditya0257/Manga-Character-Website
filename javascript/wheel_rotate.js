let wheel = document.querySelector(".sharingan_logo");
let navbar = document.querySelector(".navbar_panel");
wheel.addEventListener("click", spinWheel);

let counter = 0;
function spinWheel() {
    // console.log(counter);
    if (counter % 2 != 0){
      // navbar.style = "transform: translateX(-100%)";
      navbar.style = "opacity:0"; 
      // navbar.target.classList.remove("nav_text_content");
    }
    else{
      // navbar.style = "transform: translateX(0)";
      navbar.style = "opacity:1"; 
    }
    counter++; 
    wheel.target.classList.add("spin");
    setTimeout(() => {
      wheel.target.classList.remove("spin");
    }, 2000);
  }

  