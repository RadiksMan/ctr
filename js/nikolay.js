function drawCanvas(){

    var canvas, stage, exportRoot;

    //

    var canvas1, stage1, exportRoot1;

    function init1() {
        canvas1 = document.getElementById("canvas1");
        exportRoot1 = new lib1.logo_index();

        stage1 = new createjs.Stage(canvas1);
        stage1.addChild(exportRoot1);
        stage1.update();

        createjs.Ticker.setFPS(lib1.properties.fps);
        createjs.Ticker.addEventListener("tick", stage1);
    }

    //

    function init() {
        canvas = document.getElementById("canvas");
        images = images||{};

        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(lib.properties.manifest);

    }

    function handleFileLoad(evt) {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }

    function handleComplete() {
        exportRoot = new lib.index();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }

    init1();
    init();
}


$(window).load(function(){
    drawCanvas();
});