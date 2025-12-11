document.addEventListener("DOMContentLoaded", function () {
    console.log("SCRIPT LOADED SUCCESSFULLY");

  const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (yesBtn) {
        yesBtn.addEventListener("click", () => {
            console.log("YES clicked");
            window.location.href = "screen2.html";
        });
    }

    if (noBtn) {
        noBtn.addEventListener("click", () => {
            alert("Okay! Maybe later.");
        });
    }


    const galleryItems = document.querySelectorAll(".gallery-item");
    const displayText = document.getElementById("selectedText");
    const nextBtn = document.getElementById("nextBtn");

    let selectedGallery = null;

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            let number = item.getAttribute("data-number");

            // SAVE SELECTED ALBUM FOR SCREEN 3
            localStorage.setItem("selectedAlbum", number);

            // Update text
            displayText.innerHTML = `
            <p class="chat-text">I want to go through gallery number ${number}!</p>
        `;

            // Blur + highlight
            galleryItems.forEach(g => {
                g.classList.remove("selected");
                g.classList.add("blurred");
            });
            item.classList.add("selected");
            item.classList.remove("blurred");

            // Show NEXT button
            nextBtn.classList.remove("hidden");
        });
    });

    // console.log("nextBtn =", nextBtn);

    nextBtn?.addEventListener("click", () => {
        // console.log("NEXT BUTTON CLICKED!");
        window.location.href = "screen3.html";
    });

    // NEXT button → go to next page
    nextBtn.addEventListener("click", () => {
        if (selectedGallery) {
            // Example: go to screen3.html
            window.location.href = "screen3.html";
        }
    });

});
