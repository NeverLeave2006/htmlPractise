function checkLoginin(){
    var a=$("#name").val();
    var b=$("#sm").val();
    if(a==""){
        $("<p id='info1'>用户名不能为空</p>").appendTo("#info");
        $("#info").addClass("warning");
    }else
    {
        alert(a);
    }
    if(b==""){
        alert('密码不能为空');
    }else
    {
        alert(b);
    }    
}