$(document).ready(function(){
	var height = $(".front").height();
	$(".flipper").height(height);

	// $(".flipper").each(function(){
	// 	console.log($(this));
	// 	var frontHeight = $(this).children(".front").height();
	// 	var backHeight = $(this).children(".back").height();
	// 	console.log(frontHeight);
	// 	console.log(backHeight);

	// 	if (frontHeight > backHeight) {
	// 		console.log("height changed");
	// 		$(".back").height(frontHeight);
	// 	}
	// });

	$(".flip-container").mouseleave(function(){
		$(this).scrollTop(0);
	})

})

