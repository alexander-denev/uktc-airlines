// Templates
tPolygon = () => document.createElementNS("http://www.w3.org/2000/svg", "polygon");
tSvg = () => document.createElementNS("http://www.w3.org/2000/svg", "svg");
tText = () => document.createElementNS('http://www.w3.org/2000/svg', 'text');

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

// On click
function seatClick(seat) {
    console.log(seat['column']+seat['row'] + ' clicked');
}

// Render
var planeDiv = document.getElementById('planeDiv');
//planeDiv.innerHTML = data['plane']['svg'];
var planeSvg = tSvg();
planeSvg.setAttribute('id','planeSvg');
planeSvg.setAttribute("width",'0px');
planeSvg.setAttribute("height",'0px');

data['seats'].forEach(clas => {

    let htmlSeatClass = [
        'Economy Class','Business Class','First Class','Premium Economy Class'
    ].indexOf(clas['class']) +1;

    clas['occurrences'].forEach(seat => {
        let poly = tPolygon();
        let pointsForCentroid = [];
        clas['polygon'].forEach(geo => {
            let point = planeSvg.createSVGPoint();
            point.x = geo['x'] + seat['x'];
            point.y = geo['y'] + seat['y'];
            poly.points.appendItem(point);
            
            pointsForCentroid.push([point.x, point.y]);

            if (point.x > parseInt(planeSvg.getAttribute("width"))) {
                planeSvg.setAttribute("width", point.x + 'px');
            }
            if (point.y > parseInt(planeSvg.getAttribute("height"))) {
                planeSvg.setAttribute("height", point.y + 'px');
            }
        })
        let polyCenter = d3.polygonCentroid(pointsForCentroid);
        poly.setAttribute('class', `class${htmlSeatClass}`);
        poly.addEventListener('click', () => seatClick(seat));
 
        planeSvg.appendChild(poly);

        let text = tText();
        text.textContent = seat['column']+seat['row'];
        text.setAttribute('x',polyCenter[0]);
        text.setAttribute('y',polyCenter[1]);
        text.addEventListener('click', () => seatClick(seat));
        
        planeSvg.appendChild(text);

    })

    
        
        

    })

planeDiv.appendChild(planeSvg);