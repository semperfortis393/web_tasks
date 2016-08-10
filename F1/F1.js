var size = $(".pic>li").length;
var i = 0;
$(".left").click(function() {
    i--;
    if (i == -1) {
        i = size - 1;
    }
    $(".container .content").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".btn-ul li").eq(i).addClass("but").siblings().removeClass("but");
});

$(".right").click(function() {
    i++;
    if (i == size) {
        i = 0;
    }
    $(".container .content").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".btn-ul li").eq(i).addClass("but").siblings().removeClass("but");
});

// 显示隐藏左右按钮
$(".container").mouseenter(function() {
    $(".left").animate({
        opacity: '1',
    });
    $(".right").animate({
        opacity: '1',
    });
});
$(".container").mouseleave(function() {
    $(".left").animate({
        opacity: '0',
    });
    $(".right").animate({
        opacity: '0',
    });
});


$(".btn ul li").hover(function() {
    i = $(this).index();
    //将hover的元素下标赋值给i以便后面使用
    //然后将当前图片用eq索引当前按钮位置，并进入第二张图片
    $(".container .content").eq(i).fadeIn().siblings().fadeOut();
    // 清除样式
    $(this).addClass("but").siblings().removeClass("but");
});

// 定时轮播
function start() {
    timer = setInterval(function() {
        i++;
        if (i > size - 1)
            i = 0;
        //就把i初始化为0(转到第一张图片)
        $(".container .content").eq(i).fadeIn().siblings().fadeOut();
        $(".btn ul li").eq(i).addClass("but").siblings().removeClass("but");
    }, 3000);
}
start();

//鼠标悬停的时候停止轮播
$(".container").hover(function() {
    clearInterval(timer);
}, start);
