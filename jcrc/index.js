document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.onscroll = function(){
  if(window.scrollY >= ($('#mainNav').height()*5)){
    $('#mainNav').css('backgroundColor', 'rgb(255, 255, 255)');
    $('#mainNav .navbar-brand,#mainNav div .navbar-nav .nav-item .nav-link').css('color', 'rgba(37, 192, 140, 0.884)');
    $('.fa-bars').css('color', 'rgba(37, 192, 140, 0.884)');
    $('#mainNav .navbar-brand,#mainNav div .navbar-nav .nav-item .nav-link').mouseenter((event)=>{
      event.target.style.color = 'rgba(13, 13, 136, 0.863)';
    });
    $('#mainNav .navbar-brand,#mainNav div .navbar-nav .nav-item .nav-link').mouseleave((event)=>{
      event.target.style.color = 'rgba(37, 192, 140, 0.884)';
    });
  }else{
    $('#mainNav').css('backgroundColor', 'transparent');
    $('#mainNav .navbar-brand,#mainNav div .navbar-nav .nav-item .nav-link').css('color', 'rgba(194, 194, 204, 0.719)');
    $('.fa-bars').css('color', 'white');
    $('#mainNav .navbar-brand,#mainNav div .navbar-nav .nav-item .nav-link').mouseenter((event)=>{
      event.target.style.color = 'rgba(83, 83, 233, 0.747)';
    });
    $('#mainNav .navbar-brand,#mainNav div .navbar-nav .nav-item .nav-link').mouseleave((event)=>{
      event.target.style.color = 'rgba(194, 194, 204, 0.719)';
    });
  }
}
$('#magicText').fadeIn(2000);
