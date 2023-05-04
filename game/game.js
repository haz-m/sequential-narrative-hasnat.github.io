// write a function called changeImage() that, when the window is clicked, changes to the next image in the array
// if the last image is reached, start over at the beginning
// use the Images in the ../Images folder
var index = 0;
var cameraClick = new Audio("../sounds/cameraClick.mp3");
var bgm = new Audio("../sounds/bgm.mp3");
var catScreech = new Audio("../sounds/catScreech.mp3");
var textNotif = new Audio("../sounds/textTone.mp3");
var tweetSound = new Audio("../sounds/tweet.mp3");
var typingSound = new Audio("../sounds/typing.mp3");
var electricScreech = new Audio("../sounds/electricCrackle.mp3");

function changeImage() {
  // count all the number of files in the Scenes and Transition folder
  var numFiles = 38;
  var img = document.getElementById("sceneImage");
  var imageArray = [
    "../Images/Transition/trans1.png",
    "../Images/Transition/trans2.png",
    "../Images/Transition/trans3.png",
    "../Images/Scenes/scene1.png",
    "../Images/Scenes/scene2.png",
    "../Images/Scenes/scene3.png",
    "../Images/Scenes/scene4.gif",
    "../Images/Scenes/scene5.png",
    "../Images/Scenes/scene6.png",
    "../Images/Scenes/scene7.png",
    "../Images/Scenes/scene8.png",
    "../Images/Scenes/scene9.png",
    "../Images/Scenes/scene10.png",
    "../Images/Scenes/scene11.png",
    "../Images/Scenes/scene12.png",
    "../Images/Scenes/scene13.png",
    "../Images/Scenes/scene14.png",
    "../Images/Scenes/scene15.png",
    "../Images/Scenes/scene16.png",
    "../Images/Scenes/scene17.png",
    "../Images/Scenes/scene18.png",
    "../Images/Scenes/scene19.png",
    "../Images/Scenes/scene20.png",
    "../Images/Scenes/scene21.png",
    "../Images/Scenes/scene22.png",
    "../Images/Scenes/scene23.png",
    "../Images/Scenes/scene24.png",
    "../Images/Scenes/scene25.png",
    "../Images/Scenes/scene26.png",
    "../Images/Scenes/scene27.png",
    "../Images/Scenes/scene28.png",
    "../Images/Scenes/scene29.png",
    "../Images/Scenes/scene30.png",
    "../Images/Scenes/scene31.png",
    "../Images/Scenes/scene32.png",
    "../Images/Scenes/scene33.png",
    "../Images/Scenes/scene34.png",
    "../Images/Scenes/scene35.gif",
  ];
  if (index === imageArray.length - 1) {
    index = numFiles - 1;
  }
  if (index == numFiles - 1) {
    window.location.href = "../index.html";
  }
  if (index == 0) {
    cameraClick.play();
  }
  if (index == 2) {
    bgm.play();
    bgm.loop = true;
    cameraClick.pause();
  }
  if (index == 9) {
    catScreech.play();
  }
  if (index == 15) {
    textNotif.play();
    index++;
  }
  if (index == 22 || index == 23 || index == 24 || index == 25) {
    tweetSound.play();
    typingSound.play();
    typingSound.loop = true;
  }
  if (index == 26) {
    typingSound.pause();
  } 
  if (index == 30) {
    electricScreech.play();
  }
  if(index == 32 || index == 33 || index == 34 || index == 35) {
    cameraClick.play();
    console.log("camera click");
    index++;
  }
  else {
    index++;
  }
  img.src = imageArray[index];
  console.log(index);
}
