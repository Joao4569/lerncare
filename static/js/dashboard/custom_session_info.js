// // This function is called when the main topic button is clicked and sets the main topic name in a session variable
// function currentMainTopicSessionExtraction() {
//     let mainTopic = document.getElementsByClassName("main-topic-btn-selected");
//     let mainTopicName = mainTopic[0].innerText;
//     //console.log(mainTopicName);
//     sessionStorage.setItem('mainTopicName', mainTopicName);
// }

// // This function is called when the aspect button is clicked and sets the aspect name in a session variable
// document.getElementById('vignette-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     let userSelectedAspect = 'Vignette';
//     //console.log(userSelectedAspect);
//     sessionStorage.setItem('userSelectedAspect', userSelectedAspect);
// });

// When the Vignette aspect button link is clicked
// document.querySelector('.dropdown-item').addEventListener('click', function(event) {
//     event.preventDefault();
//     let mainTopic = sessionStorage.getItem('mainTopicName');
//     let aspectTile = sessionStorage.getItem('userSelectedAspect');
//     window.location.href = this.href + '?mainTopic=' + mainTopic + '&aspectTile=' + aspectTile;
// });