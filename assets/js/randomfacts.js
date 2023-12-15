// List of facts to input into the fun facts section during the quiz
var facts = [
    'Fact 1',
    'Fact 2',
    'Fact 3',
    
];

function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
}