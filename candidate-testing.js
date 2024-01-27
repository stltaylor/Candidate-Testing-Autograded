const input = require('readline-sync');

let candidateName = '';

let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';

let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
]

let correctAnswers = [
'Sally Ride', 
'true',
'40',
'Trajectory',
'3'
]
let candidateAnswers = [];


function askForName() {
  
    candidateName = input.question("What's your name? ");
    
}

function askQuestion() {
  
  for (let i = 0; i < 5; i++) {
    candidateAnswers[i] = input.question(questions[i])
  }
  return candidateAnswers
}

function gradeQuiz(answerarray) {
  let grade = 0;
  for (let i = 0; i < 5; i++) {
    let isCorrect = answerarray[i].toLowerCase() === correctAnswers[i].toLowerCase();
   
    
    if (isCorrect) {
      grade += 1;
    }
  }





 
  let finalGrade = (grade/5) * 100
  
  return finalGrade
}





function runProgram() {
  askForName();
  
   console.log(`Hello ${candidateName}.`);
  candidateAnswers = askQuestion();
  let quizGrade = gradeQuiz(this.candidateAnswers);
  
  console.log(`Candidate Name: ${candidateName}`);
  for (i = 0; i < 5; i++)
    console.log(`${i + 1}) ${questions[i]}\nYour answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}\n`);
    
  
  let outcome = 'PASSED!'
    if (quizGrade < 80) {
      outcome = 'FAILED'
      }
  console.log(`>>> Status: ${outcome} <<<`)
  

}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};