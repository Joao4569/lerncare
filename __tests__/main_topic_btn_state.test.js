const { JSDOM } = require('jsdom');

test('button click changes class', () => {
    // Create a new JSDOM instance with a sample HTML
    const dom = new JSDOM(`<!DOCTYPE html>
        <button class="main-topic-btn">Button 1</button>
        <button class="main-topic-btn">Button 2</button>
    `);

    // Get the document object
    const document = dom.window.document;

    // Get all the main topic buttons
    let main_topic_btns = document.getElementsByClassName("main-topic-btn");

    // Loop through the main topic buttons
    for (let btn of main_topic_btns) {
        // Add a click event listener to each button
        btn.addEventListener("click", function() {
            // Get the currently selected button
            let current = document.getElementsByClassName("main-topic-btn-selected");

            // If there is a currently selected button, remove the class from it
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" main-topic-btn-selected", "");
            }

            // Add the class to the clicked button
            this.className += " main-topic-btn-selected";
        });
    }

    // Simulate a click on the first button
    const btn = document.querySelector('.main-topic-btn');
    btn.click();

    // Check that the class was added
    expect(btn.className).toBe('main-topic-btn main-topic-btn-selected');
});