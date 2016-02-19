(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/aa2.png", id:"aa2"},
		{src:"images/aa3.png", id:"aa3"},
		{src:"images/aa4.png", id:"aa4"},
		{src:"images/aa5.png", id:"aa5"},
		{src:"images/aa6.png", id:"aa6"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/Layer1.png", id:"Layer1"},
		{src:"images/Layer2.png", id:"Layer2"},
		{src:"images/Layer3.png", id:"Layer3"},
		{src:"images/wing.png", id:"wing"}
	]
};



// symbols:



(lib.aa2 = function() {
	this.initialize(img.aa2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.aa3 = function() {
	this.initialize(img.aa3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,17);


(lib.aa4 = function() {
	this.initialize(img.aa4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,85);


(lib.aa5 = function() {
	this.initialize(img.aa5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,21);


(lib.aa6 = function() {
	this.initialize(img.aa6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,44);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,382);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,178);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,79);


(lib.wing = function() {
	this.initialize(img.wing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,238);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa3();
	this.instance.setTransform(0.3,1.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.1,16,17);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa2();
	this.instance.setTransform(0.3,1.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.1,13,13);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa5();
	this.instance.setTransform(1,0.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0.2,15,21);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/AX0MAAAgvnMBj/AAAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AjEjmIGJDmIgHAEImCDjg");
	this.shape.setTransform(0,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AjEBuIGCjiIAHAEImJDlg");
	this.shape_1.setTransform(0,11.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.7,-23.5,39.4,47.1);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF66").ss(4.2,2,0,3).p("EgxqgXfMBjVAAAMAAAAu/MhjVAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-152.4,640.1,305);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkkByQgOgjgBg0IAAgJQAAgyAPgjQAVgyAsAAQARAAAOAHIAAAoQgPgJgMAAQgWAAgKAZQgLAZAAAvIAAAKQAABiArAAQANAAAPgIIAAAmQgOAJgUAAQgsAAgTgzgAI/CjIAAiuIg/CuIgjAAIAAkWIAnAAIAACoIA8ioIAmAAIAAEWgAGhCjIgLg/Ig1AAIgMA/IgmAAIA3kXIAqAAIA4EXgAFmBAIAqAAIgVhugAD0CjIAAhyIgkAAQgfAAgQgaQgGgKgEgNQgDgMAAgRIAAhWIAoAAIAABUQAAAdAKAIQAGAFAPAAIAZAAIAAh+IAnAAIAAEWgABYCjIgLg/Ig1AAIgLA/IgkAAIA1kXIAqAAIA4EXgAAeBAIApAAIgVhugAhJCjIgohzIgPAjIAABQIgnAAIAAkWIAnAAIAAB/IAzh/IAtAAIg0B2IA3CggAlpCjIgLg/Ig1AAIgLA/IgmAAIA3kXIAqAAIA4EXgAmjBAIApAAIgVhugAplCjIAAkWIApAAQAWAAAQAGQAQAGALAMQAXAZgBArIAAABQAAAVgEAPQgGARgKAMQgLAOgQAHQgQAGgVAAIgEAAIAABdgAo9AiIAFAAQAMAAAIgEQAJgFAFgIQAKgQAAgWIAAgBQAAg5grAAIgGAAgAIJiJQgKgKAAgQIASgBQAAAJAFAFQAFAEAIAAQAKAAAEgEQAFgFgBgJIASABQAAAQgKAKQgKAKgQAAQgPAAgLgKg");
	this.shape.setTransform(40,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AQTDpIAAABMgkJAAAIAAnTMAkJAAAIAAABIABgBIDjDpIjjDqgAgGhaQgPAkAAA0IAAAHQAAAzAOAjQASAzAsAAQAUAAAOgIIAAgnQgPAJgNAAQgsgBAAhiIAAgHQAAgyALgZQALgYAWAAQAMAAAPAJIAAgpQgOgHgRAAQgtAAgSAygANdCMIAmAAIAAkWIglAAIg9CoIAAioIgmAAIAAEWIAjAAIA/iugAKzBOIALA+IAoAAIg4kXIgqAAIg3EXIAmAAIALg+gAGyg0QAAARADANQADAOAHAIQAPAaAgAAIAjAAIAAByIAnAAIAAkWIgnAAIAACBIgYAAQgPgBgGgFQgKgKAAgcIAAhVIgoAAgAFrBOIALA+IAoAAIg4kXIgqAAIg4EXIAnAAIALg+gADTCMIAsAAIg3idIA0h5IgtAAIgzCCIAAiCIgnAAIAAEWIAnAAIAAhPIAOgjgAhWBOIALA+IAoAAIg4kXIgqAAIg4EXIAnAAIALg+gAlHCMIAoAAIAAhdIAEAAQAVABAQgHQAQgHALgOQAKgMAFgPQAFgRAAgUIAAgBQAAgsgWgZQgLgMgQgGQgRgGgVAAIgpAAgAMdi6QAAAQAKAKQAKAKAQAAQAQAAAKgKQAKgKAAgQIgSgBQAAAKgEAEQgFAEgJAAQgJAAgEgEQgFgEAAgKgAKEAqIAVhvIAUBvgAE8AqIAUhvIAVBvgAiFAqIAUhvIAVBvgAkfALIAAhxIAGAAQArAAAAA6IAAAAQAAAZgKAPQgGAHgIAEQgJAFgLgBg");
	this.shape_1.setTransform(11.4,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.7,-23.5,254.4,47);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am0CnIAAg3IiLAAIAAA3IgmAAIAAhaIARAAQAjgNAChGIAEigIB7AAIAADzIAhAAIAABagAoIgPQgDAsgDAPQgCAQgKAPIBDAAIAAjNIguAAgAIABwIAQhIIg+jOIApAAIAkCKIAeiKIApAAIg+EWgAGjBwIgohxIgPAhIAABQIgnAAIAAkWIAnAAIAACBIAziBIAtAAIg0B4IA3CegAA/BwIAAkWIAnAAIAADxIA3AAIAAjxIAnAAIAADxIA5AAIAAjxIAmAAIAAEWgAg3BwIAQhIIg+jOIAqAAIAkCKIAbiKIApAAIg8EWgAjvBwIAAkWIAnAAQATAAAPAEQAPAEAMAJQAaATAAAjIAAACQAAAXgLAQQgKAQgWAJQAXAIAMARQAMANAAAYIAAADQAAAmgcAUQgYASgnAAgAjIBMIAEAAQAVgBANgKQAGgGAEgIQADgHAAgLIAAgCQAAgVgNgKQgGgFgIgDQgJgCgKAAIgFAAgAjIgtIAEAAQAKAAAJgDQAIgCAGgGQAFgGADgHQAEgJAAgKIAAgBQAAgVgLgKQgLgKgVAAIgGAAgAlzBwIAAkWIBoAAIAAAlIhAAAIAABTIA5AAIAAAlIg5AAIAABUIBBAAIAAAlg");
	this.shape.setTransform(39.7,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AQSDpIAAABMgkIAAAIAAnTMAkIAAAIAAACIACgCIDkDpIjkDqgAiaB9IAAA3IAlAAIAAhaIghAAIAAjzIh7AAIgECeQgCBIgjANIgRAAIAABaIAmAAIAAg3gAMqA1IgQBIIAoAAIA+kWIgpAAIgeCKIgkiKIgpAAgAK9B9IAsAAIg3ieIA0h4IgtAAIgzCBIAAiBIgnAAIAAEWIAnAAIAAhQIAPgjgAFZB9IDkAAIAAkWIgmAAIAADxIg5AAIAAjxIgnAAIAADxIg3AAIAAjxIgnAAgADxA1IgQBIIAoAAIA+kWIgpAAIgdCKIgkiKIgqAAgAApB9IAnAAQAnAAAYgSQAcgUAAgmIAAgDQAAgYgMgPQgMgPgXgIQAWgJAKgQQALgQAAgXIAAgCQAAgjgagTQgMgJgPgEQgPgEgTAAIgnAAgAhZB9IBnAAIAAglIg/AAIAAhWIA3AAIAAgjIg3AAIAAhTIA+AAIAAglIhmAAgABQBZIAAhYIAFAAQAKAAAJACQAIADAGAGQANALAAAWIAAABQAAALgDAHQgEAIgGAGQgNAKgVABgAkABYQAKgPACgQQADgPADgsIADhzIAuAAIAADNgABQggIAAhVIAGAAQAVAAALAKQALAKAAAVIAAABQAAAKgEAJQgDAHgFAGQgGAGgIACQgJADgKAAg");
	this.shape_1.setTransform(11.5,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.7,-23.5,254.4,47);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,34.7).s().p("AgYBsQiKgghZg3QhZg0AKguQALgsBogKQBpgJCHAhQCKAgBYA3QBaA0gKAuQgLAshoAKQgYACgZAAQhXAAhogag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.2,-13.4,66.4,26.8);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AEud6IA7lhICbAAQgnCxgoCxgAGwRyMAFrghuIgNAAQg0AAgkgWQglgWAAgeQAAgfAlgWQAkgVA0AAQAUAAARADIAFgZQgggNgXguQghg/AAhaQAAhaAhhAQAhg/AuAAQAYAAAUAQIA0kwIDCAGIgEAhIAFgEQAigZAxAAQAwAAAiAZQAiAYAAAjQAAAjgiAZQgiAYgwAAQgxAAgigYQgMgJgIgJQgVCbgYCbQAdAFAVAaQAbAhAAAuQAAAugbAgQgbAhgmAAQgKAAgIgCIgFAbQAZACATAgQATAgAYBBQAYBAgQAbQgSAbAMAFQg1gXAiAZQAhAZgFBNQgEBMgwAjQgwAkgdAAQgaAAgSgiQieOzjFOngAuM4fQgRgLgOgaQgWgrAAg9QAAg8AWgrQAWgrAeAAQAZAAATAcIAUhRIBpAQQAhgXAtAAQAuAAAhAYQAhAZAAAjQAAAjghAYQghAZguAAQgtAAgfgWIg5DSQAJgDAKAAQAiAAAXAmQAYAmAAA2QAAA2gYAmQgXAmgiAAQgiAAgYgmQgHgNgGgOImKWuIh2Aeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-133.8,-191.6,267.7,383.2);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-320,-152.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.129)").s().p("Eg41AFiMBv1gRuIB2PoMhw5AIxg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-363.8,-78.1,727.8,156.3);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wing();
	this.instance.setTransform(-82.5,-119);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.5,-119,165,238);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1AnQgWgQAAgXQAAgWAWgQQAXgRAeAAQAfAAAXARQAWAQAAAWQAAAXgWAQQgXARgfAAQgeAAgXgRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.6,-5.6,15.3,11.3);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer2();
	this.instance.setTransform(-99.5,-89);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.5,-89,199,178);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aa4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Слой 2
	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(8.2,8.9,1,1,0,0,0,7.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:8.6,rotation:-15,x:6.5,y:10.6},14).to({regY:8.7,rotation:0,x:8.2,y:8.9},15).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ54();
	this.instance_2.setTransform(18,5.7,1,1,0,0,0,6.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:6.6,scaleY:1,skewX:-13.5,skewY:-8,x:16.5,y:6.3},14).to({regX:6.5,scaleY:1,skewX:0,skewY:0,x:18,y:5.7},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,85);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.setTransform(9,25.3,1,1,0,0,0,7.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:7.7,rotation:15,x:9.3,y:24.7},14).to({regX:7.6,rotation:0,x:9,y:25.3},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.aa6();
	this.instance_1.setTransform(0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.1,24,44);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ35();
	this.instance.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:11.1},5,cjs.Ease.get(-1)).to({x:20},4,cjs.Ease.get(1)).to({x:10},5,cjs.Ease.get(-1)).to({x:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-23.2,39.4,47.1);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-322,-154,644,309);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-322.6,-155.1,648,314);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.6,-155.1,648,314);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 28
	this.instance = new lib.Символ28();
	this.instance.setTransform(-183.5,-27.3,1,1,-4,0,0,-114.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:11.4,regY:0,rotation:-5.7,x:-58.2,y:-40.2},0).wait(1).to({rotation:-6.8,x:-58.5,y:-42.7},0).wait(1).to({rotation:-7.7,x:-58.8,y:-44.6},0).wait(1).to({rotation:-8.4,x:-58.9,y:-46.1},0).wait(1).to({rotation:-8.9,x:-59.2,y:-47.2},0).wait(1).to({rotation:-9.3,x:-59.3,y:-48.1},0).wait(1).to({rotation:-9.6,x:-59.4,y:-48.8},0).wait(1).to({rotation:-9.9,x:-59.5,y:-49.4},0).wait(1).to({rotation:-10.2,x:-59.6,y:-49.9},0).wait(1).to({rotation:-10.3,x:-59.7,y:-50.4},0).wait(1).to({rotation:-10.5,x:-59.8,y:-50.7},0).wait(1).to({rotation:-10.6,y:-51},0).wait(1).to({regX:-114.5,regY:0.5,rotation:-10.7,x:-183.5,y:-27.3},0).wait(1).to({regX:11.4,regY:0,rotation:-10.4,x:-59.7,y:-50.4},0).wait(1).to({rotation:-9.6,x:-59.4,y:-48.7},0).wait(1).to({rotation:-7.9,x:-58.8,y:-45.2},0).wait(1).to({rotation:-5.7,x:-58.2,y:-40.4},0).wait(1).to({rotation:-3,x:-57.7,y:-34.3},0).wait(1).to({regX:-114.5,regY:0.5,rotation:2.2,x:-183.5,y:-27.3},0).to({rotation:0},3).wait(17));

	// Символ 27
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(-184,21.2,1,1,-2.2,0,0,-115,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:11.5,rotation:-1.5,x:-57.5,y:17.9},0).wait(1).to({rotation:-0.7,y:19.5},0).wait(1).to({regX:-115,rotation:0,x:-184,y:21.2},0).wait(1).to({regX:11.5,x:-57.5},0).wait(15).to({regX:-115,x:-184},0).wait(1).to({regX:11.5,rotation:3.6,x:-57.7,y:29.2},0).wait(1).to({rotation:6.1,x:-58.1,y:34.5},0).wait(1).to({rotation:7.7,x:-58.6,y:38.1},0).wait(1).to({rotation:8.8,x:-59,y:40.5},0).wait(1).to({rotation:9.6,x:-59.2,y:42.3},0).wait(1).to({rotation:10.2,x:-59.5,y:43.6},0).wait(1).to({rotation:10.7,x:-59.7,y:44.7},0).wait(1).to({rotation:11.1,x:-59.8,y:45.4},0).wait(1).to({rotation:11.4,x:-60,y:46.1},0).wait(1).to({rotation:11.6,x:-60.1,y:46.6},0).wait(1).to({rotation:11.8,y:47},0).wait(1).to({regX:-115,rotation:12,x:-184,y:21.1},0).wait(1).to({regX:11.5,rotation:11.7,x:-60.1,y:46.7},0).wait(1).to({rotation:11.1,x:-59.8,y:45.5},0).wait(1).to({rotation:10.1,x:-59.4,y:43.3},0).wait(1).to({rotation:8.5,x:-58.9,y:39.8},0).wait(1).to({rotation:6.7,x:-58.3,y:35.9},0).wait(1).to({rotation:4.3,x:-57.8,y:30.6},0).wait(1).to({regX:-115,rotation:0,x:-184,y:21.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.4,-69,257,113.8);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.alpha = 0.422;
	this.instance.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance.cache(-136,-194,272,387);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.8,-198.6,284,400);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,scaleY:1.01},9,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02},10,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(36, 36, 1)];
	this.instance.cache(-366,-80,732,160);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-381.8,-96.1,766,196);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(0,0,1.234,1.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.89,x:-28.3},2,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:0.55,x:-56.6,y:0.1},2,cjs.Ease.get(1)).to({scaleX:0.82,x:-33.9},2,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1.23,x:0,y:0},2,cjs.Ease.get(1)).wait(1).to({scaleX:0.89,x:-28.3},2,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:0.55,x:-56.6,y:0.1},2,cjs.Ease.get(1)).to({scaleX:0.82,x:-33.9},2,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1.23,x:0,y:0},2,cjs.Ease.get(1)).wait(1).to({scaleX:0.89,x:-28.3},2,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:0.55,x:-56.6,y:0.1},2,cjs.Ease.get(1)).to({scaleX:0.82,x:-33.9},2,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1.23,x:0,y:0},25,cjs.Ease.get(1)).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.8,-146.8,203.6,293.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.8,y:4.9},3).to({x:0,y:0},3).wait(1).to({y:3.3},3).to({y:0},3).to({_off:true},1).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-5.6,15.3,11.3);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AitBTQgRgBgEgJQgEgKAMgNQANgMAUgIQAWgJARAAQARACAEAKQADAJgMANQgMAMgVAJQgUAHgQAAIgCAAgABegIQgVgBgEgLQgFgMAPgQQAPgOAagKQAbgLAVABQAWABAEAMQAFAMgQAPQgPAPgaAKQgYAJgUAAIgEAAg");
	mask.setTransform(-4.5,-6.6);

	// Слой 3
	this.instance = new lib.Символ8();
	this.instance.setTransform(5.7,-17.8,1,1,-23.2);

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(-22.3,-7.3,1,1,-23.2);

	this.instance.mask = this.instance_1.mask = mask;

	// Слой 1
	this.instance_2 = new lib.Layer3();
	this.instance_2.setTransform(-27.5,-39.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-39.5,55,79);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(3,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.6,y:-6.3},9,cjs.Ease.get(-1)).to({x:0,y:0},10,cjs.Ease.get(1)).to({x:1.5,y:-6},10,cjs.Ease.get(-1)).to({x:3,y:-12},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-101,199,178);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(45.2,42.2,1,1,0,0,0,25.8,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой 2
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(12.1,40.4,1,1,0,0,0,11.9,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:12,regY:22.1,scaleY:1,skewX:1.9,skewY:5,x:12.7,y:38.9},29).to({regX:11.9,regY:22,scaleY:1,skewX:0,skewY:0,x:12.1,y:40.4},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0,70.6,85);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.setTransform(-2.2,9.9,1,1,0,0,0,38,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:8.2},0).wait(1).to({y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({y:8.6},0).wait(1).to({y:8.8},0).wait(1).to({y:9},0).wait(1).to({y:9.3},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:11.3},0).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:9.9},0).wait(1).to({y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:12.9},0).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:11.2},0).wait(1).to({y:11.1},0).wait(2).to({y:11},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.5},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:11.4},0).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:9.4},0).wait(1).to({y:9.2},0).wait(1).to({y:8.9},0).wait(1).to({y:8.7},0).wait(1).to({y:8.6},0).wait(1).to({y:8.4},0).wait(1).to({y:8.3},0).wait(2).to({y:8.2},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:9.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-34.2,70.7,85);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.setTransform(59.5,9.6,1,1,-11.2,0,0,38,44.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.2,-65.9,82.3,93.5);


