function main(){
//open up hidden  nav
$('.modal').hide();
$('#open').on('click', function(){
	$('.modal').toggle();
});

$('#modal-close').on('click', function(){
	$('.modal').hide();
});



};
$(document).ready(main);
