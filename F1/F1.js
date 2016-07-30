var size = $(".pic>li").length;

var i = 0;
$(".left").click(function(){
  i--;
  if(i == -1){
  i = size-1;
  }
  $(".container .content").eq(i).fadeIn(300).siblings().fadeOut(300);
  $(".btn-ul li").eq(i).addClass("but").siblings().removeClass("but");
});

$(".right").click(function(){
  i++;
  if(i == size){
    i = 0;
  }
  $(".container .content").eq(i).fadeIn(300).siblings().fadeOut(300);
  $(".btn-ul li").eq(i).addClass("but").siblings().removeClass("but");
})


$(".btn ul li").hover(function () {
i = $(this).index();
//将hover的元素下标赋值给i以便后面使用
//然后将当前图片用eq索引当前按钮位置，并进入第二张图片
$(".container .content").eq(i).fadeIn().siblings().fadeOut();
// 清除样式
$(this).addClass("but").siblings().removeClass("but");
});

// 定时轮播
function start() {
i++;
if (i > 3)
//如果大于3
    i = 0;
    //就把i初始化为0(转到第一张图片)
$(".container .content").eq(i).fadeIn().siblings().fadeOut();
$(".btn ul li").eq(i).addClass("but").siblings().removeClass("but");
}
setInterval("start()", 3000);