(lib.Символ12_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.alpha = 0.5;
	this.instance_1.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance_1.cache(-35,-15,70,31);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.2,-19.4,82,42);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ12_1();
	this.instance.setTransform(-7.2,7.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(1).to({x:1.8,y:-23.6},0).wait(1).to({x:10.3,y:-52.9},0).wait(1).to({x:18.3,y:-80.3},0).wait(1).to({x:25.6,y:-105.6},0).wait(1).to({x:32.4,y:-128.7},0).wait(1).to({x:38.4,y:-149.6},0).wait(1).to({x:43.9,y:-168.4},0).wait(1).to({x:48.8,y:-185.2},0).wait(1).to({x:53.2,y:-200.2},0).wait(1).to({x:57.1,y:-213.6},0).wait(1).to({x:60.5,y:-225.5},0).wait(1).to({x:63.6,y:-236.1},0).wait(1).to({x:66.4,y:-245.4},0).wait(1).to({x:68.8,y:-253.8},0).wait(1).to({x:71,y:-261.2},0).wait(1).to({x:72.9,y:-267.9},0).wait(1).to({x:74.6,y:-273.9},0).wait(1).to({x:76.2,y:-279.3},0).wait(1).to({x:77.6,y:-284.1},0).wait(1).to({x:78.9,y:-288.5},0).wait(1).to({x:80,y:-292.4},0).wait(1).to({x:81.1,y:-296},0).wait(1).to({x:82,y:-299.2},0).wait(1).to({x:82.9,y:-302.2},0).wait(1).to({x:83.7,y:-305},0).wait(1).to({x:84.4,y:-307.5},0).wait(1).to({x:85.1,y:-309.9},0).wait(1).to({x:85.8,y:-312.1},0).wait(1).to({x:86.4,y:-314.2},0).wait(1).to({x:87,y:-316.3},0).wait(1).to({x:87.5,y:-318.2},0).wait(1).to({x:88.1,y:-320.2},0).wait(1).to({x:88.7,y:-322.1},0).wait(1).to({x:89.2,y:-324},0).wait(1).to({x:89.8,y:-325.9},0).wait(1).to({x:90.3,y:-327.9},0).wait(1).to({x:90.9,y:-329.9},0).wait(1).to({x:91.5,y:-331.9},0).wait(1).to({x:92.2,y:-334},0).to({_off:true},1).wait(38));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ12_1();
	this.instance_1.setTransform(-7.2,7.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(1).to({x:1.8,y:-23.6},0).wait(1).to({x:10.3,y:-52.9},0).wait(1).to({x:18.3,y:-80.3},0).wait(1).to({x:25.6,y:-105.6},0).wait(1).to({x:32.4,y:-128.7},0).wait(1).to({x:38.4,y:-149.6},0).wait(1).to({x:43.9,y:-168.4},0).wait(1).to({x:48.8,y:-185.2},0).wait(1).to({x:53.2,y:-200.2},0).wait(1).to({x:57.1,y:-213.6},0).wait(1).to({x:60.5,y:-225.5},0).wait(1).to({x:63.6,y:-236.1},0).wait(1).to({x:66.4,y:-245.4},0).wait(1).to({x:68.8,y:-253.8},0).wait(1).to({x:71,y:-261.2},0).wait(1).to({x:72.9,y:-267.9},0).wait(1).to({x:74.6,y:-273.9},0).wait(1).to({x:76.2,y:-279.3},0).wait(1).to({x:77.6,y:-284.1},0).wait(1).to({x:78.9,y:-288.5},0).wait(1).to({x:80,y:-292.4},0).wait(1).to({x:81.1,y:-296},0).wait(1).to({x:82,y:-299.2},0).wait(1).to({x:82.9,y:-302.2},0).wait(1).to({x:83.7,y:-305},0).wait(1).to({x:84.4,y:-307.5},0).wait(1).to({x:85.1,y:-309.9},0).wait(1).to({x:85.8,y:-312.1},0).wait(1).to({x:86.4,y:-314.2},0).wait(1).to({x:87,y:-316.3},0).wait(1).to({x:87.5,y:-318.2},0).wait(1).to({x:88.1,y:-320.2},0).wait(1).to({x:88.7,y:-322.1},0).wait(1).to({x:89.2,y:-324},0).wait(1).to({x:89.8,y:-325.9},0).wait(1).to({x:90.3,y:-327.9},0).wait(1).to({x:90.9,y:-329.9},0).wait(1).to({x:91.5,y:-331.9},0).wait(1).to({x:92.2,y:-334},0).to({_off:true},1).wait(43));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ12_1();
	this.instance_2.setTransform(-7.2,7.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({x:1.8,y:-23.6},0).wait(1).to({x:10.3,y:-52.9},0).wait(1).to({x:18.3,y:-80.3},0).wait(1).to({x:25.6,y:-105.6},0).wait(1).to({x:32.4,y:-128.7},0).wait(1).to({x:38.4,y:-149.6},0).wait(1).to({x:43.9,y:-168.4},0).wait(1).to({x:48.8,y:-185.2},0).wait(1).to({x:53.2,y:-200.2},0).wait(1).to({x:57.1,y:-213.6},0).wait(1).to({x:60.5,y:-225.5},0).wait(1).to({x:63.6,y:-236.1},0).wait(1).to({x:66.4,y:-245.4},0).wait(1).to({x:68.8,y:-253.8},0).wait(1).to({x:71,y:-261.2},0).wait(1).to({x:72.9,y:-267.9},0).wait(1).to({x:74.6,y:-273.9},0).wait(1).to({x:76.2,y:-279.3},0).wait(1).to({x:77.6,y:-284.1},0).wait(1).to({x:78.9,y:-288.5},0).wait(1).to({x:80,y:-292.4},0).wait(1).to({x:81.1,y:-296},0).wait(1).to({x:82,y:-299.2},0).wait(1).to({x:82.9,y:-302.2},0).wait(1).to({x:83.7,y:-305},0).wait(1).to({x:84.4,y:-307.5},0).wait(1).to({x:85.1,y:-309.9},0).wait(1).to({x:85.8,y:-312.1},0).wait(1).to({x:86.4,y:-314.2},0).wait(1).to({x:87,y:-316.3},0).wait(1).to({x:87.5,y:-318.2},0).wait(1).to({x:88.1,y:-320.2},0).wait(1).to({x:88.7,y:-322.1},0).wait(1).to({x:89.2,y:-324},0).wait(1).to({x:89.8,y:-325.9},0).wait(1).to({x:90.3,y:-327.9},0).wait(1).to({x:90.9,y:-329.9},0).wait(1).to({x:91.5,y:-331.9},0).wait(1).to({x:92.2,y:-334},0).to({_off:true},1).wait(47));

	// Слой 1
	this.instance_3 = new lib.Символ12_1();
	this.instance_3.setTransform(-7.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:1.8,y:-23.6},0).wait(1).to({x:10.3,y:-52.9},0).wait(1).to({x:18.3,y:-80.3},0).wait(1).to({x:25.6,y:-105.6},0).wait(1).to({x:32.4,y:-128.7},0).wait(1).to({x:38.4,y:-149.6},0).wait(1).to({x:43.9,y:-168.4},0).wait(1).to({x:48.8,y:-185.2},0).wait(1).to({x:53.2,y:-200.2},0).wait(1).to({x:57.1,y:-213.6},0).wait(1).to({x:60.5,y:-225.5},0).wait(1).to({x:63.6,y:-236.1},0).wait(1).to({x:66.4,y:-245.4},0).wait(1).to({x:68.8,y:-253.8},0).wait(1).to({x:71,y:-261.2},0).wait(1).to({x:72.9,y:-267.9},0).wait(1).to({x:74.6,y:-273.9},0).wait(1).to({x:76.2,y:-279.3},0).wait(1).to({x:77.6,y:-284.1},0).wait(1).to({x:78.9,y:-288.5},0).wait(1).to({x:80,y:-292.4},0).wait(1).to({x:81.1,y:-296},0).wait(1).to({x:82,y:-299.2},0).wait(1).to({x:82.9,y:-302.2},0).wait(1).to({x:83.7,y:-305},0).wait(1).to({x:84.4,y:-307.5},0).wait(1).to({x:85.1,y:-309.9},0).wait(1).to({x:85.8,y:-312.1},0).wait(1).to({x:86.4,y:-314.2},0).wait(1).to({x:87,y:-316.3},0).wait(1).to({x:87.5,y:-318.2},0).wait(1).to({x:88.1,y:-320.2},0).wait(1).to({x:88.7,y:-322.1},0).wait(1).to({x:89.2,y:-324},0).wait(1).to({x:89.8,y:-325.9},0).wait(1).to({x:90.3,y:-327.9},0).wait(1).to({x:90.9,y:-329.9},0).wait(1).to({x:91.5,y:-331.9},0).wait(1).to({x:92.2,y:-334},0).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.4,-12.2,82,42);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(-11.1,17.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(103.7,15.5,1.271,1.271);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-59.4,regY:-0.7,x:25.5,y:14.6},0).wait(1).to({x:22},0).wait(1).to({x:17.4},0).wait(1).to({x:11.4},0).wait(1).to({x:3.4},0).wait(1).to({x:-7.2},0).wait(1).to({x:-21},0).wait(1).to({x:-38.4},0).wait(1).to({x:-58.7},0).wait(1).to({x:-81.4},0).wait(1).to({x:-109.2},0).wait(1).to({x:-145.5},0).wait(1).to({x:-193.2},0).wait(1).to({regX:0,regY:0,x:-176.3,y:15.5},0).wait(2).to({regX:-59.4,regY:-0.7,x:-158.9,y:14.6},0).wait(1).to({x:-112.7},0).wait(1).to({x:-81.8},0).wait(1).to({x:-58.2},0).wait(1).to({x:-38.1},0).wait(1).to({x:-20.3},0).wait(1).to({x:-6.2},0).wait(1).to({x:4},0).wait(1).to({x:11.2},0).wait(1).to({x:16.5},0).wait(1).to({x:20.4},0).wait(1).to({x:23.5},0).wait(1).to({x:26},0).wait(1).to({regX:0,regY:0,x:103.7,y:15.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.3,-72.2,326.6,144.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},12).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.8,-198.6,284,400);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(-107,7.2,1,1,0,0,180);

	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(107.1,-7.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-208.8,-154,417.7,308);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ12();
	this.instance.setTransform(-340.1,51.8,1,1,0,0,0,-340.1,51.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:0.4,x:0.3,y:2.4},0).wait(1).to({rotation:0.8,x:0.7,y:4.9},0).wait(1).to({rotation:1.3,x:1,y:7.5},0).wait(1).to({rotation:1.7,x:1.4,y:10.3},0).wait(1).to({rotation:2.2,x:1.7,y:13.2},0).wait(1).to({rotation:2.7,x:2,y:16.2},0).wait(1).to({rotation:3.3,x:2.3,y:19.5},0).wait(1).to({rotation:3.9,x:2.6,y:23},0).wait(1).to({rotation:4.5,x:2.9,y:26.8},0).wait(1).to({rotation:5.2,x:3.1,y:30.9},0).wait(1).to({rotation:5.9,x:3.4,y:35.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.8,x:3.6,y:40.3},0).wait(1).to({rotation:7.7,x:3.7,y:45.8},0).wait(1).to({rotation:8.7,y:52},0).wait(1).to({rotation:9.8,x:3.6,y:58.9},0).wait(1).to({rotation:11.1,x:3.3,y:66.6},0).wait(1).to({rotation:12.6,x:2.8,y:75.2},0).wait(1).to({rotation:14.2,x:2,y:84.8},0).wait(1).to({rotation:15.9,x:0.8,y:94.8},0).wait(1).to({rotation:17.6,x:-0.7,y:105},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.4,x:-2.5,y:115.5},0).wait(1).to({rotation:21.3,x:-4.9,y:126.9},0).wait(1).to({rotation:23.5,x:-8.2,y:139.8},0).wait(1).to({rotation:26.2,x:-12.8,y:155.4},0).wait(1).to({rotation:29.7,x:-19.8,y:175.1},0).wait(1).to({regX:-340.1,regY:51.8,scaleX:1,scaleY:1,rotation:34.3,x:-340,y:51.8},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:40.7,x:-49.1,y:233.8},0).wait(1).to({rotation:46.8,x:-70.2,y:264},0).wait(1).to({rotation:52.5,x:-92.5,y:289.7},0).wait(1).to({rotation:57.5,x:-114,y:310.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:61.7,x:-133.6,y:326.4},0).wait(1).to({rotation:65.2,x:-150.8,y:338.5},0).wait(1).to({rotation:68.2,x:-165.8,y:347.9},0).wait(1).to({rotation:70.7,x:-178.9,y:355.3},0).wait(1).to({rotation:72.9,x:-190.7,y:361.4},0).wait(1).to({rotation:74.9,x:-201.6,y:366.4},0).wait(1).to({rotation:76.7,x:-211.8,y:370.7},0).wait(1).to({rotation:78.5,x:-221.3,y:374.4},0).wait(1).to({rotation:80,x:-230.2,y:377.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:81.4,x:-238.3,y:380.2},0).wait(1).to({rotation:82.7,x:-245.8,y:382.5},0).wait(1).to({rotation:83.9,x:-252.5,y:384.4},0).wait(1).to({rotation:85,x:-258.7,y:385.9},0).wait(1).to({rotation:85.9,x:-264.3,y:387.3},0).wait(1).to({rotation:86.8,x:-269.4,y:388.4},0).wait(1).to({rotation:87.6,x:-273.9,y:389.3},0).wait(1).to({rotation:88.3,x:-278.1,y:390.1},0).wait(1).to({rotation:88.9,x:-281.8,y:390.8},0).wait(1).to({rotation:89.5,x:-285.1,y:391.4},0).wait(1).to({rotation:90,x:-288.1,y:391.8},0).wait(1).to({rotation:90.4,x:-290.8,y:392.3},0).wait(1).to({rotation:90.8,x:-293.3,y:392.6},0).wait(1).to({rotation:91.2,x:-295.5,y:392.9},0).wait(1).to({regX:-340.2,regY:51.9,rotation:91.5,x:-340.2,y:51.7},0).to({alpha:0},8).wait(48));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(-340.1,51.8,1,1,0,0,0,-340.1,51.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:0.4,x:0.3,y:2.4},0).wait(1).to({rotation:0.8,x:0.7,y:4.9},0).wait(1).to({rotation:1.3,x:1,y:7.5},0).wait(1).to({rotation:1.7,x:1.4,y:10.3},0).wait(1).to({rotation:2.2,x:1.7,y:13.2},0).wait(1).to({rotation:2.7,x:2,y:16.2},0).wait(1).to({rotation:3.3,x:2.3,y:19.5},0).wait(1).to({rotation:3.9,x:2.6,y:23},0).wait(1).to({rotation:4.5,x:2.9,y:26.8},0).wait(1).to({rotation:5.2,x:3.1,y:30.9},0).wait(1).to({rotation:5.9,x:3.4,y:35.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.8,x:3.6,y:40.3},0).wait(1).to({rotation:7.7,x:3.7,y:45.8},0).wait(1).to({rotation:8.7,y:52},0).wait(1).to({rotation:9.8,x:3.6,y:58.9},0).wait(1).to({rotation:11.1,x:3.3,y:66.6},0).wait(1).to({rotation:12.6,x:2.8,y:75.2},0).wait(1).to({rotation:14.2,x:2,y:84.8},0).wait(1).to({rotation:15.9,x:0.8,y:94.8},0).wait(1).to({rotation:17.6,x:-0.7,y:105},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.4,x:-2.5,y:115.5},0).wait(1).to({rotation:21.3,x:-4.9,y:126.9},0).wait(1).to({rotation:23.5,x:-8.2,y:139.8},0).wait(1).to({rotation:26.2,x:-12.8,y:155.4},0).wait(1).to({rotation:29.7,x:-19.8,y:175.1},0).wait(1).to({regX:-340.1,regY:51.8,scaleX:1,scaleY:1,rotation:34.3,x:-340,y:51.8},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:40.7,x:-49.1,y:233.8},0).wait(1).to({rotation:46.8,x:-70.2,y:264},0).wait(1).to({rotation:52.5,x:-92.5,y:289.7},0).wait(1).to({rotation:57.5,x:-114,y:310.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:61.7,x:-133.6,y:326.4},0).wait(1).to({rotation:65.2,x:-150.8,y:338.5},0).wait(1).to({rotation:68.2,x:-165.8,y:347.9},0).wait(1).to({rotation:70.7,x:-178.9,y:355.3},0).wait(1).to({rotation:72.9,x:-190.7,y:361.4},0).wait(1).to({rotation:74.9,x:-201.6,y:366.4},0).wait(1).to({rotation:76.7,x:-211.8,y:370.7},0).wait(1).to({rotation:78.5,x:-221.3,y:374.4},0).wait(1).to({rotation:80,x:-230.2,y:377.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:81.4,x:-238.3,y:380.2},0).wait(1).to({rotation:82.7,x:-245.8,y:382.5},0).wait(1).to({rotation:83.9,x:-252.5,y:384.4},0).wait(1).to({rotation:85,x:-258.7,y:385.9},0).wait(1).to({rotation:85.9,x:-264.3,y:387.3},0).wait(1).to({rotation:86.8,x:-269.4,y:388.4},0).wait(1).to({rotation:87.6,x:-273.9,y:389.3},0).wait(1).to({rotation:88.3,x:-278.1,y:390.1},0).wait(1).to({rotation:88.9,x:-281.8,y:390.8},0).wait(1).to({rotation:89.5,x:-285.1,y:391.4},0).wait(1).to({rotation:90,x:-288.1,y:391.8},0).wait(1).to({rotation:90.4,x:-290.8,y:392.3},0).wait(1).to({rotation:90.8,x:-293.3,y:392.6},0).wait(1).to({rotation:91.2,x:-295.5,y:392.9},0).wait(1).to({regX:-340.2,regY:51.9,rotation:91.5,x:-340.2,y:51.7},0).to({alpha:0},8).to({_off:true},48).wait(11));

	// Слой 1
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(-340.1,51.8,1,1,0,0,0,-340.1,51.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,rotation:0.4,x:0.3,y:2.4},0).wait(1).to({rotation:0.8,x:0.7,y:4.9},0).wait(1).to({rotation:1.3,x:1,y:7.5},0).wait(1).to({rotation:1.7,x:1.4,y:10.3},0).wait(1).to({rotation:2.2,x:1.7,y:13.1},0).wait(1).to({rotation:2.7,x:2,y:16.2},0).wait(1).to({rotation:3.3,x:2.3,y:19.5},0).wait(1).to({rotation:3.9,x:2.6,y:23},0).wait(1).to({rotation:4.5,x:2.9,y:26.8},0).wait(1).to({rotation:5.2,x:3.1,y:30.9},0).wait(1).to({rotation:5.9,x:3.4,y:35.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.8,x:3.6,y:40.3},0).wait(1).to({rotation:7.7,x:3.7,y:45.8},0).wait(1).to({rotation:8.7,y:52},0).wait(1).to({rotation:9.8,x:3.6,y:58.9},0).wait(1).to({rotation:11.1,x:3.3,y:66.6},0).wait(1).to({rotation:12.6,x:2.8,y:75.2},0).wait(1).to({rotation:14.2,x:2,y:84.8},0).wait(1).to({rotation:15.9,x:0.8,y:94.8},0).wait(1).to({rotation:17.6,x:-0.7,y:105},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.4,x:-2.5,y:115.5},0).wait(1).to({rotation:21.3,x:-4.9,y:126.9},0).wait(1).to({rotation:23.5,x:-8.2,y:139.8},0).wait(1).to({rotation:26.2,x:-12.8,y:155.4},0).wait(1).to({rotation:29.7,x:-19.8,y:175.1},0).wait(1).to({regX:-340.1,regY:51.8,scaleX:1,scaleY:1,rotation:34.3,x:-340,y:51.8},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:40.7,x:-49.1,y:233.8},0).wait(1).to({rotation:46.8,x:-70.2,y:264},0).wait(1).to({rotation:52.5,x:-92.5,y:289.7},0).wait(1).to({rotation:57.5,x:-114,y:310.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:61.7,x:-133.6,y:326.4},0).wait(1).to({rotation:65.2,x:-150.8,y:338.5},0).wait(1).to({rotation:68.2,x:-165.8,y:347.9},0).wait(1).to({rotation:70.7,x:-178.9,y:355.3},0).wait(1).to({rotation:72.9,x:-190.7,y:361.4},0).wait(1).to({rotation:74.9,x:-201.6,y:366.4},0).wait(1).to({rotation:76.7,x:-211.8,y:370.7},0).wait(1).to({rotation:78.5,x:-221.3,y:374.4},0).wait(1).to({rotation:80,x:-230.2,y:377.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:81.4,x:-238.3,y:380.2},0).wait(1).to({rotation:82.7,x:-245.8,y:382.5},0).wait(1).to({rotation:83.9,x:-252.5,y:384.4},0).wait(1).to({rotation:85,x:-258.7,y:385.9},0).wait(1).to({rotation:85.9,x:-264.3,y:387.3},0).wait(1).to({rotation:86.8,x:-269.4,y:388.4},0).wait(1).to({rotation:87.6,x:-273.9,y:389.3},0).wait(1).to({rotation:88.3,x:-278.1,y:390.1},0).wait(1).to({rotation:88.9,x:-281.8,y:390.8},0).wait(1).to({rotation:89.5,x:-285.1,y:391.4},0).wait(1).to({rotation:90,x:-288.1,y:391.8},0).wait(1).to({rotation:90.4,x:-290.8,y:392.3},0).wait(1).to({rotation:90.8,x:-293.3,y:392.6},0).wait(1).to({rotation:91.2,x:-295.5,y:392.9},0).wait(1).to({regX:-340.2,regY:51.9,rotation:91.5,x:-340.2,y:51.7},0).to({alpha:0},8).to({_off:true},48).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-381.8,-96.1,766,196);


