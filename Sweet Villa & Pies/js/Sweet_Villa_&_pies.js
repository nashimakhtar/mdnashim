    
	$(document).ready(function(){
	//===========================
	$(function() {
	$(".rslides").responsiveSlides();
	});
	//==============================
	$(".rslides").responsiveSlides({
	speed: 2000,            // Integer: Speed of the transition, in milliseconds
	//timeout: 3000,          // Integer: Time between slide transitions, in milliseconds
	});
	//==============================
	$("#toggle").click(function(){
	$("#navi").slideToggle(300);
	});
	//================ header opacity============
	$(window).scroll(function(){
		if($(this).scrollTop()>500)
		{
			$("header").css({"backgroundColor":"rgba(255,255,255,.9)","borderBottom":"2px solid #ea6b7c"})
		}
		else{
			$("header").css({"backgroundColor":"#fff","borderBottom":"2px solid #6c2a1a"})			
		}
	});
	//======================== scrollspy on click
	$("#hm").click(function(){
		var ths=$(this.hash).offset().top;
		$("html").animate({scrollTop:ths},400);
	});

	$("#ck").click(function(){
		var ths=$(this.hash).offset().top-50;
		$("html").animate({scrollTop:ths},400);
	});

	$("#ice").click(function(){
		var ths=$(this.hash).offset().top-103;
		$("html").animate({scrollTop:ths},400);
	});

	$("#pr").click(function(){
		var ths=$(this.hash).offset().top-70;
		$("html").animate({scrollTop:ths},400);
	});

	$("#abt").click(function(){
		var ths=$(this.hash).offset().top-70;
		$("html").animate({scrollTop:ths},400);
	});

	// $("#navi a").click(function(){
	// 	var ths=$(this.hash).offset().top;        all posi in one code
	// 	$("html").animate({scrollTop:ths},400);
	// });
	//======================== scrollspy active class
	$("#navi a").click(function(){
		$("#navi a").removeClass("actv");
			$(this).addClass("actv");		
	});
	//============================== scrollspy active on scroll
	$(window).scroll(function(){
		var hmposi=$("#home").offset().top-60;
		var ckposi=$("#cakes").offset().top-60;
		var iceposi=$("#icecream").offset().top-115;
		var prposi=$("#pricing").offset().top-80;
		var abtposi=$("#about").offset().top-80;
        
        if($(this).scrollTop()>=hmposi)
		{
			$("#navi a").removeClass("actv")
		$("#hm").addClass("actv");
		}

		if($(this).scrollTop()>=ckposi)
		{
			$("#navi a").removeClass("actv")
		$("#ck").addClass("actv");
		}

		if($(this).scrollTop()>=iceposi)
		{
			$("#navi a").removeClass("actv")
		$("#ice").addClass("actv");
		}

		if($(this).scrollTop()>=prposi)
		{
			$("#navi a").removeClass("actv")
		$("#pr").addClass("actv");
		}
		
		if($(this).scrollTop()>=abtposi)
		{
			$("#navi a").removeClass("actv")
		$("#abt").addClass("actv");
		}
	})
	//==============================	
	$("#sbmt").submit(function(){
	var namePatt=/^[a-zA-Z]+$/;
	var mobPatt=/^[0-9]{10,12}$/;
	var emailPatt=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    
    //==============name
	if($("#nm").val()=="")
	{
		$("#em-otpt").fadeOut();
		$("#nm-otpt").html("Enter name").fadeIn();
			return false;
	}
	if(!namePatt.test($("#nm").val()))
	{
		$("#nm-otpt").html("Enter correct name").fadeIn();
			return false;
	}
    //==============email
	if($("#em").val()=="")
	{    
		$("#nm-otpt").fadeOut();
		$("#em-otpt").html("Enter email").fadeIn();
			return false;
	}
	if(!emailPatt.test($("#em").val()))
	{
		$("#em-otpt").html("Enter correct email").fadeIn();
			return false;
	}
    //==============mobile
	if($("#tl").val()=="")
	{
		$("#em-otpt").fadeOut();
		$("#tl-otpt").html("Enter mobile no.").fadeIn();
			return false;
	}
	if(!mobPatt.test($("#tl").val()))
	{
		$("#tl-otpt").html("Enter correct no.").fadeIn();
			return false;
	}
	
    });

	//==============================
	});


