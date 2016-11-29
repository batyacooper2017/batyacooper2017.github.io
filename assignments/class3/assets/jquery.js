

//$(function(){
 //   $("footer").
//});

// $("footer").hover(
     //  function(){
      //      $(this).fadeIn(100);
      //  },
     //   function(){
     //      $(this).fadeOut(100);
     //   }

  //  );


   // $("footer").css({'opacity':0}).hover(
     //   function(){
      //      $(this).animate({'opacity':1},100);
      //  },
     //   function(){
      //      $(this).animate({'opacity':0},100);
    //    }
  //  );
    //$("button").click(function(){
       // $("footer").hide();
  //  });

    //var captionHidden = true;

    //$("footer").on("click", function(){

        //if (captionHidden){
          //   $(this).next().show()
       //  captionHidden = false;
      //  }else{
          //   $(this).next().hide()
          //  captionHidden = true;
     //   }

  //  });

   //var myFooter = $("footer");
    //var myCaption = myImg.next();

   // myImg.on("mouseenter", function(){
       // myCaption.slideDown();
   // }).on("mouseleave", function(){
       // myCaption.slideUp();
   // });

//});

$(function(){
    var captionHidden = true;

   var myFooter = $("footer");
    var myDiv = $("footer div");

    myFooter.on("mouseover", function(){
       myDiv.fadeIn();
    }).on("mouseleave", function(){
        myDiv.fadeOut();

    });

});

    //if (captionHidden){
    //    $(this).next().show()
     //   captionHidden = false;
   // }else{
    //    $(this).next().hide()
    //    captionHidden = true;
   // }
//});
