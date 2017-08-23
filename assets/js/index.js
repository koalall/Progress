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


    // ==============================     list     start      =============================

    // list 点击 筛选 多选框效果 开始

    $('.list-show .choose li').click(function() {
        var index = $(this).index();
        if ($(this).find('span input').prop('checked')) {
            $('.list-show .choose  li').not(this).find('span input').prop({ checked: false });
            $('.list-show .choose  li').not(this).find('span').css('background-position', '0 0');
            $(this).find('span').css('background-position', '-36px -320px');
        } else {
            $('.list-show .choose li span').css('background-position', '0 0');
        }
    })

    //  大图展示 开始
    showautoplay();
    var j = 0;

    function showautoplay() {
        setInterval(function() {
            j++;
            showmove();
        }, 4000);
    }

    function showmove() {
        if (j == $('.list-show .pic ul li').length) {
            j = 0;
        }
        $('.list-show .pic ul li').fadeOut('slow').eq(j).slideDown(1500);
        $('.list-show .pic ol li').removeClass().eq(j).addClass('active');
        $('.list-show .pic div').fadeOut().fadeIn();
    }

    // 获取json文件 读取到页面
    loadInfo();

    function loadInfo() {
        $.getJSON('assets/js/list.json', function(data) {
            var jsontip = $("#jsontip");
            var strHtml = "";
            $.each(data, function(key, value) {
                strHtml += `<li class="showsmall">
                                <a href="./show.html">
                                    <div>
                                        <img src="${value.img}">
                                        <img src="assets/image/watch/result-picto_poincon.png">
                                            <i></i>
                                            <h2>${value.title}</h2>
                                            <p>${value.data}</p>
                                            <span>探索</span>
                                    </div>
                                </a>
                            </li>`;
            })
            jsontip.append(strHtml); //显示处理后的数据 
        })
    }

    // ==============================     list     end       =============================


    // ==============================     show     start       =============================

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


    // ==============================     show     end       =============================


    // ==============================     login     start    =============================

    // 语言选择
    $('.login-language>a').click(function() {
        if ($('.login-language>ul').css('display') == 'none') {

            $('.login-language>ul').css('display', 'block');
        } else {
            $('.login-language>ul').css('display', 'none');

        }
    })
    $('.login-language>ul li a').click(function() {
        $('.login-language>span').text($(this).text());
    })

    // 记住密码
    $('.login .memr input').click(function() {
        if ($(this).prop('checked')) {
            $('.login .memr span').css('background-position', '-35px -319px');
        } else {
            $('.login .memr span').css('background-position', '0 0');
        }
    })

    // ==============================     login     end    =============================

    // ==============================     reg     start    =============================

    // 同意条款
    $('.ad input').click(function() {
        if ($(this).prop('checked')) {
            $(this).parent().css('background-position', '-35px -319px');
        } else {
            $(this).parent().css('background-position', '0 0');
        }
    })

    // ==============================     reg     end    =============================


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

    // 点击a 更改背景图片

    $('.intros li a').hover(function() {
        var n = $(this).parent().index();
        $('.introl').css({ 'background': 'url("../assets/image/intro/engraver' + n + '.jpg") no-repeat', 'background-size': 'cover' });
    }, function() {
        $('.introl').css('background', 'url("../assets/image/intro/background-poster.jpg")  -277px -338px');
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

    // ==============================     intro     end    =============================



})