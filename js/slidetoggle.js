$(function(){
    $(function () {
        $("#menu").click(function () {
          $("#headerul").slideToggle();
        });
      });
  
      $(window).resize(function () {
        if (window.innerWidth >= 600) {
          $('#headerul').show();
        }
  
      });  
});