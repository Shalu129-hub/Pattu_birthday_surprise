// ==========================================
// Birthday Surprise Website - script.js
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Welcome Page
    // ==========================

    const startBtn = document.getElementById("startBtn");

    if (startBtn) {

        startBtn.addEventListener("click", function () {

            startBtn.innerHTML = "💖 Loading...";

            setTimeout(function () {

                window.location.href = "questions.html";

            }, 800);

        });

    }

    // ==========================
    // Questions Page
    // ==========================

    const question = document.getElementById("question");

    if (question) {

        const questions = [

            "😊 Are you happy with me?",

            "❤️ When did you realize you were in love with me?",

            "💍 What is the one thing you are expecting to build our relationship to the next level?"

        ];

        let currentQuestion = 0;

        showQuestion();

        function showQuestion() {

            document.getElementById("question").innerHTML = questions[currentQuestion];

            document.getElementById("progress").innerHTML =
                "Question " + (currentQuestion + 1) + " of " + questions.length;

        }

        window.nextQuestion = function () {

            const answer = document.getElementById("answer").value.trim();

            if (answer === "") {

                alert("❤️ Please answer this question before continuing.");

                return;

            }

            localStorage.setItem("Question" + (currentQuestion + 1), answer);

            currentQuestion++;

            if (currentQuestion < questions.length) {

                document.getElementById("answer").value = "";

                showQuestion();

            }
            else {

                window.location.href = "video.html";

            }

        };

    }

    // ==========================
    // Video Page
    // ==========================

    const birthdayVideo = document.getElementById("birthdayVideo");

    if (birthdayVideo) {

        birthdayVideo.addEventListener("ended", function () {

            window.location.href = "final.html";

        });

    }

});