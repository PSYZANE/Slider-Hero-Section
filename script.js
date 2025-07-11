let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length;
let firstPosition = 0;
let active = 0;

nextBtn.onclick = () => {
    active = (active + 1)%lastPosition;
    setSlider();
}
prevBtn.onclick = () => {
    active = ((active + lastPosition)-1)%lastPosition
    setSlider();
    
}
const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if(oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
}
setSlider();

// set diameter
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter+'px');
}
setDiameter();
window.addEventListener('resize', () => {
    setDiameter();
})