window.addEventListener('mousemove', (e) => {

    let circle = document.getElementById('circle');
    circle.style.left = e.clientX + 'px';
    circle.style.top = e.clientY + 'px';

});

