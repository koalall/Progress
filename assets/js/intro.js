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

    // ==============================     intro     start    =============================

    // 点击切换主体部分
    $('.intropic a').click(function() {
        $('header').slideUp('slow', function() {
            $('.intropic').animate({
                top: '-662px'
            }, 1000);

        });
        $('footer').hide();
    })

    $('.intros>a').click(function() {
        $('header').slideDown('slow', function() {
            $('.intropic').animate({
                top: '0px'
            }, 1000);
        });
        $('footer').show();
    })

    // 划过a 更改背景图片  introl

    $('.intros li a').hover(function() {
        var n = $(this).parent().index();
        $('.introl').css({ 'background': 'url("../assets/image/intro/engraver' + n + '.jpg") no-repeat', 'background-size': 'cover' });
    }, function() {
        $('.introl').css('background', 'url("../assets/image/intro/background-poster.jpg")  -277px -338px');
    })

    // intror
    // intror  点击事件
    $('.intror a').click(function() {
        $('.hid').fadeOut(function() {
            $('.introl').animate({
                width: '260px'
            }, 'slow', function() {
                $('.intror').animate({
                    width: '1086px'
                }, 'slow')
            })
        })
        $('#slider').show();
    })

    $('#slider').click(function() {
        $('.hid').fadeIn(function() {
            $('.intros>div').animate({
                width: '50%'
            }, 'slow')
        })
        $('#slider').hide();
    })

    // 滚动事件
    $('.intror>div').scroll(function() {
        // 获取.intror>div内滚动的距离
        var sTop = $(this).scrollTop();

        // 获取.intror>div的总高度(包含滚动的高度)
        var sHeight = $(this).get(0).scrollHeight;

        var top = sTop / sHeight * $('.scroll').height();

        if (top >= $('.scroll').height()) {
            top = $('.scroll').height();
        }
        console.log(top);

        $('.scroll>div').css('top', top);
        $('.scrollpic').css('top', top + 51);
    })

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });

    // ==============================     intro     end    =============================

})