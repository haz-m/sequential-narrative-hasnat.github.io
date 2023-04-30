// write a function called changeImage() that, when the window is clicked, changes to the next image in the array
// if the last image is reached, start over at the beginning
// use the images in the ../images folder
var index = 0;
function changeImage () {
  var img = document.getElementById('sceneImage')
  var imageArray = ['../images/4.png', '../images/4.png', '../images/5.png', '../images/6.png']
  if (index === imageArray.length - 1) {
    index = 4
  } if(index == 4){
    window.location.href = "../index.html"
  }
  else {
    index++
  }
  img.src = imageArray[index]
  console.log(index)
}