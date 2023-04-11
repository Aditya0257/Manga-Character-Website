let side_image_container_1 = document.querySelector(".fixed_side_content_1");
let side_image_container_2 = document.querySelector(".fixed_side_content_2");
window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    if (window.scrollY > 652 && window.scrollY < 2200){
        side_image_container_1.style = "opacity:1";     
    } 
    else {
        side_image_container_1.style = "opacity:0";
        side_image_container_2.style = "opacity:1";
    }
    if (window.scrollY < 2200 || window.scrollY > 3600){
        side_image_container_2.style = "opacity:0";
    }
});