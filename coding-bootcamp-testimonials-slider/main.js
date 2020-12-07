const posts = document.querySelectorAll('.content');

const slide = (direction, curr) => {
    
    posts[curr].style.display = 'none';
    if(direction === 0){
        if(curr === 0){
            posts[posts.length - 1].style.display = 'block';
        }
        else{
            posts[curr - 1].style.display = 'block';
        }
    }
    else{
        if(curr === posts.length - 1){
            posts[0].style.display = 'block';
        }
        else{
            posts[curr + 1].style.display = 'block';
        }
    }
}
