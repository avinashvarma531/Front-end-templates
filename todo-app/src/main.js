let item = document.querySelectorAll('.item');
const theme = document.querySelector('.theme');
const doc = document.documentElement.style;

theme.addEventListener('click', ()=>{
    const ico = theme.querySelector('img');
    const body = document.querySelector('body');
    const list = document.querySelector('.list');
    const headBg = document.querySelector('.head-bg');

    if(ico.src == 'http://127.0.0.1:5500/src/images/icon-sun.svg'){
        ico.src = 'http://127.0.0.1:5500/src/images/icon-moon.svg';
        headBg.style.backgroundImage = 'url(http://127.0.0.1:5500/src/images/bg-desktop-light.jpg)';
        doc.setProperty('--fbg', '#fff');
        doc.setProperty('--sbg', '#fff');
        doc.setProperty('--font', 'hsl(235, 19%, 35%)');
        doc.setProperty('--other', 'hsl(233, 11%, 84%)');
        doc.setProperty('--info', 'hsl(236, 9%, 61%)');
    }
    else{
        ico.src = 'http://127.0.0.1:5500/src/images/icon-sun.svg';
        headBg.style.backgroundImage = 'url(http://127.0.0.1:5500/src/images/bg-desktop-dark.jpg)';
        doc.setProperty('--fbg', 'hsl(235, 21%, 11%)');
        doc.setProperty('--sbg', 'hsl(235, 21%, 20%)');
        doc.setProperty('--font', 'hsl(234, 39%, 85%)');
        doc.setProperty('--other', 'hsl(235, 21%, 30%)');
        doc.setProperty('--info', 'hsl(235, 21%, 50%)');
    }
})

item = Array.from(item)

for(let i=0; i<item.length; i++){
    item[i].querySelector('.check').addEventListener('click', ()=>{
        const check = item[i].querySelector('.check');
        const img = check.querySelector('.check img');
        const text = item[i].querySelector('.item-text');
        if(img.style.display === 'none' || img.style.display === ''){
            img.style.display = 'inline-block';
            check.style.backgroundImage = 'linear-gradient(90deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
            text.style.textDecoration = 'line-through';
            text.style.color = 'var(--info)';
        }
        else{
            img.style.display = 'none';
            check.style.backgroundImage = 'none';
            text.style.textDecoration = 'none';
            text.style.color = 'var(--font)';
        }
    })
}