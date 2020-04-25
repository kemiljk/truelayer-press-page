   
/***** sticky sub-menu *****/

  
var navbar = document.getElementById("sub-menu");
var sticky = navbar.offsetTop;

$(window).scroll(function(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      } 
});

 /***** smooth scroll *****/

$(document).ready(function(){
  $("a").on('click', function() {
    var hash = this.hash;
    if (this.hash !== "" && this.hash != "#sign-up") {
      $('html, body').animate({ 
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash; 
      });
    } else if (this.hash == "#sign-up") {
      $('html, body').animate({ 
        scrollTop: $(hash).offset().top - 50
      }, 800, function(){
        window.location.hash = hash; 
        $('html, body').animate({ 
          scrollTop: $(hash).offset().top - 50
        }, 0);
      });
    }
  });
})



/***** smooth scroll prevent default *****/

$(document).ready(function(){

    $("a").on('click', function(event) {
        if (this.hash) {
            event.preventDefault()  
        } 
    });
})


/***** use cases payments *****/

$("button.uses").mouseover(function() {     
  $("#financial").removeClass("btn-azure").addClass("btn-outline-azure");
  $("#platforms").removeClass("btn-azure").addClass("btn-outline-azure");
  $("#gaming").removeClass("btn-kashmire-blue").addClass("btn-outline-kashmire-blue");
  $("#e-commerce").removeClass("btn-violet").addClass("btn-outline-violet");
  $("#real-estate").removeClass("btn-kashmire-blue").addClass("btn-outline-kashmire-blue");
  $("#travel").removeClass("btn-light-azure").addClass("btn-outline-light-azure");
  $("#pos").removeClass("btn-violet").addClass("btn-outline-violet");
  
  /***** Australia *****/

  $("#money-mgmt").removeClass("btn-azure").addClass("btn-outline-azure");
  $("#credit-scoring").removeClass("btn-kashmire-blue").addClass("btn-outline-kashmire-blue");
  $("#id-verification").removeClass("btn-dark-violet").addClass("btn-outline-dark-violet");
  $("#proof-income").removeClass("btn-light-azure").addClass("btn-outline-light-azure");

/***** France *****/
  $("#account-ver").removeClass("btn-azure").addClass("btn-outline-azure");
  $("#account-agg").removeClass("btn-kashmire-blue").addClass("btn-outline-kashmire-blue");
  $("#account-topup").removeClass("btn-dark-violet").addClass("btn-outline-dark-violet");

  $("#use-cases-content .use-description").removeClass('active');     
  $(".light-blue").removeClass("active");
  $('.' + $(this).attr('id')).addClass("active");
});

$("#financial").mouseover(function() {
  $(this).toggleClass("btn-azure btn-outline-azure");
});

$("#platforms").mouseover(function() {
  $(this).toggleClass("btn-azure btn-outline-azure");  
});

$("#gaming").mouseover(function() { 
  $(this).toggleClass("btn-kashmire-blue btn-outline-kashmire-blue");      
}); 

$("#e-commerce").mouseover(function() {
  $(this).toggleClass("btn-violet btn-outline-violet");
}); 

$("#real-estate").mouseover(function() { 
  $(this).toggleClass("btn-kashmire-blue btn-outline-kashmire-blue");        
}); 

$("#travel").mouseover(function() {
  $(this).toggleClass("btn-light-azure btn-outline-light-azure");         
});

$("#pos").mouseover(function() {
  $(this).toggleClass("btn-violet btn-outline-violet");
}); 

$("#money-mgmt").mouseover(function() {
  $(this).toggleClass("btn-azure btn-outline-azure");         
});

$("#credit-scoring").mouseover(function() {
  $(this).toggleClass("btn-kashmire-blue btn-outline-kashmire-blue");         
});

$("#id-verification").mouseover(function() {
  $(this).toggleClass("btn-dark-violet btn-outline-dark-violet");         
});

$("#proof-income").mouseover(function() {
  $(this).toggleClass("btn-light-azure btn-outline-light-azure");         
});

$("#account-ver").mouseover(function() {
  $(this).toggleClass("btn-azure btn-outline-azure");         
});

$("#account-agg").mouseover(function() {
  $(this).toggleClass("btn-kashmire-blue btn-outline-kashmire-blue");         
});

$("#account-topup").mouseover(function() {
  $(this).toggleClass("btn-dark-violet btn-outline-dark-violet");         
});


/***** how it works process payments *****/

$(".steps").on("mouseover", function() {
$(".steps h5").removeClass("active-text"); 
$("h5", this).addClass("active-text");
$(".steps div").removeClass("active-icon");
$(".description-use").removeClass("active");
$('.' + 'description-use-' + $(this).attr('id')).addClass("active");
$('.' + $(this).attr('id') + '-icon' ).addClass("active-icon");
})

$(".initiate").on("mouseover", function() {
$(".process-active").removeClass("hover-receive hover-monitor hover-authorise back-arrow").addClass("hover-initiate front-arrow");
})

$(".authorise").on("mouseover", function() {
$(".process-active").removeClass("hover-monitor hover-receive").addClass("hover-authorise front-arrow back-arrow");
})

$(".monitor").on("mouseover", function() {
$(".process-active").removeClass("hover-receive hidden-front-arrow").addClass("hover-monitor front-arrow back-arrow");
})

$(".receive").on("mouseover", function() {
$(".process-active").removeClass("hover-receive front-arrow").addClass("hover-receive back");
})



