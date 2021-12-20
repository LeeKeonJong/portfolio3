var img6_array=["img/sectionfour_6-1-2.jpg","img/sectionfour_6-1-3.jpg","img/sectionfour_6-1-4.jpg","img/sectionfour_6-1-1.jpg"]
 
	var index6=0;
  
	function slide(){
		document.getElementById("blackpig2").src=img6_array[index6];
		index6++;
		if(index6>=img6_array.length){
			index6=0;
		}
	  }
	setInterval(slide,1500);