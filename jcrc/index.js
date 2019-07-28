document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
function handleWidth(x){
  if(x.matches){
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
const x = window.matchMedia("(max-width: 767.98px)");
handleWidth(x);
x.addListener(handleWidth);
window.onscroll = function(){
  if(window.innerWidth >=768){
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
    console.log('changed color due to javascript');
  }
}
$('#magicText').fadeIn(2000);


const allMembers = ["samuel", "duc", "kevin", "dion", "haoyi", "tiffany", "aron","christopherryan", "dominic", "frederico", "george", "wesley", "ziran", "jason", "haoyan", "jireh", "joseph", "kenny", "louisa", "victoria", "michael", "wenyue", "viroon", "raphael", "jiajia", "yongxian", "timothy", "duy"];
const messages = ["sammm", "ducc", "kevinnnn", "dionnn", "haoyiiii", "tifffff", "aronn", "ryannn", "dominicccc", "fredddd", "georgeeee", "wesleyyyy", "zirannn", "jasonnn", "haoyannn", "jirehhh", "josephhh", "kennyyy","louisaaaa", "victoriaaaa", "michaelll", "wenyueee", "viroonnn", "raphaelll", "jiajiaaa", "yongxiannn", "timothyyy", "duyyy" ];
const fullnames = ["Samuel Oscar Yobeliano", "Nguyen Manh Duc", "Kevin Leonardo Theo", "Dion Amarendra Saleh", "Cheah Hao Yi", "Tiffany Irene Prasetio", "Aron Septianto", "Christopher Ryan Wrytzen", "Dominic Bryan", "Frederico Fortino Lim", "Gregorius George Bunjamin", "Ho Jia Cheng Wesley", "Huang Ziran", "Jason Jonathan Tejaputra", "Jiang Haoyan", "Jireh Foo", "Joseph Hengky Dermawan", "Kenny Lewi", "Louisa Wirawan", "Maria Victoria Helena", "Michael Santoso", "Ooi Wen Yue", "Prakhunviroon Sararaksh", "Raphael Tandiono", "Tan Jia Jia", "Tay Yong Xian", "Timothy Putra Prasetio", "Vu Duc Duy"]


function addMember (memberid, picturename, pictureformat, position, fullname){
  let htmlString = '<div class="col-6 col-md-4 col-lg-3 pb-5 flex-column justify-content-start" id="%memberid%"><div class="d-flex justify-content-center align-items-center"><p class="caption"></p><img src="./imgs/%picturename%.%pictureformat%" alt="" class="roundedPic img-fluid"></div><p class="lead text-center pt-3"><em>%position%</em><br>%fullname%</p></div></div>';
  htmlString = htmlString.replace('%memberid%', memberid);
  htmlString = htmlString.replace('%picturename%', picturename);
  htmlString = htmlString.replace('%pictureformat%', pictureformat);
  htmlString = htmlString.replace('%position%', position);
  htmlString = htmlString.replace('%fullname%', fullname);
  console.log(htmlString);
  document.getElementById('memberlist').insertAdjacentHTML('beforeend', htmlString);
}
for(let i = 6; i<allMembers.length;i++){
  addMember(allMembers[i], 'jcrc logo square', 'jpg', 'random position', fullnames[i]);
}



$('.roundedPic').mouseenter((event)=>{
  event.target.style.opacity = "0.4";
  const parentid = event.target.parentNode.parentNode.id;
  const message = messages[allMembers.indexOf(parentid)];
  const capEl = document.querySelector('#'+parentid+' .caption');
  const capParentEl = document.querySelector('#' + parentid);
  capEl.textContent = message;
});
$('.roundedPic').mouseleave((event)=>{
  event.target.style.opacity = "1";
  const parentid = event.target.parentNode.parentNode.id;
  const message = messages[allMembers.indexOf(parentid)];
  const capEl = document.querySelector('#'+parentid+' .caption');
  const capParentEl = document.querySelector('#' + parentid);
  capEl.textContent = "";
});
