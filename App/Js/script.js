const btn = document.querySelector(".hamburger");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const ovrly = document.querySelector(".lorem");
const mobile = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

btn.addEventListener('click', function() {
    if(open.classList.contains("close")) {
        open.classList.remove("close")
        close.classList.add("close");
        ovrly.classList.remove("overlay");
        mobile.classList.add("close");
        body.classList.remove("noScroll");
    } else {
        open.classList.add("close");
        close.classList.remove("close");
        ovrly.classList.add("overlay");
        mobile.classList.remove("close");
        body.classList.add("noScroll");
    }
});
