$(function(){
	$(".devourBtn").on("click",function(event){
		var id = $(this).data("id");
		var eat = $(this).data("state");
		
		var eatenState = {

		};

		if (eat=== 0) {
			console.log("hi")


			$.ajax({
	  			method:"PUT",
	 			url:"/burgers/" + id 
			}).then(
	  			function(data){
	   				location.reload();
	 			 }
			);
		}




	});

});