(lib.Символ11копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ12_1();
	this.instance.setTransform(-7.2,7.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(1).to({x:2.1,y:-44.3},0).wait(1).to({x:10.9,y:-93.3},0).wait(1).to({x:19.1,y:-139.2},0).wait(1).to({x:26.7,y:-181.5},0).wait(1).to({x:33.7,y:-220.1},0).wait(1).to({x:39.9,y:-255},0).wait(1).to({x:45.6,y:-286.4},0).wait(1).to({x:50.6,y:-314.6},0).wait(1).to({x:55.2,y:-339.7},0).wait(1).to({x:59.2,y:-362},0).wait(1).to({x:62.8,y:-382},0).wait(1).to({x:65.9,y:-399.6},0).wait(1).to({x:68.8,y:-415.3},0).wait(1).to({x:71.3,y:-429.3},0).wait(1).to({x:73.5,y:-441.8},0).wait(1).to({x:75.5,y:-452.9},0).wait(1).to({x:77.3,y:-462.9},0).wait(1).to({x:78.9,y:-471.9},0).wait(1).to({x:80.4,y:-480},0).wait(1).to({x:81.7,y:-487.3},0).wait(1).to({x:82.9,y:-493.9},0).wait(1).to({x:84,y:-499.9},0).wait(1).to({x:84.9,y:-505.3},0).wait(1).to({x:85.8,y:-510.3},0).wait(1).to({x:86.7,y:-514.9},0).wait(1).to({x:87.4,y:-519.2},0).wait(1).to({x:88.1,y:-523.1},0).wait(1).to({x:88.8,y:-526.9},0).wait(1).to({x:89.4,y:-530.4},0).wait(1).to({x:90.1,y:-533.8},0).wait(1).to({x:90.6,y:-537.1},0).wait(1).to({x:91.2,y:-540.3},0).wait(1).to({x:91.8,y:-543.5},0).wait(1).to({x:92.4,y:-546.7},0).wait(1).to({x:93,y:-549.9},0).wait(1).to({x:93.5,y:-553.2},0).wait(1).to({x:94.1,y:-556.5},0).wait(1).to({x:94.8,y:-560},0).wait(1).to({x:95.4,y:-563.5},0).to({_off:true},1).wait(38));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ12_1();
	this.instance_1.setTransform(-7.2,7.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(1).to({x:2.8,y:-44.6},0).wait(1).to({x:12.3,y:-93.8},0).wait(1).to({x:21.1,y:-139.8},0).wait(1).to({x:29.3,y:-182.3},0).wait(1).to({x:36.8,y:-221.1},0).wait(1).to({x:43.6,y:-256.2},0).wait(1).to({x:49.6,y:-287.8},0).wait(1).to({x:55.1,y:-316},0).wait(1).to({x:60,y:-341.3},0).wait(1).to({x:64.3,y:-363.7},0).wait(1).to({x:68.1,y:-383.7},0).wait(1).to({x:71.6,y:-401.5},0).wait(1).to({x:74.6,y:-417.3},0).wait(1).to({x:77.3,y:-431.3},0).wait(1).to({x:79.7,y:-443.8},0).wait(1).to({x:81.9,y:-455},0).wait(1).to({x:83.8,y:-465.1},0).wait(1).to({x:85.6,y:-474.1},0).wait(1).to({x:87.1,y:-482.2},0).wait(1).to({x:88.5,y:-489.6},0).wait(1).to({x:89.8,y:-496.2},0).wait(1).to({x:91,y:-502.2},0).wait(1).to({x:92,y:-507.7},0).wait(1).to({x:93,y:-512.7},0).wait(1).to({x:93.9,y:-517.3},0).wait(1).to({x:94.7,y:-521.6},0).wait(1).to({x:95.5,y:-525.5},0).wait(1).to({x:96.2,y:-529.3},0).wait(1).to({x:96.9,y:-532.9},0).wait(1).to({x:97.5,y:-536.3},0).wait(1).to({x:98.2,y:-539.6},0).wait(1).to({x:98.8,y:-542.8},0).wait(1).to({x:99.4,y:-546},0).wait(1).to({x:100,y:-549.2},0).wait(1).to({x:100.7,y:-552.5},0).wait(1).to({x:101.3,y:-555.7},0).wait(1).to({x:101.9,y:-559.1},0).wait(1).to({x:102.6,y:-562.6},0).wait(1).to({x:103.3,y:-566.1},0).to({_off:true},1).wait(43));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ12_1();
	this.instance_2.setTransform(-7.2,7.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({x:2.2,y:-44.7},0).wait(1).to({x:11.2,y:-94.1},0).wait(1).to({x:19.6,y:-140.3},0).wait(1).to({x:27.4,y:-183},0).wait(1).to({x:34.4,y:-221.9},0).wait(1).to({x:40.8,y:-257.1},0).wait(1).to({x:46.6,y:-288.8},0).wait(1).to({x:51.7,y:-317.1},0).wait(1).to({x:56.3,y:-342.4},0).wait(1).to({x:60.4,y:-365},0).wait(1).to({x:64.1,y:-385.1},0).wait(1).to({x:67.3,y:-402.9},0).wait(1).to({x:70.2,y:-418.7},0).wait(1).to({x:72.8,y:-432.8},0).wait(1).to({x:75,y:-445.3},0).wait(1).to({x:77.1,y:-456.6},0).wait(1).to({x:78.9,y:-466.7},0).wait(1).to({x:80.6,y:-475.7},0).wait(1).to({x:82,y:-483.9},0).wait(1).to({x:83.4,y:-491.2},0).wait(1).to({x:84.6,y:-497.9},0).wait(1).to({x:85.7,y:-503.9},0).wait(1).to({x:86.7,y:-509.4},0).wait(1).to({x:87.6,y:-514.4},0).wait(1).to({x:88.4,y:-519.1},0).wait(1).to({x:89.2,y:-523.4},0).wait(1).to({x:89.9,y:-527.4},0).wait(1).to({x:90.6,y:-531.1},0).wait(1).to({x:91.3,y:-534.7},0).wait(1).to({x:91.9,y:-538.1},0).wait(1).to({x:92.5,y:-541.5},0).wait(1).to({x:93.1,y:-544.7},0).wait(1).to({x:93.7,y:-547.9},0).wait(1).to({x:94.3,y:-551.1},0).wait(1).to({x:94.9,y:-554.4},0).wait(1).to({x:95.5,y:-557.7},0).wait(1).to({x:96.1,y:-561},0).wait(1).to({x:96.7,y:-564.5},0).wait(1).to({x:97.4,y:-568.1},0).to({_off:true},1).wait(47));

	// Слой 1
	this.instance_3 = new lib.Символ12_1();
	this.instance_3.setTransform(-7.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:2.5,y:-44.3},0).wait(1).to({x:11.7,y:-93.3},0).wait(1).to({x:20.3,y:-139.2},0).wait(1).to({x:28.2,y:-181.5},0).wait(1).to({x:35.5,y:-220.1},0).wait(1).to({x:42.1,y:-255},0).wait(1).to({x:48,y:-286.4},0).wait(1).to({x:53.2,y:-314.6},0).wait(1).to({x:58,y:-339.7},0).wait(1).to({x:62.2,y:-362},0).wait(1).to({x:65.9,y:-382},0).wait(1).to({x:69.2,y:-399.6},0).wait(1).to({x:72.2,y:-415.3},0).wait(1).to({x:74.8,y:-429.3},0).wait(1).to({x:77.1,y:-441.8},0).wait(1).to({x:79.2,y:-452.9},0).wait(1).to({x:81.1,y:-462.9},0).wait(1).to({x:82.8,y:-471.9},0).wait(1).to({x:84.3,y:-480},0).wait(1).to({x:85.7,y:-487.3},0).wait(1).to({x:86.9,y:-493.9},0).wait(1).to({x:88,y:-499.9},0).wait(1).to({x:89.1,y:-505.3},0).wait(1).to({x:90,y:-510.3},0).wait(1).to({x:90.9,y:-514.9},0).wait(1).to({x:91.7,y:-519.2},0).wait(1).to({x:92.4,y:-523.1},0).wait(1).to({x:93.1,y:-526.9},0).wait(1).to({x:93.8,y:-530.4},0).wait(1).to({x:94.4,y:-533.8},0).wait(1).to({x:95,y:-537.1},0).wait(1).to({x:95.6,y:-540.3},0).wait(1).to({x:96.2,y:-543.5},0).wait(1).to({x:96.8,y:-546.7},0).wait(1).to({x:97.4,y:-549.9},0).wait(1).to({x:98.1,y:-553.2},0).wait(1).to({x:98.7,y:-556.5},0).wait(1).to({x:99.3,y:-560},0).wait(1).to({x:100,y:-563.5},0).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.4,-12.2,82,42);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.3},9,cjs.Ease.get(-1)).to({rotation:-2.7},10,cjs.Ease.get(1)).to({rotation:-1.3},10,cjs.Ease.get(-1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-39.5,59.2,79);


(lib.Символ1 = function() {
	this.initialize();

	// Layer 2 - копия
	this.instance = new lib.Символ20();
	this.instance.setTransform(278.7,-38.1);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEud6IA7lhICbAAQgnCxgpCxgAGwRyMAFrghuIgMAAQg0AAglgWQgkgWAAgeQAAgfAkgWQAlgVA0AAQATAAARADIAEgZQgegNgYguQghg/AAhaQAAhaAhhAQAhg/AvAAQAXAAAVAQIAzkwIDCAGIgFAhIAGgEQAigZAwAAQAxAAAiAZQAiAYAAAjQAAAjgiAZQgiAYgxAAQgwAAgigYQgMgJgIgKIgtE3QAdAFAVAaQAbAhAAAuQAAAugbAgQgbAhgnAAQgJAAgJgCIgEAbQAZACATAgQASAgAZBBQAZBAgSAbQgRAbAMAFQg1gXAiAZQAhAZgEBNQgFBMgwAjQgwAkgdAAQgaAAgTgiQidOzjFOngAuM4gQgRgKgOgaQgWgrABg9QgBg8AWgrQAWgrAeAAQAZAAATAcIAUhRIBqAPQAggWAsAAQAvAAAhAYQAhAZAAAjQAAAjghAYQghAZgvAAQgrAAgggWIg5DSQAJgDAKAAQAiAAAXAmQAZAmAAA2QAAA2gZAmQgXAmgiAAQgiAAgYgmQgIgNgFgOImKWuIh2Aeg");
	mask.setTransform(278.7,-38.2);

	// Layer 3
	this.instance_1 = new lib.Символ11копия();
	this.instance_1.setTransform(314,176,0.765,0.765);

	this.instance_2 = new lib.Символ11_1();
	this.instance_2.setTransform(143,2,0.765,0.765);

	this.instance_1.mask = this.instance_2.mask = mask;

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(137.9,-236.7,286,400);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(15.6,-225.3);

	// Слой 1
	this.instance_1 = new lib.Символ15();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-366.2,-321.4,767,474);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.18},9,cjs.Ease.get(-1)).to({scaleX:1.38},10,cjs.Ease.get(1)).to({scaleX:1.19},10,cjs.Ease.get(-1)).to({scaleX:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.8,-154,417.7,308);


(lib.Символ1_1 = function() {
	this.initialize();

	// Layer 2
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(217,64);

	// Layer 3
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(274,-153.5);

	// Layer 1
	this.instance_5 = new lib.Layer1();
	this.instance_5.setTransform(125.5,-229);

	// Слой 5
	this.instance_6 = new lib.Символ17();
	this.instance_6.setTransform(302,-39);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(93.2,-229,417.7,382);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(32,-312,1,1,0,0,0,296.9,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,rotation:-5},9,cjs.Ease.get(-1)).to({regY:-349.9,scaleX:0.91,scaleY:0.91,rotation:-10.9,y:-311.9},10,cjs.Ease.get(1)).to({regX:297,regY:-350,scaleX:0.96,scaleY:0.96,rotation:-5.3,x:32.1,y:-312},10,cjs.Ease.get(-1)).to({regX:296.9,scaleX:1,scaleY:1,rotation:0,x:32},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.8,-198.7,316.8,438);


(lib.Символ2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ1_1();
	this.instance_1.setTransform(32,-312,1,1,0,0,0,296.9,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.96,scaleY:0.96,rotation:-5},9,cjs.Ease.get(-1)).to({regY:-349.9,scaleX:0.91,scaleY:0.91,rotation:-10.9,y:-311.9},10,cjs.Ease.get(1)).to({regX:297,regY:-350,scaleX:0.96,scaleY:0.96,rotation:-5.3,x:32.1,y:-312},10,cjs.Ease.get(-1)).to({regX:296.9,scaleX:1,scaleY:1,rotation:0,x:32},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.8,-191,417.7,382);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(28));

	// Слой 3
	this.instance = new lib.Символ34();
	this.instance.setTransform(52.7,-21.6,1,1,180);

	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(-351.3,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},28).to({state:[]},1).wait(27));

	// Слой 2
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(-96.5,1.2,1,1,0,0,0,-58.8,0);
	this.instance_2.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-156.5},14,cjs.Ease.get(-1)).to({x:-216.5},14,cjs.Ease.get(1)).to({x:-154.3},14,cjs.Ease.get(-1)).to({x:-96.5},13,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ2_1();
	this.instance_3.setTransform(-95.8,0,1,1,0,0,0,-58.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-155.8},14,cjs.Ease.get(-1)).to({x:-215.8},14,cjs.Ease.get(1)).to({x:-153.6},14,cjs.Ease.get(-1)).to({x:-95.8},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.8,-197.6,417.7,438);


