// Get all the main topic buttons
let main_topic_btns = document.getElementsByClassName("main-topic-btn");

// Listen for previous buttons clicks and clear selected main topic button
document.getElementById("prev-button").addEventListener("click", function() {
    clearMainTopicBtnState();
    addDisabledClass();
});

// Listen for previous buttons clicks and clear selected main topic button
document.getElementById("next-button").addEventListener("click", function() {
    clearMainTopicBtnState();
    addDisabledClass();
});

// Function to change the state of the main topic buttons with user input
function mainTopicBtnState() {

    // Loop through the main topic buttons
    for (let btn of main_topic_btns) {
        // Add a click event listener to each button
        btn.addEventListener("click", function() {

            // Clear the currently selected button
            clearMainTopicBtnState();

            // Add the class to the clicked button
            this.className += " main-topic-btn-selected";

            // Change aspect tiles from disabled to enabled
            removeDisabledClass();

            // Collect main topic name in session storage - js/dashboard/custom_session_info.js
            currentMainTopicSessionExtraction()
        });
    }
}

// Function to clear the state of the main topic buttons
function clearMainTopicBtnState() {

    // Get the currently selected button
    let current = document.getElementsByClassName("main-topic-btn-selected");

    // If there is a currently selected button, remove the class from it
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" main-topic-btn-selected", " main-topic-btn");
    }

}

// This function will remove the "disabled" class from all elements with the class name "disabled"
function removeDisabledClass() {
    // Select all elements with the class name "disabled"
    let disabledAspectTiles = document.getElementsByClassName(' disabled');

    // Since getElementsByClassName returns a live HTMLCollection, 
    // we need to convert it to an array to avoid modifying the collection while iterating over it
    disabledAspectTiles = Array.from(disabledAspectTiles);

    // Iterate over the elements and remove the "disabled" class
    for (let disabledAspectTile of disabledAspectTiles) {
        disabledAspectTile.classList.remove('disabled');
    }
}

// This function will add the "disabled" class to all elements with the class name "aspect-tile"
function addDisabledClass() {
    // Select all elements with the class name "main-topic-btn"
    let enabledAspectTiles = document.getElementsByClassName('aspect-tile');

    // Since getElementsByClassName returns a live HTMLCollection, 
    // we need to convert it to an array to avoid modifying the collection while iterating over it
    enabledAspectTiles = Array.from(enabledAspectTiles);

    // Iterate over the elements and add the "disabled" class
    for (let enabledAspectTile of enabledAspectTiles) {
        enabledAspectTile.classList.add('disabled');
    }
}

//  Triggered by: dashboard.html
mainTopicBtnState();
