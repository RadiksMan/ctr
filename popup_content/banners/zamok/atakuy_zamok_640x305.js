(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_1.png", id:"_1"},
		{src:"images/_2.png", id:"_2"},
		{src:"images/_3.png", id:"_3"},
		{src:"images/_4.png", id:"_4"},
		{src:"images/_5.png", id:"_5"},
		{src:"images/_6.png", id:"_6"},
		{src:"images/b1.png", id:"b1"},
		{src:"images/b2.png", id:"b2"},
		{src:"images/castle.png", id:"castle"},
		{src:"images/GUN.png", id:"GUN"},
		{src:"images/H1.png", id:"H1"},
		{src:"images/H2.png", id:"H2"},
		{src:"images/H3.png", id:"H3"},
		{src:"images/H4.png", id:"H4"},
		{src:"images/H5.png", id:"H5"},
		{src:"images/H6.png", id:"H6"},
		{src:"images/H7.png", id:"H7"},
		{src:"images/H8.png", id:"H8"},
		{src:"images/L1.png", id:"L1"},
		{src:"images/L2.png", id:"L2"},
		{src:"images/mount.png", id:"mount"},
		{src:"images/O0.png", id:"O0"},
		{src:"images/O6.png", id:"O6"},
		{src:"images/O911.jpg", id:"O911"}
	]
};



// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,66);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,291);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,144);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,89);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,37);


