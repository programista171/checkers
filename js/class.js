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
			var x = 0;
			var y = 0;
			//kolor kwadratu kremowy
			this.canvas.fillStyle = '#FFFDD0';
			for(var i = 1; i <= 4; i++){
					for(var j = 1; j <= 4; j++){
							//rysujemy 16 kremowych kwadratów
							this.canvas.fillRect(x,y,100,100);
							x+=200;
						}//for maly
					x = 0;
					y+=200;
				}//for duzy
			//zjeżdżamy w dół i w prawo o 100 px
			x = 100;
			y = 100;
			for(var i = 1; i <= 4; i++){
					for(var j = 1; j <= 4; j++){
							//rysujemy 16 kolejnych kremowych kwadratów
							this.canvas.fillRect(x,y,100,100);
							x+=200;
						}//for maly
					x = 100;
					y+=200;
				}//for duzy
			//teraz mamy już 32 kremowe kwadraty

			//kolor kwadratu brązowy
			this.canvas.fillStyle = 'brown';
			x = 0;
			y = 100;
			for(var i = 1; i <= 4; i++){
					for(var j = 1; j <= 4; j++){
							//rysujemy 16 brązowych kwadratów
							this.canvas.fillRect(x,y,100,100);
							x+=200;
						}//for maly
					x = 0;
					y+=200;
				}//for duzy
			x = 100;
			y = 0;
			for(var i = 1; i <= 4; i++){
					for(var j = 1; j <= 4; j++){
							//rysujemy 16 kolejnych brązowych kwadratów
							this.canvas.fillRect(x,y,100,100);
							x+=200;
						}//for maly
					x = 100;
					y+=200;
				}//for duzy
		}//create

	refresh() {

	}//refresh
}
