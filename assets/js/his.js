var data = [{
        "id": 0,
        "year": "十八世纪",
        "desc": "一家制表企业的诞生",
        "extr": 'year'
    },
    {
        "id": 1,
        "img": "assets/image/his/1755-1-sm_bg.jpg",
        "year": "1755",
        "desc": "江诗丹顿的诞生年份"
    },
    {
        "id": 2,
        "img": "assets/image/his/1755-2_bg.jpg",
        "year": "1755",
        "desc": "江诗丹顿的诞生年份"
    },
    {
        "id": 3,
        "img": "assets/image/his/1785_bg.jpg",
        "year": "1785",
        "desc": "江诗丹顿的诞生年份"
    },
    {
        "id": 4,
        "img": "assets/image/his/1790_bg.jpg",
        "year": "1790",
        "desc": "江诗丹顿的诞生年份"
    }, {
        "id": 5,
        "year": "十九世纪",
        "desc": "“悉力以赴，精益求精”",
        "extr": 'year'
    }, {

        "id": 6,
        "img": "assets/image/his/1810_bg.jpg",
        "year": "1810",
        "desc": "Jean-Marc Vacheron<br>之孙接班"
    }, {

        "id": 7,
        "img": "assets/image/his/1819_bg.jpg",
        "year": "1819",
        "desc": "与Francois Constantin合作"
    }, {

        "id": 8,
        "img": "assets/image/his/1824-1_bg.jpg",
        "year": "1824",
        "desc": "跳时表"
    }, {

        "id": 9,
        "img": "assets/image/his/1824-2_bg.jpg",
        "year": "1824",
        "desc": "蓝色发廊意大利地图腕表"
    }, {

        "id": 10,
        "img": "assets/image/his/1832_bg.jpg",
        "year": "1832",
        "desc": "北美洲第一位销售代表"
    }, {

        "id": 11,
        "img": "assets/image/his/1839-sm_bg.jpg",
        "year": "1839",
        "desc": "比例绘图仪带来了技术复兴"
    },
];
window.onload = function() {
    // window.onscroll = function() {
    //     console.log(document.body.scrollTop);

    // }


    var wf = new Waterfall('.history');
    // 初始化
    // wf.init();
    window.onscroll = function() {
        if (document.body.scrollTop > 577) {
            $('.hisbodyt').css({ 'position': 'fixed', 'top': '0', 'left': '0' });
        } else {
            $('.hisbodyt').css('position', 'relative');
        }

        // 获取页面的总高度
        var totalHeight = document.documentElement.scrollHeight;
        // 获取窗口的高度
        var windowHeight = document.documentElement.clientHeight;
        // 获取滚动的高度
        var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
        if (totalHeight - windowHeight - scrollHeight < 600) {
            console.log(totalHeight - windowHeight - scrollHeight);
            if ($('.history>div').length > data.length - 4) {
                return;
            } else {
                wf.append(data);

            }
        }
    }

    function Waterfall(selector) {
        this.waterfall = document.querySelector(selector);
        this.append = function(data) {
            // 初始化数据的索引
            var num = 0;
            var that = this;
            run();

            function run() {
                var str;
                console.log(data[num].extr);
                console.log(num);

                if (data[num].extr == 'year') {
                    str = `<div class="year">
                            <i></i>
                            <h2>${data[num].year}</h2>
                            <p>${data[num].desc}</p>
                            <i></i>
                        </div>`;
                } else {
                    // 每个子项的内容
                    str = `<div>
                            <img src="${data[num].img}">
                            <div>
                                <h2>${data[num].year}</h2>
                                <p>${data[num].desc}</p>
                            </div>
                        </div>`;
                }

                // 解析字符串为普通DOM
                var obj = that.parseToDOM(str);
                // 将内容追击到页面才可以获取li的各项数据
                that.waterfall.appendChild(obj);
                // run();
                if (obj.contains(img)) {
                    // 根据obj获取内部的图片数据
                    var img = obj.querySelector('img');
                    // 图片加载完成，再获取数据
                    img.onload = function() {
                        num++;
                        if (num <= data.length - 1) {
                            run();
                        }
                    }
                } else {
                    num++;
                    if (num <= data.length - 1) {
                        run();
                    }
                }
            }
        };
        // 解析HTML字符串为对象
        this.parseToDOM = function(str) {
            var div = document.createElement("div");
            if (typeof str == "string")
                div.innerHTML = str;
            return div.children[0];
        };

    }
}