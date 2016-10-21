// Speed of the automatic slideshow
var slideshowSpeed = 6000;

// Variable to store the images we need to set as background
// which also includes some text and url's.
var photos = [ {
		"image" : "sotaltim1.jpg",
		"firstline" : "<span>TEN EL CONTROL ABSOLUTO DE TU TERRENO, </span><p>DESDE CUALQUIER LUGAR DEL MUNDO,</p><span>SOLO CON UN CLIC</span>"
	}, {
		"image" : "sotaltim2.jpg",
		"firstline" : "<p>UN EQUIPO DE </p><span>PROFESIONALES COMPROMETIDOS CON TU EMPRESA</span>"
	},{
		"image" : "sotaltim3.jpg",
		"firstline" : "<p>DESCARGA INFORMACIÓN EXACTA</p><span>PARA LOGRAR UNA</span><p>MEJOR PRODUCCIÓN</p>"
	}, {
		"image" : "sotaltim4.jpg",
		"firstline" : "<p>MONITOREAMOS TU TERRENO</p><span>TODOS LOS DÍAS DEL AÑO, </span><p>LAS 24 HORAS DEL DÍA</p>"
	},{
		"image" : "sotaltim5.jpg",
		"firstline" : "<span>RECIBE MENSAJES DE ALERTA</span><p>ANTE CUALQUIER EVENTO QUE OCURRA</p><span>EN TU PREDIO</span>"
	}, {
		"image" : "sotaltim6.jpg",
		"firstline" : "<p>SOLUCIONES CONCRETAS</p><span>PARA UNA MAYOR Y</span><p>MEJOR PRODUCCIÓN AGRICOLA</p>"
	},{
		"image" : "sotaltim7.jpg",
		"firstline" : "<p>MANEJAMOS LAS CONDICIONES </p><span>AMBIENTALES DE TU TERRENO,</span><p>PARA QUE OBTENGAS</p><span>EL PRIMOR DE LA TEMPORADA.</span>"
	}, {
		"image" : "sotaltim8.jpg",
		"firstline" : "<p>OBTÉN UNA</p><span>PRODUCCIÓN CERVECERA</span><p>CON ESTÁNDARES DE</p><span>CALIDAD INTERNACIONAL</span>"
	}
];



$(function() {
		
	// Backwards navigation
	$("#back").click(function() {
		stopAnimation();
		navigate("back");
	});
	
	// Forward navigation
	$("#next").click(function() {
		stopAnimation();
		navigate("next");
	});
	
	var interval;
	$("#control").toggle(function(){
		stopAnimation();
	}, function() {
		// Change the background image to "pause"
		$(this).css({ "background-image" : "url(img/carrusel/pausa.png)" });
		
		// Show the next image
		navigate("next");
		
		// Start playing the animation
		interval = setInterval(function() {
			navigate("next");
		}, slideshowSpeed);
	});
	
	
	var activeContainer = 1;	
	var currentImg = 0;
	var animating = false;
	var navigate = function(direction) {
		// Check if no animation is running. If it is, prevent the action
		if(animating) {
			return;
		}
		
		// Check which current image we need to show
		if(direction == "next") {
			currentImg++;
			if(currentImg == photos.length + 1) {
				currentImg = 1;
			}
		} else {
			currentImg--;
			if(currentImg == 0) {
				currentImg = photos.length;
			}
		}
		
		// Check which container we need to use
		var currentContainer = activeContainer;
		if(activeContainer == 1) {
			activeContainer = 2;
		} else {
			activeContainer = 1;
		}
		
		showImage(photos[currentImg - 1], currentContainer, activeContainer);
		
	};
	
	var currentZindex = -1;
	var showImage = function(photoObject, currentContainer, activeContainer) {
		animating = true;
		
		// Make sure the new container is always on the background
		currentZindex--;
		
		// Set the background image of the new active container
		$("#headerimg" + activeContainer).css({
			"background-image" : "url(img/carrusel/" + photoObject.image + ")",
			"display" : "block",
			"z-index" : currentZindex
		});
		
		// Hide the header text
		$("#headertxt").css({"display" : "none"});
		
		// Set the new header text
		$("#firstline").html(photoObject.firstline);
			if (photoObject.firstline == "") {
				$("#firstline").css({"display" : "none"});
			}else{
				$("#firstline").css({"display" : "block"});
			};
		
		
		// Fade out the current container
		// and display the header text when animation is complete
		$("#headerimg" + currentContainer).fadeOut(function() {
			setTimeout(function() {
				$("#headertxt").css({"display" : "block"});
				animating = false;
			}, 500);
		});
	};
	
	var stopAnimation = function() {
		// Change the background image to "play"
		$("#control").css({ "background-image" : "url(img/carrusel/play.png)" });
		
		// Clear the interval
		clearInterval(interval);
	};
	
	// We should statically set the first image
	navigate("next");
	
	// Start playing the animation
	interval = setInterval(function() {
		navigate("next");
	}, slideshowSpeed);
	
});