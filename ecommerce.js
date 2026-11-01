var bar = document.querySelector(".bar");
var sidenavbar = document.getElementById("side-navbar");
var mark=document.getElementById("mark");

bar.addEventListener("click", () => {
    sidenavbar.style.left = "0";
})
mark.addEventListener("click",() => {
    sidenavbar.style.left = "-50%";

})

