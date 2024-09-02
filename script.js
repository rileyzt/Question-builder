function toggleMCQOptions() {
    const questionType = document.getElementById('questionType').value;
    const mcqOptions = document.getElementById('mcqOptions');
    mcqOptions.style.display = questionType === 'aptitude' ? 'block' : 'none';
}

function generateQuestions() {
    const subjectName = document.getElementById('subjectName').value;
    const subjectCode = document.getElementById('subjectCode').value;
    const questionType = document.getElementById('questionType').value;
    const numQuestions = document.getElementById('numQuestions').value;
    const mcqQuestions = document.getElementById('mcqQuestions').value;
    const questionList = document.getElementById('questionList');

    // Clear previous questions
    questionList.innerHTML = '';

    if (!subjectName || !numQuestions) {
        alert('Please enter both subject name and number of questions!');
        return;
    }

    // Question templates based on the selected type
    let templates = [];

    switch (questionType) {
        case 'conceptual':
            templates = [
                `What is the core concept of ${subjectName}?`,
                `Explain how ${subjectName} can be applied in real-life scenarios.`,
                `What are the fundamental principles of ${subjectName}?`,
            ];
            break;
        case 'aptitude':
            templates = [
                `Solve the following aptitude problem related to ${subjectName}: [Insert Problem]`,
                `How does the ${subjectName} concept help in problem-solving?`,
                `What are the key aptitude skills required to excel in ${subjectName}?`,
            ];
            if (mcqQuestions) {
                for (let i = 1; i <= mcqQuestions; i++) {
                    templates.push(`MCQ ${i}: Choose the correct option for this aptitude problem: [Insert MCQ]`);
                }
            }
            break;
        case 'theory':
            templates = [
                `Discuss the theoretical background of ${subjectName}.`,
                `What are the different theories related to ${subjectName}?`,
                `How has the theory of ${subjectName} evolved over time?`,
            ];
            break;
        case 'program':
            templates = [
                `Write a program in ${subjectName} to solve the following problem: [Insert Problem]`,
                `Explain the logic behind the following ${subjectName} code: [Insert Code]`,
                `How would you optimize this ${subjectName} program?`,
            ];
            break;
    }

    // Generate and display questions
    for (let i = 0; i < numQuestions; i++) {
        const template = templates[i % templates.length];
        const listItem = document.createElement('li');
        listItem.textContent = template.replace('${subjectName}', subjectName);
        questionList.appendChild(listItem);
    }
}