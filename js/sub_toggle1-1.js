$(function(){
    $(function () {
        $("#toggle_btn1").click(function () {
          $("#toggle_box1").slideToggle();
        });
      });
  
      $(window).resize(function () {
        if (window.innerWidth >= 600) {
          $('#toggle_box1').show();
        }
  
      });  





});