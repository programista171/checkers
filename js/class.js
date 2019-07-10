class Checker {
	constructor(number, letter) {
		this.number = number;
		this.letter = letter;
		this.width = "";
		this.height = "";
this.draw();
	}

  draw() {
		// Rysowanie w canvas na podstawie this.letter i this.number
  }
}

class WhiteChecker extends Checker {
	constructor(number, letter) {
		super(number, letter); // Wywołuje konstruktor nadrzędny
    this.color = "white";
    this.image = new Image();
    this.image.src = "" // Uzupełnij
  }
}

class BlackChecker extends Checker {
  constructor(number, letter) {
    super(number, letter); // Wywołuje konstruktor nadrzędny
    this.image = new Image();
    this.image.src = "" // Uzupełnij
  }
}

class Game {
	constructor() {
		this.whoseMove = "white";
		this.whiteChecker = 12;
    this.blackChecker = 12;

  }
}

class Board {
	constructor() {
		this.canvas = document.querySelector(`#board`).getContext('2d');

	}//constructor

	clear() {

	}//clear

	create() {
		this.x = 0;
		this.y = 0;
		this.canvas.fillStyle = '#FFFDD0';
		for(this.i = 1; this.i <= 4; this.i++){
				for(this.j = 1; this.j <= 4; this.j++){
					this.canvas.fillRect(this.x,this.y,100,100);
					this.x+=200;
				}//for maly
			this.x = 0;
			this.y+=200;
		}//for duzy
	}//create

	refresh() {

	}//refresh
}
