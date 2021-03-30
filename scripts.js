function init() {
  let takeOffCheck = document.getElementById("takeoff");
  let landingCheck = document.getElementById("landing")
  let missionAbortCheck = document.getElementById("missionAbort")
  let leftButton = document.getElementById("left")
  let rightButton = document.getElementById("right")
  let upButton = document.getElementById("up")
  let downButton = document.getElementById("down")
  let flightStatus = document.getElementById("flightStatus")
  let shuttleBackgroundColor = document.getElementById("shuttleBackground")
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
  let rocket = document.getElementById("rocket")
  let rocketPosition = null;

  takeOffCheck.addEventListener("click", function() {
      if ((window.confirm("Confirm that the shuttle is ready for takeoff.")) === true) {
          flightStatus.innerHTML = "Shuttle in flight.";
          shuttleBackgroundColor.style.backgroundColor = "blue";
          spaceShuttleHeight.innerHTML = 10000;
      }
  })

  landingCheck.addEventListener("click", function() {
      if ((window.confirm("The shuttle is landing. Landing gear engaged.")) === true) {
          flightStatus.innerHTML = "The shuttle has landed.";
          shuttleBackgroundColor.style.backgroundColor = "green";
          spaceShuttleHeight.innerHTML = 0;
      }
  })

  missionAbortCheck.addEventListener("click", function() {
      if ((window.confirm("Confirm that you want to abort the mission.")) === true) {
          flightStatus.innerHTML = "Mission aborted.";
          shuttleBackgroundColor.style.backgroundColor = "green";
          spaceShuttleHeight.innerHTML = 0;
      }
  })



  leftButton.addEventListener("click", function() {
      rocketPosition -= 10;
      return rocket.style.left = rocketPosition + "px";
  });

  rightButton.addEventListener("click", function() {
      rocketPosition += 10;
      return rocket.style.left = rocketPosition + "px";
  });

  downButton.addEventListener("click", function() {

      rocketPosition += 10;
      rocket.style.top = rocketPosition + "px";
      if (spaceShuttleHeight.innerHTML >= 10000) {
          spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
      }

  });

  upButton.addEventListener("click", function() {

      rocketPosition -= 10;
      rocket.style.top = rocketPosition + "px";
      spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
  });
}
    window.addEventListener("load", init);