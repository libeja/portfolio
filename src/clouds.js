
export default (sectionRef) => {

  let foregroundCloudTimeout;
  let randomCloudTimeout;

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

  const startClouds = () => {
    populateClouds.call(this);
    createForeGroundCloud.call(this);
    foregroundCloudTimeout = setInterval(populateClouds.bind(this), 5000);
    randomCloudTimeout = setInterval(createForeGroundCloud.bind(this), 8000);
  };

  const stopClouds = () => {
    clearInterval(foregroundCloudTimeout);
    clearInterval(randomCloudTimeout);
  };

  const populateClouds = () => {
    var numberOfClouds = Math.floor(Math.random() * 4) + 1;

    for (var i = 0; i < numberOfClouds; i++) {
      createCloud();
    }
  };

  // this function is called when a cloud finishes its
  // animation style in order to keep the DOM reasonable
  const destroyCloud = (e) => {
    e.target.remove()
  };

  const createCloud = () => {

    // define clouds and store in an array
    const largeCloud = {
      size: 4,
      speed: 12,
      zIndex: 1
    };

    const mediumCloud = {
      size: 2,
      speed: 20,
      zIndex: 2
    };

    const smallCloud = {
      size: 1,
      speed: 28,
      zIndex: 3
    };

    const cloudArray = [smallCloud, mediumCloud, largeCloud];

    let cloudElement = document.createElement("div");
    cloudElement.addEventListener("animationend", destroyCloud);

    // picks random number from 0 - length of cloudArray
    let randomCloud = Math.floor(Math.random() * cloudArray.length);
    let randomPosition = Math.floor(Math.random() * 101);
    let randomDelay = Math.floor(Math.random() * 3);

    let cloud = cloudArray[randomCloud];

    cloudElement.setAttribute("class", "cloud");

    let cloudStyle = "top: " + randomPosition + "%; " +
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
    sectionRef.appendChild(cloudElement);
  };

  // Creates one large cloud in the foreground the clips the lower
  // part of the info window - for dramatic effect
  const createForeGroundCloud = () => {
    var cloudElement = document.createElement("div");
    var cloudStyle = "bottom: 60%; left: -200%; font-size: 12em; z-index: 100; " +
      "animation: myanimation 8s linear;"

    cloudElement.addEventListener("animationend", destroyCloud);
    cloudElement.setAttribute("class", "cloud");
    cloudElement.setAttribute("style", cloudStyle);
    sectionRef.appendChild(cloudElement);

  };

  return {
    startClouds,
    stopClouds
  }
};

