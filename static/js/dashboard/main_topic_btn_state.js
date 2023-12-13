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

// This function will remove the "disabled" class to all elements with the class
// name of "aspect-tile" and "navbar-custom-btn" in order to enable them
// when a main topic is selected by the user.
function removeDisabledClass() {

    // Select all aspect tile elements
    let disabledAspectTiles = document.getElementsByClassName('aspect-tile');

    // Select all navbar elements related to the aspect tiles.
    let disabledNavbarBtns = document.getElementsByClassName('navbar-custom-btn');

    // Since getElementsByClassName returns a live HTMLCollection, 
    // we need to convert it to an array to avoid modifying the collection while iterating over it.
    disabledAspectTiles = Array.from(disabledAspectTiles);

    disabledNavbarBtns = Array.from(disabledNavbarBtns);

    // Iterate over the elements and remove the "disabled" class
    for (let disabledAspectTile of disabledAspectTiles) {
        disabledAspectTile.classList.remove('disabled');
    }

    for (let disabledNavbarBtn of disabledNavbarBtns) {
        disabledNavbarBtn.classList.remove('disabled');
    }
}

// This function will add the "disabled" class to all elements with the class
// name of "aspect-tile" and "navbar-custom-btn" in order to disable them
// when no main topic is selected.
function addDisabledClass() {

    // Select all aspect tile elements
    let enabledAspectTiles = document.getElementsByClassName('aspect-tile');

    // Select all navbar elements related to the aspect tiles
    let enabledNavbarBtns = document.getElementsByClassName('navbar-custom-btn');

    // Since getElementsByClassName returns a live HTMLCollection, 
    // we need to convert it to an array to avoid modifying the collection while iterating over it.
    enabledAspectTiles = Array.from(enabledAspectTiles);

    enabledNavbarBtns = Array.from(enabledNavbarBtns);

    // Iterate over the elements and add the "disabled" class.
    for (let enabledAspectTile of enabledAspectTiles) {
        enabledAspectTile.classList.add('disabled');
    }

    for (let enabledNavbarBtn of enabledNavbarBtns) {
        enabledNavbarBtn.classList.add('disabled');
    }
}

//  Triggered by: dashboard.html
mainTopicBtnState();
