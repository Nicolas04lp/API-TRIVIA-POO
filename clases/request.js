let answersChecked = [];
let answerCorrectCount = 0;
let answerIncorrectCount = 0;
let answerCorrect = [ ];
export default class Request {
    static getCategories() {
        return fetch('https://opentdb.com/api_category.php')
    }
    static getQuestions() {
        // const result = this.getFilters();
        const [amount, category, difficulty, typeQuestions] = this.getFilters();
        return fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${typeQuestions}`)
    }
    static getFilters() {
        const totalQuestions = document.getElementById('total-questions').value;
        const category = document.getElementById('select-categories').value;
        const difficulty = document.getElementById('select-difficulty').value;
        const typeQuestions = document.getElementById('select-type').value;
        return [totalQuestions, category, difficulty, typeQuestions];
    }
    static checkedQuestions(){
        const checkedInputs = document.querySelectorAll('input:checked');
    for(let i = 0; i < checkedInputs.length; i++){
        answersChecked.push(checkedInputs[i].value);
    }
    console.log(answersChecked);
    }
    static comparationAnswers(){
        answersChecked.forEach((b) => {
            // si answer corect es igual a answercheckÂ¿ek que le sume uno a correctcount
            if(answersChecked[b] == answerCorrect[b]){
                answerCorrectCount++ ;
            }else{
                answerIncorrectCount++;
            }
        })
        localStorage.setItem("Buenas", answerCorrectCount);
        localStorage.setItem("Malas", answerIncorrectCount); 
        console.log('Buenas'+answerCorrectCount)
        console.log('Malas'+ answerIncorrectCount)
        // window.location.href = "/answers.html";
    
    }
}