mainTopicCarousel();

function mainTopicCarousel() {
    let currentStartIndex = 0;

    // Show the names of the first three topics on the buttons when the page loads
    document.getElementsByClassName('main-topic-btn')[0].innerText = mainTopics[0].friendlyName;
    document.getElementsByClassName('main-topic-btn')[1].innerText = mainTopics[1].friendlyName;
    document.getElementsByClassName('main-topic-btn')[2].innerText = mainTopics[2].friendlyName;

    document.getElementById('prev-button').addEventListener('click', function() {
        if (currentStartIndex > 0) {
            currentStartIndex--;
            document.getElementsByClassName('main-topic-btn')[0].innerText = mainTopics[currentStartIndex].friendlyName;
            document.getElementsByClassName('main-topic-btn')[1].innerText = mainTopics[currentStartIndex + 1].friendlyName;
            document.getElementsByClassName('main-topic-btn')[2].innerText = mainTopics[currentStartIndex + 2].friendlyName;
        }
    });

    document.getElementById('next-button').addEventListener('click', function() {
        if (currentStartIndex < mainTopics.length - 3) {
            currentStartIndex++;
            document.getElementsByClassName('main-topic-btn')[0].innerText = mainTopics[currentStartIndex].friendly_name;
            document.getElementsByClassName('main-topic-btn')[1].innerText = mainTopics[currentStartIndex + 1].friendlyName;
            document.getElementsByClassName('main-topic-btn')[2].innerText = mainTopics[currentStartIndex + 2].friendlyName;
        }
    });
}
