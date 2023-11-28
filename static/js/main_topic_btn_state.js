// Get all the main topic buttons
var main_topic_btns = document.getElementsByClassName("main-topic-btn");

// Loop through the main topic buttons
for (var i = 0; i < main_topic_btns.length; i++) {

    // Add a click event listener to each button
    main_topic_btns[i].addEventListener("click", function() {

        // Get the currently selected button
        var current = document.getElementsByClassName("main-topic-btn-selected");

        // If there is a currently selected button, remove the class from it
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" main-topic-btn-selected", "");
        }

        // Add the class to the clicked button
        this.className += " main-topic-btn-selected";
    });
}