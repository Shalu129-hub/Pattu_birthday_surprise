const startBtn = document.getElementById('startBtn');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        window.location.href = 'questions.html';
    });
}

const questionEl = document.getElementById('question');
if (questionEl) {
    const questions = [
        'When did you first realize I mean a lot to you?',
        'What is your favorite memory with me so far?',
        'What are you most excited to do with me next?',
        'What makes our bond special to you?',
        'One sweet wish you want to share with me today?'
    ];

    let currentQuestion = 0;
    const answers = [];
    const answerEl = document.getElementById('answer');
    const progressEl = document.getElementById('progress');
    const summaryEl = document.getElementById('summary');
    const summaryList = document.getElementById('summaryList');
    const nextBtn = document.getElementById('nextBtn');
    const goVideoBtn = document.getElementById('goVideoBtn');

    function updateQuestion() {
        questionEl.textContent = questions[currentQuestion];
        progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
        answerEl.focus();
    }

    function showSummary() {
        questionEl.style.display = 'none';
        answerEl.style.display = 'none';
        nextBtn.style.display = 'none';
        progressEl.style.display = 'none';
        summaryList.innerHTML = '';

        questions.forEach((question, index) => {
            const item = document.createElement('div');
            item.style.padding = '18px';
            item.style.border = '1px solid #ffe3f0';
            item.style.borderRadius = '18px';
            item.style.background = '#fff3f8';

            const q = document.createElement('div');
            q.textContent = question;
            q.style.color = '#c2185b';
            q.style.fontWeight = '700';
            q.style.marginBottom = '8px';

            const a = document.createElement('div');
            a.textContent = answers[index] || 'No answer provided.';
            a.style.color = '#444';
            a.style.lineHeight = '1.6';

            item.appendChild(q);
            item.appendChild(a);
            summaryList.appendChild(item);
        });

        summaryEl.style.display = 'block';
    }

    function nextQuestion() {
        const answer = answerEl.value.trim();
        if (!answer) {
            alert('Please type your answer before continuing.');
            return;
        }

        answers.push(answer);
        answerEl.value = '';
        currentQuestion += 1;

        if (currentQuestion >= questions.length) {
            showSummary();
        } else {
            updateQuestion();
        }
    }

    window.nextQuestion = nextQuestion;

    if (goVideoBtn) {
        goVideoBtn.addEventListener('click', () => {
            window.location.href = 'video.html';
        });
    }

    updateQuestion();
}
