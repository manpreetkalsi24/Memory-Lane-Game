document.addEventListener("DOMContentLoaded", function () {

    const selectedAlbum = localStorage.getItem("selectedAlbum") || "5";
    document.getElementById("albumTitle").textContent =
        `ALBUM NUMBER ${selectedAlbum}`;

    const chatContainer = document.getElementById("chatContainer");
    const replyInput = document.getElementById("replyInput");
    const replySend = document.getElementById("replySend");
    const gameChoice = document.getElementById("gameChoice");

    // FUNCTION: Add message bubble
    function addMessage(text, isUser = false) {
        const bubble = document.createElement("div");
        bubble.classList.add("chat-bubble");
        if (isUser) bubble.classList.add("user-msg");
        bubble.textContent = text;
        chatContainer.appendChild(bubble);

        // auto-scroll
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // When user hits SEND
    replySend.addEventListener("click", () => {
        const msg = replyInput.value.trim();

        if (!msg) {
            alert("Please type something!");
            return;
        }

        // Add user message
        addMessage(msg, true);
        replyInput.value = "";

        // Ask question after 1 sec
        setTimeout(() => {
            addMessage("Do you want to play a game based on this memory?");
            gameChoice.classList.remove("hidden");
        }, 1000);
    });

    // YES → next screen
    document.getElementById("yesGame").addEventListener("click", () => {
        addMessage("Great! Let's continue.");
        window.location.href = "screen4.html";
    });

    // NO → show “Okay!”
    document.getElementById("noGame").addEventListener("click", () => {
        addMessage("Okay!", false);
        gameChoice.classList.add("hidden");
    });

});
