function populateClouds() {
  var numberOfClouds = Math.floor(Math.random() * 4) + 1;

  for (var i = 0; i < numberOfClouds; i++) {
    createCloud();
  }

}

// this function is called when a cloud finishes its
// animation style in order to keep the DOM reasonable
function destroyCloud(e) {
  e.target.remove()
}


function createCloud() {

  // define clouds and store in an array
  var largeCloud = {
    size: 18,
    speed: 12,
    zIndex: -1
  };

  var mediumCloud = {
    size: 10,
    speed: 20,
    zIndex: -2
  };

  var smallCloud = {
    size: 4,
    speed: 28,
    zIndex: -3
  };

  var cloudArray = [smallCloud, mediumCloud, largeCloud];

  var cloudElement = document.createElement("div");
  cloudElement.addEventListener("animationend", destroyCloud);

  // picks random number from 0 - length of cloudArray
  var randomCloud = Math.floor(Math.random() * cloudArray.length);
  var randomPosition = Math.floor(Math.random() * 101);
  var randomDelay = Math.floor(Math.random() * 3);

  var cloud = cloudArray[randomCloud];

  cloudElement.setAttribute("class", "cloud");

  var cloudStyle = "top: " + randomPosition + "%; " +
    "font-size: " + cloud.size + "em; " +

    "z-index: " + cloud.zIndex + "; " +
    "animation: myanimation " + cloud.speed + "s linear " +
    randomDelay + "s;"

  // create a 1 in 3 chance the next cloud will
  // be colored
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    cloudStyle += "color: #" + generateColor() + ";";
  }

  cloudElement.setAttribute("style", cloudStyle);

  document.body.appendChild(cloudElement);
}

// Creates one large cloud in the foreground the clips the lower
// part of the info window - for dramatic effect
function createForeGroundCloud() {
  var cloudElement = document.createElement("div");
  var cloudStyle = "bottom: 20%; left: -200%; font-size: 25em; z-index: 5; " +
    "animation: myanimation 8s linear;"


  cloudElement.addEventListener("animationend", destroyCloud);

  cloudElement.setAttribute("class", "cloud");
  cloudElement.setAttribute("style", cloudStyle);
  document.body.appendChild(cloudElement);

  var container = document.getElementsByTagName("section");
  container[0].appendChild(cloudElement);

}

function generateColor() {
  var colors = [
    "b6f3df",
    "b6e9f3",
    "b6caf3",
    "c1b6f3",
    "dfb6f3",
    "f3b6e8"]



  var randomNumber = Math.floor(Math.random() * colors.length);

  return colors[randomNumber];
}

setInterval(populateClouds, 5000);
setInterval(createForeGroundCloud, 7000);