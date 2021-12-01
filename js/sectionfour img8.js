var img8_array=["img/sectionfour_8-1-2.jpg","img/sectionfour_8-1-3.jpg","img/sectionfour_8-1-4.jpg","img/sectionfour_8-1-5.jpg","img/sectionfour_8-1-1.jpg"]
 
	var index8=0;
  
	function slide(){
		document['ssambob'].src=img8_array[index8];
		index8++;
		if(index8>=img8_array.length){
			index8=0;
		}
	  }
	setInterval(slide,1500);