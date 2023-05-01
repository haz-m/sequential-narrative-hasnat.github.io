// write a function called changeImage() that, when the window is clicked, changes to the next image in the array
// if the last image is reached, start over at the beginning
// use the Images in the ../Images folder
var index = 0;
var cameraClick = new Audio("../sounds/cameraClick.mp3");
var bgm = new Audio("../sounds/bgm.mp3");

function changeImage () {
  // count all the number of files in the Scenes folder
  var numFiles = 9
  var img = document.getElementById('sceneImage')
  var imageArray = ['../Images/Transition/trans1.png', '../Images/Transition/trans2.png', '../Images/Transition/trans3.png', '../Images/Scenes/scene1.png', '../Images/Scenes/scene2.png', '../Images/Scenes/scene3.png', '../Images/Scenes/scene4.gif', '../Images/Scenes/scene5.png', '../Images/Scenes/scene6.png']
  if (index === imageArray.length - 1) {
    index = numFiles - 1
  } if(index == numFiles - 1){
    window.location.href = "../index.html"
  } if(index == 0){
    cameraClick.play();
    console.log("camera click")
    index++
  } if (index == 2){
    bgm.play();
    bgm.loop = true;
    cameraClick.pause();
    console.log("bgm play")
    index++
  }
  else {
    index++
  }
  img.src = imageArray[index]
  console.log(index)
}

