                    // Templates
tPolygon = () => document.createElementNS("http://www.w3.org/2000/svg", "polygon");
tSvg = () => document.createElementNS("http://www.w3.org/2000/svg", "svg");
tText = () => document.createElementNS('http://www.w3.org/2000/svg', 'text');

                    // Fetch
const data = { // Бих искал полигона на седалките всъщност да е няколко полигона, за да можем да четаем сложни седалки.
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
    .then(data => JSON.parse(data))
    .catch(error => console.error('Error:', error));
*/

                    // On click
// My idea is to make an array of all popups to function as a queue composed of the popups. This way removing all other popups will be easy.
function seatClick(seat, seatCenter) {
    let seatPopup = document.createElement('div');
    seatPopup.className = 'seatPopup';
    
    let titleText = document.createElement('h2');
    titleText.textContent = `Seat: ${seat['column']} ${seat['row']}`;

    let closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.setAttribute('class', `clickable`);
    closeButton.addEventListener('click', () => {
        seatPopup.style.opacity = '0';
        setTimeout(() => {
            seatPopup.remove();
        }, getElementDelay(seatPopup));
    });
    
    seatPopup.appendChild(titleText);
    seatPopup.appendChild(closeButton);
    planeDiv.appendChild(seatPopup);

    seatPopup.style.left = (seatCenter[0] - seatPopup.offsetWidth / 2) + 'px';
    seatPopup.style.top = (seat['y'] + ((seatCenter[1] - seat['y']) * 2)) + 'px';

    setTimeout(() => {seatPopup.style.opacity = '1';}, 0);
    let popups = Array.from(document.getElementsByClassName('seatPopup'));
    if (popups.length > 1) {
        for (let i = 0; i < popups.length - 1; i++) {
            popups[i].style.opacity = '0';
    
            setTimeout(() => {
                if (document.body.contains(popups[i])) {
                    popups[i].remove();
                }
            }, getElementDelay(popups[i]));
        }   
    }
}

function getElementDelay(element) {
    let delay;
    let rawTransDur = window.getComputedStyle(element).getPropertyValue('transition-duration');
    if (rawTransDur.trim().split(/s|ms/)[1] === 'ms') {delay = parseInt(rawTransDur);} else {delay = parseFloat(rawTransDur) *1000;}
    return delay;
}

                    // Render
var planeDiv = document.getElementById('planeDiv');
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

        poly.setAttribute('class', `class${htmlSeatClass} clickable`);
        poly.addEventListener('click', () => seatClick(seat, polyCenter));
        poly.addEventListener('mouseenter', () => poly.classList.add(`class${htmlSeatClass}_hover`));
        poly.addEventListener('mouseleave', () => poly.classList.remove(`class${htmlSeatClass}_hover`));
 
        planeSvg.appendChild(poly);

        let text = tText();
        text.textContent = `${seat['column']} ${seat['row']}`;
        text.setAttribute('class', `clickable`);
        text.setAttribute('dominant-baseline', 'middle');
        text.addEventListener('click', () => seatClick(seat, polyCenter));
        text.addEventListener('mouseenter', () => poly.classList.add(`class${htmlSeatClass}_hover`));
        text.addEventListener('mouseleave', () => poly.classList.remove(`class${htmlSeatClass}_hover`));
        
        planeSvg.appendChild(text);
        
        setTimeout(() => {
            let bbox = text.getBBox();
            text.setAttribute('x', polyCenter[0] - (bbox.width / 2));
            text.setAttribute('y', polyCenter[1]);
        }, 0);
    });
});



planeDiv.appendChild(planeSvg);