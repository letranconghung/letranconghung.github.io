// $('#mainNav').fadeIn(2000, ()=> {
//   console.log("fade in #mainNav successful");
// });
// $('#firstPage').fadeIn(2000, ()=> {
//   console.log('fade in firstPage done');
// });


// $('#firstPageContent').fadeIn(2000, ()=>{
//   console.log("fade in firstPageContent successful");
// });

// $('body').fadeIn(2000, ()=> {
//   console.log("fade in html successful");
// }); 

$('#fakebody').fadeIn(2000, ()=> {
  console.log('fade in #fakebody successful');
});
$('#firstPageContent').fadeIn(4000, ()=> {
  console.log("fade in #firstPageContent successful");
});

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll < 600){
      $('.fixed-top').css('background', 'transparent');
      $('.navbar-dark .navbar-nav .nav-item .nav-link').css('color', 'rgb(255,255,255)');
  } else{
      $('.fixed-top').css('background', '#E7EAED');
      $('.navbar-dark .navbar-nav .nav-item .nav-link').css('color', 'rgb(0,0,0)');
  }
});
