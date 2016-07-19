$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "feedback.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с Вами свяжемся.");
		});
		return false;
	});

});