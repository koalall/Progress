var data = [{
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
    }
];
window.onload = function() {
    var wf = new Waterfall('.history');
    // 初始化
    // wf.init();
    window.onscroll = function() {
        // 获取页面的总高度
        var totalHeight = document.documentElement.scrollHeight;
        // 获取窗口的高度
        var windowHeight = document.documentElement.clientHeight;
        // 获取滚动的高度
        var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
        if (totalHeight - windowHeight - scrollHeight < 600) {
            wf.append(data);
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
                // 每个子项的内容
                var str = `<div class="lazy" data-echo>
                            <img src="${data[num].img}">
                            <div>
                                <h2>${data[num].year}</h2>
                                <p>${data[num].desc}</p>
                            </div>
                        </div>`;
                // 解析字符串为普通DOM
                var obj = that.parseToDOM(str);
                // 将内容追击到页面才可以获取li的各项数据
                that.waterfall.appendChild(obj);
                // 根据obj获取内部的图片数据
                var img = obj.querySelector('img');
                // 图片加载完成，再获取数据
                img.onload = function() {
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