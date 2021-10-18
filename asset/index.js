var adressBtn = document.querySelector("#adress");
var adressClose = document.querySelector("#close");
adressBtn.addEventListener('click',function(){
    document.querySelector('.adress-form').style.display='flex'
});

adressClose.addEventListener('click',function(){
    document.querySelector('.adress-form').style.display='none'
});

// click cart
var adreesCart = document.querySelector('#cart');

var adreesHome = document.querySelector('#home');

adreesCart.addEventListener('click',function(){
    document.querySelector('.adress-cart').style.display='flex'
});

adreesHome.addEventListener('click',function(){
    document.querySelector('.adress-cart').style.display='none'
})
// slider banner

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("list-img-slide");
  var dots = document.getElementsByClassName("aciver-list");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";     
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




// ***********slider jquery
$(document).ready(function(){
  $('.laptop-product-item').slick({
    infinite: true,
    slidesToScroll: 1,
    nextArrow: '#prev-laptop',
    prevArrow: '#next-laptop',
  });
//  slide product
$('.conten-product-item').slick({
  
  slidesToScroll: 1,
  nextArrow: '.btn-prev-left',
  prevArrow: '.btn-next-right',
});
// slider phu kien
  $('.list-accessory-conten').slick({
    slidesToScroll: 1,
    nextArrow: '#prev-accessory',
    prevArrow: '#next-accessory',
  });
  // ************slider dong ho  thong minh
  $('.item-container',).slick({
    slidesToScroll: 1,
    prevArrow: '#next-smartwatch',
    nextArrow: '#prev-smartwatch',
  });

  // slider techmology
  $('.technology-right-bottom').slick({
    slidesToScroll: 1,
    nextArrow: '#prev-technology',
    prevArrow: '#next-technology',
  });

// active nav
$('.menu-bar-conten li').click(function(){
  $('.menu-bar-conten li').removeClass("active-navbar").css('color','#fff');
  $(this).addClass("active-navbar").css('color','#203e4e');
});


  // active-smarwatch
  $('.item-smartwatch').click(function(){
    $('.item-smartwatch').removeClass("active-smartwatch").css('color','#fff');
    $(this).addClass("active-smartwatch").css('color','#203e4e');
  });
});
var donghothongminh = document.querySelector('.donghothongminh');
var donghonam = document.querySelector('.donghonam');
var donghonu = document.querySelector('.donghonu');



donghothongminh.addEventListener('click',function(){
      document.querySelector('.item-container').style.display = 'flex'
      document.querySelector('.container-smartwtach-male').style.display = 'none';
      document.querySelector('.container-smartwatch-female').style.display = 'none';
      
});
donghonam.addEventListener('click',function(){
  document.querySelector('.container-smartwtach-male').style.display = 'flex';
  document.querySelector('.item-container').style.display = 'none'
  document.querySelector('.container-smartwatch-female').style.display = 'none';
});
var dongho = donghonu.addEventListener('click',function(){
  document.querySelector('.container-smartwatch-female').style.display = 'flex';
  document.querySelector('.item-container').style.display = 'none';
  document.querySelector('.container-smartwtach-male').style.display = 'none';
})

// click navbar
var exit = document.querySelector('.exit-res');
var wrap = document.querySelector('#wrap');
var navbar = document.querySelector('.navbar');
var iconNav = document.querySelector('.nav-res');
 exit.addEventListener('click',function(){
  wrap.style.display = 'none';
  navbar.style.display = 'block'
})
iconNav.addEventListener('click', function(){
  wrap.style.display = 'none';
  navbar.style.display = 'block'
})


// dong ho thong mminh res
