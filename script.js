let mainDiv = document.querySelector("#mainDiv")
let purple = "rgb(110, 14, 73)", yellow = "rgb(250, 250, 152)";
let placedCircles = [];

setBoard();

function setBoard() {
    for(let y = 0; y < 6; y++) {
        let curCol = document.createElement("div");

        curCol.setAttribute("class", "column");
        curCol.setAttribute("id", `column${y}`);

        for(let x = 0; x < 7; x++) {
            let curCirc = document.createElement("div");
            let circCoord = `c${y}-${x}`;//column - row

            curCirc.setAttribute("class", "circle");
            curCirc.setAttribute("id", circCoord);

            curCol.appendChild(curCirc);
        }
        mainDiv.appendChild(curCol);
    }
    for(let y = 0; y < 6; y++) {
        for(let x = 0; x < 7; x++) {
            let circCoord = `c${y}-${x}`;
            let curCirc = document.querySelector(`#c${y}-${x}`);

            curCirc.addEventListener("click", (circCoord) => {

            let colInd = circCoord[3], rowInd = 5;
            while(true){
                let coord = `c${colInd}-${rowInd}`

                if(placedCircles.includes(coord)) {
                    rowInd--;
                }
                else {
                    let circ = document.querySelector(`#${coord}`);

                    placedCircles.push(coord);

                    document.body.style.backgroundColor = yellow;
                    circ.style.backgroundColor = getBodyBackground();
                    break;
                }
            }   
            if(getBodyBackground() == yellow) {
                document.body.style.backgroundColor = purple;
            }
            else {
                document.body.style.backgroundColor = yellow;
            }

            });
        }
    }
}





function getBodyBackground() {
    let getBody = document.getElementsByTagName("body")[0];
     let prop = window.getComputedStyle(getBody).getPropertyValue("background-color");

    return prop;
}
