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
    // index 轮播动画结束

    // list 点击 筛选 多选框效果

    $('.list-show .choose li').click(function() {
        var index = $(this).index();
        if ($(this).find('span input').prop('checked')) {
            $('.list-show .choose  li').not(this).find(' span input').prop({ checked: false });
            $('.list-show .choose  li').not(this).find(' span').css('background-position', '0 0');
            $(this).find('span').css('background-position', '-36px -320px');
            console.log(index);
        } else {
            $('.list-show .choose li span').css('background-position', '0 0');
        }
    })

    $.getJSON('assets/js/list.json', function(data) {
        var $jsontip = $("#jsontip");
        var strHtml = "123"; //存储数据的变量 
        $jsontip.empty(); //清空内容 
        $.each(data, function(key, value) {
            console.log(`$ { value.img }`);
            var img = value.img;

            strHtml += `<li class="showsmall">
                                <a href="">
                                    <div>
                                        <img src="assets/image/watch/image.scale.161.263.1489408770449.png">
                                        <img src="assets/image/watch/result-picto_poincon.png">
                                        <div>
                                            <i></i>
                                            <h2>PATRIMONY传承系列1731超薄机芯</h2>
                                            <p>{ 30110/000P-B089 }</p>
                                            <span>探索</span>
                                        </div>
                                    </div>
                                </a>
                            </li>`;
        })
        $jsontip.html(strHtml); //显示处理后的数据 
    })

})