/*
TODO:
- make mouse invisible - make photo of scooby snack follow mouse instead
- change image to bitten scooby snack on hover over scooby or shaggy
- if whole snack is eaten make make game over / you lost screen
*/
let snack = document.getElementById('scooby-snack');

let characters = ['shaggy', 'scooby'];

let bites = 1;

//Adding event listeners to characters
characters.forEach(elementName => {

    let element = document.getElementById(elementName + '-selector');
    element.addEventListener('mouseenter', (e) => { takeBite(e) });
    element.addEventListener('animationend', (e) => { snackEaten(e) });

});

window.addEventListener('mousemove', (e) => {

    snack.style.left = e.clientX + 'px';
    snack.style.top = e.clientY + 'px';

});

function snackEaten(e) {
    wait = false;
    e.target.classList.remove('animate__animated', 'animate__wobble');
}

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
    characters.forEach(elementName => {

        let element = document.getElementById(elementName + '-selector');
        element.classList.remove('animate__animated', 'animate__wobble');

    });


}


