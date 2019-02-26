	$(document).ready(function(){
		$("#my-togg").click(function(){
			$(".navi").slideToggle("fast");
		});
    //===========================if($(window).width() >= 1024){
		$(window).scroll(function(){
			if($(this).scrollTop()>50)
			{
				$(".hdr-fxd").css({"backgroundColor":"#24282b","borderBottom":"2px solid #fff"})
				$("nav a").css({"color":"#fff"})
				$(".active").css({"color":"#f42a6d"})
			}
			else
			{
				$(".hdr-fxd").css({"backgroundColor":"#fff","borderBottom":"1px solid grey"})
				$("nav a").css({"color":"#611aa8"})
				$(".active").css({"color":"#f42a6d"})
			}
			//============== for nav mob 
			if($(window).width() < 769)
			{
				$("nav a").css({"color":"#fff"})
				$(".active").css({"color":"#f42a6d"})
			}
            //============== fade
			if($(this).scrollTop()>1300)
			{
				$(".hdr-fxd").fadeOut();
			}
			else
			{
				$(".hdr-fxd").fadeIn();
			}
		})


	});
	//======================Home Page
    function validation (){
	var str1="";
	var eml=document.getElementById('eml');
	var eml_msg=document.getElementById('eml_msg');
	var emlPatt=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
	
	if(!emlPatt.test(eml.value)){
		str1="Please Enter Correct Email Id..."
	}
	if(str1){
	eml_msg.innerHTML=str1;
	eml_msg.style.color="red";
	return false;
	}
	else{
		return true;
	}
}
//======================collection logoFormt logoCat
function validation2 (){
	var cnStr1="";
	var cnStr2="";
	var cnStr3="";
	var cnStr4="";
	var cnStr5="";
	var nm=document.getElementById('cn-nm');
	var em=document.getElementById('cn-eml');
	var tl=document.getElementById('cn-tel');
	var logoCat=document.getElementById('logoCat');
	var logoFormt=document.getElementById('logoFormt');
	var cnMsg1=document.getElementById('cnt-otpt1');
	var cnMsg2=document.getElementById('cnt-otpt2');
	var cnMsg3=document.getElementById('cnt-otpt3');
	var cnMsg4=document.getElementById('cnt-otpt4');
	var cnMsg5=document.getElementById('cnt-otpt5');
	var namePatt=/^[a-zA-Z]+$/;
	var emlPatt=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
	var mobPatt=/^[0-9]{10,12}$/;
	if(!namePatt.test(nm.value)){
		cnStr1="User Name Required...";
	}
	if(!emlPatt.test(em.value)){
		cnStr2="Please Enter Correct Email Id...";
	}
	if(!mobPatt.test(tl.value)){
		cnStr3="Enter 10 Digits...";
	}
	if(logoCat.selectedIndex==0){
		cnStr4="Choose a Cetagory...";
	}
	if(logoFormt.selectedIndex==0){
		cnStr5="Choose a Cetagory...";
	}
	if(cnStr1+cnStr2+cnStr3+cnStr4+cnStr5){
		cnMsg1.innerHTML=cnStr1;
		cnMsg2.innerHTML=cnStr2;
		cnMsg3.innerHTML=cnStr3;
		cnMsg4.innerHTML=cnStr4;
		cnMsg5.innerHTML=cnStr5;
		cnMsg1.style.color="red";
		cnMsg2.style.color="red";
		cnMsg3.style.color="red";
		cnMsg4.style.color="red";
		cnMsg5.style.color="red";
		return false;
	}
	else{
		return true;
	}
};
//======================contact
var logoCat=document.getElementById('logoCat');
var catList=["Choose a Cetagory", "Craetive Field", "Business & Cunsulting", "Automotive & Tranportation", "Childcare & Education", "Entertainment & Art",
"Nature", "Other"];
var len=catList.length;
for ( var i=0; i<len; i++){
var opt1=document.createElement('option');
opt1.value=i;
opt1.innerHTML=catList[i];
logoCat.appendChild(opt1);
};

var logoFormt=document.getElementById('logoFormt');
var formtList=["Other", "PSD", "AI", "CDR", "PNG", "SVG", "JPEG"];
var len=formtList.length;
for ( var i=0; i<len; i++){
var opt2=document.createElement('option');
opt2.value=i;
opt2.innerHTML=formtList[i];
logoFormt.appendChild(opt2);
};
//========== mobile

	 
