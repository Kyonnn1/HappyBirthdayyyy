const click=document.querySelector('.click');

click.addEventListener('click',()=>{
    if(click.className==="click"){
        click.classList.add('active')
        
        setTimeout(() => {
            window.location.href = "camera.html";
        }, 500);
    }
    else{
        click.classList.remove('active')
    }
})