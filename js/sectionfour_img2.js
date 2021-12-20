$(function(){

	var img2_array=["img/sectionfour_2-1-2.jpg","img/sectionfour_2-1-3.jpg","img/sectionfour_2-1-1.jpg"]
 
	var index2=0;
  
	function slide(){
		document.getElementById("blackpig").src=img2_array[index2];
		index2++;
		if(index2>=img2_array.length){
			index2=0;
		}
	  }
	setInterval(slide,1500);

});	