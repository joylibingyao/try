// (function(){

//   var parallax = document.querySelectorAll(".parallax"),
//       speed = 0.5;

//   window.onscroll = function(){
//     [].slice.call(parallax).forEach(function(el,i){

//       var windowYOffset = window.pageYOffset,
//           elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

//       el.style.backgroundPosition = elBackgrounPos;

//     });
//   };

// })();
// (function($){
//   $(function(){
//   	$('#first-bk').parallax({imageSrc: '/path/to/image.jpg'});

//   }); // end of document ready
// })(jQuery); // end of jQuery name space
//  $(document).ready(function(){
//  	console.log("beign");
//  	$('.portfolio-item').hover(
//  		function(){
//  		$(this).fadeTo( "slow", 1 );
//  		},
//  		function(){
//  		$(".fa-plus").fadeTo( "slow", 0 );
//  		});

// });