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

/*Declaring random fact function*/
var introDescription = document.querySelector('.intro-description');


/*Declaring questions variable*/
let questions = [{
    question: "Which popular Christmas beverage is also called 'milk punch'?",
    choice1: 'Hot Chocolate',
    choice2: 'Mulled Wine',
    choice3: 'Eggnog',
    choice4: 'Apple Cider',
    answer: 3,
},{
    question: "What popular Christmas figure was developed in the 19th century?",
    choice1: 'Frosty the Snowman',
    choice2: 'Santa Claus',
    choice3: 'The Grinch',
    choice4: 'Rudolph the Red-Nosed Reindeer',
    answer: 2,
}, {
    question: "Which country popularized the Christmas tree tradition?",
    choice1: 'France',
    choice2: 'United States',
    choice3: 'Germany',
    choice4: 'Italy',
    answer: 3,
}, {
    question: "What was the original date of the Roman festival Saturnalia?",
    choice1: 'December 25',
    choice2: 'January 1',
    choice3: 'December 21',
    choice4: 'November 5',
    answer: 3,
}, {
    question: "In which century was Christmas declared a federal holiday in the USA?",
    choice1: '18th Century',
    choice2: '19th Century',
    choice3: '20th Century',
    choice4: '21st Century',
    answer: 2,
},];

/*Declaring points per 'right' answer*/
const SCORE_POINTS = 100;

/*Declaring questions limit*/
const MAX_QUESTIONS = 10;

/* Short command syntax for the startGame function
    Setting start of game variables */

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};
/*Keeping track of score */
const getNewQuestion = () => {
    /* Incrementing by 1 for each question */
    questionCounter++;
    introDescription.textContent = getRandomFact();
    
    /* Calculating what question we are on to display 1/4,2/4, etc */
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        // Redirect to the end game page
        return window.location.assign('endgame.html');
    }
    /* Updating the progress bar */
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