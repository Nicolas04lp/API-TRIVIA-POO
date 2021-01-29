let answersChecked = [];
let answerCorrectCount = 0;
let answerIncorrectCount = 0;

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
    // console.log(answersChecked);
    }
    static comparationAnswers(){
        let answerCorrect = JSON.parse(localStorage.getItem('Buenas'));
        answersChecked.forEach((b, index) => {
            // si answer corect es igual a answercheckÂ¿ek que le sume uno a correctcount
            if(answerCorrect[index] == answersChecked[index]){
                answerCorrectCount++ ;
            }else{
                answerIncorrectCount++;
            }
        })
        // console.log(answerCorrect)
        // console.log(answersChecked)
        console.log('Buenas'+answerCorrectCount)
        console.log('Malas'+ answerIncorrectCount)
        localStorage.setItem("Correctas", answerCorrectCount);
        localStorage.setItem("Incorrectas", answerIncorrectCount);
        window.location.href = "/answers.html";
    
    }
}