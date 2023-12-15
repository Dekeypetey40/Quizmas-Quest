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
}, {
    question: "What did the other reindeer not let Rudolph do because of his shiny red nose?",
    choice1: 'Sing Christmas Carols',
    choice2: 'Join in any reindeer games',
    choice3: 'Fly with Santa',
    choice4: 'Decorate the Christmas tree',
    answer: 2,
}, {
    question: "How many ghosts show up in A Christmas Carol?",
    choice1: 'Three',
    choice2: 'Four',
    choice3: 'Five',
    choice4: 'Six',
    answer: 2,
}, {
    question: "Where was baby Jesus born?",
    choice1: 'Nazareth',
    choice2: 'Jerusalem',
    choice3: 'Bethlehem',
    choice4: 'Galilee',
    answer: 3,
}, {
    question: "The movie Miracle on 34th Street is based on a real-life department store. What is it?",
    choice1: 'Sears',
    choice2: 'Nordstrom',
    choice3: 'Macys',
    choice4: 'Walmart',
    answer: 3,
}, {
    question: "What are the two other most popular names for Santa Claus?",
    choice1: 'Kris Kringle and Saint Nick',
    choice2: 'Father Christmas and Old St. Nick',
    choice3: 'Jolly Old Elf and Kris Kringle',
    choice4: 'Mr. Claus and Papa Noel',
    answer: 1,
}, {
    question: "Elvis isn't going to have a white Christmas; he's going to have a....",
    choice1: 'Golden Christmas',
    choice2: 'Silver Christmas',
    choice3: 'Blue Christmas',
    choice4: 'Red Christmas',
    answer: 3,
}, {
    question: "What do people traditionally put on top of a Christmas tree?",
    choice1: 'Star',
    choice2: 'Angel',
    choice3: 'Ribbon',
    choice4: 'Snowflake',
    answer: 1,
}, {
    question: "In Home Alone, where are the McCallisters going on vacation when they leave Kevin behind?",
    choice1: 'London',
    choice2: 'New York',
    choice3: 'Paris',
    choice4: 'Rome',
    answer: 3,
}, {
    question: "In the classic Christmas movie, How The Grinch Stole Christmas, the Grinch was described with three words. What are they?",
    choice1: 'Furry, Green, Joyful',
    choice2: 'Mean, Green, Greedy',
    choice3: 'Stink, stank, stunk',
    choice4: 'Happy, Grumpy, Sneaky',
    answer: 3,
}, {
    question: "In which modern-day country was St. Nicholas born in?",
    choice1: 'Greece',
    choice2: 'Italy',
    choice3: 'Turkey',
    choice4: 'Egypt',
    answer: 3,
}, {
    question: "In the movie It's A Wonderful Life, what happened every time a bell rang?",
    choice1: 'An angel got his wings',
    choice2: 'Santa delivered a gift',
    choice3: 'It started snowing',
    choice4: 'A reindeer got its antlers',
    answer: 1,
}, {
    question: "What words follow 'Silent Night' in the song?",
    choice1: 'Calm night',
    choice2: 'Holy night',
    choice3: 'Bright night',
    choice4: 'Starry night',
    answer: 2,
}, {
    question: "Which Hollywood actor played six different roles in The Polar Express?",
    choice1: 'Johnny Depp',
    choice2: 'Jim Carrey',
    choice3: 'Tom Hanks',
    choice4: 'Will Smith',
    answer: 3,
}, {
    question: "In Charles Dickens' A Christmas Carol, what was the first name of Scrooge?",
    choice1: 'Jacob',
    choice2: 'Charles',
    choice3: 'Ebenezer',
    choice4: 'George',
    answer: 3,
}, {
    question: "Which country did eggnog come from?",
    choice1: 'United States',
    choice2: 'England',
    choice3: 'France',
    choice4: 'Germany',
    answer: 2,
}, {
    question: "Which real-life person is Santa Claus based on?",
    choice1: 'King Arthur',
    choice2: 'The Christian bishop St. Nicholas',
    choice3: 'Julius Caesar',
    choice4: 'Leonardo da Vinci',
    answer: 2,
}, {
    question: "What did Frosty The Snowman do when a magic hat was placed on his head?",
    choice1: 'He melted',
    choice2: 'He began to dance around',
    choice3: 'He turned into a snowflake',
    choice4: 'He started singing',
    answer: 2,
}, {
    question: "What is Ralphie's little brother's name in the movie A Christmas Story?",
    choice1: 'Randy',
    choice2: 'Bobby',
    choice3: 'Timmy',
    choice4: 'Billy',
    answer: 1,
}, {
    question: "Which Christmas song contains the lyric 'Everyone dancing merrily in the new old-fashioned way?'",
    choice1: 'Jingle Bells',
    choice2: 'Deck the Halls',
    choice3: 'White Christmas',
    choice4: 'Rocking Around The Christmas Tree',
    answer: 4,
}, {
    question: "What are you supposed to do when you find yourself under the mistletoe?",
    choice1: 'Sing a carol',
    choice2: 'Eat a candy cane',
    choice3: 'Exchange gifts',
    choice4: 'Kiss',
    answer: 4,
}, {
    question: "Which one of Santa's reindeer has the same name as another holiday mascot?",
    choice1: 'Comet',
    choice2: 'Cupid',
    choice3: 'Dancer',
    choice4: 'Blitzen',
    answer: 2,
}, {
    question: "Which country started the tradition of putting up a Christmas tree?",
    choice1: 'France',
    choice2: 'England',
    choice3: 'Germany',
    choice4: 'Italy',
    answer: 3,
}, {
    question: "In the song 'Winter Wonderland,' what do we call the snowman?",
    choice1: 'Frosty',
    choice2: 'Snowy',
    choice3: 'Parson Brown',
    choice4: 'Jolly',
    answer: 3,
}, {
    question: "In the movie Elf, what was the first rule of The Code of Elves?",
    choice1: 'Be kind to everyone',
    choice2: 'Treat every day like Christmas',
    choice3: 'Always wear a hat',
    choice4: 'Share your toys',
    answer: 2,
}, {
    question: "What's the name of the main villain in The Nightmare Before Christmas?",
    choice1: 'Jack Skellington',
    choice2: 'Oogie Boogie',
    choice3: 'Lock',
    choice4: 'Shock',
    answer: 2,
}, {
    question: "According to the song, what did my true love give to me on the eighth day of Christmas?",
    choice1: 'Eight maids a milking',
    choice2: 'Eight lords a-leaping',
    choice3: 'Eight geese a-laying',
    choice4: 'Eight pipers piping',
    answer: 1,
}, {
    question: "What was the highest-grossing Christmas movie of all time?",
    choice1: 'Elf',
    choice2: 'Home Alone',
    choice3: 'The Polar Express',
    choice4: 'A Christmas Carol',
    answer: 2,
}, {
    question: "Whose eyes are all aglow in 'The Christmas Song'?",
    choice1: 'Childrens',
    choice2: 'Santas',
    choice3: 'Reindeers',
    choice4: 'Snowmans',
    answer: 1,
}, {
    question: "What was the real name of the character Tim Allen plays in The Santa Clause?",
    choice1: 'Scott Calvin',
    choice2: 'Chris Kringle',
    choice3: 'Jack Frost',
    choice4: 'Buddy Claus',
    answer: 1,
}, {
    question: "How many gifts in total were given in 'The Twelve Days of Christmas' song?",
    choice1: '78',
    choice2: '144',
    choice3: '230',
    choice4: '364',
    answer: 4,
}, {
    question: "Which fairy tale was the first gingerbread houses inspired by?",
    choice1: 'Cinderella',
    choice2: 'Hansel and Gretel',
    choice3: 'Snow White',
    choice4: 'Sleeping Beauty',
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
    introDescription.textContent = getRandomFact();
    getNewQuestion();
};
/*Keeping track of score */
const getNewQuestion = () => {
    /* Incrementing by 1 for each question */
    questionCounter++;
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