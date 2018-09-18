window.onscroll = function() {
	console.log(scrollY);
    if(window.scrollY > 700 && window.scrollY < 1000) {
      document.getElementById('animationOfContainer').className = 'contenedorAnimate';
		} 
  	else if(window.scrollY > 0) {
		document.getElementById('navbar').className = 'barra__black';
		document.getElementById('items-wrapper').className = 'menu alter'
  	}
  	else if(window.scrollY == 0) {
			document.getElementById('navbar').className = 'navbar2';
			document.getElementById('items-wrapper').className = 'menu';
		} 
		if(window.scrollY < 700) {
      document.getElementById('animationOfContainer').className = 'contenedor2';
    } 
}

	

