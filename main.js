

//Using a for loop

const lights = document.querySelectorAll('.light');
const toggleButton = document.getElementById('toggleButton');
let currentLightIndex = 0;

toggleButton.addEventListener('click', () => {
    lights[currentLightIndex].style.backgroundColor = '#777';

    currentLightIndex = (currentLightIndex + 1) % lights.length;

    lights[currentLightIndex].style.backgroundColor = lights[currentLightIndex].classList[1];
    for (let i = 0; i < lights.length; i++) {
        if (i !== currentLightIndex) {
            lights[i].style.backgroundColor = '#777';
        }
    }
});





// traffic-light-1.js
// "use strict";

// const trafficLight = {
//   state: "green",
// };

// let rotations = 0;
// while (rotations < 2) {
//   const currentState = trafficLight.state;
//   console.log("The traffic light is on", currentState);

// TODO

//   if (currentState === "green") {
//     trafficLight.state = "orange";
//   } else if (currentState === "orange") {
//     trafficLight.state = "red";
//   } else if (currentState === "red") {
//     rotations += 1;
//     trafficLight.state = "green";
//   }
// }

//The output of this code should be:

// The traffic light is on green
// The traffic light is on orange
// The traffic light is on red
// The traffic light is on green
// The traffic light is on orange
// The traffic light is on red


// traffic-light-2.js

// "use strict";

// const trafficLight = {
//   possibleStates: ["green", "orange", "red"],
//   stateIndex: 0,
// };

// let cycle = 0;
// while (cycle < 2) {
//   const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
//   console.log("The traffic light is on", currentState);

//   if (currentState === "green") {
//     trafficLight.stateIndex = 1; // Switch to orange
//   } else if (currentState === "orange") {
//     trafficLight.stateIndex = 2; // Switch to red
//   } else if (currentState === "red") {
//     cycle += 1; // Increment cycle count
//     trafficLight.stateIndex = 0; // Switch to green
//   }
// }

//The output of this code should be:

// The traffic light is on green
// The traffic light is on orange
// The traffic light is on red
// The traffic light is on green
// The traffic light is on orange
// The traffic light is on red










