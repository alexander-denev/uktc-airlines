                    // Templates
tPolygon = () => document.createElementNS("http://www.w3.org/2000/svg", "polygon");
tSvg = () => document.createElementNS("http://www.w3.org/2000/svg", "svg");
tText = () => document.createElementNS('http://www.w3.org/2000/svg', 'text');

                    // Fetch
const data = {
    "seats": [
        {
            "type": "First",
            "visualisation": "[an SVG]",
            "occurrences": [
            {"x": 15, "y": 25, "row": "A", "column": 1, "floor" : 1},
            {"x": 35, "y": 45, "row": "A", "column": 2, "floor" : 1},
            {"x": 55, "y": 65, "row": "B", "column": 1, "floor" : 1},
            {"x": 75, "y": 85, "row": "B", "column": 2, "floor" : 1},
            {"x": 95, "y": 105, "row": "C", "column": 1, "floor" : 1}
            ]
        },
        {
            "type": "Economy",
            "visualisation": "[an SVG]",
            "occurrences": [
            {"x": 75, "y": 85, "row": "D", "column": 1, "floor" : 1},
            {"x": 95, "y": 105, "row": "D", "column": 2, "floor" : 1},
            {"x": 115, "y": 125, "row": "E", "column": 1, "floor" : 1},
            {"x": 135, "y": 145, "row": "E", "column": 2, "floor" : 1},
            {"x": 155, "y": 165, "row": "F", "column": 1, "floor" : 1}
            ]
        }
    ],
    "facilities": [
        {
            "type": "Bathroom",
            "visualisation": "[an SVG]",
            "occurrences": [
                {"x": 215, "y": 235, "floor" : 1},
                {"x": 250, "y": 90, "floor" : 1}
            ]
        },
        {
            "type": "Galley",
            "visualisation": "[an SVG]",
            "occurrences": [
                {"x": 215, "y": 235, "floor" : 1},
                {"x": 250, "y": 90, "floor" : 1}
            ]
        }
    ],
    "airplane": {
        "name": "Airbus A320",
        "floors": 1,
        "visualisation": {
            "1": "an SVG",
            "2": "an SVG"
        }
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