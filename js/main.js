window.addEventListener("scroll", function(){
    var nav=document.querySelector('.navbar');
    nav.classList.toggle("fixed-top", window.scrollY>0);
})

AOS.init();
AOS.init({
    duration:1000,
});