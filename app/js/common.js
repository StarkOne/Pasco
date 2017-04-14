$(function() {

	$(".js-dark-title").on("click", function(e){
				e.preventDefault();
				var $this = $(this),
						answerId = $this.attr("href");
				if(!$this.hasClass("active")){
						$(".js-dark-content").slideUp();
						$(".js-dark-title").removeClass("active");
				}
				$this.toggleClass("active");
				$(answerId).slideToggle();
		}); 

});
