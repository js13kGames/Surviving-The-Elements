$.HeroDrawable = function(h){
    var hero;
    function init(){
        hero = h;
    }
    function draw(ctx){
        var image = hero.getImage();
		ctx.save();
		ctx.clearRect(0, 0, hero.cW, hero.cW);
		ctx.translate(hero.x, hero.y);
		ctx.rotate(hero.angle * Math.PI/180);
		ctx.drawImage(image, !hero.frame ? 0 : (hero.width * hero.frame), 
				0, 
				hero.width,
           		hero.height,
				-(hero.width/2), 
				-(hero.height/2),
				hero.width,
           		hero.height);
		ctx.restore(); 
    }
    init();
    return {
        draw: draw
    }
};