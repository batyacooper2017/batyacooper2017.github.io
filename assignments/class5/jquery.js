$(function(){



    var $myNavItem = $("nav > ul > li");
    var $myHamburger = $("#hamburger");


       $("myHamburger").onclick(function(){
           $("myNavItem").animate(
               {"left": "+=100px"}, "slow");

         $("myHamburger").click(function(){
           $("myNavItem").animate(
               {"right": "-=100px"}, "slow");

     });
});


