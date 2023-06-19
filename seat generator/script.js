const classDef = ["Economy"];
const planeModel = "Airbus A319";













const ip = "http://127.0.0.1:8080";
const floor = 1;
const rotation = 0;

let button = document.createElement("button"); // POST button
button.textContent = "POST";

button.addEventListener("click", () => {

  fetch(document.getElementById("input").value) // Fetch 
  .then(response => response.text())
  .then(response => {
    
    button.remove();
    
    // console.log(theSeatsParse(response));
    thePost(ip, theSeatsParse(response), thePlaneParse(response), planeModel);

  });
});

document.body.appendChild(button);

function theSeatsParse(data){

    // Parse the airplane svg
    let parser = new DOMParser();
    let theObj = parser.parseFromString(data, "image/svg+xml").documentElement;

    // Append svg to DOM for processing
    document.body.appendChild(theObj);

    // Remove undeeded elements
    ["power", "numbers", "colors", "seat_letters"].forEach(id => {
      try {
        theObj.getElementById(id).remove();
      } catch {
        console.error("Unable to remove" + id);
      }
    });

    // Get classes and their position in the airplane
    let seatClasses = {};
    for (let i = 0; i < theObj.children.labels.children.length; i++) {
      let bbox = theObj.children.labels.children[i].getBBox();
      seatClasses[classDef[i]] = bbox.y;
    }

    // Get the coordinates of the seats from the svg
    let output = [];

    Array.from(theObj.children.seats.children).forEach(seat => {

        let seatBB = seat.getBBox(); // Get the seat's bounding box
        
        let clas = "none";
        for (let i = 0; i < Object.keys(seatClasses).length; i++) {
          if (seatBB.y > Object.values(seatClasses)[i] && ((seatBB.y < Object.values(seatClasses)[i+1]) ? (Object.values(seatClasses)[i+1]) : true)) {
            clas = Object.keys(seatClasses)[i];
          }
        }

        output.push({ // Push the seat's info to the output array
          "x": Math.floor(seatBB.x), 
          "y": Math.floor(seatBB.y), 
          "seatClass": clas,
          "floor": floor,
          "rotation": rotation
        });
    });
  
    // Sort
    output.sort(function(a, b) {
      if (a.y === b.y) {
        return a.x - b.x;
      } else {
        return a.y - b.y;
      }
    });
    
    // Fix tiny differences in coordinates
    let previous;
    output.forEach(seat => {
      if (!previous) {
        previous = seat;
        return;
      }
      
      if (previous.y - seat.y < 3 && previous.y - seat.y > -3) {
        output[output.indexOf(seat)].y = previous.y; 
      }
      previous = seat;
    });

    // Calculate seat names
    let rows = [];
    let columnCounter = 0;
    output.forEach(seat => {
      if (!rows.includes(seat.y) || rows.length === 0) {
        rows.push(seat.y);
        columnCounter = 0;
      }

      output[output.indexOf(seat)].row = rows.length;
      output[output.indexOf(seat)].column = String.fromCharCode(65 + columnCounter);
      columnCounter += 1;
    });

    theObj.remove();

    return output;
};

function thePlaneParse(data) {

  // Parse the airplane svg
  let parser = new DOMParser();
  let theObj = parser.parseFromString(data, "image/svg+xml").documentElement;

  // Append svg to DOM for processing
  document.body.appendChild(theObj);

  // Remove undeeded elements
  ["power", "numbers", "colors", "seat_letters", "seats", "Layer_11"].forEach(id => {
    try {
      theObj.getElementById(id).remove();
    } catch {
      console.error("Unable to remove" + id);
    }
  });

  let layer1children = theObj.children.Layer_1.children;
  for (let i = 0; i < layer1children.length; i++) {
    if (layer1children[i].id === "") {
      layer1children[i].remove();
      break;
    }
  }
  
  // Output the airplane svg as text
  let output = theObj.outerHTML;
  theObj.remove();
  return output;
}

function thePost(ip, seats, planeSvg, planeModel){ // Post method

  // console.log(
  //     JSON.stringify({
  //       "seats": seats,
  //       "planeVisualisation": planeSvg,
  //       "planeName": planeModel
  //     }));

  fetch(`${ip}/createPlane`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "seats": seats,
      "planeVisualisation": planeSvg,
      "planeName": planeModel
    })
  });

}

