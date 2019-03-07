$(function () {
    $(document).snowfall('clear');
    $(document).snowfall({
        image: "./imgs/xin1.png",
        flakeCount: 30,
        minSize: 5,
        maxSize: 22
    });
    // 改变掉落的图片样式
    var imgs = ["./imgs/xin.png", "./imgs/xin1.png", "./imgs/huaban.png"]
    var num =0;
    setInterval(function(){
        ++num;
        if(num>2){
            num=0
        }
        $(document).snowfall('clear');
        $(document).snowfall({
            image: imgs[num],
            flakeCount: 30,
            minSize: 5,
            maxSize: 22
        });
    },10000)
    // setInterval(() => {
        
    // }, 30000);
    
    

    //改变盒子阴影颜色  七色彩虹色  随机
    var colors = ["#F00", "#F60", "#FF0", "#E71B64", "#699", "#06C", "#909"]
    setInterval(function () {
        var n = Math.floor(Math.random() * 7)
        $(".box .boxcont>.img").css({
            "box-shadow": "0px 0px  20px 10px" + colors[n]
        })
    }, 500)
    //爱的宣言
    var i = -1;
    var str = "能够遇见你是我最大的幸运，有了你生活变得丰富多彩，有了你，世界变得如此迷人；你是我的世界，我的世界是你，对我来说，不是在最美好的时光遇见了你，而是遇见你后都是最美好的时光！";
    setInterval(function () {
        i++;
        var conts = document.getElementsByClassName('txts')[0];
        conts.innerHTML += str.charAt(i)
    }, 100)

    //宣言结束后开启魔方动画
    setTimeout(() => {
        $('.box .boxcont').css({
            "display": "block"
        })
    }, 9000);
});





