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
  // label动画

// function myFunction(){
//   var titleLength = $("#title").val().length;
//   if (titleLength=="") {
//     document.getElementById("titlelabel").className = "label-down";
//   }
//   else {
//     return false;
//   }
// }

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
  // title
$("#title").focus(function() {
  $("#titlelabel").removeClass("label-down");
})
$("#title").blur(function() {
    $("#titlelabel").addClass("label-down");
  })
  // price
$("#price").focus(function() {
  $("#pricelabel").removeClass("label-down");
})
$("#price").blur(function() {
    $("#pricelabel").addClass("label-down");
  })
  // location
$("#location").focus(function() {
  $("#locationlabel").removeClass("label-down");
})
$("#location").blur(function() {
    $("#locationlabel").addClass("label-down");
  })
  // description
$("#des").focus(function() {
  $("#deslabel").removeClass("label-down");
})
$("#des").blur(function() {
  $("#deslabel").addClass("label-down");
})
