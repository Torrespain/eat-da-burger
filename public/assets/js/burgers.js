$(function(){
	$(".devourBtn").on("click",function(event){
		var id = $(this).data("id");
		var eat = $(this).data("state");
		
		var eatenState = {
			devoured:true
		};

		if (eat=== 0) {
			console.log("hi")
			$.ajax({
	  			method:"PUT",
	  			data: eatenState,
	 				url:"/api/burgers/" + id 
			}).then(
	  			function(data){
	   				location.reload();
	 			 }
			);
		}

	});


	$("#addButton").on("click", function(event){
		event.preventDefault();
		var newBurger ={
			burger_name: $("#burgerText").val().trim(),
		};
		
		$.ajax({

			type: "POST",
			url:"/api/burgers",
			data: newBurger
			
		}).then(
			function(data){
				console.log("new burger added: ",data);
				location.reload();
			}

		);


	});

});



