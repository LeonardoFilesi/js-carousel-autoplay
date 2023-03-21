const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

let activeElement = 0;
const imgList = document.getElementById('img-container').children;
const selectorList = document.getElementById('carousel-selector-container').children;
const next = document.getElementById('next-button');
const previous = document.getElementById('previous-button');

for (let i = 0; i < images.length; i++){
    const newImg = document.createElement('img');
    newImg.setAttribute('src', images[i]);
    newImg.classList.add('w-100');
    document.getElementById('img-container').append(newImg);

    const newSelector = document.createElement('div');
    newSelector.classList.add('selector-item');
    document.getElementById('carousel-selector-container').append(newSelector);
}

imgList[activeElement].classList.add('active');
selectorList[activeElement].classList.add('active');


next.addEventListener('click', goNext);

previous.addEventListener('click', function(){
    imgList[activeElement].classList.remove('active');
    selectorList[activeElement].classList.remove('active');
    activeElement--; 
    if(activeElement < 0){
        activeElement = imgList.length - 1;
    };
    imgList[activeElement].classList.add('active');
    selectorList[activeElement].classList.add('active');
});

const clock = setInterval(goNext, 5000)

function goNext(){
    imgList[activeElement].classList.remove('active');
    selectorList[activeElement].classList.remove('active');
    activeElement++; 
    if(activeElement === imgList.length){
        activeElement = 0;
    };
    imgList[activeElement].classList.add('active');
    selectorList[activeElement].classList.add('active');
} 

