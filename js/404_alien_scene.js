(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 620,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/chelovek.png", id:"chelovek"},
		{src:"images/luch.png", id:"luch"},
		{src:"images/tarelka.png", id:"tarelka"},
		{src:"images/tarelki.png", id:"tarelki"},
		{src:"images/vertolet.png", id:"vertolet"}
	]
};



// symbols:



(lib.chelovek = function() {
	this.initialize(img.chelovek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,284);


(lib.luch = function() {
	this.initialize(img.luch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,397,391);


(lib.tarelka = function() {
	this.initialize(img.tarelka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,131);


(lib.tarelki = function() {
	this.initialize(img.tarelki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,93);


(lib.vertolet = function() {
	this.initialize(img.vertolet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,49);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOEQIAIkJIkGALQgVgPASgRIEKAIIgLkGQAOgVARASIgIEKIEHgLQAUAOgSARIkJgIIALEHQgIAKgJAAQgGAAgJgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.1,-28.1,56.2,56.2);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.chelovek();
	this.instance.setTransform(-82,-141.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82,-141.9,164,284);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,0,0)","#FFFF00"],[0,1],0,68.4,0,-68.3).s().p("Ao+KDIEs0GIIkAAIEtUGg");
	this.shape.setTransform(57.5,64.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115,128.8);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("Aeu+OMg9bA8d");
	this.shape.setTransform(196.7,193.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,397.3,391.1);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.tarelka();
	this.instance.setTransform(-43.6,-19.2,0.293,0.293);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.6,-19.2,87.7,38.4);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B5B5F").s().p("AAqAKIAAgSIAPAAIAAASgAAIAKIAAgSIAPAAIAAASgAgWAJIAAgSIAPAAIAAASgAg4AJIAAgSIAPAAIAAASg");
	this.shape.setTransform(5.7,1.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.5,2.1);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAqAKIAAgSIAPAAIAAASgAAIAKIAAgSIAPAAIAAASgAgWAJIAAgSIAPAAIAAASgAg4AJIAAgSIAPAAIAAASg");
	this.shape.setTransform(5.7,1.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.5,2.1);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-28.1,56.2,56.2);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(12.5,-22.7,1.584,0.174);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-30,-30,60,60);

	// Слой 1
	this.instance_1 = new lib.vertolet();
	this.instance_1.setTransform(-37.8,-24.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.8,-28.6,99.8,53.2);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.luch();
	this.instance.setTransform(-2,-2);

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(196.7,193.5,1,1,0,0,0,196.7,193.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);
	this.instance_1.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance_1.cache(-4,-4,401,395);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-8,413,407);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(5.7,1.1,1,1,0,0,0,5.7,1.1);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-2,-2,16,6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,19,10);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(5.7,1.1,1,1,0,0,0,5.7,1.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).to({alpha:0},7).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(5.7,1.1,1,1,0,0,0,5.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,19,10);


(lib.копияСимвол8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Am0AsQANgXAYgVQAwgqA3gBIJQAAQA4ABAxAqQAXAVANAXg");
	var mask_graphics_34 = new cjs.Graphics().p("Am0AsQANgXAYgVQAwgqA3gBIJQAAQA4ABAxAqQAXAVANAXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:2.4}).wait(34).to({graphics:mask_graphics_34,x:0,y:2.4}).wait(1));

	// Слой 2
	this.instance = new lib.Символ1();
	this.instance.setTransform(-49.9,4.8,1,1,0,0,0,5.7,1.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-2.6},16,cjs.Ease.get(-1)).to({x:50.6},18,cjs.Ease.get(0.97)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,-19.2,87.8,38.4);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.tarelki();
	this.instance.setTransform(-443.2,-3.7);

	// Слой 1
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(-69.6,60.1,0.732,0.732,17.2);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-443.2,-3.7,425.2,93);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол8();
	this.instance.setTransform(79.5,34.9,1.816,1.816,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,rotation:13.1,x:143.6},0).wait(1).to({rotation:11.5,x:201.4},0).wait(1).to({rotation:10,x:252.6},0).wait(1).to({rotation:8.7,x:297.5},0).wait(1).to({rotation:7.5,x:336.6},0).wait(1).to({rotation:6.6,x:370.4},0).wait(1).to({rotation:5.7,x:399.6},0).wait(1).to({rotation:5,x:424.7},0).wait(1).to({rotation:4.4,x:446.3},0).wait(1).to({rotation:3.8,x:465.3},0).wait(1).to({rotation:3.3,x:482.3},0).wait(1).to({rotation:2.9,x:497.5},0).wait(1).to({rotation:2.5,x:511.2},0).wait(1).to({rotation:2.1,x:523.6},0).wait(1).to({rotation:1.8,x:534.9},0).wait(1).to({rotation:1.5,x:545.1},0).wait(1).to({rotation:1.2,x:554.3},0).wait(1).to({rotation:1,x:562.6},0).wait(1).to({rotation:0.8,x:570.1},0).wait(1).to({rotation:0.6,x:576.8},0).wait(1).to({rotation:0.4,x:582.7},0).wait(1).to({rotation:0.2,x:587.9},0).wait(1).to({rotation:0.1,x:592.4},0).wait(1).to({regX:0,rotation:0,x:596},0).wait(33).to({rotation:15,x:1068.2,y:28.6},11,cjs.Ease.get(-1)).to({rotation:0,x:1540.4,y:22.4},11,cjs.Ease.get(0.98)).wait(38).to({regX:0.1,rotation:0.1,x:1545.4},0).wait(1).to({rotation:0.2,x:1550.6},0).wait(1).to({rotation:0.3,x:1556.3},0).wait(1).to({rotation:0.5,x:1562.5},0).wait(1).to({rotation:0.6,x:1569.5},0).wait(1).to({rotation:0.8,x:1577.4},0).wait(1).to({rotation:1,x:1586.4},0).wait(1).to({rotation:1.2,x:1596.5},0).wait(1).to({rotation:1.4,x:1608.2},0).wait(1).to({rotation:1.7,x:1621.8},0).wait(1).to({rotation:2.1,x:1637.5},0).wait(1).to({rotation:2.4,x:1655.9},0).wait(1).to({rotation:2.9,x:1677.5},0).wait(1).to({rotation:3.4,x:1703.4},0).wait(1).to({rotation:4.1,x:1733.8},0).wait(1).to({rotation:4.8,x:1766.5},0).wait(1).to({rotation:5.5,x:1802.3},0).wait(1).to({rotation:6.4,x:1843.2},0).wait(1).to({rotation:7.4,x:1892},0).wait(1).to({rotation:8.7,x:1952.8},0).wait(1).to({rotation:10.4,x:2030.1},0).wait(1).to({rotation:12.4,x:2128.1},0).wait(1).to({regX:0,rotation:15,x:2248.3},0).to({_off:true},1).wait(37));

	// Слой 2
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(592.9,63.1,0.51,0.112,0,0,0,57.5,64.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(1).to({regY:64.4,scaleX:0.72,scaleY:0.49,y:90.6},0).wait(1).to({scaleX:0.85,scaleY:0.74,x:592.8,y:108.4},0).wait(1).to({scaleX:0.93,scaleY:0.87,y:117.8},0).wait(1).to({scaleX:0.96,scaleY:0.93,x:592.9,y:122.8},0).wait(1).to({scaleX:0.98,scaleY:0.97,y:125.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:592.8,y:126.6},0).wait(1).to({scaleX:1,scaleY:1,x:592.9,y:127.8},0).wait(14).to({regY:64.5,scaleX:0.51,scaleY:0.11,y:63.1},7).to({_off:true},1).wait(26).to({_off:false,x:1539.1,y:43.1},0).wait(1).to({regY:64.4,scaleX:0.72,scaleY:0.49,y:70.6},0).wait(1).to({scaleX:0.85,scaleY:0.74,y:88.4},0).wait(1).to({scaleX:0.93,scaleY:0.87,y:97.8},0).wait(1).to({scaleX:0.96,scaleY:0.93,y:102.8},0).wait(1).to({scaleX:0.98,scaleY:0.97,y:105.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:106.6},0).wait(1).to({scaleX:1,scaleY:1,y:107.8},0).wait(14).to({regY:64.5,scaleX:0.51,scaleY:0.11,y:43.1},7).to({_off:true},1).wait(69));

	// Слой 3 - копия: 2
	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(574.2,229,0.088,0.088);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).wait(1).to({rotation:-0.5,y:227},0).wait(1).to({rotation:-1.2,y:224.2},0).wait(1).to({rotation:-2.2,y:220},0).wait(1).to({rotation:-3.7,y:214.1},0).wait(1).to({rotation:-5.9,y:205.4},0).wait(1).to({rotation:-9.2,y:191.7},0).wait(1).to({rotation:-14.8,y:169.3},0).wait(1).to({rotation:-24.4,y:130.4},0).wait(1).to({rotation:-45,y:47.6},0).to({_off:true},1).wait(45).to({_off:false,rotation:0,x:1519.2,y:229},0).wait(1).to({rotation:-0.5,y:227},0).wait(1).to({rotation:-1.2,y:224.2},0).wait(1).to({rotation:-2.2,y:220},0).wait(1).to({rotation:-3.7,y:214.1},0).wait(1).to({rotation:-5.9,y:205.4},0).wait(1).to({rotation:-9.2,y:191.7},0).wait(1).to({rotation:-14.8,y:169.3},0).wait(1).to({rotation:-24.4,y:130.4},0).wait(1).to({rotation:-45,y:47.6},0).to({_off:true},1).wait(77));

	// Слой 3 - копия
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(613.8,229,0.088,0.088);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).wait(1).to({rotation:-0.5,y:227},0).wait(1).to({rotation:-1.2,y:224.2},0).wait(1).to({rotation:-2.2,y:220},0).wait(1).to({rotation:-3.7,y:214.1},0).wait(1).to({rotation:-5.9,y:205.4},0).wait(1).to({rotation:-9.2,y:191.7},0).wait(1).to({rotation:-14.8,y:169.3},0).wait(1).to({rotation:-24.4,y:130.4},0).wait(1).to({rotation:-45,y:47.6},0).to({_off:true},1).wait(45).to({_off:false,rotation:0,x:1558.8,y:229},0).wait(1).to({rotation:-0.5,y:227},0).wait(1).to({rotation:-1.2,y:224.2},0).wait(1).to({rotation:-2.2,y:220},0).wait(1).to({rotation:-3.7,y:214.1},0).wait(1).to({rotation:-5.9,y:205.4},0).wait(1).to({rotation:-9.2,y:191.7},0).wait(1).to({rotation:-14.8,y:169.3},0).wait(1).to({rotation:-24.4,y:130.4},0).wait(1).to({rotation:-45,y:47.6},0).to({_off:true},1).wait(80));

	// Слой 3
	this.instance_4 = new lib.Символ25();
	this.instance_4.setTransform(594.3,229,0.088,0.088);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).wait(1).to({rotation:-0.5,y:227},0).wait(1).to({rotation:-1.2,y:224.2},0).wait(1).to({rotation:-2.2,y:220},0).wait(1).to({rotation:-3.7,y:214.1},0).wait(1).to({rotation:-5.9,y:205.4},0).wait(1).to({rotation:-9.2,y:191.7},0).wait(1).to({rotation:-14.8,y:169.3},0).wait(1).to({rotation:-24.4,y:130.4},0).wait(1).to({rotation:-45,y:47.6},0).to({_off:true},1).wait(45).to({_off:false,rotation:0,x:1539.3,y:229},0).wait(1).to({rotation:-0.5,y:227},0).wait(1).to({rotation:-1.2,y:224.2},0).wait(1).to({rotation:-2.2,y:220},0).wait(1).to({rotation:-3.7,y:214.1},0).wait(1).to({rotation:-5.9,y:205.4},0).wait(1).to({rotation:-9.2,y:191.7},0).wait(1).to({rotation:-14.8,y:169.3},0).wait(1).to({rotation:-24.4,y:130.4},0).wait(1).to({rotation:-45,y:47.6},0).to({_off:true},1).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-19.3,188.7,108.6);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(288.3,47.5,0.554,0.554,0,0,0,0,-0.1);
	this.instance.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2582.9},89).to({_off:true},1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.6,45.4,237.8,51.6);


