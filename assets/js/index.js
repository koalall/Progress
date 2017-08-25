$(function() {

    //  公共部分 头部开始 
    $('header>.banner> nav>ul>li').mousemove(function() {
        var index = $(this).index();
        $('.list >div').css('display', 'none');
        $('.list .list' + index).css('display', 'block');
    });
    $('.list >div').mouseleave(function() {
        $('.list >div').css('display', 'none');
    });

    //  公共部分 头部结束


    // ==============================     index     start      =============================

    // index 轮播动画开始
    var run = null;
    autoplay();
    var i = 1;

    function autoplay() {
        run = setInterval(function() {
            i++;
            move();
        }, 8000);
    }

    function move() {
        if (i == $('.desc>div').length) {
            i = 0;
        }
        $('.desc>div').hide();
        $('.desc>div i').css({ width: '0%' });
        $('.desc>div h1').css({ opacity: 0, 'line-height': 0 });
        $('.desc>div p').css({ opacity: 0, height: 0 });
        $('.desc>div div').css({ 'display': 'none', 'margin-top': '40px' });
        $('.big>img').fadeOut('slow').eq(i).fadeIn(1000);
        $('.desc>div').fadeOut("slow", function() {
            $('.desc>div:eq(' + i + ')').fadeIn('fast', function() {
                $('.desc>div:eq(' + i + ') i').animate({
                    width: "100%"
                }, 500, function() {
                    $('.desc>div:eq(' + i + ') h1').animate({
                        opacity: 1,
                        'line-height': '29px'
                    }, 500)
                    $('.desc>div:eq(' + i + ') p').animate({
                        opacity: 1,
                        'height': '72px'
                    }, 500, function() {
                        $('.desc>div:eq(' + i + ') div').fadeIn().animate({
                            // 'display': 'block',
                            'margin-top': '20px'
                        }, 'fast')
                    })
                });
            });
        })
    }

    $('.shadow >div>div').click(function() {
        clearInterval(run);
        var index = $(this).index();
        i = index;
        move();
    })
    // ==============================     index     end       =============================
})