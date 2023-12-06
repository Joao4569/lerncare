function updateButtons(currentStartIndex, buttons, mainTopics) {
    for (let i = 0; i < 3; i++) {
        if (mainTopics[currentStartIndex + i]) {
            buttons[i].innerText = mainTopics[currentStartIndex + i].friendlyName;
            buttons[i].setAttribute('id', mainTopics[currentStartIndex + i].programmaticName);
        }
    }
}

function mainTopicCarousel() {
    let currentStartIndex = 0;

    // Get the buttons
    let buttons = document.getElementsByClassName('main-topic-btn');

    // Update the buttons when the page loads
    updateButtons(currentStartIndex, buttons, mainTopics);

    // Listen for previous button clicks and update the buttons
    document.getElementById('prev-button').addEventListener('click', function() {
        if (currentStartIndex > 0) {
            currentStartIndex--;
            updateButtons(currentStartIndex, buttons, mainTopics);
        }
    });

    // Listen for next button clicks and update the buttons
    document.getElementById('next-button').addEventListener('click', function() {
        if (currentStartIndex < mainTopics.length - 3) {
            currentStartIndex++;
            updateButtons(currentStartIndex, buttons, mainTopics);
        }
    });
}

mainTopicCarousel();