(lib._6 = function() {
	this.initialize(img._6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,79);


(lib.b1 = function() {
	this.initialize(img.b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,39);


(lib.b2 = function() {
	this.initialize(img.b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,32);


(lib.castle = function() {
	this.initialize(img.castle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,455,303);


(lib.GUN = function() {
	this.initialize(img.GUN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.H1 = function() {
	this.initialize(img.H1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,13);


(lib.H2 = function() {
	this.initialize(img.H2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.H3 = function() {
	this.initialize(img.H3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,13);


(lib.H4 = function() {
	this.initialize(img.H4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,11);


(lib.H5 = function() {
	this.initialize(img.H5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,8);


(lib.H6 = function() {
	this.initialize(img.H6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,16);


(lib.H7 = function() {
	this.initialize(img.H7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,13);


(lib.H8 = function() {
	this.initialize(img.H8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,9);


(lib.L1 = function() {
	this.initialize(img.L1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,11);


(lib.L2 = function() {
	this.initialize(img.L2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,15);


(lib.mount = function() {
	this.initialize(img.mount);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,184);


(lib.O0 = function() {
	this.initialize(img.O0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,72);


(lib.O6 = function() {
	this.initialize(img.O6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.O911 = function() {
	this.initialize(img.O911);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,734,362);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.L1();
	this.instance.setTransform(-6.8,-6,1,1,7.7);

	this.instance_1 = new lib.L1();
	this.instance_1.setTransform(-0.6,-6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-6,16.7,12.1);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.GUN();
	this.instance.setTransform(-16.5,-16.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-16.5,33,33);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.H3();
	this.instance.setTransform(-3.5,-6.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-6.5,7,13);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#422F21").s().p("AjWDXIAAmtIGtAAIAAGtg");
	this.shape.setTransform(21.6,21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.O6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADILhImP3B");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-74.7,42.1,149.6);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB8q4Ij3Vx");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-70.7,26.9,141.4);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(157.1,15.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314.2,31.4);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.L2();
	this.instance.setTransform(-1.6,-7.5);

	this.instance_1 = new lib.L2();
	this.instance_1.setTransform(-7.4,-7.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-7.5,14.8,15.2);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.O911();
	this.instance.setTransform(-23.9,-181);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-181,734,362);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.castle();
	this.instance.setTransform(-227.5,-151.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-227.5,-151.5,455,303);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mount();
	this.instance.setTransform(-67.5,-92);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,-92,135,184);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgyiADqIAAnTMBlFAAAIAAHTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-323.5,-23.5,647.2,47);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b2();
	this.instance.setTransform(-9,-16);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-16,18,32);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.H4();
	this.instance.setTransform(-3.5,-5.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-5.5,7,11);


(lib.Символ14_1 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/ALQgagEAAgHQAAgGAagEQAbgFAkAAQAlAAAaAFQAbAEAAAGQAAAHgbAEQgaAFglAAQgkAAgbgFg");
	this.shape_1.setTransform(0,0,0.801,1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-1.6,14.5,3.3);


(lib.копияСимвол30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.H1();
	this.instance.setTransform(-5.5,-6.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-6.5,11,13);


(lib.копияСимвол29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.H2();
	this.instance.setTransform(-6,-6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-6,12,12);


(lib.копияСимвол9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.H6();
	this.instance.setTransform(-6.5,-8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-8,13,16);


(lib.копияСимвол8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.H5();
	this.instance.setTransform(-3.5,-4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-4,7,8);


(lib.копияСимвол7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.H7();
	this.instance.setTransform(-7,-6.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-6.5,14,13);


(lib.копияСимвол6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b1();
	this.instance.setTransform(-9.5,-19.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-19.5,19,39);


(lib.копияСимвол5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.H8();
	this.instance.setTransform(-3,-4.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-4.5,6,9);


(lib.копияshape149 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AkDhaIIHAAIkEC1g");
	this.shape.setTransform(0,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,8.1,52.2,18.3);


(lib.shape141 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AhRAyIACgPIAHgjQARg/A4gnQA+gpATg2QACAwgWA8QgaBHAFBLIAAAAQgXAegeBvQgzhBgShTg");
	this.shape.setTransform(2.3,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AAjF6QAXg8gDgwQgTA2g7ApQg7AngQA/IgIAlIgFgBQgUhqBHg9QBGhAAjhZQAdhLgehAQBCBEAGBsQAJCihuCQQgGhNAahHgAgVnJQAFgpAVgbQgMBwAdBkQg9gNASiDg");
	this.shape_1.setTransform(5,-4.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-57.4,23.4,119.5);


(lib.shape140 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AhEAKIgBgSQAMghAegUQAxgiApgsIAHACQgNAxgVA8QgGAUgCAPIgKAIQhAA4AfBFQgogVgNhtg");
	this.shape.setTransform(2.7,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AAJGPQAUg8ANgxIgHgCIAHABIAFgTQgEAJgIAJQgnAsgzAiQgeAUgMAhQgFhiA/gkQBNgsAUhTQA8AlgdBqQgVBKhEA9QACgRAHgUgAA7kfQg+h4gugOQBLgtA0BmQAoBOgxAAIgKgBg");
	this.shape_1.setTransform(5.5,3.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-40.3,19.8,100.6);


(lib.shape139 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AhSBYQAXhLAxhJQASgeAFgaQAFgZgJgWQgHgjgUggIgTgYQAyAaAyA6QAlAsgGBCIgFAeQgMASgVANQg9AvgdBVQgTA4AGBCQhGg2Ajhxg");
	this.shape.setTransform(6.4,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AByE5QAHhCgmgsQgyg7gygZIARAYQAXAfAGAkQgMgfglgYQhIgsAKhsQADgqATgpQgWBsBWA3QBIAuAhBPQAbA+gOAugAgkjOQiGAXBBhdQASgTAVgKQAygYA/AkQBWAwgYBtQgnhYhqASg");
	this.shape_1.setTransform(4.4,1.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-29.9,25.5,94.7);


(lib.shape138 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AhBFAQgIg4AmhKQAshZgOhdQgPhTg6gzQBugBA1BLQBBBagjBjQgfBZhHA2QgZAUgNAUQgUAeAIAdIgIAEQgSgsgCgTgAh6jXIgEgJQgEg6Aeg0QAig6BCANQguAagbA/QgNAfgFAjIgEAIIgLAXQgKgJgGgNg");
	this.shape.setTransform(4.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AhQAsQAbg+AvgaQhDgNgiA5QgeA0AEA5QgPguAZhXQAfhrB0AcQBkAYAQBmQglg1hnAsQg6AbgoBEQAFgiANgfg");
	this.shape_1.setTransform(5.2,-12.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.8,-23.1,28.1,82.9);


(lib.shape137 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AgxEFIAAAAIgFgXQgGgiABghQAHgZAVgXQAmgtAJhAQALhEgUg8IArByQAUA4gSA4IgDAKIgPAVIgHAHQgrAzAAA8QgBAdALAgQghgSgKgrgAgakpQAWghAiAMQgmAcgWA6QgLAaAGAWQggg0Apg9g");
	this.shape.setTransform(1.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AhDCrQAlhihHhQQhFhOAhhhQAfhbBmgGQBcgGA9BAQhcANgRBnQgOBZATBXQATBWglBCIgCgBQASg4gUg5IgphxQASA6gJBGQgKBAgnAtQgVAXgIAZQAAg5AUg1gAg2i7QgoA9AgA0QgGgWAKgaQAXg6AlgcQgIgDgJAAQgXAAgQAYg");
	this.shape_1.setTransform(4.6,15.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.3,-12.3,29.8,71.4);


(lib.shape136 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AgRDIIgIgLQgbgpgQg3IAAgCIAAgBQgNhCAOhAQAPhCAig6QAcgyAXg0QACA5AUA5QAQAtADAwQADAsgFApQgHAzgUAtIAIAGQghA7gCAzIAAAdQgWgxgNgSg");
	this.shape.setTransform(-1.8,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AgPD6QARguAHgzQAGgrgDgsQgEgwgNgqQgVg5gCg6QgXA1gdAxQgjA4gOBCQgPBDANBBQgbhgAEhsQAEhrAqhQQAuhZBpAKQBGAHArArQhZgKgJBUQgKBZAGBZQAGBggzBOIgRAgg");
	this.shape_1.setTransform(4.4,19.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.1,-5.9,31.2,65);


(lib.shape135 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("Ag9C5QgTgcgMgjIgBgDIgDgTQgLhDAdg7QAag3A0gtQAyguAdg4QAGgLABgNQAeA6gjBBIg6BqQgYAqgGAxIgCAjIgCAHQgGAdADAjIABALQAFAoALAcQgmgbgagpg");
	this.shape.setTransform(1.3,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AgrDiQAGgxAagsIA4hqQAjg/geg6QgBANgGALQgdA4gyAsQg0AtgaA3QgdA9ALBDIgCABQgYhWAThYQAVheA7g8QA4g3AthFQAbgngjgcQBdABARBtQARBsgsBUQgrBVhDAyQgoAggMA0g");
	this.shape_1.setTransform(4.9,17.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-8.7,29.9,67.3);


(lib.Слой9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,89);


(lib.Слой8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,144);


(lib.Слой7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,79);


(lib.Слой6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,37);


(lib.Слой5 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.O0();
	this.instance.setTransform(0,-13.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-13.9,168,72);


(lib.Слой4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,291);


(lib.Слой3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._1, null, new cjs.Matrix2D(1,0,0,1,-34.3,-33)).s().p("AlWFJIAAqAIC6gSIAPAAQALANAPAEQAMAHAQAAQAeAAANgYIEgAAIBjKSg");
	this.shape.setTransform(34.3,33);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.7,66);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.копияСимвол30();
	this.instance.setTransform(-2.3,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-40.2,x:1.9,y:4.9},19).to({rotation:0,x:-2.3,y:3.3},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.копияСимвол29();
	this.instance_1.setTransform(1.9,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-9.7,15.8,19.5);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(48.5,48.5,1,1,0,0,0,48.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},51).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.копияСимвол7();
	this.instance.setTransform(-0.6,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:-2.1,y:2.6},24).to({rotation:0,x:-0.6,y:1.1},25).wait(1));

	// Слой 1
	this.instance_1 = new lib.копияСимвол5();
	this.instance_1.setTransform(-5.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:30,x:-4.5,y:-6.1},24).to({rotation:0,x:-5.5,y:-6.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-11,14.9,18.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.копияСимвол8();
	this.instance.setTransform(2.5,-6,1,1,0,0,0,1.4,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15},19).to({rotation:0},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.копияСимвол9();
	this.instance_1.setTransform(-1.1,-1.1,1,1,0,0,0,3.4,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-30,x:-1.6,y:-2.2},19).to({rotation:0,x:-1.1,y:-1.1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-7.9,15.6,19.3);


(lib.копияСимвол3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(-1.2,-3.3,1,1,-24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1.9},14).to({y:-3.3},15).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(15.8,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-0.4},14).to({y:-1.8},15).wait(1));

	// Слой 1
	this.instance_2 = new lib.копияСимвол6();
	this.instance_2.setTransform(3.8,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.95,y:-4.7},14).to({scaleY:1,y:-5.7},15).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(3.7,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// Слой 5
	this.instance_4 = new lib.Символ14_1();
	this.instance_4.setTransform(4.6,23.6);
	this.instance_4.alpha = 0.629;
	this.instance_4.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_4.cache(-9,-4,19,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-25.2,35.3,55.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Слой5();
	this.instance.setTransform(92,152,1,1,0,0,0,84,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,skewY:-3,x:87.3,y:150.8},14,cjs.Ease.get(-1)).to({scaleX:0.89,skewY:-6.6,x:81.9,y:149.4},16,cjs.Ease.get(1)).to({regY:28.9,scaleX:0.94,skewY:-3.3,x:86.8,y:150.6},14,cjs.Ease.get(-1)).to({regY:29,scaleX:1,skewY:0,x:92,y:152},15,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(112.7,218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,skewX:-3.5,x:110,y:216.1},14,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:-7.7,x:107,y:213.8},16,cjs.Ease.get(1)).to({scaleY:1,skewX:-3.8,x:109.8,y:215.8},14,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:112.7,y:218.2},15,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(105.1,74.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:2.3,x:101.2},14,cjs.Ease.get(-1)).to({scaleY:1,skewX:4.8,x:96.7},16,cjs.Ease.get(1)).to({scaleY:1,skewX:2.5,x:100.7},14,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:105.1},15,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_3 = new lib.Слой3();
	this.instance_3.setTransform(53.5,119,1,1,0,0,0,34.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:34.6,scaleY:1,skewX:5.6,skewY:3.5,x:55.7,y:121},14,cjs.Ease.get(-1)).to({regX:34.5,scaleY:1,skewX:12.3,skewY:7.7,x:58,y:123.2},16,cjs.Ease.get(1)).to({scaleY:1,skewX:6.3,skewY:3.8,x:55.8,y:121.2},14,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,skewY:0,x:53.5,y:119},15,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_4 = new lib.Слой4();
	this.instance_4.setTransform(117.5,150.5,1,1,0,0,0,32.5,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.01,skewY:-4.5,y:147.9},14,cjs.Ease.get(-1)).to({scaleX:1.01,skewY:-9.7,y:144.9},16,cjs.Ease.get(1)).to({scaleX:1.01,skewY:-5,y:147.7},14,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,y:150.5},15,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_5 = new lib.Слой8();
	this.instance_5.setTransform(51,328,1,1,0,0,0,41,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1.01,y:329.1},14,cjs.Ease.get(-1)).to({scaleY:1.03,y:330.1},16,cjs.Ease.get(1)).to({scaleY:1.01,y:329.1},14,cjs.Ease.get(-1)).to({scaleY:1,y:328},15,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_6 = new lib.Слой9();
	this.instance_6.setTransform(51,187.5,1,1,0,0,0,46,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.03,x:52.5,y:188.1},14,cjs.Ease.get(-1)).to({scaleX:1.07,x:54.2,y:188.7},16,cjs.Ease.get(1)).to({scaleX:1.04,x:52.7,y:188.1},14,cjs.Ease.get(-1)).to({scaleX:1,x:51,y:187.5},15,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_7 = new lib.Слой6();
	this.instance_7.setTransform(95,164.5,1,1,0,0,0,17,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.02,skewY:-7.3},14,cjs.Ease.get(-1)).to({scaleX:1.04,skewY:-15.8},16,cjs.Ease.get(1)).to({regY:18.3,scaleX:1.02,skewY:-8,y:164.3},14,cjs.Ease.get(-1)).to({regY:18.5,scaleX:1,skewY:0,y:164.5},15,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_8 = new lib.Слой7();
	this.instance_8.setTransform(62.5,241.5,1,1,0,0,0,29.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:39.6,scaleX:1.06,scaleY:1,skewX:1.3,skewY:-2,x:63.2,y:242.5},14,cjs.Ease.get(-1)).to({regX:29.6,regY:39.5,scaleX:1.12,skewX:3.1,skewY:-4.4,x:64,y:243.4},16,cjs.Ease.get(1)).to({scaleX:1.06,skewX:1.5,skewY:-2.3,x:63.2,y:242.5},14,cjs.Ease.get(-1)).to({regX:29.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:62.5,y:241.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,4.5,171,395.5);


(lib.sprite150 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.копияshape149("synched",0);
	this.instance.setTransform(0,0,1.992,1.992);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.9,16.1,103.9,36.3);


(lib.sprite142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape135("synched",0);

	this.instance_1 = new lib.shape136("synched",0);

	this.instance_2 = new lib.shape137("synched",0);

	this.instance_3 = new lib.shape138("synched",0);

	this.instance_4 = new lib.shape139("synched",0);

	this.instance_5 = new lib.shape140("synched",0);

	this.instance_6 = new lib.shape141("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sprite76 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(-57.9,210.1,1,1,0,0,0,157.1,15.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-215,194.4,314.2,31.3);


(lib.sprite72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(68.9,-151.6,0.942,0.942,0,0,180,29,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-188.3,161,372.4);


(lib.shape2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.setTransform(-2.8,-7.4);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(231.1,81.5,1,1,0,0,180);

	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-235.3,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.8,-158.9,601.4,332.4);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sprite142();
	this.instance.setTransform(7,1.1,0.075,0.075,-8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhWABIAAgBICtAAIAAABg");
	this.shape.setTransform(-1,5.4);

	this.instance_1 = new lib.sprite142();
	this.instance_1.setTransform(7.7,0.3,0.094,0.094);

	this.addChild(this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,5.3,17.6,0.3);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.setTransform(10,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:7.9,y:3.1},14).to({rotation:-20.7,x:12.6,y:-1.5},25).to({rotation:0,x:10,y:3.6},20).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-0.2,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15},14).to({rotation:-15,x:4.1,y:3.3},25).to({rotation:0,x:-0.2,y:3.8},20).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(0.3,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7.2,x:1.3,y:-4.4},14).to({rotation:-15,x:0.3,y:-4.7},25).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-10.2,21.6,20.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ39();
	this.instance.setTransform(30.6,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59));

	// Слой 3
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(-10,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0.6},14).to({y:-0.6},15).to({y:0.6},14).to({y:-0.6},15).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(-0.5,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.94,y:-1.3},14).to({scaleY:1,y:-2.7},15).to({scaleY:0.94,y:-1.3},14).to({scaleY:1,y:-2.7},15).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ36();
	this.instance_3.setTransform(6.3,0,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:1.4},14).to({y:0},15).to({y:1.4},14).to({y:0},15).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ40();
	this.instance_4.setTransform(-0.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-18.7,64.9,49.2);


(lib.sprite152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.sprite150();
	this.instance.setTransform(0.2,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.01,y:-42.5},2).to({scaleX:0.93,scaleY:1.08,y:-49.4},2).to({scaleX:0.83,scaleY:1.18,y:-60.8},2).to({scaleX:0.89,scaleY:1.11,x:0.1,y:-65.4},1).to({scaleX:0.94,scaleY:1.07,y:-68.6},1).to({scaleX:0.97,scaleY:1.03,x:0.2,y:-70.7},1).to({scaleX:1,scaleY:1,y:-72.6},2).to({scaleX:1,scaleY:1,y:-72.8},1).to({scaleX:1,scaleY:1,y:-72.5},1).to({scaleX:0.99,scaleY:1.01,y:-71.5},1).to({scaleX:0.97,scaleY:1.03,y:-69.6},1).to({scaleX:0.94,scaleY:1.06,y:-66.5},1).to({scaleX:0.89,scaleY:1.1,y:-62.2},1).to({scaleX:0.79,scaleY:1.2,y:-51.9},2).to({scaleX:1,scaleY:1,y:-40.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,-24.8,103.9,36.4);


(lib.sprite73 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.instance = new lib.sprite72();
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-187.3,161,372.4);


(lib.sprite3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape2("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-302.8,-158.9,601.4,332.4);


(lib.U = function() {
	this.initialize();

	// Layer 1
	this.arrow = new lib.sprite152();
	this.arrow.setTransform(6.4,23,0.228,0.342);
	this.arrow.shadow = new cjs.Shadow("#FF9900",0,0,11);

	this.addChild(this.arrow);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,8.5,39,28);


(lib.копияsprite49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.U();
	this.instance.setTransform(8.7,60.2,0.637,0.637,0,0,0,6.4,11.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 24, -28))];
	this.instance.cache(-13,7,43,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhhCmQgFgegHgGQgJgIgugBQgxgBgPgJQgLgGgCgOIAAgVQgBgWAMgvQAQg4AWgsQBDiCBlA2QBqgjBaBnQAeAhAXAsQARAgABAKQgBApgSAkQgjBAhRAAQguAAgLgJQgFgLgJgBIgggBQgHAIgLAdQgNAYgfAAQgfAAgJgag");
	mask.setTransform(10.7,87);

	// Слой 3
	this.instance_1 = new lib.копияСимвол3();
	this.instance_1.setTransform(5.7,96.3,0.818,0.818);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,56.1,33.3,50.2);


(lib.sprite68 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.U();
	this.instance.setTransform(100.1,-27.6,0.477,0.477,0,-90,90,6.4,11.5);

	this.instance_1 = new lib.U();
	this.instance_1.setTransform(138.9,-27.6,0.477,0.477,90,0,0,6.4,11.5);

	this.instance_2 = new lib.U();
	this.instance_2.setTransform(119.5,-8.1,0.477,0.477,0,180,0,6.4,11.5);

	this.instance_3 = new lib.U();
	this.instance_3.setTransform(119.5,-47,0.477,0.477,0,0,0,6.4,11.5);

	this.instance_4 = new lib.U();
	this.instance_4.setTransform(70.6,15.3,0.501,0.501,0,-90,90,6.3,11.5);

	this.instance_5 = new lib.U();
	this.instance_5.setTransform(111.5,15.3,0.501,0.501,90,0,0,6.3,11.5);

	this.instance_6 = new lib.U();
	this.instance_6.setTransform(91,35.8,0.501,0.501,0,180,0,6.3,11.5);

	this.instance_7 = new lib.U();
	this.instance_7.setTransform(91,-5.1,0.501,0.501,0,0,0,6.3,11.4);

	this.instance_8 = new lib.U();
	this.instance_8.setTransform(-20.7,93.2,0.46,0.46,0,-90,90,6.4,11.6);

	this.instance_9 = new lib.U();
	this.instance_9.setTransform(16.6,93.2,0.46,0.46,90,0,0,6.4,11.6);

	this.instance_10 = new lib.U();
	this.instance_10.setTransform(-2.1,111.9,0.46,0.46,0,180,0,6.3,11.4);

	this.instance_11 = new lib.U();
	this.instance_11.setTransform(-2.1,74.4,0.46,0.46,0,0,0,6.3,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-51.6,173.1,172.4);


(lib.sprite49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.U();
	this.instance.setTransform(-0.3,46.5,1.239,1.239,0,0,0,6.4,11.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 24, -28))];
	this.instance.cache(-13,7,43,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44));

	// Слой 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(1.2,88.5);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(12, 14, 0, 0))];
	this.instance_1.cache(-20,-21,69,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,44.3,72.3,78.5);


(lib.sprite4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sprite3();
	this.instance.setTransform(0,-1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-302.8,-159.9,601.4,332.4);


(lib.копияsprite512 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 3
	this.instance = new lib.копияsprite49();
	this.instance.setTransform(82.5,-80.8,0.515,0.515,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2,scaleY:1.19,x:62.1,y:-167.8},4).wait(1));

	// Layer 1
	this.instance_1 = new lib.sprite3();
	this.instance_1.setTransform(45,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.67,scaleY:1.67,x:-4.3,y:-51.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.8,-189.8,601.4,332.4);


(lib.копияsprite51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 3
	this.instance = new lib.копияsprite49();
	this.instance.setTransform(42,-48.8,0.609,0.608,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2,scaleY:1.19,x:66.6,y:-101.3},4).wait(1));

	// Layer 1
	this.instance_1 = new lib.sprite3();
	this.instance_1.setTransform(45,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.67,scaleY:1.67,x:74.9,y:-51.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.8,-189.8,601.4,332.4);


(lib.sprite50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 3
	this.instance = new lib.sprite49();
	this.instance.setTransform(42.9,-19.1,0.609,0.608,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.79,scaleY:0.79,x:22,y:-33.8},4).wait(1));

	// Layer 1
	this.instance_1 = new lib.sprite3();
	this.instance_1.setTransform(127.9,-80.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.3,scaleY:1.3,x:132.9,y:-114.3},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.9,-239.8,601.4,332.4);


(lib.sprite54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.sprite4();

	this.cl1 = new lib.sprite50();
	this.cl1.setTransform(-127.9,80);

	this.cl2 = new lib.копияsprite51();
	this.cl2.setTransform(-45,31);

	this.csl = new lib.копияsprite512();
	this.csl.setTransform(-45,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.cl1}]},1).to({state:[{t:this.cl2}]},1).to({state:[{t:this.csl}]},1).to({state:[{t:this.cl2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.8,-159.9,601.4,332.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.target1.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.celi.gotoAndPlay(1);
		this.fon.gotoAndPlay(3);	
		}
		
		this.target1.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.celi.gotoAndPlay(0);
		this.fon.gotoAndPlay(0);	
		this.fon.csl.gotoAndPlay(0);
		}
		
		this.target2.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
		this.celi.gotoAndPlay(1);
		this.fon.gotoAndPlay(2);	
		}
		
		this.target2.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
		this.celi.gotoAndPlay(0);
		this.fon.gotoAndPlay(0);	
		this.fon.cl2.gotoAndPlay(0);
		}
		this.target3.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
		this.celi.gotoAndPlay(1);
		this.fon.gotoAndPlay(1);	
		}
		
		this.target3.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
		this.celi.gotoAndPlay(0);
		this.fon.gotoAndPlay(0);	
		this.fon.cl1.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.target1 = new lib.Символ20();
	this.target1.setTransform(411.8,196.6,1,1,0,0,0,21.6,21.5);
	new cjs.ButtonHelper(this.target1, 0, 1, 2, false, new lib.Символ20(), 3);

	this.target3 = new lib.Символ20();
	this.target3.setTransform(265.9,315.1,1,1,0,0,0,21.6,21.5);
	new cjs.ButtonHelper(this.target3, 0, 1, 2, false, new lib.Символ20(), 3);

	this.target2 = new lib.Символ20();
	this.target2.setTransform(380.6,242.8,1,1,0,0,0,21.6,21.5);
	new cjs.ButtonHelper(this.target2, 0, 1, 2, false, new lib.Символ20(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target2},{t:this.target3},{t:this.target1}]}).wait(1));

	// Слой 1
	this.chel = new lib.sprite73();
	this.chel.setTransform(597.2,219.6,1.077,1.077);

	this.celi = new lib.sprite68();
	this.celi.setTransform(283,227,1.077,1.077);

	this.fon = new lib.sprite54();
	this.fon.setTransform(384.1,203,1.077,1.077);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fon},{t:this.celi},{t:this.chel}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.1,17.9,647.4,400.9);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.text1 = new lib.sprite76();
	this.text1.setTransform(385.7,-171.5,1.077,1.077);

	this.instance = new lib.Символ3();
	this.instance.setTransform(323.6,55.5);
	this.instance.alpha = 0.32;

	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(340,116,1,1,0,0,0,397.5,134.4);

	this.addChild(this.instance_1,this.instance,this.text1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,647.9,400.9);


// stage content:



(lib.atakuy_zamok_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		
		var bodyStyle = document.body.style;
		  bodyStyle.margin = 0;
		  bodyStyle.padding = 0;
		  
		  
		  this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		}
		
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.movieClip_1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.movieClip_1.x = stage.mouseX;
			this.movieClip_1.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		//stage.removeChild(movieClip_1);
		//stage.canvas.style.cursor = "default";
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.cont.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.fon.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.movieClip_1 = new lib.Символ18();
	this.movieClip_1.setTransform(804.6,271.8,1,1,0,0,0,48.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// Слой 3
	this.cont = new lib.Символ23();
	this.cont.setTransform(320.4,82.5,1,1,0,0,0,323.9,114.4);

	this.timeline.addTween(cjs.Tween.get(this.cont).wait(1));

	// Слой 4
	this.fon = new lib.Символ6();
	this.fon.setTransform(12.9,181);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(309,120.1,864.1,400.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;