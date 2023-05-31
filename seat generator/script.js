fetch('input.txt')
  .then(response => response.text())
  .then(data => {

    let parser = new DOMParser();
    let theObj = parser.parseFromString(data, "image/svg+xml").documentElement;

    document.body.appendChild(theObj);

    let output = [];
    Array.from(theObj.children.seats.children).forEach(seat => {
        seat = seat.getBBox();
        output.push({"x":seat.x, "y":seat.y});
    });
    
    console.log(output);

});

