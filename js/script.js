const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];
const itemsContainer = document.querySelector(".slider-items");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

for (let i = 0; i < imagesArray.lenght; i++) {
    const currentImage = imagesArray[i];
    
    const sliderItem = `<div class="item"><img src="${currentImage}" alt=""></div>`;

    itemsContainer.innerHTML += sliderItem;
    console.log(itemsContainer);
} 

// VECCHIO TENTATIVO

/* // Partenza: 
const itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);

let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");



// I bottoni:
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Click sul bottone next
nextBtn.addEventListener("click", function() {
     itemsArray[activeItemIndex].classList.remove("active");
    // if(activeItemIndex = activeItemIndex.lenght) {
    //    activeItemIndex = 1;
    // } else {
    //    activeItemIndex++; 
    // }  
    activeItemIndex++; 
    itemsArray[activeItemIndex].classList.add("active");
});

// Click sul bottone prev
prevBtn.addEventListener("click", function () {
   
    itemsArray[activeItemIndex].classList.remove("active");
    // if(activeItemIndex === 0) {
    //    currentImage === 5;
    // } else {
    //    activeItemIndex--;
    // } 
    activeItemIndex--;
    itemsArray[activeItemIndex].classList.add("active");
}); */