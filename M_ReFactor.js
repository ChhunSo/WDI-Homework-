$(function() {
    var checkXElem = "<p>X</p>";
    var checkOElem = "<p>O</p>";

    function Player(sym) {
        this.mark = sym;
    };

    function newGame() {
        this.player1 = new Player('X');
        this.player2 = new Player('O');
        this.$boxes = $('.box');
        this.$reset = $('#reset');
        this.currentPlayer = this.player1;
        this.counter = 1;
    };
    newGame.prototype.nextPlayer = function() {
        if (this.counter % 2 === 0) {
            this.currentPlayer = this.player1;
        } else {
            this.currentPlayer = this.player2;
        }
        this.counter += 1;
    };
    newGame.prototype.init = function() {
        var _this = this;
        // console.log("Outside this is", this);
        // console.log("Outside _this is", _this);
        this.$boxes.click(function(evnt) {
            var clicked = this;
            if (clicked.innerHTML === checkXElem || clicked.innerHTML === checkOElem) {
                return;
            }
            if (_this.currentPlayer === _this.player1) {
                clicked.classList.add('markedX');
                clicked.innerHTML = checkXElem;
            } else if (_this.currentPlayer === _this.player2) {
                clicked.classList.add('markedO');
                clicked.innerHTML = checkOElem;
            } else {
                return;
            }
            _this.nextPlayer();
            _this.Winner();
        });
    }
    newGame.prototype.getWinner = function() {
        if (
            ((this.$boxes[0].innerHTML === checkXElem) && (this.$boxes[1].innerHTML === checkXElem) && (this.$boxes[2].innerHTML === checkXElem)) ||
            ((this.$boxes[0].innerHTML === checkXElem) && (this.$boxes[4].innerHTML === checkXElem) && (this.$boxes[8].innerHTML === checkXElem)) ||
            ((this.$boxes[0].innerHTML === checkXElem) && (this.$boxes[3].innerHTML === checkXElem) && (this.$boxes[6].innerHTML === checkXElem)) ||
            ((this.$boxes[1].innerHTML === checkXElem) && (this.$boxes[4].innerHTML === checkXElem) && (this.$boxes[7].innerHTML === checkXElem)) ||
            ((this.$boxes[3].innerHTML === checkXElem) && (this.$boxes[4].innerHTML === checkXElem) && (this.$boxes[5].innerHTML === checkXElem)) ||
            ((this.$boxes[6].innerHTML === checkXElem) && (this.$boxes[7].innerHTML === checkXElem) && (this.$boxes[8].innerHTML === checkXElem)) ||
            ((this.$boxes[2].innerHTML === checkXElem) && (this.$boxes[5].innerHTML === checkXElem) && (this.$boxes[8].innerHTML === checkXElem)) ||
            ((this.$boxes[2].innerHTML === checkXElem) && (this.$boxes[4].innerHTML === checkXElem) && (this.$boxes[6].innerHTML === checkXElem))
        ) {
            return "X";
        } else if (
            ((this.$boxes[0].innerHTML === checkOElem) && (this.$boxes[1].innerHTML === checkOElem) && (this.$boxes[2].innerHTML === checkOElem)) ||
            ((this.$boxes[0].innerHTML === checkOElem) && (this.$boxes[4].innerHTML === checkOElem) && (this.$boxes[8].innerHTML === checkOElem)) ||
            ((this.$boxes[0].innerHTML === checkOElem) && (this.$boxes[3].innerHTML === checkOElem) && (this.$boxes[6].innerHTML === checkOElem)) ||
            ((this.$boxes[1].innerHTML === checkOElem) && (this.$boxes[4].innerHTML === checkOElem) && (this.$boxes[7].innerHTML === checkOElem)) ||
            ((this.$boxes[3].innerHTML === checkOElem) && (this.$boxes[4].innerHTML === checkOElem) && (this.$boxes[5].innerHTML === checkOElem)) ||
            ((this.$boxes[6].innerHTML === checkOElem) && (this.$boxes[7].innerHTML === checkOElem) && (this.$boxes[8].innerHTML === checkOElem)) ||
            ((this.$boxes[2].innerHTML === checkOElem) && (this.$boxes[5].innerHTML === checkOElem) && (this.$boxes[8].innerHTML === checkOElem)) ||
            ((this.$boxes[2].innerHTML === checkOElem) && (this.$boxes[4].innerHTML === checkOElem) && (this.$boxes[6].innerHTML === checkOElem))
        ) {
            return "O";
        } else {
            return;
        }
    }
    newGame.prototype.Winner = function() {
        if (this.allBoxChecked() == true && this.getWinner() !== "X" && this.getWinner() !== "O") {
            alert('Game is a tie! Play again!');
        } else if ((this.allBoxChecked() == true && this.getWinner() === "X") || (this.allBoxChecked() == false && this.getWinner() === "X")) {
            alert("X won");
        } else if ((this.allBoxChecked() == true && this.getWinner() === "O") || (this.allBoxChecked() == false && this.getWinner() === "O")) {
            alert("O won");
        } else {
            return;
        }
    }
    newGame.prototype.allBoxChecked = function() {
        var checked;
        for (var i = 0; i < this.$boxes.length; i++) {
            if (this.$boxes[i].innerHTML === checkXElem || this.$boxes[i].innerHTML === checkOElem) {
                checked = true;
            } else {
                checked = false;
                break;
            }
        }
        return checked;
    }
    var board = new newGame();
    board.init();
});