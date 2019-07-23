$(function(){
	var t;
	var index=0;
	function lunbo(){
		t=setInterval(play,3000)//定时器，循环
		function play(){
			index++;
			if(index>5){
				index=0;
			}
			$("#scroll_img li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		};
	}
	lunbo();
	$("#scroll_img").mouseover(function(){
		clearInterval(t);
	});
	$("#scroll_img").mouseout(function(){
		lunbo();
	})
	
	
	$(document).ready(function(){
		$("#xiala").click(function(){
			$("#geren").toggle(1000);
		})	
	})
	
	
	
		$("#scale").click(function(){
			if(!$(".bianji_bot_img img").hasClass("aaaa")){
				$(".bianji_bot_img img").addClass("aaaa");
				$(".bianji_bot_img img").removeClass("bbbb");
				$(".bianji_bot_img img").removeClass("cccc");
				$(".bianji_bot_img img").removeClass("dddd");
			}
		});
		$("#rotate").click(function(){
			if(!$(".bianji_bot_img img").hasClass("bbbb")){
				$(".bianji_bot_img img").addClass("bbbb");
				$(".bianji_bot_img img").removeClass("aaaa");
				$(".bianji_bot_img img").removeClass("cccc");
				$(".bianji_bot_img img").removeClass("dddd");
			}
		});
		$("#skew").click(function(){
			if(!$(".bianji_bot_img img").hasClass("cccc")){
				$(".bianji_bot_img img").addClass("cccc");
				$(".bianji_bot_img img").removeClass("bbbb");
				$(".bianji_bot_img img").removeClass("aaaa");
				$(".bianji_bot_img img").removeClass("dddd");
			}
		});
		$("#translate").click(function(){
			if(!$(".bianji_bot_img img").hasClass("dddd")){
				$(".bianji_bot_img img").addClass("dddd");
				$(".bianji_bot_img img").removeClass("bbbb");
				$(".bianji_bot_img img").removeClass("cccc");
				$(".bianji_bot_img img").removeClass("aaaa");
			}
		});
	
	
	$(document).ready(function(){
		$("#1").mouseover(function(){
			$("#11").show();
			
		}).mouseout(function(){
			$("#11").hide();
		})
	})
	$(document).ready(function(){
		$("#2").mouseover(function(){
			$("#12").show();
			
		}).mouseout(function(){
			$("#12").hide();
		})
	})
	$(document).ready(function(){
		$("#3").mouseover(function(){
			$("#13").show();
			
		}).mouseout(function(){
			$("#13").hide();
		})
	})
	$(document).ready(function(){
		$("#4").mouseover(function(){
			$("#14").show();
			
		}).mouseout(function(){
			$("#14").hide();
		})
	})
		
		
		
		
    	
        $(".top_zhong").mouseover(function(){
            $(".arrowLeft,.arrowRight").show();
        });
        $(".top_zhong").mouseout(function(){
            $(".arrowLeft,.arrowRight").hide();
        })
   		
   	
   			 $(".arrowLeft").click(function(){
   			 	index--;
   			 	if(index>=0){
   			 		$("#scroll_img li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
   			 	}
   			 	else if(index<0){
   			 		alert("这是第一张图片啦！");
   			 	}
   			 	else{
   			 		index++;
   			 	}
   			 })
   			 $(".arrowRight").click(function(){
   			 	index++;
   			 	if(index<=5){
   			 		$("#scroll_img li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
   			 	}
   			 	else if(index>5){
   			 		alert("这是最后一张图片啦！");
   			 	}
   			 	else{
   			 		index--;
   			 	}
   			 })
   		
    
		
})
