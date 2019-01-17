// $("li").click(function(){
// 	$(this).toggleClass("completed");
// })
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
	// it will fire from bot to top
});

$("input[type='text']").keypress(function(event){
	if(event.which ===13){
		// grab new todo text from input
		var todoText=$(this).val();

		$(this).val("");
		// attention  single quotes '' instead of ""
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+todoText+"</li>")
	}
});


$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle(200);
});