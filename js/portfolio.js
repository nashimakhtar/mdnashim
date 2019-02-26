	//============= toggle ===========
    $(document).ready(function(){
	$(".my-toggle").click(function(){
		$(".navi").animate({"left":"0px"},'slow');
		$(".togg").css("display","none");
		$(".ovrlay").fadeIn("slow");
	});
	$(".togg-X,.ovrlay").click(function(){
		$(".navi").animate({"left":"-100%"},'slow');
		$(".togg").css("display","block");
		$(".ovrlay").fadeOut("slow");
	});
	//============ type ==========
	$(function(){
      new TypeIt('#typedd', {
        speed:100,
        strings: ["Web designer & developer."],
        waitUntilVisible:true,
        loop: true
      }).go();
	});
	//============ go top ==========
    $(window).scroll(function(){
    	if($(this).scrollTop()>200)
    	{
    		$("#gt").fadeIn();
    	}
    	else{
    		$("#gt").fadeOut();
    	}
    });
	    $("#gt").click(function(){
	    	$("html").animate({scrollTop:0},600);
	    	return false;
    })
	//=========== wow ===========
	new WOW().init();
	//===========================
	$("#sbmt").submit(function(){
	var namePatt=/^[a-zA-Z]+$/;
	var emailPatt=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    
    if($("#nm").val()=="")
	{
	$("#em-otpt").fadeOut();
	$("#nm-otpt").html("Please Enter Your name...").fadeIn();
	return false;
	}
	if(!namePatt.test($("#nm").val()))
	{
	$("#nm-otpt").html("Please Enter correct name...").fadeIn();
	return false;
	}

    if($("#em").val()=="")
	{
	$("#nm-otpt").fadeOut();
	$("#em-otpt").html("Please Enter Email id...").fadeIn();
	return false;
	}
	if(!emailPatt.test($("#em").val()))
	{
	$("#nm-otpt").fadeOut();
	$("#em-otpt").html("Please Enter correct email id...").fadeIn();
	return false;
	}
    });
	//===========================
});