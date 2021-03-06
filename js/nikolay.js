

    var canvas, stage, exportRoot;

    //
    var canvas4, stage4, exportRoot4;

    function init4() {
        canvas4 = document.getElementById("canvas4");
        images4 = images4||{};

        var loader4 = new createjs.LoadQueue(false);
        loader4.addEventListener("fileload", handleFileLoad4);
        loader4.addEventListener("complete", handleComplete4);
        loader4.loadManifest(libb.properties.manifest);
    }

    function handleFileLoad4(evt) {
        if (evt.item.type == "image") { images4[evt.item.id] = evt.result; }
    }

    function handleComplete4() {
        exportRoot4 = new libb.zombie();
        stage4 = new createjs.Stage(canvas4);
        stage4.addChild(exportRoot4);
        stage4.update();
        createjs.Ticker.setFPS(libb.properties.fps);
        createjs.Ticker.addEventListener("tick", stage4);
    }


    var canvas3, stage3, exportRoot3;
    function init3() {
        canvas3 = document.getElementById("canvas3");
        images3 = images3||{};

        var loader3 = new createjs.LoadQueue(false);
        loader3.addEventListener("fileload", handleFileLoad3);
        loader3.addEventListener("complete", handleComplete3);
        loader3.loadManifest(lib3.properties.manifest);
    }
    function handleFileLoad3(evt) {
             if (evt.item.type == "image") { images3[evt.item.id] = evt.result;}
        }

    function handleComplete3() {
        exportRoot3 = new lib3.index();
        stage3 = new createjs.Stage(canvas3);
        stage3.addChild(exportRoot3);
        stage3.update();

        createjs.Ticker.setFPS(lib3.properties.fps);
        createjs.Ticker.addEventListener("tick", stage3);
    }





    var canvas2, stage2, exportRoot2;
    function init2() {
        canvas2 = document.getElementById("canvas2");
        images2 = images2||{};

        var loader2 = new createjs.LoadQueue(false);
        loader2.addEventListener("fileload", handleFileLoad2);
        loader2.addEventListener("complete", handleComplete2);
        loader2.loadManifest(lib2.properties.manifest);

    }
    function handleFileLoad2(evt) {
            if (evt.item.type == "image") { images2[evt.item.id] = evt.result; }
        }

    function handleComplete2() {
            exportRoot2 = new lib2.index();
            stage2 = new createjs.Stage(canvas2);
            stage2.addChild(exportRoot2);
            stage2.update();

            createjs.Ticker.setFPS(lib2.properties.fps);
            createjs.Ticker.addEventListener("tick", stage2);
    }



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

var canvas99, stage99, exportRoot99;

function init99() {
    canvas99 = document.getElementById("404_page");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad99);
    loader.addEventListener("complete", handleComplete99);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad99(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete99(evt) {
    exportRoot99 = new lib._404_alien_scene();

    stage99 = new createjs.Stage(canvas99);
    stage99.addChild(exportRoot99);
    stage99.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage99);
}



$(window).load(function(){
     init1();
     if(($('#canvas').length)>0 && $(window).width()>1280){init();};
     if(($('#canvas2').length)>0){init2();};
     if(($('#canvas3').length)>0){init3();};
     if(($('#canvas4').length)>0){init4();};
     if(($('#404_page').length)>0){init99();};
});
$(document).ready(function() {
    $('.red_section_button a').click(function(event) {
        event.preventDefault();
        scrollToContacts();
    });
    $('header .block-nav ul li:last-child').click(function(event) {
        event.preventDefault();
        scrollToContacts();
    });
});
function scrollToContacts(){
    var scrlr =$('.blue-form-wrapper').offset().top;
    var body = $("body, html");
    body.animate({scrollTop:scrlr}, '800');
}