const cursor = document.querySelector('.cursor');
const cursordot = document.querySelector('.cursor__dot');

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursordot.style.left = `${posX}px`;
    cursordot.style.top = `${posY}px`;

    cursor.animate({
        left : `${posX}px`,
        top : `${posY}px`
    }, {duration:400, fill: "forwards"});
    

});