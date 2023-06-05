                    // Templates
tSvgText = () => document.createElementNS('http://www.w3.org/2000/svg', 'text');

                    // Fetch
// fetch(`http://localhost:8080/mapData/${new URLSearchParams(window.location.search).get("id")}`)
fetch(`http://localhost:8080/mapData/${1}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("loading").remove();
        render(data);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("legend").innerHTML = `Error: ${error}`;
    });

                    // On click
function seatClick(seat, seatSVG, clas) {
    let seatPopup = document.createElement('div');
    seatPopup.className = 'seatPopup';
    
    let titleText = document.createElement('h2');
    titleText.textContent = `Seat: ${seat['column'].toUpperCase()}${seat['row']}`;

    let classText = document.createElement('h3');
    classText.textContent = clas['type'];

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
    seatPopup.appendChild(classText);
    planeDiv.appendChild(seatPopup);

    let seatBoundingBox = seatSVG.getBoundingClientRect();
    let popupBoundingBox = seatPopup.getBoundingClientRect();
    seatPopup.style.left = ((seatBoundingBox.left + (seatBoundingBox.width / 2)) - (popupBoundingBox.width / 2)) + 'px';
    seatPopup.style.top = (window.pageYOffset + seatBoundingBox.bottom) + 'px';

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
function render(data) {
    let parser = new DOMParser();
    
    let legend = document.getElementById('legend');
    data.seats.forEach(clas => {
        let className = document.createElement('div');
        className.innerHTML = "&nbsp" + clas.type;
        
        let colorbox = document.createElement('div');
        colorbox.style.backgroundColor = parser.parseFromString(clas['visualisation'], "image/svg+xml").documentElement.getElementById('color_identifier').style.fill; 
        colorbox.style.height = "1.2em";
        colorbox.style.width = "1em";
    
        legend.appendChild(colorbox);
        legend.appendChild(className);
    });
    
    let planeDiv = document.getElementById('planeDiv');
    let planeSvg = parser.parseFromString(data.airplane.visualisation, "image/svg+xml").documentElement;
    planeSvg.setAttribute('class','planeSvg');
    
    data['seats'].forEach(clas => {
    
        clas['occurrences'].forEach(seat => {
            let seatForPlacement = parser.parseFromString(clas['visualisation'], "image/svg+xml").documentElement;
            seatForPlacement.setAttribute('x', seat['x']);
            seatForPlacement.setAttribute('y', seat['y']);
    
            /*if (parseInt(seatForPlacement.getAttribute("x")) + parseInt(seatForPlacement.getAttribute("width")) > parseInt(planeSvg.getAttribute("width"))) {
                planeSvg.setAttribute("width", (parseInt(seatForPlacement.getAttribute("x")) + parseInt(seatForPlacement.getAttribute("width"))));
            }
            if (parseInt(seatForPlacement.getAttribute("y")) + parseInt(seatForPlacement.getAttribute("height")) > parseInt(planeSvg.getAttribute("height"))) {
                planeSvg.setAttribute("height", (parseInt(seatForPlacement.getAttribute("y")) + parseInt(seatForPlacement.getAttribute("height"))));
            }*/
    
            seatForPlacement.setAttribute('class', `seat clickable`);
            seatForPlacement.addEventListener('click', () => seatClick(seat, seatForPlacement, clas));
     
            let seatText = tSvgText();
            seatText.setAttribute("x", "60%");
            seatText.setAttribute("y", "60%");
            seatText.setAttribute("text-anchor", "middle");
            seatText.setAttribute("dominant-baseline", "middle");
            seatText.setAttribute("font-size", "150");
            seatText.innerHTML = `${seat['column'].toUpperCase()}${seat['row']}`;
    
            seatForPlacement.appendChild(seatText);
            planeSvg.appendChild(seatForPlacement);
        });
    });
    
    
    
    planeDiv.appendChild(planeSvg);
}