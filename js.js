
$(".icon").click(function(){
	$(this).removeClass("off").addClass("on").siblings().removeClass("on").addClass("off");
});

$(".icon:nth-child(1)").click(function(){
	$(".text p:nth-child(1)").text("HOME");
	$(".text p:nth-child(2)").html("오늘 새로 올라온 사진들을<br>확인하세요");
	$(".text p:nth-child(3)").html("Bring you closer to the people<br>and things you love");
	$(".phone").html("<img src='images/page1.png'>");
	
});
$(".icon:nth-child(2)").click(function(){
	console.log("d");
	$(".text p:nth-child(1)").text("HASHTAG");
	$(".text p:nth-child(2)").html("당신의 관심사를 찾고<br>새로운 것을 발견하세요");
	$(".text p:nth-child(3)").html("Find content you might like,<br>from accounts you don't yet follow");
	$(".phone").html("<img src='images/page2.png'>");
});
$(".icon:nth-child(3)").click(function(){
	$(".text p:nth-child(1)").text("CAMERA");
	$(".text p:nth-child(2)").html("당신의 하루를 Once에<br>남겨보세요!");
	$(".text p:nth-child(3)").html("#ONCE #일상 #사진 #추억");
	$(".phone").html("<img src='images/page3.png'>");
});
$(".icon:nth-child(4)").click(function(){
	$(".text p:nth-child(1)").text("MYPAGE");
	$(".text p:nth-child(2)").html("당신의 일년을 보세요");
	//여기글자 다른거 넣어야 해
	$(".text p:nth-child(3)").html("Bringing you closer to the people<br>and things you love");
	$(".phone").html("<img src='images/page4.png'>");
});