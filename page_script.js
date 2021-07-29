$(document).ready(function(){
    $(window).scroll(function(){
    if ($(window).scrollTop() > 100) 
    {
     $("#left_right_div").animate({marginLeft:'100px'},900);
    
    }
   
    
    });
   });