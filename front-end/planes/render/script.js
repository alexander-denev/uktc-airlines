                    // Templates
tSvgText = () => document.createElementNS('http://www.w3.org/2000/svg', 'text');
tSvgGroup = () => document.createElementNS('http://www.w3.org/2000/svg', 'g');

                    // Fetch
fetch(`http://127.0.0.1:8080/mapData/${new URLSearchParams(window.location.search).get("id")}`)
//fetch(`http://127.0.0.1:8080/mapData/${9}`)

    .then(response => response.json())
    .then(data => {
        document.getElementsByTagName("dialog")[0].close();
        render(data);
        document.title = `UKTC Airlines ✈ ${data.airplane.name}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("legend").innerHTML = `Error: ${error}`;
    });

                    // On click
function seatClick(seat, seatSVG, clas) 
{
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

function getElementDelay(element) 
{
    let delay;
    let rawTransDur = window.getComputedStyle(element).getPropertyValue('transition-duration');
    if (rawTransDur.trim().split(/s|ms/)[1] === 'ms') {delay = parseInt(rawTransDur);} else {delay = parseFloat(rawTransDur) *1000;}
    return delay;
}

                    // Render
function render(data)
{
    let parser = new DOMParser();
    
    let legend = document.getElementById('legend');
    data.seats.forEach(clas => {
        let className = document.createElement('div');
        className.innerHTML = "&nbsp" + clas.type;
        
        let colorbox = document.createElement('div');
        colorbox.style.backgroundColor = `var(--${clas.type.replace(/\s+/g, '')})`;
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
            let groupForPlacement = tSvgGroup();
            
            seatForPlacement.setAttribute('x', seat['x']);
            seatForPlacement.setAttribute('y', seat['y']);
            
            groupForPlacement.setAttribute("style", `transform: rotate(${seat.rotation}deg); transform-origin: ${seat.x}px ${seat.y}px`);
            
            // groupForPlacement.addEventListener("DOMContentLoaded", function() {
            //     console.log("loaded");
            //     let bb = groupForPlacement.getBoundingClientRect();
            //     let centerX = seat.x + bb.width / 2;
            //     let centerY = seat.y + bb.height / 2;
            //     groupForPlacement.setAttribute("style", `transform-origin: ${centerX}px ${centerY}px`);
            // });
            
            seatForPlacement.setAttribute('class', `seat clickable`);
            seatForPlacement.addEventListener('click', () => seatClick(seat, seatForPlacement, clas));
            
            let seatText = tSvgText();
            seatText.setAttribute("x", "40%");
            seatText.setAttribute("y", "30%");
            if (clas.type === "Premium Economy Class") {seatText.setAttribute("x", "80%");seatText.setAttribute("y", "40%");}
            seatText.setAttribute("text-anchor", "middle");
            seatText.setAttribute("dominant-baseline", "middle");
            seatText.setAttribute("font-size", "200");
            seatText.innerHTML = `${seat['column'].toUpperCase()}${seat['row']}`;
            
            groupForPlacement.appendChild(seatForPlacement);
            planeSvg.appendChild(groupForPlacement);
            seatForPlacement.appendChild(seatText);
        });
    });
    
    planeDiv.appendChild(planeSvg);
    
}