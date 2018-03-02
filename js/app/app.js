var t=document.documentElement.scrollTop||document.body.scrollTop;
	var s=$(window).height();
	var x=parseInt(t/s);
	var y=Math.round(t/s);
	console.log("scrollTop为"+t);
	console.log("x为"+x)
	$(".page").eq(x).css({position:"fixed",top:"0",left:"0",zIndex:x,marginTop:"0"});
	$(".page").eq(x).prevAll().css({position:"fixed",top:"0",left:"0"});
	$(".page").each(function(a,b){
		$(".page").eq(a).css({zIndex:a})
	})
	$(".page").eq(x).nextAll(".page").css({position:"relative"});
	$(".page").eq(x+1).css({marginTop:s*(x+1)+"px"}).siblings(".page").css({marginTop:"0"});
	$(".page").eq(x).children("div").addClass("animate");
	$(".page").eq(y).children("div").addClass("animate1");
	$(".pro-footer").css({position:"absolute",top:$(".page").length*s+"px"});
$(window).on("scroll",function(){
	var t=document.documentElement.scrollTop||document.body.scrollTop;
	var s=$(window).height();
	var x=parseInt(t/s);
	var y=Math.round(t/s);
	console.log("scrollTop为"+t);
	console.log("x为"+x)
	console.log("y"+y)
	$(".page").eq(x).css({position:"fixed",top:"0",left:"0",zIndex:x,marginTop:"0"});
	$(".page").eq(x).prevAll().css({position:"fixed",top:"0",left:"0"});
	$(".page").eq(x).nextAll(".page").css({position:"relative"});
	$(".page").eq(x+1).css({marginTop:s*(x+1)+"px"}).siblings(".page").css({marginTop:"0"});
	$(".page").eq(x).children("div").addClass("animate");
	$(".page").eq(y).children("div").addClass("animate1");
	console.log("这是修改后的")
	// $(".page").eq(x).children("div").removeClass("animate");

})
