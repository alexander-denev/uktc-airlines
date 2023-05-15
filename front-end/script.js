// Templates
tPolygon = () => document.createElementNS("http://www.w3.org/2000/svg", "polygon");
tSvg = () => document.createElementNS("http://www.w3.org/2000/svg", "svg");

// Fetch
const data = {
    "seats": [
    {
        "class": "First Class",
        "polygon": [
        {"x": 10, "y": 20},
        {"x": 30, "y": 40},
        {"x": 50, "y": 60}
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
        {"x": 70, "y": 80},
        {"x": 90, "y": 100},
        {"x": 110, "y": 120}
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
var planeDIV = document.getElementById('planeDIV');
planeDIV.innerHTML = data['plane']['svg'];

data['seats'].forEach(clas => {
    switch (clas['class']) {
        case 'Economy Class':
            var htmlSeatClass = 1;
        case 'Premium Economy Class':
            var htmlSeatClass = 4;
        case 'Business Class':
            var htmlSeatClass = 2;
        case 'First Class':
            var htmlSeatClass = 3;
    };
    var points = '';
    clas['polygon'].forEach(coords => {
        points += coords['x'] + ',' + coords['y'] + ' ';
    });
    console.log(points);
    var newDiv = document.createElement('div');
    var newSvg = tSvg();
    var newPoly = tPolygon();
    newPoly.setAttribute('points', points);
    newSvg.setAttribute('width', '300');
    newSvg.setAttribute('height', '300');
    newSvg.appendChild(newPoly);
    newDiv.appendChild(newSvg);
    planeDIV.appendChild(newDiv);
});