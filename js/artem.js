$(document).ready(function(){
   console.log($(window).width());
    if ($(window).width()<667) {
        $('.flow-form').remove();
        $('.logo ').remove();
    };
    if ($(window).width()>666) {
        $('.box-small-image').remove();
    };


   if ($(window).width()<667){
        $('.inside-swf').remove();
        $('.inside-preloader').remove();
        $(".inside-image").removeClass("class-hide");
   }
   else{

        if($('#video-box').length!=0){
            var vid = document.getElementById("video-box");
                vid.oncanplay = function() {
                    $(".inside-preloader").addClass("class-hide");
                    $(".inside-swf").removeClass("class-hide");
                console.log("load");
                };
        }
    }
})