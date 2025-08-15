const imgs = document.querySelectorAll(".header-slider ul img")
const prevBtn = document.querySelector(".control-prev")
const nextBtn = document.querySelector(".control-next")

let n = 0;

function changeSlide() {
    for(let i = 0; i < imgs.length; i++)
    {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block'; 
}
changeSlide();

prevBtn.addEventListener('click', (e) => {
    if(n > 0)
    {
        n--;
    }
    else
    {
        n = imgs.length - 1;  // agr first img rhega toh iss condition me aane se last image aayega
    }
    changeSlide();
})

nextBtn.addEventListener('click', (e) => {
    if(n < imgs.length - 1)  // imgs.length-1 -> last img
    {
        n++;
    }
    else
    {
        n = 0;  // agr last img rhega toh iss condition me aane se first image aayega
    }
    changeSlide();
})


const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer) {
    item.addEventListener('wheel', (Event) => {
        Event.preventDefault();
        item.scrollLeft += Event.deltaY;
    })
}


