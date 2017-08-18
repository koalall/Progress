$(function() {
    $('header>.banner> nav>ul>li').mousemove(function() {
        var index = $(this).index();
        $('.list >div').css('display', 'none');
        $('.list .list' + index).css('display', 'block');

    });
    $('.list >div').mouseleave(function() {
        $('.list >div').css('display', 'none');
    });

    var run = null;
    autoplay();
    var i = 1;

    function autoplay() {
        run = setInterval(function() {
            i++;
            move();
        }, 5000);
    }

    function move() {
        if (i == $('.desc>div').length) {
            i = 0;
        }
        $('.desc>div').fadeOut("slow").eq(i).fadeIn();
        $('.big>img').fadeOut("slow").eq(i).fadeIn();

    }

    $('.shadow >div>div').eq(0).click(function() {
        clearInterval(run);
        $('.desc>div').fadeOut('slow');
        $('.desc .tianti').fadeIn('slow');
        $('.big img').fadeOut('slow').eq(1).fadeIn();
        autoplay();

    })
    $('.shadow >div>div').eq(1).click(function() {
        clearInterval(run);
        $('.desc>div').fadeOut('slow');
        $('.desc .check').fadeIn('slow');
        $('.big img').fadeOut('slow').eq(0).fadeIn();
        autoplay();

    })
})