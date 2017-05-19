function main(){
//open up hidden  nav
$('#logo').on('hover', function(){
	$('.nav-items').toggle();
});

$('#close').on('click', function(){
	$('#nav-items').hide();
});



};
$(document).ready(main);
