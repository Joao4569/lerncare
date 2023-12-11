// This function is used to allocate the content as well as
// unique ID to each main topic button in the carousel
function updateMainTopicButtonsContentAndId(currentStartIndex, buttons, mainTopics) {
    for (let i = 0; i < 3; i++) {
        if (mainTopics[currentStartIndex + i]) {
            buttons[i].innerText = mainTopics[currentStartIndex + i].friendlyName;
            buttons[i].setAttribute('id', mainTopics[currentStartIndex + i].programmaticName);
        }
    }
}

// This function controls the carousel behavior of the main topic buttons
function mainTopicCarousel() {
    let currentStartIndex = 0;

    // Get the buttons
    let buttons = document.getElementsByClassName('main-topic-btn');

    // Update the buttons when the page loads
    updateMainTopicButtonsContentAndId(currentStartIndex, buttons, mainTopics);

    // Listen for previous button clicks and update the buttons
    document.getElementById('prev-button').addEventListener('click', function() {
        if (currentStartIndex > 0) {
            currentStartIndex--;
            updateMainTopicButtonsContentAndId(currentStartIndex, buttons, mainTopics);
        }
    });

    // Listen for next button clicks and update the buttons
    document.getElementById('next-button').addEventListener('click', function() {
        if (currentStartIndex < mainTopics.length - 3) {
            currentStartIndex++;
            updateMainTopicButtonsContentAndId(currentStartIndex, buttons, mainTopics);
        }
    });
}

// Call the main topic carousel function
mainTopicCarousel();
