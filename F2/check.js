// 表单提交时候的验证
$("form").submit(function(){
  // title验证
  var titleLength = $("#title").val().length;
    if(titleLength < 6){
    var wrongMsg1 = '标题不得少于六位';
    alert(wrongMsg1);
    return false;
  }
  // 全部正确会显示输入正确
      else {
        var rightMsg = '输入正确';
        alert(rightMsg);
      }
  })
