$(function(){

	var img3_array=["img/sectionfour_3-1-2.jpg","img/sectionfour_3-1-3.jpg","img/sectionfour_3-1-1.jpg"]
 
	var index3=0;
  
	function slide(){
		document['okman'].src=img3_array[index3];
		index3++;
		if(index3>=img3_array.length){
			index3=0;
		}
	  }
	setInterval(slide,1500);

});	