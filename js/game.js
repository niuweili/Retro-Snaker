function Game(){
    this.rowAmount = 20;
    this.colAmount = 20;
    this.init();
    this.start();
    this.bindEvent();
    this.snake = new Snake();
}
Game.prototype.init = function(){
    this.$dom = $("<table></table>");
    var tr , td;
    for (var i = 0; i < this.rowAmount; i++) {
        tr = $("<tr></tr>");
        for (var j = 0; j < this.colAmount; j++) {
            td = $("<td></td>");
            tr.append(td);
        };
        this.$dom.append(tr)
    };
    $(".app").append(this.$dom);
}
Game.prototype.getColor = function(row,col,color){
    $("tr").eq(row).children('td').eq(col).css("background",color);
}
Game.prototype.clearColor = function(){
    for (var i = 0; i < this.rowAmount; i++) {
        for (var j = 0; j < this.colAmount; j++) {
            $("tr").eq(i).children('td').eq(j).css("background","");
        };
    };
}
Game.prototype.bindEvent = function(){
    var self = this;
    $(document).keydown(function(event) {
        if(event.keyCode == 37){
            
        }
    });
}
Game.prototype.start = function(){
    var self = this;
    var f = 0;
    this.timer = setInterval(function(){
        f++;
        self.clearColor();
        f % 40 == 0 && self.snake.update();
        self.snake.render();
    }, 20)
}