$('.fa-bars').click(()=>{
  if($('aside').css('right') < '0') {
    $('aside').css({
      'right' : 0
    });
    $('.fa-bars').addClass('fa-times');
    $('.fa-times').removeClass('fa-bars');
    
  }else{
    $('aside').css({
      'right' : '-200px'
    });

    $('.fa-times').addClass('fa-bars');
    $('.fa-bars').removeClass('fa-times');
    
  }
})

$('.main h1').animate({top : '50px'},800);
$('.main p').animate({top : '50px'},800);
$('.main .download').animate({right : '0'},800);
$('.main .trial').animate({left : '0'},800);
$('.vector img').slideDown(1000);


// start collapse part 

$('.card-body').click(function()
{
    $(this).siblings().slideToggle(600);
    $('.card-header .content').not($(this).next()).slideUp();
    $(this).children('i').toggleClass('fa-minus').toggleClass('fa-plus');
    $('.card-body i').not($(this).children('i')).removeClass('fa-minus').addClass('fa-plus')
})


// count down section 

const countDown = () =>{

  const countDate = new Date('October 10, 2021 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  /////// set time rule

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calc the time

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // print in html

  document.querySelector('.day').innerHTML = textDay;
  document.querySelector('.hour').innerHTML = textHour;
  document.querySelector('.minute').innerHTML = textMinute;
  document.querySelector('.second').innerHTML = textSecond;


}

setInterval(countDown,1000)


// footer 

const textarea = document.querySelector('textarea')

textarea.addEventListener('keyup' , character)

function character(){
  const textareaVal = textarea.value;
  const textLenght = textareaVal.length;
  let i = 100;
  let gap = i - textLenght;
  
  if (gap == 0) {
    textarea.disabled = true;
  }
  document.querySelector('footer span').innerHTML = gap;
}

// color box & scroll box 

$('.color-box .icon i').click(function(){

  if ($('.color-box').css('left') == '0px') {
    $('.color-box').animate({
      left : `-${$('.colors').innerWidth()}px`
    },1000)

  }else{

    $('.color-box').animate({
      left : `0px`
    },1000)
  }
})

$('.color-box ul li').click(function(){
  let uiColor = $(this).css('backgroundColor');
  
  $('.change').css('color', uiColor);
  $('.change-bg').css('backgroundColor', uiColor)
})


// scroll up 

$('.scroll-box i').click(function(){
  $('body,html').animate({
    scrollTop : '0'
  },1000)
})


$(window).scroll(function(){
  
  if ($(window).scrollTop() >= $('.tracks').offset().top) {
    $('.scroll-box ').fadeIn()
  }else
  {
    $('.scroll-box ').fadeOut()
  }

})