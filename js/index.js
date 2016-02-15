$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
	autoplay:false,
	items:1,
	itemsScaleUp: true,
	margin:0,
	stagePadding:0,
	smartSpeed:450,
	dots:true,
	slideSpeed: 800,
	// autoplay:true,
	mouseDrag:false
	});
});

function openMe(){
	x=document.getElementById("video_open");
	y=document.getElementById("icon_close");
	x.style.visibility="visible";
	y.style.visibility="hidden";
}