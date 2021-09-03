class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
this.max = max;
this.min = min;
    }

    guess () {

this.isWin = Math.round((this.max + this.min) / 2);

return this.isWin;
    }

    lower() {
 this.max = this.isWin;
    }

    greater() {
 this.min = this.isWin;
    }
}

module.exports = GuessingGame;


