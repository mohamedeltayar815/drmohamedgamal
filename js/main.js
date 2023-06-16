let contactinf = document.querySelector("header")
let navbar = document.querySelector('nav')
window.onscroll = function(){
    if (innerWidth > 800){
    let rhfb = this.scrollY
    if(rhfb >= 150){

        contactinf.classList.add("del");
        navbar.classList.add("navact");


    }else{
        contactinf.classList.remove("del");
        navbar.classList.remove("navact");

    }
}
}



let myNavRemove = document.querySelectorAll(".navcon")



function hideMyNavLi (){

    myNavRemove.forEach((li)=>{
        li.classList.toggle("rem")
    })
   

}



// let next = document.querySelector('.next')
// let pre = document.querySelector('.pre')
// let cardHolder = document.querySelector('.cardHolder')


// next.addEventListener("click", ()=>{
//     cardHolder.scrollLeft += 290;
//     let totalScrole = cardHolder.scrollWidth
//     let scrleft = cardHolder.scrollLeft
//     let holderwidth = cardHolder.clientWidth
    
//     console.log(scrleft)
//     console.log(holderwidth)
    
    
//     if(scrleft==(totalScrole-holderwidth)){
//         cardHolder.scrollLeft -= (cardHolder.scrollLeft);
//         cardHolder.style.transition = '0s'
//         cardHolder.style.scrollBehavior = 'Animatable'

        
        
        
//     }
//     else{
//         cardHolder.style.scrollBehavior = 'smooth'
//     }
    
    
   

    
// })
// pre.addEventListener("click", ()=>{
//     cardHolder.scrollLeft -= 290
// })



let closebtn = document.querySelector('.closebtn')
let videoCard = document.querySelector('.videoCard')

closebtn.addEventListener("click", hidevideocard)

function hidevideocard(){
    
    videoCard.classList.toggle("del")
    closebtn.classList.toggle("convert")

}
closebtn.addEventListener("click", hoverdata)
function hoverdata(){

}

// extend margin bottom for nav drob down 

let extend = document.querySelector('.extend')

extend.addEventListener("click",()=>{
    extend.classList.toggle("addMoreMargin")
}

)





// galary 
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementsByClassName("gallery")[0].getElementsByTagName("img");
var modalImg = document.getElementById("img01");
for (var i = 0; i < img.length; i++) {
  img[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
