const navbar = document.querySelector(".nav-bar");

navbar.addEventListener("click", navbars);

function navbars(){

    const nav = document.querySelector(".nav");

    nav.classList.toggle("opening-bar");
    if(nav.classList.contains("opening-bar")){

        nav.style.maxHeight = nav.scrollHeight + 'px';
    }else{
        nav.removeAttribute("style");
    }
}

// slide image

var slideheader= 1;

showslide(slideheader);

function scrollall(n){
    showslide(slideheader += n);
}
function showslide(n){
    var i;
    var slideimage = document.getElementsByClassName("slide-image");

    if(n > slideimage.length){
        slideheader = 1
    }
    if(n < 1){
        slideheader = slideimage.length
    }
    for(i =0 ; i < slideimage.length; i++){

        slideimage[i].style.display = "none";
    }
    slideimage[slideheader-1].style.display = "block";
}




const filtercontent = document.querySelector(".filter-content");
const filterimage = document.querySelectorAll(".filter-image");

filtercontent.addEventListener("click", (event) =>{

    if(event.target.classList.contains("item-filter")){
        filtercontent.querySelector(".active").classList.remove("active");

        event.target.classList.add("active");
    
        const filtervall = event.target.getAttribute("data-filter");
    
        filterimage.forEach((item) =>{
            if(item.classList.contains(filtervall) || filtervall === 'All'){
    
                item.classList.remove("hidding");
                item.classList.add("showing");
            }
            else{
                item.classList.remove("showing");
                item.classList.add("hidding");
            }
        });
    }
});

// Carousel 
// loading items


const loader = document.querySelector(".loader");

window.addEventListener("load", ()=>{

    setTimeout(() =>{
        loader.classList.add("loading-box");

        setTimeout(() =>{
            loader.style.display = "none";
        },1000);
    },3000);
});