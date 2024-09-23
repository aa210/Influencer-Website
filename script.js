$(document).ready(function() { 
 
  $(".about-link").click(function() {
    $("#home-page").addClass("hidden");
    $("#contact-page").addClass("hidden");
 $("#blog-page").addClass("hidden");  
 $("#video-page").addClass("hidden");  
   $("#campaign-page").addClass("hidden");   
    $("#about-page").removeClass("hidden");
    
    
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
    $(this).animate({'opacity':'1'},800);
     $(".headers h1").fadeIn();
    
  });
  
  $(".blog-link").click(function() {
    $("#home-page").addClass("hidden");
    $("#contact-page").addClass("hidden");
    $("#about-page").addClass("hidden");
  $("#campaign-page").addClass("hidden");
$("#video-page").addClass("hidden");     
    $("#blog-page").removeClass("hidden");  
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
  });  
  $(".contact-link").click(function() {
    $("#home-page").addClass("hidden");
    $("#about-page").addClass("hidden");
    $("#blog-page").addClass("hidden");
  $("#campaign-page").addClass("hidden");
 $("#video-page").addClass("hidden");  
      
    $("#contact-page").removeClass("hidden");
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
  });
  
 $(".home-link").click(function() {
    $("#home-page").removeClass("hidden");   
    $("#about-page").addClass("hidden");
     $("#contact-page").addClass("hidden");
 $("#blog-page").addClass("hidden");
  $("#campaign-page").addClass("hidden");
  $("#video-page").addClass("hidden");  
   $(".selected").removeClass("selected");
    $(this).addClass("selected");
  }); 
  
 $(".video-link").click(function() {
    $("#home-page").addClass("hidden");
    $("#about-page").addClass("hidden");
    $("#blog-page").addClass("hidden");
    $("#contact-page").addClass("hidden");
   $("#campaign-page").addClass("hidden");
$("#video-page").removeClass("hidden");  
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
  });  
  
  
$(".campaign-link").click(function() {
    $("#home-page").addClass("hidden");
    $("#about-page").addClass("hidden");
    $("#blog-page").addClass("hidden");
 
 $("#video-page").addClass("hidden");  
      
    $("#contact-page").addClass("hidden");
  
  $("#campaign-page").removeClass("hidden");
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
  });  

  $("#video-pics1").click(function() {
    $("#video2").addClass("hidden");
    $("#video3").addClass("hidden"); $("#video1").removeClass("hidden");
     
  });
   $("#video-pics2").click(function() {
    $("#video1").addClass("hidden");
    $("#video3").addClass("hidden");
    $("#video2").removeClass("hidden");
      
  });
  $("#video-pics3").click(function() {
    $("#video2").addClass("hidden");
    $("#video1").addClass("hidden");
    $("#video3").removeClass("hidden");
      
  });
  
});


