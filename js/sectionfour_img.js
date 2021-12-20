$(function(){

  var img_array=["img/sectionfour_1-1-2.jpg","img/sectionfour_1-1-3.jpg","img/sectionfour_1-1-1.jpg"]
  
  var index=0;

  function slide(){
	  document.getElementById("dongga").src=img_array[index];
	  index++;
	  if(index>=img_array.length){
		  index=0;
	  }
	}
  setInterval(slide,1500);

  
  

});