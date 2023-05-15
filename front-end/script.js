// Templates
tPolygon = () => document.createElementNS("http://www.w3.org/2000/svg", "polygon");

// Fetch
result = "100,100 200,200 200,300 0,300 0,200"

fetch('http://localhost:8080/api/your-endpoint')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


// Airplane body
var svg = document.getElementsByClassName('planeSVG')[0];
svg.setAttribute("width", "50vw");
svg.setAttribute("height", "50vh");

var polygon = tPolygon();
polygon.setAttribute("points", result);
polygon.setAttribute("class", "airplanePolygon");

svg.appendChild(polygon);



var pdiv = document.getElementById("airplaneDiv");
