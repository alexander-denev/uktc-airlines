const classDef = {
  "Economy Class": [14, 17, 18, 19]
};

const ip = "127.0.0.1";
const planeModel = "Airbus A320";
const floor = 1;
const rotation = 0;

fetch('inputSeats.svg')
  .then(response => response.text())
  .then(data => {

    // Parse the airplane svg
    let parser = new DOMParser();
    let theObj = parser.parseFromString(data, "image/svg+xml").documentElement;

    // Append svg to DOM for processing
    document.body.appendChild(theObj);

    // Get the coordinates of the seats from the svg
    let output = [];
    Array.from(theObj.children.seats.children).forEach(seat => {
        let seatBB = seat.getBBox();

        let clas = "default";
        for (let [key, value] of Object.entries(classDef)) {
          if (value.includes(parseInt(seat.children[0].classList[0].match(/\d+/)[0]))) {
            clas = key;
          } else {
            clas = "doesn't include"
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
      if (!rows.includes(seat.y)){
        rows.push(seat.y);
        columnCounter = 0;
      }

      output[output.indexOf(seat)].row = rows.indexOf(seat.y) + 1;
      output[output.indexOf(seat)].column = String.fromCharCode(65 + columnCounter);
      columnCounter += 1;
    });

    fetch('inputSeats.svg')
    .then(response => response.text())
    .then(planeData => {

      let button = document.createElement("button");
      button.textContent = "POST";

      button.addEventListener("click", () => thePost(ip, button, output, planeData, planeModel));
      document.body.innerHTML = "";
      document.body.appendChild(button);
    });
});

async function thePost(ip, self, seats, planeSvg, planeModel){

  self.remove();

  fetch(`${ip}/createPlane`, {
    mode: "no-cors",
    method: "POST",
    body: JSON.stringify({
      "seats": seats,
      "planeVisualisation": planeSvg,
      "planeName": planeModel
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
    /*.then(response => response.json())
    .then(json => console.log(json));*/
}

