function main(){
//open up hidden  nav
$('#nav-items').hide();
$('#header').on('click', function(){
	$('.nav-items').toggle();
});

$('#close').on('click', function(){
	$('#nav-items').hide();
});



};
$(document).ready(main);
