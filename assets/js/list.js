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



    // ==============================     list     start      =============================

    // list 点击 筛选 多选框效果 开始

    $('.list-show .choose li').click(function() {
        var index = $(this).index();
        if ($(this).find('span input').prop('checked')) {
            $('.list-show .choose  li').not(this).find('span input').prop({ checked: false });
            $('.list-show .choose  li').not(this).find('span').css('background-position', '0 0');
            $(this).find('span').css('background-position', '-36px -320px');

            var shaixuan = $(this).text()
            loadfilter(shaixuan);
        } else {
            $('.list-show .choose li span').css('background-position', '0 0');
            var jsontip = $("#jsontip");
            jsontip.html("<li class='showbig'><a href=''><div class='pic'><ul><li><img src='assets/image/watch/image.scale.325.575.1502904036245.png'><img src='assets/image/watch/highlight-poincon.png'></li><li><img src='assets/image/watch/image.scale.325.575.1502904334381.png'><img src='assets/image/watch/highlight-poincon.png'></li></ul><ol><li class='active'></li><li></li></ol><div><h2>PATRIMONY传承系列小型号</h2><p>{ 4100U/000R-B180 }</p><span>探索</span></div></div></a></li>");
            loadInfo();
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

    function loadfilter(shaixuan) {
        $.getJSON('assets/js/list.json', function(data) {
            var jsontip = $("#jsontip");
            var strHtml = "";
            $.each(data, function(key, value) {
                if (value.desc.match(shaixuan)) {
                    console.log(value);
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
                }
            })
            jsontip.html(strHtml); //显示处理后的数据 
        })
    }
})