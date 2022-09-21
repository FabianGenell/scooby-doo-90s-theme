const start = Date.now();
var highscores = JSON.parse(localStorage.getItem('highscores'));
//if there is nothing in localstorage highscore will be broke which breaks highscore.length
if (highscores == null) {
    console.log('highscore is null');
    highscores = new Array();
}

var diffSeconds;

function changeText() {
    console.log('highscores localstorage is: ' + typeof (highscores));
    console.log(highscores);
    document.getElementById('textToChange').innerHTML = `It took you ${timeElapsed()} seconds you lazy person`;
    document.getElementById('textChangingButton').style.backgroundColor = 'red';
}

function timeElapsed() {
    var diff = Date.now() - start;
    diffSeconds = (diff / 1000);

    //if new result is bigger than the last highscore or highscores doesn't have 5 elements
    if (highscores.length < 5 || diffSeconds < highscores[4]) {

        console.log("testing: " + highscores.length < 5);

        highscores.push(diffSeconds);
        console.log(`diffseonds pushed: ${diffSeconds}`);

    }

    createScoreboard();

    return (diffSeconds); //returns value in seconds
}

function createScoreboard() {
    let highscoreDiv = document.getElementById('highscore');

    if (highscores.length == 0) {
        console.log('scoreboard empty! resetting or whatever');
        highscoreDiv.innerHTML = '';

    }

    let highscoreList = document.createElement('ul');
    /*
    sort the scores - reverse them (longest last)
    //.sort seems to only sort after the first number (example 40 would be less than 5)
    I fixed this by adding an anonymous function (that i found online, don't know exactly)
    */
    highscores = highscores.sort((a, b) => { return a - b; });

    //if its longer than 5, make it 5
    if (highscores.length > 5) {
        highscores.length = 5;
    }

    //save highscores in browser localstorage
    localStorage.setItem('highscores', JSON.stringify(highscores));

    console.log(highscores);

    //Loop through the scores
    for (var number in highscores) {

        let score = highscores[number];

        //create a list element
        const scoreLi = document.createElement('li');

        if (score == diffSeconds) {
            scoreLi.id = 'new-item';
        }

        //add 1 to the number -> make a human list
        number++;

        scoreLi.innerHTML = `#${(number)} - ${score}`


        highscoreList.appendChild(scoreLi);

    }


    highscoreDiv.innerHTML = '';
    highscoreDiv.appendChild(highscoreList);

    highscoreDiv.classList.add('highscore-active')


    console.log(localStorage.getItem('highscores'));


}

//clear button on reset button press
document.getElementById('resetButton').addEventListener('click', (e) => {
    localStorage.clear();
    highscores = new Array();
    highscoreDiv.classList.remove('highscore-active')
    createScoreboard();

});

