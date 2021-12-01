var img7_array=["img/sectionfour_7-1-2.jpg","img/sectionfour_7-1-3.jpg","img/sectionfour_7-1-4.jpg","img/sectionfour_7-1-1.jpg"]
 
	var index7=0;
  
	function slide(){
		document['sammoo'].src=img7_array[index7];
		index7++;
		if(index7>=img7_array.length){
			index7=0;
		}
	  }
	setInterval(slide,1500);