// stage content:



(lib.kachelya = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		//clickTAG
		
		this.button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		//MiuseEvents
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.girl.gotoAndPlay(1);
		    _this.plashka.gotoAndPlay(1);
			_this.ruka.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		 function fl_MouseOutHandler_2()
		{
		    _this.girl.gotoAndPlay(29);
		    _this.plashka.gotoAndPlay(15);
			_this.ruka.gotoAndPlay(0);
		}
		
		//cursor
		this.button.cursor = "none";
		stage.canvas.style.cursor = "none";
		this.ruka.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.ruka.x = stage.mouseX;
			this.ruka.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.button = new lib.Символ41();
	this.button.setTransform(320,152.5);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ41(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 6
	this.ruka = new lib.Символ40();
	this.ruka.setTransform(-73.3,282,1,1,0,0,0,2.7,0);

	this.timeline.addTween(cjs.Tween.get(this.ruka).wait(1));

	// Слой 1
	this.frame = new lib.Символ29();
	this.frame.setTransform(320,151.5,1.009,1.02);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	// Слой 8
	this.plashka = new lib.Символ32();
	this.plashka.setTransform(80.1,139.3);

	this.timeline.addTween(cjs.Tween.get(this.plashka).wait(1));

	// Layer 2
	this.girl = new lib.Символ33();
	this.girl.setTransform(478,112.5,1,1,0,0,0,0,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 5
	this.bg = new lib.Символ36();
	this.bg.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266.8,-16.4,774,582.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;