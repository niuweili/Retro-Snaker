function Snake(){
    this.body = [
        {row : 2, col : 8},
        {row : 2, col : 7},
        {row : 2, col : 6},
        {row : 2, col : 5},
        {row : 2, col : 4}
    ]
    this.dierction = "R";
    this.willDirection = "R";
}
Snake.prototype.render = function(){
    game.getColor(this.body[0].row, this.body[0].col, "pink");
    for (var i = 1; i < this.body.length; i++) {
        game.getColor(this.body[i].row, this.body[i].col, "gold");
    };
    if(this.body[0].row > game.rowAmount){
        this.body[0].row = 0;
    }else if(this.body[0].row < 0){
        this.body[0].row = game.rowAmount - 1;
    }else if(this.body[0].col < 0){
        this.body[0].col = game.colAmount - 1;
    }else if(this.body[0].col > game.colAmount - 1){
        this.body[0].col = 0;
    }
}
Snake.prototype.update = function(){
    this.direction = this.willDirection;
    switch(this.dierction){
        case "L":
            this.body.unshift({row : this.body[0].row , col : this.body[0].col - 1});
            break;
        case "R":
            this.body.unshift({row : this.body[0].row , col : this.body[0].col + 1});
            break;
    }
    
    this.body.pop();
}
Snake.prototype.changeDirection = function(str){
    this.willDirection = str;
}