var img5_array=["img/sectionfour_5-1-2.jpg","img/sectionfour_5-1-3.jpg","img/sectionfour_5-1-4.jpg","img/sectionfour_5-1-5.jpg","img/sectionfour_5-1-1.jpg"]
 
	var index5=0;
  
	function slide(){
		document['lobster'].src=img5_array[index5];
		index5++;
		if(index5>=img5_array.length){
			index5=0;
		}
	  }
	setInterval(slide,1500);