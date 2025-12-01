// JavaScript Document
let turn = 0;
setUpGrid();

function setUpGrid() {
	const mainBox = document.querySelector("#mainBox");
	const choiceBox = document.querySelector("#chooseBox");
	

	
	for(let y = 0; y <= 7; y++) {//column creation
		
		let col = document.createElement("div");
		
		col.setAttribute("class","column");
		
		mainBox.appendChild(col);

		for(let i = 0; i <= 6; i++) {//circle creation
			
			let circ = document.createElement("div");
			
			circ.setAttribute("class","circle");
			circ.setAttribute("id", `c${i}-${y}`);
			
			col.appendChild(circ);
		}
	}
	
	for(let u = 0; u <=7; u++) {//choice circle creation
		
		let choice = document.createElement("div");
		
		choice.setAttribute("class", "choiceCircle");
		choice.setAttribute("id", `choice${u}`);
		
		choice.addEventListener("click",() => {
			addPiece(u);
		});
		
		choiceBox.appendChild(choice);
	}
	
}

function addPiece(choiceNum) {
	const player1 = "red", player2 = "yellow";


	for(let i = 6; i >= 0; i--) {
		let cur = document.querySelector(`#c${i}-${choiceNum}`);

		console.log(cur.style.backgroundColor);
		if(cur.style.backgroundColor == "aliceblue") {
			if(turn % 2 == 0) {
				cur.style.backgroundColor = player2;
			}
			else {
				cur.style.backgroundColor = player1;
			}
			
		}
	}
	turn++;
}
  
//function colCount(column) {
//		
//}