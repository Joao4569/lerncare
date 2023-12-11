// This function is called when a main topic button is clicked and sets the main topic name in a session variable
function currentMainTopicSessionExtraction() {
    let mainTopic = document.getElementsByClassName("main-topic-btn-selected");
    let mainTopicName = mainTopic[0].id;
    sessionStorage.setItem('mainTopicName', mainTopicName);
}

// This function is called when a aspect button is clicked and sets the aspect name in a session variable
document.getElementById('vignette').addEventListener('click', function(event) {
    event.preventDefault();
    let userSelectedAspect = this.id;
    sessionStorage.setItem('userSelectedAspect', userSelectedAspect);
});

// This will allocate the user selected aspect and mainTopic names to the url
document.querySelector('.dropdown-item').addEventListener('click', function(event) {
    event.preventDefault();
    let mainTopic = sessionStorage.getItem('mainTopicName');
    let aspectTile = sessionStorage.getItem('userSelectedAspect');
    window.location.href = this.href + aspectTile + '/' + mainTopic;
});