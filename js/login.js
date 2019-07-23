$(function(){
	
	$(document).ready(function(){
		$("#xiala1").mouseover(function(){
			$("#login1").show(500);
		}).click(function(){
			$("#login1").hide(500);
		});
	})
	
	$(document).ready(function(){
		$("#login").click(function(){
			$("#sjdl").show(500);
		});
		$("#guanbi").click(function(){
			$("#sjdl").hide(500);
		});
	})
	
	$("#shouji").keydown(function(){
		$(".dl").css("background-color","black");
	}).keyup(function(){
		$(".dl").css("background-color","red");
	}).keypress(function(){
		$(".dl").css({"background-color":"yellow","color":"blue"});
	})
	
	
	$(".dl").click(function(){
		var sj=$("#shouji");
		var pas=$(".pas");
		if(sj.val()==""){
			alert("手机号码不能为空！");
			return false;
		}
		else if(sj.val().length<11){
			alert("请输入11位手机号码！");	
			return false;
		}
		else if(pas.val()==""){
			alert("密码不能为空！");
			return false;
		}
		else if(pas.val().length<6){
			alert("请输入完整的密码！");	
			return false;
		}
	});
})
