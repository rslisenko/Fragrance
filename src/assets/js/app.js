//=require jquery.min.js

//=require what-input.js

// Core Foundation files
//=require foundation.core.js"
//=require foundation.util.*.js"

//=require foundation.dropdown.js"
//=require foundation.responsiveMenu.js"
//=require foundation.responsiveToggle.js"
//=require foundation.toggler.js"

// to inlude foundation plugins add "=" sign below
//
// require foundation.abide.js"
// require foundation.accordion.js"
// require foundation.accordionMenu.js"
// require foundation.drilldown.js"
// require foundation.dropdownMenu.js"
// require foundation.equalizer.js"
// require foundation.interchange.js"
// require foundation.magellan.js"
// require foundation.offcanvas.js"
// require foundation.orbit.js"
// require foundation.reveal.js"
// require foundation.slider.js"
// require foundation.sticky.js"
// require foundation.tabs.js"
// require foundation.tooltip.js"
// require foundation.zf.responsiveAccordionTabs.js"

//=require slick.min.js


;(function(){
	$(document).foundation();

	$(document).ready(function(){

	var poltavaInfo = document.querySelector('.ba-poltava-info');
		// poltavaInfo = poltavaInfo.innerHTML;

		var map = new google.maps.Map(document.querySelector('.ba-map'), {
		    zoom: 11,
		    center: {lat: 48.8185517, lng: 2.3832553}
	 	 });

	 	 var image = 'assets/img/marker.png';
	 	 var myMarker = new google.maps.Marker({
	 	   	position: {lat: 48.8185517, lng: 2.3832553},
		    map: map,
		    icon: image
		  });

	 	var styles = [
	 	  {
	 	    featureType: "road",
	 	    stylers: [
	 	      { hue: "#d4c9e4" },
	 	      { saturation: -20}
	 	    ]
	 	  },{
	 	    featureType: "geometry.fill",
	 	    stylers: [
	 	      { hue: "#d4c9e4" },
	 	      { saturation: -60}
	 	    ]
	 	  }
	 	];
	 	   map.setOptions({styles: styles});

	});
})();



















