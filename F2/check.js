// 表单提交时候的验证
$("form").submit(function() {
    // title验证
    var titleLength = $("#title").val().length;
    if (titleLength < 6 || titleLength > 15) {
      alert('标题字数应在6至15位之间');
      return false;
    }
    // 全部正确会显示输入正确
    else {
      var rightMsg = '输入正确';
      alert(rightMsg);
    }
  })
  // 页面加载后没有输入的文本，给提醒文字加的样式
$(document).ready(function() {
    var titleValue = $("input").val();
    var desValue = $("#des").val();
    if (titleValue == "") {
      $("label").addClass("label-down");
    }
    if (desValue == "") {
      $("label").addClass("label-down");
    }
  })
  // focus和blur时提醒文字的动画
$(".input").focus(function() {
  $(this).siblings(".input-label").removeClass("label-down");
})
$(".input").blur(function() {
  if ($(this).val() == "") {
    $(this).siblings(".input-label").addClass("label-down");
  }
})
$(".textarea").focus(function() {
  $(this).siblings(".textarea-label").removeClass("label-down");
})
$(".textarea").blur(function() {
  if ($(this).val() == "") {
    $(this).siblings(".textarea-label").addClass("label-down");
  }
})
