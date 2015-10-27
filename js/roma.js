
function typedtext(){
    $(".typed").typed({
        strings: strings,
        typeSpeed: 1, // скорость набора
        backSpeed: 1, // скорость удаления текста
        startDelay: 0, // изначальная задержка перед набором
        backDelay: 500, // пауза перед удалением текста
        loop: true, // повтор (true или false)
        loopCount: false, // число повтором, false = бесконечно
        showCursor: true,
        attr: null, // атрибут
        callback: function(){} // функция, которая вызовется после окончания работы плагина
    });
};

function removeTitleVideo(){
    $(document).on('click','.vjs-big-play-button',function(){
        $('.video-desc').fadeOut();
    });
    $(document).on('click', '.vjs-user-active', function(){
        $('.video-desc').fadeOut();
    });
}

function validationCall(form){

  var thisForm = $(form);
  var formSur = $('.blue-form-valid').serialize();

    $.ajax({
        url : thisForm.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            if ( data.trim()!='true') {
                thisForm.trigger("reset");
                popNext();
            }
            else {
               $(this).trigger('reset');
            }

        }
    });

    function popNext(){
    $.fancybox.open("#call_success",{
        padding:0,
        fitToView:false,
        wrapCSS:"call-popup",
        autoSize:true,
        afterClose: function(){
            clearTimeout(timer);
        }
    });
    var timer = null;

    timer = setTimeout(function(){
        $.fancybox.close("#call_success");
    },2000);
    $('form').trigger("reset");
}
}

function ourworkhover(){
    var Timer = 0;
    var animation = false;

    $('.our-work-item').hover(function(){
         var curritem = $(this);
        if (animation == false) {
            animation = true;
            curritem.addClass('active-work');
        }else{
            console.log('sadf');
            setTimeout(function(){
                animation = true;
                curritem.addClass('active-work');
                },500);
        }

    },
    function(){
        var curritem = $(this);
        setTimeout(function(){
            curritem.removeClass('active-work');
            animation = false;
        }, 500);

    }
    );
}


$(document).on('mouseenter', '.vjs-big-play-button', function(){
    $('.vjs-big-play-button .vjs-control-text').addClass('video-circle-anim');
    $('.vjs-big-play-button').addClass('video-circle');
});
$(document).on('mouseleave', '.vjs-big-play-button', function(){
    $('.vjs-big-play-button .vjs-control-text').removeClass('video-circle-anim');
    $('.vjs-big-play-button').removeClass('video-circle');
});
$(document).ready(function(){
	typedtext();
    removeTitleVideo();
    validate('.blue-form-valid', {submitFunction:validationCall});

    $(".recomendation-link a").fancybox({
        fitToView       :   false,
        autoSize        :   true
    });
    ourworkhover();
});
$(window).load(function(){
    $('#my-video').append('<p class="video-desc">Видео о студии ctr.design</p>');
});
