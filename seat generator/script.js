const classDef = {
  "Economy Class": [0],
  "Premium Economy Class": [2]
};

const ip = "http://127.0.0.1:8080";
const planeModel = "Airbus A320";
const floor = 1;
const rotation = 0;

fetch('inputSeats_a330.svg')
  .then(response => response.text())
  .then(data => {

    // Parse the airplane svg
    let parser = new DOMParser();
    let theObj = parser.parseFromString(data, "image/svg+xml").documentElement;

    // Append svg to DOM for processing
    document.body.appendChild(theObj);

    // Get the coordinates of the seats from the svg
    let output = [];
    let clas_heights = [];
    Array.from(theObj.children.seats.children).forEach(seat => {
        let seatBB = seat.getBBox();

        let clas = "default";
        for (let [key, value] of Object.entries(classDef)) {
          if (value.includes( Array.from(seat.children).filter(child => child["nodeName"] == "g").length )) {
            clas = key; 
            
            if(!clas_heights.find(element => element["seatClass"] == clas)){
              clas_heights.push({
                "seatClass": clas,
                "height": Math.floor(seatBB.height)
              })
            }

          }
        }

        output.push({
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
      if (!rows.includes(seat.y) 
      && clas_heights.find(element => element["seatClass"] == seat["seatClass"])["height"] < seat.y - rows[rows.length - 1]
      || rows.length === 0){
        rows.push(seat.y);
        columnCounter = 0;
      }

      output[output.indexOf(seat)].row = rows.length;
      output[output.indexOf(seat)].column = String.fromCharCode(65 + columnCounter);
      columnCounter += 1;
    });

    fetch('inputPlane_a330.svg')
    .then(response => response.text())
    .then(planeData => {

      let button = document.createElement("button");
      button.textContent = "POST";

      button.addEventListener("click", () => thePost(ip, button, output, planeData, planeModel));
      // button.addEventListener("click", () => console.log(output));

      document.body.innerHTML = "";
      document.body.appendChild(button);
    });
});

async function thePost(ip, self, seats, planeSvg, planeModel){

  self.remove();

  console.log(JSON.stringify({
    "seats": seats,
    "planeVisualisation": planeSvg,
    "planeName": planeModel
  }))

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
    /*.then(response => response.json())
    .then(json => console.log(json));*/
}

