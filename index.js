const bgImgEl = document.getElementById("bg-img");

window.addEventListener("scroll" , ()=>{
    updateImg();
})

function updateImg(){
    bgImgEl.style.opacity = 1 - window.scrollY/800;
    bgImgEl.style.backgroundSize = 160 - window.scrollY / 12 + "%";
}