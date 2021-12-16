$(function(){
    $(window).resize(function(){
        if($(window).width()>600)
    
    $('#open').click(function(){

        $('#box').css('display', 'block');
        
        });
        
        $('#cbtn').click(function(){
        
        $('#box').css('display', 'none');
        
        
        });       
     });  
});