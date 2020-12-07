const pos = () => {
    const share = document.querySelector('.share');
    // const svg = document.querySelector('.share svg path');
    const bubble = document.querySelector('.tooltip');
    
    share.addEventListener('click', () => {
        if(bubble.style.display === 'none'){
            bubble.style.display = 'flex';
            share.style.backgroundColor = '#eee';
        }
        else{
            bubble.style.display = 'none';
            share.style.backgroundColor = 'transparent';
        }
    })
}

pos();