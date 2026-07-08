/* =====================================================
   SUSILYA WEBSITE JAVASCRIPT
   PERFORMANCE OPTIMIZED
===================================================== */


document.addEventListener("DOMContentLoaded", function () {



/* =========================
   MOBILE NAVIGATION
========================= */


const menuButton = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");


if(menuButton && navMenu){


menuButton.addEventListener("click", function(){


navMenu.classList.toggle("active");



if(navMenu.classList.contains("active")){

menuButton.setAttribute(
"aria-label",
"Close navigation menu"
);

}

else{

menuButton.setAttribute(
"aria-label",
"Open navigation menu"
);

}


});



/* Close menu after clicking link */


document.querySelectorAll(".nav-menu a")
.forEach(link=>{


link.addEventListener("click",()=>{

navMenu.classList.remove("active");


});


});


}





/* =========================
   HEADER SHADOW ON SCROLL
========================= */


const header=document.querySelector(".header");


window.addEventListener("scroll",()=>{


if(window.scrollY>50){


header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.15)";


}


else{


header.style.boxShadow =
"0 5px 20px rgba(0,0,0,.08)";


}


});





/* =========================
   FAQ ACCORDION
========================= */


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


const question =
item.querySelector("h3");


const answer =
item.querySelector("p");



answer.style.display="none";



question.style.cursor="pointer";



question.addEventListener("click",()=>{


if(answer.style.display==="none"){


answer.style.display="block";


item.style.borderLeft =
"5px solid #008080";


}


else{


answer.style.display="none";


item.style.borderLeft="none";


}



});


});





/* =========================
   SMOOTH SCROLL
========================= */


document.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}


});


});






/* =========================
   SCROLL REVEAL
========================= */


const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},

{

threshold:0.15

}

);




document.querySelectorAll(
".service-card, .feature-card, .industry-item, .workflow-step"
)

.forEach(element=>{


element.style.opacity="0";


element.style.transform=
"translateY(30px)";


observer.observe(element);


});





/* =========================
   IMAGE LAZY LOADING FALLBACK
========================= */


const images =
document.querySelectorAll("img");



images.forEach(img=>{


if(!img.hasAttribute("loading")){


img.setAttribute(
"loading",
"lazy"
);


}


});



});