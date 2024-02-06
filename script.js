let currentQuestion = 0;
let correctAnswers = 0;
// Get all elements with the "btn" class
const btns = document.querySelectorAll(".btn");

// Function to handle the click event
const handleButtonClick = () => {
    console.log("Button clicked!");
};

// Add click event listener to all buttons
btns.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

// Function to remove the disabled attribute
const removeDisbale = () => {
    btns.forEach(btn => {
        btn.disabled = false;
    });
};
// Call removeDisable function to remove the disabled attribute from all buttons
// removeDisable();

// Retrieve currentQuestion and correctAnswers from localStorage if available
const storedCurrentQuestion = localStorage.getItem("currentQuestion");
const storedCorrectAnswers = localStorage.getItem("correctAnswers");

if (storedCurrentQuestion) {
    currentQuestion = parseInt(storedCurrentQuestion);
}

if (storedCorrectAnswers) {
    correctAnswers = parseInt(storedCorrectAnswers);
}

function checkAnswer(questionNumber) {
    const selectedOption = document.querySelector(`input[name="question${questionNumber}"]:checked`);
    console.log(questionNumber, selectedOption);
    if (selectedOption) {
        // console.log(selectedOption, questionNumber)
        const selectedValue = parseInt(selectedOption.value);
        // Adjust correct answer logic for each question
        if (selectedValue === getCorrectAnswer(questionNumber)) {
            correctAnswers++;
        }
        document.getElementById(`question${questionNumber}`).style.display = 'none';
        currentQuestion++;
        // Save correctAnswers and currentQuestion to localStorage
        localStorage.setItem("correctAnswers", correctAnswers);
        localStorage.setItem("currentQuestion", currentQuestion);

        if (currentQuestion <= 14) {
            document.getElementById(`question${currentQuestion}`).style.display = 'block';
        } else {
            showResult();
        }
    } else {
        console.log("Please Select the question")
        alert("Please select an option before moving to the next question.");
    }
}

function showResult() {
    const resultContainer = document.getElementById("resultContainer");
    const resultText = document.getElementById("resultText");
    const last = document.getElementById("last");
    last.classList.remove("d-none");

    localStorage.setItem("Result", `Congratulations on completing! You got ${correctAnswers} correct answer(s) out of 15.`);
    const getResultText = localStorage.getItem("Result");
    resultText.innerText = getResultText;
    question1.style.display = "none";
    resultContainer.style.display = 'block';
}

// Function to get correct answer based on question number
function getCorrectAnswer(questionNumber) {
    switch (questionNumber) {
        // Adjust correct answer logic for each question
        case 1: return 1;
        case 2: return 1;
        case 3: return 1;
        case 4: return 3;
        case 5: return 1;
        case 6: return 2;
        case 7: return 2;
        case 8: return 2;
        case 9: return 1;
        case 10: return 4; 
        case 11: return 3;
        case 12: return 1;
        case 13: return 2;
        case 14: return 3;
        case 15: return 4;
        default: return 0;
    }
}

// Check if there is a saved result in localStorage and show it
const savedResult = localStorage.getItem("Result");
if (savedResult) {
    question1.style.display = "none";
    showResult();
}

// Clear localStorage when the form is submitted again
const Formagain = () => {
    localStorage.clear();
    location.reload(); // Reload the page to start from the first question
};

// HandleCorrect function for your use case
const HandleCorrect = () => {
    const container1 = document.getElementById("container1");
    container1.classList.remove("d-none");

    // Display the next question based on the saved progress
    if (currentQuestion < 15) {
        document.getElementById(`question${currentQuestion + 1}`).style.display = 'block';
    }
};

// Log the current localStorage values for debugging
console.log("Current Question:", localStorage.getItem("currentQuestion"));
console.log("Correct Answers:", localStorage.getItem("correctAnswers"));
console.log("Result:", localStorage.getItem("Result"));

// Your existing code...
// (Ensure that your existing code comes after the provided code)

// Function to handle the "next" button click
function handleNextButtonClick() {
    checkAnswer(currentQuestion);
}
