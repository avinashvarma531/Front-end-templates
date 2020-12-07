function toggleHero(){
    const img = document.querySelector('.hero-img');
    if(window.innerWidth >= 768){
        img.src = img.src.replace('mobile', 'desktop');
    }
    else if (window.innerWidth < 768){
        img.src = img.src.replace('desktop', 'mobile');
    }
}

window.addEventListener('resize', ()=>{
    toggleHero();
})

toggleHero();