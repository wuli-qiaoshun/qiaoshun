$(function(){
	
	$(document).ready(function(){
		$("#xiala1").mouseover(function(){
			$("#login1").show(500);
		}).click(function(){
			$("#login1").hide(500);
		});
	})
	
	$(".xieyi").click(function(){
		if($("#name").val()==""){
			alert("姓名不能为空！");
			return false;
		}
		if($("#pwd").val().length<6){
			alert("密码不能小于6位");
			return false; 	
		}
		if($("#shouji").val().length<11){
			alert("手机号码不能小于11位");
			return false; 
		}
	})
	
	$(document).ready(function(){
		
		$("#pwd").blur(function(){
			var pwd=$("#pwd").val();
			if(pwd.length>=6 && pwd.length<=9){
				$("#qiang_1").addClass("ruo");
				
			}
			else if(pwd.length>9 && pwd.length<=12){
				$("#qiang_1").removeClass("ruo");
				$("#qiang_2").addClass("ruo");
			}
			else if(pwd.length>12 && pwd.length<=16){
				$("#qiang_2").removeClass("ruo");
				$("#qiang_3").addClass("ruo");
			}
			else{
				$("#qiang_1").removeClass("ruo");
				$("#qiang_2").removeClass("ruo");
				$("#qiang_3").removeClass("ruo");
			}
		})	
	})
	
	$("#huoqu").click(function(){
		var num=Math.floor(Math.random()*1000000+6);
		$("#yanzheng").val(num);
	})
})