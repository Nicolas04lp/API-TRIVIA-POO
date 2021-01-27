
import Request from './clases/request.js';
import UI from './clases/UI.js';

const form = document.querySelector('#form-questions');
const formQuestion = document.querySelector('#form-checkQuestions');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    Request.getQuestions()
        .then(response => response.json())
        .then(data => UI.printQuestions(data.results))
});

formQuestion.addEventListener('submit', (event) =>{
    event.preventDefault();
    Request.checkedQuestions()
    Request.comparationAnswers()
})

Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))
