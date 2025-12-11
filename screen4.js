document.addEventListener("DOMContentLoaded", function () {

    // GET WHICH ALBUM USER SELECTED
    const albumNumber = localStorage.getItem("selectedAlbum");

    // ALL ALBUM DATA HERE ↓
    const albumData = {
        1: {
            title: "Album 1: Family Trip",
            seq: ["images/a2_1.jpeg", "images/a2_2.jpeg", "images/a2_3.jpeg"],
            options: ["images/a2_4.jpeg", "images/a2_5.jpeg"],
            correct: 1
        },
        2: {
            title: "Album 2: Beach Day",
            seq: ["images/be1.webp", "images/be2.jpg", "images/be3.webp"],
            options: ["images/be4.jpg", "images/be5.jpeg"],
            correct: 0
        },
        3: {
            title: "Album 3: Dinner Party",
            seq: ["images/d1.png", "images/d2.webp", "images/d3.jpg"],
            options: ["images/d4.jpg", "images/d5.jpg"],
            correct: 1
        },
        4: {
            title: "Album 4: Birthday",
            seq: ["images/b1.jpg", "images/b2.webp", "images/b3.webp"],
            options: ["images/b4.webp", "images/b5.jpg"],
            correct: 0
        },
        5: {
            title: "Album 5: Trip",
            seq: ["images/t1.jpeg", "images/t2.jpg", "images/t3.jpg"],
            options: ["images/t4.jpg", "images/t5.webp"],
            correct: 1
        },
        6: {
            title: "Album 6: Wedding",
            seq: ["images/w1.webp", "images/w2.jpg", "images/w3.jpg"],
            options: ["images/w4.jpg", "images/w5.jpg"],
            correct: 0
        }
    };

    // LOAD ALBUM DATA
    const data = albumData[albumNumber];
    document.getElementById("albumGameTitle").textContent = data.title;

    // LOAD SEQUENCE IMAGES
    document.getElementById("seq1").src = data.seq[0];
    document.getElementById("seq2").src = data.seq[1];
    document.getElementById("seq3").src = data.seq[2];

    // LOAD ANSWER OPTIONS
    document.getElementById("opt1").src = data.options[0];
    document.getElementById("opt2").src = data.options[1];

    // SET CORRECT ANSWER
    document.getElementById("optContainer1").dataset.correct = (data.correct === 0);
    document.getElementById("optContainer2").dataset.correct = (data.correct === 1);

    // GAME LOGIC
    const answers = document.querySelectorAll(".answer-option");
    let gameFinished = false;

    answers.forEach(option => {
        option.addEventListener("click", () => {

            if (gameFinished) return;

            const marker = option.querySelector(".marker");
            const isCorrect = option.dataset.correct === "true";

            answers.forEach(opt => {
                opt.classList.remove("correct", "wrong");
                opt.querySelector(".marker").style.opacity = 0;
            });

            if (isCorrect) {
                option.classList.add("correct");
                marker.style.opacity = 1;
                gameFinished = true;

                addMessage("You are correct! Do you wanna play more or take a rest?");
                document.getElementById("afterCorrectButtons").classList.remove("hidden");

            } else {
                option.classList.add("wrong");
                marker.style.opacity = 1;

                addMessage("Not quite! Try again!");
            }
        });
    });

    function addMessage(msg) {
        const bubble = document.createElement("div");
        bubble.classList.add("chat-bubble");
        bubble.innerText = msg;
        document.getElementById("chatContainer").appendChild(bubble);
    }

    document.getElementById("playMoreBtn").addEventListener("click", () => {
        window.location.href = "screen2.html";
    });

    document.getElementById("restBtn").addEventListener("click", () => {
        window.location.href = "screen1.html";
    });

});
