/*
TODO:
- make mouse invisible - make photo of scooby snack follow mouse instead
- change image to bitten scooby snack on hover over scooby or shaggy
- if whole snack is eaten make make game over / you lost screen
*/
let snack = document.getElementById('scooby-snack');


let shaggy = document.getElementById('shaggy-selector');
let scooby = document.getElementById('scooby-selector');
let bites = 1;

shaggy.addEventListener('mouseenter', (e) => { takeBite(e); console.log('Event!'); });
scooby.addEventListener('mouseenter', (e) => { takeBite(e) });

window.addEventListener('mousemove', (e) => {

    snack.style.left = e.clientX + 'px';
    snack.style.top = e.clientY + 'px';

});

let wait = false;

function takeBite(e) {

    if (wait) { return; }

    wait = true;
    bites++;
    e.target.classList.add('animate__animated', 'animate__wobble');


    if (bites > 4) {
        snack.style.display = 'none';
        youHaveNoMouse();
        return;
    }

    snack.setAttribute('src', 'img/snacks/scooby-snack-' + bites + '.png');


    setTimeout(() => {
        wait = false;
        e.target.classList.remove('animate__animated', 'animate__wobble');

    }, 700);

}
const rules = document.getElementById('rules');
const noMouse = document.getElementById('no-mouse');

function youHaveNoMouse() {

    rules.style.display = 'none';
    noMouse.style.display = 'block';

}

function newScoobySnack() {

    bites = 1;
    snack.setAttribute('src', 'img/snacks/scooby-snack-1.png');
    snack.style.display = 'block';

    rules.style.display = 'block';
    noMouse.style.display = 'none';

    console.log('You got a new scooby snack!');

    wait = false;
    shaggy.classList.remove('animate__animated', 'animate__wobble');
    scooby.classList.remove('animate__animated', 'animate__wobble');

}


