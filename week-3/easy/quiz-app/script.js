import { quizData } from './data.js'

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById('submitBtn');
const resultContainer = document.getElementById('result');

// Load the quiz UI
function loadQuiz() {
    quizData.forEach((item, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');

        const question = document.createElement('div');
        question.classList.add('question');
        question.textContent = `${index + 1}. ${item.question}`;

        const options = document.createElement('div');
        options.classList.add('options');

        // Map labeled options
        ['a', 'b', 'c', 'd'].forEach(key => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `Question ${index}`;
            input.value = key;
            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${item[key]}`));
            options.appendChild(label);
        });

        questionBlock.appendChild(question);
        questionBlock.appendChild(options);
        quizContainer.appendChild(questionBlock);
    })
}

function calculateScore() {
    let score = 0;

    quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="Question ${index}"]:checked`);
        if (selected && selected.value === item.correct) {
            score++;
        }
    });

    resultContainer.textContent = `You scored ${score} out of ${quizData.length}`;
}

submitBtn.addEventListener('click', calculateScore);

loadQuiz();