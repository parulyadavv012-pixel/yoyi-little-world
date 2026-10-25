/* =========================================
   YOYI'S LITTLE WORLD
   Welcome screen and letter navigation
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.getElementById("openButton");
    const backButton = document.getElementById("backButton");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const letterScreen = document.getElementById("letterScreen");
    const floatingDecorations = document.getElementById("floatingDecorations");
    const brandHome = document.getElementById("brandHome");
    const thingsScreen = document.getElementById("thingsScreen");
    const nextToThingsButton = document.getElementById("nextToThingsButton");
    const backToImportanceButton = document.getElementById("backToImportanceButton");
    const nextToOpenWhenButton = document.getElementById("nextToOpenWhenButton"); 
    const openWhenScreen = document.getElementById("openWhenScreen");
    const backToThingsButton = document.getElementById("backToThingsButton");
    const nextToLastThingButton = document.getElementById("nextToLastThingButton");
    const envelopeGrid = document.getElementById("envelopeGrid");
    const openWhenNavigation = document.getElementById("openWhenNavigation");

    const envelopeCards = document.querySelectorAll(".envelope-card");
    const openLetterContents = document.querySelectorAll(".open-letter-content");
    const backToEnvelopesButtons = document.querySelectorAll(".back-to-envelopes");
    const lastThingScreen = document.getElementById("lastThingScreen");
    const backToOpenWhenButton = document.getElementById("backToOpenWhenButton");
    const nextToMemoriesButton = document.getElementById("nextToMemoriesButton");
    const memoriesScreen = document.getElementById("memoriesScreen");
    const backToLastThingButton = document.getElementById("backToLastThingButton");   

    if (
        !openButton ||
        !backButton ||
        !welcomeScreen ||
        !letterScreen ||
        !floatingDecorations
    ) {
        console.error("Some website elements could not be found.");
        return;
    }

    // Open the letter screen
    function showLetter() {
        welcomeScreen.classList.add("screen-hidden");
        letterScreen.classList.remove("screen-hidden");

        openButton.setAttribute("aria-expanded", "true");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createFloatingDecorations(14);

        window.setTimeout(() => {
            backButton.focus({ preventScroll: true });
        }, 250);
    }

    // Return to the welcome screen
    function showWelcome() {
        letterScreen.classList.add("screen-hidden");
        welcomeScreen.classList.remove("screen-hidden");

        openButton.setAttribute("aria-expanded", "false");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        window.setTimeout(() => {
            openButton.focus({ preventScroll: true });
        }, 250);
    }

    // Button click events
    openButton.addEventListener("click", showLetter);

    backButton.addEventListener("click", showWelcome);

    // Section 2 -> Section 3
if (nextToThingsButton && thingsScreen) {
    nextToThingsButton.addEventListener("click", function () {
        welcomeScreen.classList.add("screen-hidden");
        letterScreen.classList.add("screen-hidden");
        thingsScreen.classList.remove("screen-hidden");
        createFloatingDecorations(14);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Section 3 -> Section 2
if (backToImportanceButton && thingsScreen) {
    backToImportanceButton.addEventListener("click", function () {
        thingsScreen.classList.add("screen-hidden");
        welcomeScreen.classList.add("screen-hidden");
        letterScreen.classList.remove("screen-hidden");
        createFloatingDecorations(10);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Temporary until the Open When section is created
// Section 3 -> Section 4
if (nextToOpenWhenButton && openWhenScreen && thingsScreen) {
    nextToOpenWhenButton.addEventListener("click", function () {
        thingsScreen.classList.add("screen-hidden");
        openWhenScreen.classList.remove("screen-hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createFloatingDecorations(10);
    });
}

// Section 4 -> Section 3
if (backToThingsButton && openWhenScreen && thingsScreen) {
    backToThingsButton.addEventListener("click", function () {
        openWhenScreen.classList.add("screen-hidden");
        thingsScreen.classList.remove("screen-hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Click an envelope to open its letter
envelopeCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const letterName = card.dataset.letter;

        const selectedLetter = document.getElementById(
            "letter" + letterName.charAt(0).toUpperCase() + letterName.slice(1)
        );

        if (!selectedLetter) {
            return;
        }

        envelopeGrid.classList.add("screen-hidden");
        openWhenNavigation.classList.add("screen-hidden");

        openLetterContents.forEach(function (letter) {
            letter.classList.add("screen-hidden");
        });

        selectedLetter.classList.remove("screen-hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createFloatingDecorations(8);
    });
});

// Return from an opened letter to the envelope selection
backToEnvelopesButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        openLetterContents.forEach(function (letter) {
            letter.classList.add("screen-hidden");
        });

        envelopeGrid.classList.remove("screen-hidden");
        openWhenNavigation.classList.remove("screen-hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
    // Clicking the website name returns to the welcome screen
    if (brandHome) {
        brandHome.addEventListener("click", (event) => {
            event.preventDefault();
            showWelcome();
        });
    }
    // Section 4 → Section 5
if (nextToLastThingButton && openWhenScreen && lastThingScreen) {
    nextToLastThingButton.addEventListener("click", function () {
        openWhenScreen.classList.add("screen-hidden");
        lastThingScreen.classList.remove("screen-hidden");

        window.scrollTo({ top: 0, behavior: "smooth" });
        createFloatingDecorations(10);
    });
}

// Section 5 → Section 4
if (backToOpenWhenButton && lastThingScreen && openWhenScreen) {
    backToOpenWhenButton.addEventListener("click", function () {
        lastThingScreen.classList.add("screen-hidden");
        openWhenScreen.classList.remove("screen-hidden");

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
// Section 5 -> Section 6
if (nextToMemoriesButton && lastThingScreen && memoriesScreen) {
    nextToMemoriesButton.addEventListener("click", function () {
        lastThingScreen.classList.add("screen-hidden");
        memoriesScreen.classList.remove("screen-hidden");

        window.scrollTo({ top: 0, behavior: "smooth" });
        createFloatingDecorations(10);
    });
}

// Section 6 -> Section 5
if (backToLastThingButton && memoriesScreen && lastThingScreen) {
    backToLastThingButton.addEventListener("click", function () {
        memoriesScreen.classList.add("screen-hidden");
        lastThingScreen.classList.remove("screen-hidden");

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

    // Floating hearts and decorations
    function createFloatingDecorations(count) {
        const symbols = ["♡", "♥", "✧", "✿", "🎀"];

        for (let i = 0; i < count; i++) {
            const decoration = document.createElement("span");

            decoration.classList.add("floating-item");

            decoration.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            const randomLeft = Math.random() * 100;
            const randomDuration = 5 + Math.random() * 5;
            const randomDelay = Math.random() * 1.8;
            const randomSize = 14 + Math.random() * 15;

            decoration.style.left = `${randomLeft}%`;
            decoration.style.fontSize = `${randomSize}px`;

            decoration.style.setProperty(
                "--duration",
                `${randomDuration}s`
            );

            decoration.style.animationDelay = `${randomDelay}s`;

            floatingDecorations.appendChild(decoration);

            window.setTimeout(() => {
                decoration.remove();
            }, (randomDuration + randomDelay) * 1000 + 500);
        }
    }
});