$(function(){
    $(function () {
        $("#toggle_btn2").click(function () {
          $("#toggle_box2").slideToggle();
        });
      });
  
      $(window).resize(function () {
        if (window.innerWidth >= 600) {
          $('#toggle_box2').show();
        }
  
      });  





});