(lib.Символ5копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол8();
	this.instance.setTransform(79.5,34.9,1.816,1.816,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,rotation:-25.8,x:-78.5,y:34.8},0).wait(1).to({rotation:-22,x:-217.3},0).wait(1).to({rotation:-18.9,x:-334.8},0).wait(1).to({rotation:-16.2,x:-432.4},0).wait(1).to({rotation:-14.1,x:-513.4},0).wait(1).to({rotation:-12.2,x:-581.5},0).wait(1).to({rotation:-10.7,x:-639.8},0).wait(1).to({rotation:-9.3,x:-690.8},0).wait(1).to({rotation:-8.1,x:-736.2},0).wait(1).to({rotation:-7,x:-777.4,y:34.9},0).wait(1).to({rotation:-6,x:-814.7},0).wait(1).to({rotation:-5.1,x:-847.9},0).wait(1).to({rotation:-4.3,x:-877.1},0).wait(1).to({rotation:-3.6,x:-902.5},0).wait(1).to({rotation:-3,x:-924.5},0).wait(1).to({rotation:-2.5,x:-943.5},0).wait(1).to({rotation:-2.1,x:-959.9},0).wait(1).to({rotation:-1.7,x:-974.1},0).wait(1).to({rotation:-1.4,x:-986.3},0).wait(1).to({rotation:-1.1,x:-996.9},0).wait(1).to({rotation:-0.8,x:-1006.1},0).wait(1).to({rotation:-0.6,x:-1014.1},0).wait(1).to({rotation:-0.4,x:-1021.1},0).wait(1).to({rotation:-0.3,x:-1027.3},0).wait(1).to({rotation:-0.1,x:-1032.6},0).wait(1).to({regX:0,rotation:0,x:-1037.6},0).wait(19).to({x:-1037.7},0).to({rotation:-15,x:-1755},12,cjs.Ease.get(-1)).to({rotation:0,x:-2486.4},15,cjs.Ease.get(1)).wait(21).to({x:-2472.3},0).wait(1).to({regX:0.1,rotation:-0.1,x:-2477.7},0).wait(1).to({rotation:-0.2,x:-2485},0).wait(1).to({rotation:-0.3,x:-2494.2},0).wait(1).to({rotation:-0.5,x:-2505.1},0).wait(1).to({rotation:-0.6,x:-2517.9},0).wait(1).to({rotation:-0.9,x:-2532.4},0).wait(1).to({rotation:-1.1,x:-2548.8},0).wait(1).to({rotation:-1.3,x:-2567.2},0).wait(1).to({rotation:-1.6,x:-2587.5},0).wait(1).to({rotation:-1.9,x:-2609.8},0).wait(1).to({rotation:-2.3,x:-2634.1},0).wait(1).to({rotation:-2.7,x:-2660.7},0).wait(1).to({rotation:-3.1,x:-2689.7},0).wait(1).to({rotation:-3.5,x:-2721.1},0).wait(1).to({rotation:-4,x:-2755.3},0).wait(1).to({rotation:-4.5,x:-2792.4},0).wait(1).to({rotation:-5.1,x:-2832.7},0).wait(1).to({rotation:-5.7,x:-2873.9},0).wait(1).to({rotation:-6.3,x:-2916.9},0).wait(1).to({rotation:-6.9,x:-2963.8},0).wait(1).to({rotation:-7.7,x:-3018.5},0).wait(1).to({rotation:-8.7,x:-3085.8,y:34.8},0).wait(1).to({rotation:-9.9,x:-3170.5},0).wait(1).to({rotation:-11.3,x:-3275},0).wait(1).to({rotation:-13.1,x:-3397.9},0).wait(1).to({regX:0,rotation:-15,x:-3535.6,y:34.9},0).to({_off:true},1).wait(30));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("EhRDAbHMA6Kg6JID8D8Mg6KA6Jg");
	var mask_graphics_28 = new cjs.Graphics().p("Ehb8AcCMA8Kg8IIEFEFMg8KA8Ig");
	var mask_graphics_29 = new cjs.Graphics().p("Ehm0Ac9MA+Jg+HIENEOMg+JA+Hg");
	var mask_graphics_30 = new cjs.Graphics().p("EhxsAfBMBAIhAGIEWEWMhAJBAGg");
	var mask_graphics_31 = new cjs.Graphics().p("Ehm0Ac9MA+Jg+HIENEOMg+JA+Hg");
	var mask_graphics_32 = new cjs.Graphics().p("Ehb8AcCMA8Kg8IIEFEFMg8KA8Ig");
	var mask_graphics_33 = new cjs.Graphics().p("EhRDAbHMA6Kg6JID8D8Mg6KA6Jg");
	var mask_graphics_34 = new cjs.Graphics().p("EhRDAbHMA6Kg6JID8D8Mg6KA6Jg");
	var mask_graphics_35 = new cjs.Graphics().p("Ehb8AcCMA8Kg8IIEFEFMg8KA8Ig");
	var mask_graphics_36 = new cjs.Graphics().p("Ehm0Ac9MA+Jg+HIENEOMg+JA+Hg");
	var mask_graphics_37 = new cjs.Graphics().p("EhxsAfBMBAIhAGIEWEWMhAJBAGg");
	var mask_graphics_38 = new cjs.Graphics().p("Ehm0Ac9MA+Jg+HIENEOMg+JA+Hg");
	var mask_graphics_39 = new cjs.Graphics().p("Ehb8AcCMA8Kg8IIEFEFMg8KA8Ig");
	var mask_graphics_40 = new cjs.Graphics().p("EhRDAbHMA6Kg6JID8D8Mg6KA6Jg");
	var mask_graphics_72 = new cjs.Graphics().p("EjAvAbHMA6Lg6JID8D8Mg6LA6Jg");
	var mask_graphics_73 = new cjs.Graphics().p("EjLnAcCMA8Jg8IIEFEFMg8KA8Ig");
	var mask_graphics_74 = new cjs.Graphics().p("EjWgAc9MA+Jg+HIEOEOMg+KA+Hg");
	var mask_graphics_75 = new cjs.Graphics().p("EjhYAfBMBAIhAGIEWEWMhAIBAGg");
	var mask_graphics_76 = new cjs.Graphics().p("EjWgAc9MA+Jg+HIEOEOMg+KA+Hg");
	var mask_graphics_77 = new cjs.Graphics().p("EjLnAcCMA8Jg8IIEFEFMg8KA8Ig");
	var mask_graphics_78 = new cjs.Graphics().p("EjAvAbHMA6Lg6JID8D8Mg6LA6Jg");
	var mask_graphics_79 = new cjs.Graphics().p("EjAvAbHMA6Lg6JID8D8Mg6LA6Jg");
	var mask_graphics_80 = new cjs.Graphics().p("EjLnAcCMA8Jg8IIEFEFMg8KA8Ig");
	var mask_graphics_81 = new cjs.Graphics().p("EjWgAc9MA+Jg+HIEOEOMg+KA+Hg");
	var mask_graphics_82 = new cjs.Graphics().p("EjhYAfBMBAIhAGIEWEWMhAIBAGg");
	var mask_graphics_83 = new cjs.Graphics().p("EjWgAc9MA+Jg+HIEOEOMg+KA+Hg");
	var mask_graphics_84 = new cjs.Graphics().p("EjLnAcCMA8Jg8IIEFEFMg8KA8Ig");
	var mask_graphics_85 = new cjs.Graphics().p("EjAvAbHMA6Lg6JID8D8Mg6LA6Jg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:-518.9,y:-163.8}).wait(1).to({graphics:mask_graphics_28,x:-588.5,y:-31.3}).wait(1).to({graphics:mask_graphics_29,x:-658.2,y:101.1}).wait(1).to({graphics:mask_graphics_30,x:-727.8,y:226.4}).wait(1).to({graphics:mask_graphics_31,x:-658.2,y:101.1}).wait(1).to({graphics:mask_graphics_32,x:-588.5,y:-31.3}).wait(1).to({graphics:mask_graphics_33,x:-518.9,y:-163.8}).wait(1).to({graphics:mask_graphics_34,x:-518.9,y:-163.8}).wait(1).to({graphics:mask_graphics_35,x:-588.5,y:-31.3}).wait(1).to({graphics:mask_graphics_36,x:-658.2,y:101.1}).wait(1).to({graphics:mask_graphics_37,x:-727.8,y:226.4}).wait(1).to({graphics:mask_graphics_38,x:-658.2,y:101.1}).wait(1).to({graphics:mask_graphics_39,x:-588.5,y:-31.3}).wait(1).to({graphics:mask_graphics_40,x:-518.9,y:-163.8}).wait(1).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_graphics_72,x:-1233.6,y:-163.8}).wait(1).to({graphics:mask_graphics_73,x:-1303.3,y:-31.3}).wait(1).to({graphics:mask_graphics_74,x:-1372.9,y:101.1}).wait(1).to({graphics:mask_graphics_75,x:-1442.6,y:226.4}).wait(1).to({graphics:mask_graphics_76,x:-1372.9,y:101.1}).wait(1).to({graphics:mask_graphics_77,x:-1303.3,y:-31.3}).wait(1).to({graphics:mask_graphics_78,x:-1233.6,y:-163.8}).wait(1).to({graphics:mask_graphics_79,x:-1233.6,y:-163.8}).wait(1).to({graphics:mask_graphics_80,x:-1303.3,y:-31.3}).wait(1).to({graphics:mask_graphics_81,x:-1372.9,y:101.1}).wait(1).to({graphics:mask_graphics_82,x:-1442.6,y:226.4}).wait(1).to({graphics:mask_graphics_83,x:-1372.9,y:101.1}).wait(1).to({graphics:mask_graphics_84,x:-1303.3,y:-31.3}).wait(1).to({graphics:mask_graphics_85,x:-1233.6,y:-163.8}).wait(65));

	// Слой 2 - копия
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(-1234.3,228.4,1,1,0,0,0,196.7,193.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({_off:true},14).wait(31).to({_off:false,x:-2663.9},0).to({_off:true},14).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-35.3,172.9,140);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол8();
	this.instance.setTransform(79.5,34.9,1.816,1.816);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41.9},8,cjs.Ease.get(-1)).to({y:49.9},9,cjs.Ease.get(1)).to({y:42.8},8,cjs.Ease.get(-1)).to({y:34.9},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,0,183,69.7);


// stage content:



(lib._404_alien_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.instance = new lib.Символ11();
	this.instance.setTransform(-131.5,437.5,1,1,0,0,0,68.6,34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ5копия();
	this.instance_1.setTransform(1990.6,305.1,0.589,0.589,0,0,0,68.6,34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(450.2,204.2,1.533,1.533,0,0,0,68.6,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(-200,143,1,1,0,0,0,158.8,35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(643.7,460.8,2364.4,341.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;