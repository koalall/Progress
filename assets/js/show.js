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

    // 小图移动事件
    $('.wshowsmall a').hover(function() {
        $('.wshowsmall a').css('opacity', '1');
        $('.wshowsmall a').not($(this)).css('opacity', '0.8');
    })

    // 点击小图 切换大图
    $('.wshowsmall a').click(function() {
        var m = $(this).index();
        $('.wshow >div').css('margin-left', '-150px');
        $('.wshowbig a').hide();
        $('.wshowsmall a').hide();
        $('.shop').hide();
        $('.wshowbig a').eq(m).fadeIn(function() {
            $('.wshowbig').animate({
                'margin-left': '0px'
            }, 800, function() {
                $('.shop').fadeIn(function() {
                    $('.wshowsmall a').not($('.wshowsmall a').eq(m)).fadeIn(function() {
                        $('.wshowsmall a').css('opacity', '1');
                        $('.wshowsmall').animate({
                            'margin-left': '125px'
                        }, 400)
                    });
                })
            })
        })
    });

    // 点击侧边栏图片 显示img 大图

    $('.wshowbig').click(function() {
        $('.container').hide();
        $('.another').show();
        top()
    })

    $('.wssmall').click(function() {
        $('.container').hide();
        $('.another').show();
        bottom();
    })

    $('.atype').click(function() {
        top();
    })

    $('.adetial').click(function() {
        bottom();
    })

    $('.close').click(function() {
        $('.another').hide();
        $('.container').show();
    })

    // 移动鼠标  改变img位置

    $('.another').mousemove(function(e) {
        console.log(e.pageY);
        var X = (e.pageX / 782) * 320;
        var Y = (e.pageY / 130) * 260;
        $('.another>img').css({ 'margin-left': -X + 'px', 'margin-top': -Y + 'px' });
    })

    function top() {
        $('.another>img').attr('src', './assets/image/watch/image.scale.2000.2000.1489408770449.jpeg');
    }

    function bottom() {
        $('.another>img').attr('src', './assets/image/watch/image.scale.2000.2000.1489408770479.jpeg');
    }


})