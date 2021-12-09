$(function(){
    $(function () {
        $("#toggle_btn3").click(function () {
          $("#toggle_box3").slideToggle();
        });
      });
  
      $(window).resize(function () {
        if (window.innerWidth >= 600) {
          $('#toggle_box3').show();
        }
  
      });  





});