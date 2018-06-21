document.addEventListener('DOMContentLoaded', function(){
    var split = document.querySelector('.split'),
        top = split.querySelector('.top'),
        line = split.querySelector('.line')
        screw = 0,
        delta = 0;

    split.addEventListener('mousemove', (e) =>{

        if(split.classList.contains('screwed')){
            screw = 1000;
            delta =  (e.clientX - window.innerWidth * 0.5) * 0.5;
        }
        
        line.style.left = e.clientX + delta +"px";
        top.style.width = e.clientX + screw + delta +"px";
    })
})