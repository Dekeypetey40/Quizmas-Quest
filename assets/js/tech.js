const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


/*Declaring variebls*/

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

/*Declaring questions variable*/
let questions = [{
    question: 'What do you call it when a bowler makes three strikes in a row',
    choice1: 'Turkey',
    choice2: 'Strike',
    choice3: 'Bingo',
    choice4: 'Whole in One',
    answer: 2,
}, {
    question: "What is the national sport of Canada?",
    choice1: "Lacrosse",
    choice2: "Hockey",
    choice3: "Frisbee",
    choice4: "Moose wrestling",
    answer: 1,
}, {
    question: "What does NBA stand for?",
    choice1: "National Basketball Association",
    choice2: "Non Binary Association",
    choice3: "National Bowling Association",
    choice4: "Neutral Biblic Association",
    answer: 1,
},{
    question: "How long is an Olympic swimming pool?",
    choice1: "50m",
    choice2: "45m",
    choice3: "60m",
    choice4: "75m",
    answer: 1,
},];

/*Declaring points per 'right' answer*/
const SCORE_POINTS = 100;

/*Declaring questions limit*/
const MAX_QUESTIONS = 5;

/* Short comand syntax for the startGame function
    Setting start of game variables */

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};
/*Keeping track of score */
const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('endgame.html');
    }

    /* Incrementing by 1 each question */
    /* Calculating what question we are on to display 1/4,2/4, etc */
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    /* Calculating the value of the questionsIndex*/

    /*Calculating the value of the question index*/
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);

    /*Keeping track of what question we are on */
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    /*set new const for data-number so we know what choices we are clicking on*/
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};
/*adding click event listener for points and increment by 100 points for correct answer*/
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        /*If statement for correct or inccorect answer*/
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        /* everytime we are clicking right or wrong */
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            /*will get us the next question*/
            getNewQuestion();
        }, 1000);
    });
});
/*incrementing score*/
const incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};
startGame();

/* timer and score decrement based on passed time */