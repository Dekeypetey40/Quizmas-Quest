const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const soundFile = new Audio('assets/sounds/magic.mp3');

/* Quit confirmation for user */
document.addEventListener("DOMContentLoaded", function () {  
    document.getElementById("quitButton").addEventListener("click", confirmQuit); // event listener to the "Quit Game" link
});

function confirmQuit(event) {
    event.preventDefault();

    // Display a Quit confirmation message
    const userResponse = confirm("Are you sure you want to quit? Click 'OK' to confirm or 'Cancel' to stay.");

    if (userResponse) {
        alert("You've chosen to quit. Goodbye!");
        window.location.href = event.target.href; // Returns to the home page
    } else {
        alert("You've chosen to stay. Continue enjoying!");
    }
}

/* Restart Confirmation for User */
document.addEventListener("DOMContentLoaded", function () {  
    document.getElementById("restartButton").addEventListener("click", confirmRestart); // event listener to the "Restart Game" link
});

function confirmRestart(event) {
    event.preventDefault();

    // Display a Restart confirmation message
    const userResponse = confirm("Are you sure you want to restart the quiz? Click 'OK' to restart or 'Cancel' to keep playing.");

    if (userResponse) {
        alert("Reloading!");
        location.reload(); // Reloads the page
        soundFile.play();
    } else {
        alert("You've chosen to stay. Go get em' tiger!");
    }
}


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
        question: 'In what year was the first electronic Christmas card sent, and who sent it?',
        choice1: '1974, Tomlinson',
        choice2: '1990, Berners-Lee',
        choice3: '1985, Steve Jobs',
        choice4: '1969, Bill Gates',
        answer: 1,
    },
    {
        question: "Which popular holiday website was launched in 1997 and offers a virtual advent calendar with daily activities and games?",
        choice1: "Elfster",
        choice2: "Northpole.com",
        choice3: "Santa's Workshop",
        choice4: "Christmas.com",
        answer: 2,
    },
    {
        question: "What the name of the first commercially sold artificial Christmas tree, and in what year was it first available to purchase?",
        choice1: "Evergreen Deluxe, 1950",
        choice2: "Yuletide Pine, 1965",
        choice3: "Aluminum Specialty, 1958",
        choice4: "aux Fir, 1972",
        answer: 3
    },
    {
        question: "Which company released the first Christmas-themed video game, and what year was it released?",
        choice1: "Nintendo, 1983",
        choice2: "Sega, 1987",
        choice3: "ari, 1979",
        choice4: "Microsoft, 1991",
        answer: 1,
    },
    {
        question: "In what year was the first online purchase made on a Christmas website, and what was the item purchased ? ",
        choice1: "1994, Christmas sweater",
        choice2: "1998, Decorations",
        choice3: "2001, Holiday album",
        choice4: "2005, Festive recipe book",
        answer: 1,
    },
    {
        question: "How has technology influenced the popularization of e-greetings during the holiday?",
        choice1: "Instant delivery",
        choice2: "Interactive multimedia",
        choice3: "Personalized messages",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "What was the name of the first Christmas-themed mobile app, and what year was it launched?",
        choice1: "HolidayJoy, 2008",
        choice2: "Xmas, 2010",
        choice3: "Santa'sLittleHelper, 2012",
        choice4: "YuletideCheer, 2015",
        answer: 1,
    },
    {
        question: "How has the use of social media platforms affected the sharing of holiday experiences and traditions?",
        choice1: "Global outreach",
        choice2: "Real-time",
        choice3: "Community building",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "When did NORAD first tracking Santa's journey Christmas Eve, and how has technology enhanced this tradition over the years?",
        choice1: "1955 Radar technology",
        choice2: "1960, Satellite",
        choice3: "1975, Computerized mapping",
        choice4: "1980, GPS tracking",
        answer: 1,
    },
    {
        question: "Discuss the impact of streaming and digital downloads on the consumption of music and movies.",
        choice1: "Convenience and accessibility",
        choice2: "ety of options",
        choice3: "Personalized playlists",
        choice4: "All the above",
        answer: 4,
    },
    {
        question: "Which innovative tech gadgets have significantly influenced the way people decorate their homes and create festive atmospheres during holiday season?",
        choice1: "Smart holiday lights",
        choice2: "Projection mapping devices",
        choice3: "Connected ornament sets",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "How have advancements in virtual reality and augmented reality technology been incorporated into Christmas experiences celebrations?",
        choice1: "Immersive Santa's Grotto experiences",
        choice2: "Virtual Christmas concerts",
        choice3: "AR-powered holiday storybooks",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "In what year was the first online purchase made on a Christmas website, and what was the item purchased?",
        choice1: "1994, Christmas sweater",
        choice2: "1998, Decorations",
        choice3: "2001, Holiday album",
        choice4: "2005, Festive recipe book",
        answer: 1,
    },
    {
        question: "How has technology influenced the popularization of e-greetings during the holiday?",
        choice1: "Instant delivery",
        choice2: "Interactive multimedia",
        choice3: "Personalized messages",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "What was the name of the first Christmas-themed mobile app, and what year was it launched?",
        choice1: "HolidayJoy, 2008",
        choice2: "Xmas, 2010",
        choice3: "Santa'sLittleHelper, 2012",
        choice4: "YuletideCheer, 2015",
        answer: 1,
    },
    {
        question: "How has the use of social media platforms affected the sharing of holiday experiences and traditions?",
        choice1: "Global outreach",
        choice2: "Real-time",
        choice3: "Community building",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "When did NORAD first start tracking Santa's journey Christmas Eve, and how has technology enhanced this tradition over the years?",
        choice1: "1955, Radar technology",
        choice2: "1960, Satellite",
        choice3: "1975, Computerized mapping",
        choice4: "1980, GPS tracking",
        answer: 1,
    },
    {
        question: "Discuss the impact of streaming and digital downloads on the consumption of music and movies during the holiday season.",
        choice1: "Convenience and accessibility",
        choice2: "Variety of options",
        choice3: "Personalized playlists",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "Which innovative tech gadgets have significantly influenced the way people decorate their homes and create festive atmospheres during the holiday season?",
        choice1: "Smart holiday lights",
        choice2: "Projection mapping devices",
        choice3: "Connected ornament sets",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "How have advancements in virtual reality and augmented reality technology been incorporated into Christmas experiences and celebrations?",
        choice1: "Immersive Santa's Grotto experiences",
        choice2: "Virtual Christmas concerts",
        choice3: "AR-powered holiday storybooks",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "What is the name of the first holiday-themed emoji created, and which company introduced it?",
        choice1: "Santa Claus emoji, Apple",
        choice2: "Christmas Tree emoji, Microsoft",
        choice3: "Snowman emoji, Google",
        choice4: "Gift emoji, WhatsApp",
        answer: 2,
    },
    {
        question: "How has the rise of online shopping and e-commerce changed holiday gift-giving traditions?",
        choice1: "Wider range of gift options",
        choice2: "Convenience and time-saving",
        choice3: "Personalized recommendations",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "What impact have technology-enabled charity platforms had on holiday charitable giving and donations?",
        choice1: "Increased transparency and trust",
        choice2: "Global reach and accessibility",
        choice3: "Facilitation of recurring donations",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "Which influential tech companies have contributed to the development of AR filters and effects for holiday-themed content?",
        choice1: "Snapchat and Instagram",
        choice2: "Facebook and Twitter",
        choice3: "TikTok and Pinterest",
        choice4: "LinkedIn and Reddit",
        answer: 1,
    },
    {
        question: "How has the evolution of smart home technology impacted the integration of holiday-specific features and experiences?",
        choice1: "Voice-controlled holiday lighting",
        choice2: "Automated Christmas music playlists",
        choice3: "Smart holiday cooking and baking appliances",
        choice4: "All of the above",
        answer: 4,
    },

];

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