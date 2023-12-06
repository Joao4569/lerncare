// Get all the main topic buttons
let main_topic_btns = document.getElementsByClassName("main-topic-btn");

//  Triggered by: dashboard.html
mainTopicBtnState();

// Listen for previous buttons clicks and clear selected main topic button
document.getElementById("prev-button").addEventListener("click", function() {
    clearMainTopicBtnState()
});

// Listen for previous buttons clicks and clear selected main topic button
document.getElementById("next-button").addEventListener("click", function() {
    clearMainTopicBtnState()
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
