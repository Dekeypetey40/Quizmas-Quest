const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

/* Formating stored data */ 
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

/*When a key is pressed this will re-enable the save button */ 
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

/*This allows us to click the button and it doesn't just automatically refresh */
saveHighScore = e => {
    e.preventDefault();
    /* */
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    /*Pushing highscore and sorting the score */
    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');

};