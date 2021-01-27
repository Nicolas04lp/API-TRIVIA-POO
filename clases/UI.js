let answerCorrect = [];
let answerIncorrect = [];
console.log(answerCorrect)
export default class UI {
    static printCategories(categories) {
        const container = document.getElementById('select-categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }
    static printQuestions(questions) {
        let nico= document.getElementById('select-type').value;
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        if(nico == 'multiple'){
            questions.forEach((element, i) => {
                
                i++
                let randomD = random(element.correct_answer, element.incorrect_answers);
    
                // total.push(element.correct_answer , ...element.incorrect_answers) 
                answerCorrect.push(element.correct_answer)
                answerIncorrect.push(element.incorrect_answers)
                container.innerHTML += `<div class="col-md-4 mt-2">
                                            <div class="card p-4">
                                                <div class="card-body">
                                                    ${element.question}
                                                </div>
                                                <div class="card-body">
                                                    ${element.category}
                                                </div>
                                                <div class="card-body">
                                                    ${element.difficulty}
                                                </div>
                                                <div class="card-body">
                                                    ${element.correct_answer}
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" value="${randomD[0]}" name="result${[i]}" id="answer${[i]}0" required checke>
                                                    <label class="form-check-label" for="answer${[i]}">
                                                         ${randomD[0]}
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" value="${randomD[1]}" name="result${[i]}" id="answer${[i]}1" required>
                                                    <label class="form-check-label" for="answer${[i]}">
                                                        ${randomD[1]}
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" value="${randomD[2]}" name="result${[i]}" id="answer${[i]}2" required>
                                                    <label class="form-check-label" for="answer${[i]}">
                                                        ${randomD[2]}
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input p-3" type="radio" value="${randomD[3]}" name="result${[i]}" id="answer${[i]}3" required>
                                                    <label class="form-check-label" for="answer${[i]}">
                                                        ${randomD[3]}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>`;
    
    
                                        // totalAnswerCorrect.push(element.correct_answer);
                                        // totalAnswerIncorrect.push(element.incorrect_answers);
                                        
    
            });
            
        }else{
            questions.forEach((element, i) => {
    
                let randomD = random(element.correct_answer, element.incorrect_answers);
                // total.push(element.correct_answer , ...element.incorrect_answers) 
    
                container.innerHTML += `<div class="col-md-4 mb-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    ${element.question}
                                                </div>
                                                <div class="card-body">
                                                    ${element.category}
                                                </div>
                                                <div class="card-body">
                                                    ${element.difficulty}
                                                </div>
                                                <div class="card-body">
                                                    ${element.type}
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="result${[i]}" id="answer${[i]}"required>
                                                    <label class="form-check-label" for="answer">
                                                        ${randomD[0]}
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="result${[i]}" id="answer${[i]}"required>
                                                    <label class="form-check-label" for="answer">
                                                        ${randomD[1]}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>`;
    
                                        // totalAnswerCorrect.push(element.correct_answer);
                                        // totalAnswerIncorrect.push(element.incorrect_answers);
            });
            // console.log(totalAnswerCorrect)
            // console.log(totalAnswerIncorrect);
        }
        function random(correct, incorrects){
            const  array = [correct, ...incorrects];
            array.sort(function() {
                return Math.random() - 0.5;
            })
            return array;
        }
    }
}