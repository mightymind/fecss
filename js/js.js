$(document).ready(function() {
	
	$('.page-loader .close-loader').on('click',function(event){
		event.preventDefault();
		$('.page-loader').removeClass('active');
	});
	$(window).load(function(event){
		$('.page-loader').removeClass('active');
	});
	
	$(document.body).on('click.fecss', 'a', {}, function(event){
		console.log('click.fecss');
	});
	
});