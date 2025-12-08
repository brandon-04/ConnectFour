let mainDiv = document.querySelector("#mainDiv")
let purple = "rgb(110, 14, 73)", yellow = "rgb(250, 250, 152)";

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

            curCirc.addEventListener("click", () => {
                if(getBodyBackground() == yellow) {
                    document.body.style.backgroundColor = purple;
                }
                else {
                    document.body.style.backgroundColor = yellow;
                }
            });
            curCol.appendChild(curCirc);
        }
        mainDiv.appendChild(curCol);
    }
}

function getBodyBackground() {
    var getBody = document.getElementsByTagName("body")[0]
    var prop = window.getComputedStyle(getBody).getPropertyValue("background-color");

    return prop;
}