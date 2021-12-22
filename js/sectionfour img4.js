$(function(){

	var img4_array=["img/sectionfour_4-1-2.jpg","img/sectionfour_4-1-3.jpg","img/sectionfour_4-1-1.jpg"]
 
	var index4=0;
  
	function slide(){
		document['garchi'].src=img4_array[index4];
		index4++;
		if(index4>=img4_array.length){
			index4=0;
		}
	  }
	setInterval(slide,1500);

});	