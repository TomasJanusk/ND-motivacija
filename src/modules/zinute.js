const button = document.querySelector('#naujazinute');
button.addEventListener('click', zinute);

function zinute(){
    const forma = document.querySelector('.form');
    if(forma.style.display === 'none'){
        forma.style.display = 'block';
    }else{
        forma.style.display = 'none';
    } 
    
} 
export default zinute