// Templates
tPolygon = () => document.createElementNS("http://www.w3.org/2000/svg", "polygon");
tSvg = () => document.createElementNS("http://www.w3.org/2000/svg", "svg");

// Fetch
const data = {
    "seats": [
    {
        "class": "First Class",
        "polygon": [
        {"x": 0, "y": 0},
        {"x": 50, "y": 0},
        {"x": 50, "y": 50},
        {"x": 0, "y": 50}
        ],
        "occurrences": [
        {"x": 15, "y": 25, "row": "A", "column": 1},
        {"x": 35, "y": 45, "row": "A", "column": 2},
        {"x": 55, "y": 65, "row": "B", "column": 1},
        {"x": 75, "y": 85, "row": "B", "column": 2},
        {"x": 95, "y": 105, "row": "C", "column": 1}
        ]
    },
    {
        "class": "Economy Class",
        "polygon": [
        {"x": 0, "y": 0},
        {"x": 40, "y": 0},
        {"x": 40, "y": 40},
        {"x": 0, "y": 40}
        ],
        "occurrences": [
        {"x": 75, "y": 85, "row": "D", "column": 1},
        {"x": 95, "y": 105, "row": "D", "column": 2},
        {"x": 115, "y": 125, "row": "E", "column": 1},
        {"x": 135, "y": 145, "row": "E", "column": 2},
        {"x": 155, "y": 165, "row": "F", "column": 1}
        ]
    }
    ],
    "facilities": [
    {
        "type": "Bathroom",
        "polygon": [
        {"x": 200, "y": 210},
        {"x": 220, "y": 230},
        {"x": 240, "y": 250}
        ],
        "position": {"x": 215, "y": 235}
    },
    {
        "type": "Galley",
        "polygon": [
        {"x": 260, "y": 270},
        {"x": 280, "y": 290},
        {"x": 300, "y": 310}
        ],
        "position": {"x": 275, "y": 295}
    }
    ],
    "plane": {
    "name": "Airbus A320",
    "svg": '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300"><path fill="#E0E0E0" d="M0 0h600v300H0z"/><path fill="#FFF" stroke="#000" stroke-width="2" d="M50 50h500v200H50z"/><path fill="silver" d="M100 80h400v140H100z"/><path fill="gray" d="M120 100h120v40H120zm240 0h120v40H360z"/><text x="160" y="120" font-size="24" fill="#FFF" font-family="Arial" text-anchor="middle">1</text><text x="400" y="120" font-size="24" fill="#FFF" font-family="Arial" text-anchor="middle">2</text><text x="50" y="270" font-size="16" font-family="Arial">Airbus A320</text></svg>'
    }
};
/*
fetch('http://localhost:8080/api/your-endpoint')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

// Render
var planeDiv = document.getElementById('planeDiv');
//planeDiv.innerHTML = data['plane']['svg'];

data['seats'].forEach(clas => {
    switch (clas['class']) {
        default: {
            var htmlSeatClass = 'error';
        }
        case 'Economy Class': {
            var htmlSeatClass = 1;
            break;
        }
        case 'Premium Economy Class':{
            var htmlSeatClass = 4;
            break;
        }    
        case 'Business Class':{
            var htmlSeatClass = 2;
            break;
        }
        case 'First Class':{
            var htmlSeatClass = 3;
            break;
        }
    }
    clas['occurrences'].forEach(seat => {
        var polygon = tPolygon();
        polygon.setAttribute("class", `class${htmlSeatClass}`);
        var svg = tSvg();
        svg.setAttribute("width", 0);
        svg.setAttribute("height", 0);
        svg.setAttribute("class", 'svg');
        clas['polygon'].forEach(coords => {
            var point = svg.createSVGPoint();
            point.x = coords['x'];
            point.y = coords['y'];
            polygon.points.appendItem(point);
            polygon.class = 'class' + htmlSeatClass;
            if (coords['x'] > svg.getAttribute("width")) {
                svg.setAttribute("width", coords['x']);
            }
            if (coords['y'] > svg.getAttribute("height")) {
                svg.setAttribute("height", coords['y']);
            }
        })
        planeDiv.style.width = 0;
        planeDiv.style.height = 0;
        console.log(seat['x'] + parseInt(svg.getAttribute("width")));
        if (seat['x'] + parseInt(svg.getAttribute("width")) > parseInt(planeDiv.style.width)) {
            planeDiv.style.width = (seat['x'] + parseInt(svg.getAttribute("width"))) + "px";
        }
        if (seat['y'] + parseInt(svg.getAttribute("height")) > parseInt(planeDiv.style.height)) {
            planeDiv.style.height = (seat['y'] + parseInt(svg.getAttribute("height"))) + "px";
        }
        console.log(parseInt(planeDiv.style.width));
        svg.setAttribute("style", `top:${seat['y']}px; left:${seat['x']}px`);
        svg.appendChild(polygon);
        planeDiv.appendChild(svg);
        

    })
})