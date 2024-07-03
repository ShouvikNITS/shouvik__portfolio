const navbar = () => {
    let sections = document.querySelectorAll('section');
    let navBtn = document.querySelectorAll('.nav__main ul li a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop-10;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navBtn.forEach(btn => {
                    btn.classList.remove('active');
                    document.querySelector('.nav__main ul li a[href*='+id+']').classList.add('active');
                });
            };
        });
    };

};

export default navbar;