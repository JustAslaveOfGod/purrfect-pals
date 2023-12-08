const questions = [
    {
        question: "What size living space do you have?",
        options: ["Apartment", "House with a yard", "Small studio", "Large house"]
    },
    {
        question: "How much time can you dedicate to playing with your cat each day?",
        options: ["Less than 30 minutes", "30 minutes to 1 hour", "1 to 2 hours", "More than 2 hours"]
    },
    {
        question: "Do you have other pets at home?",
        options: ["Yes", "No"]
    },
    {
        question: "Are you looking for a specific breed or open to any breed?",
        options: ["Specific breed", "Open to any breed"]
    },
    {
        question: "How would you describe your activity level?",
        options: ["Couch potato", "Moderate", "Active", "Energetic"]
    }
];

let currentQuestion = 0;
let answers = [];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");

function showQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = "";

        question.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("btn");
            button.addEventListener("click", () => selectOption(option));
            optionsElement.appendChild(button);
        });

        currentQuestion++;
    } else {
        showResult();
    }
}

function selectOption(option) {
    answers.push(option);
    showQuestion();
}

function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";

    
    const result = calculateResult(answers);

    
    const link = document.createElement("a");
    link.textContent = calculateResult(answers).title; 
    link.href = calculateResult(answers).link; 
    link.target = "_self"; 

 
    resultElement.textContent = "";
    resultElement.appendChild(link);

    nextButton.remove();
}


function calculateResult(answers) {
  
    if (answers.includes("House with a yard")) {
        return {title: "Maine Coon", link: "article.html"} ;
    } else if (answers.includes("Large house")) {
        return {title: "Siamese", link: "article.html"} ;
    } else {
        return {title: "Domestic Shorthair", link: "article.html"} ;
    }
}

nextButton.addEventListener("click", showQuestion);

showQuestion();
