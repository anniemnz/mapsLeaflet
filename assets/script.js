$(function(){
	// console.log('blah');
	let center = [-36.725814407569835,174.40667152404785];

	let map = L.map('map').setView(center,15);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1ueiIsImEiOiJjajZsZ3JzYjQxZHE2MzNteTJiM2hhczNqIn0.D_kx9IhyAvBz4FvjWQXJeA').addTo(map);


	L.circle(center, {
			radius: 3860,
			color: '#427296',
			weight:2,
			fill:false
		}).addTo(map);



//areas of interest ============

let interestPoints = [
	{
		latlng:[-36.748581791796845,174.43199157714844],
		description: 'Bikepark Office',
		iconImage: 'assets/office.svg',
		iconSize: [30,30]
	},
	{
		latlng: [-36.74115390106932,174.4222927093506],
		description: 'Carpark',
		iconImage: 'assets/carpark.svg',
		iconSize: [30,30]
	},
	{
		latlng: [-36.73530737039309,174.4145679473877],
		description: 'Map Station 1',
		className: 'interestInfo',
		iconSize: [30,30],
		iconImage: 'assets/info.svg'
	},
	{
		latlng: [-36.73056103568829,174.4086456298828],
		description: 'Map Station 2',
		className: 'interestInfo',
		iconSize: [50,50],
		iconImage: 'assets/info.svg'
	},
	{
		latlng: [-36.72113628411142,174.40452575683594],
		description: 'Map Station 3',
		className: 'interestInfo',
		iconSize: [30,30],
		iconImage: 'assets/info.svg'
	}

];

_(interestPoints).each(function(interest){

	let interestIcon = L.icon({
								iconUrl: interest.iconImage,
								iconSize: interest.iconSize
								});

	let marker = L.marker(interest.latlng,{icon:interestIcon}).addTo(map);


		let popup = L.popup({
				closeButton:false,
				closeOnClick:false,
				className: 'interestGroup',
				offset:[0,0]
	})
		.setLatLng(interest.latlng)
			.setContent(interest.description)
			// .addTo(map);

			marker.on('click',function(){
				if(map.hasLayer(popup)){
					map.closePopup(popup);
				}else{
					map.addLayer(popup);
				}
			});
		});


//boundary =====================

	let boundaryLine = [
		{
			name:'Park Boundary',
			latlng:[
				  	[-36.707169014703126,174.38787460327148],
		            [-36.71088469386103,174.39019203186035],
		            [-36.711435149566796,174.39027786254883],
		            [-36.71177918238037,174.39173698425293],
		            [-36.71370573766935,174.3932819366455],
		            [-36.7148754083832,174.39345359802246],
		            [-36.72182426131441,174.39800262451172],
		            [-36.72615837598941,174.40014839172363],
		            [-36.726708722256184,174.40186500549316],
		            [-36.74349238865304,174.40890312194824],
		            [-36.74658733618938,174.41225051879883],
		            [-36.74782528025494,174.41954612731934],
		            [-36.74686243659651,174.4247817993164],
		            [-36.74899443131242,174.43001747131348],
		            [-36.74555570087914,174.43121910095215],
		            [-36.74397383313426,174.43036079406738],
		            [-36.74328605437939,174.42744255065918],
		            [-36.733794078147156,174.4222068786621],
		            [-36.729254022435875,174.41757202148438],
		            [-36.7267775152622,174.4199752807617],
		            [-36.724920082468785,174.41834449768066],
		            [-36.72478249306733,174.41645622253418],
		            [-36.72065469640278,174.4152545928955],
		            [-36.7189347156517,174.41302299499512],
		            [-36.718109111211255,174.4101905822754],
		            [-36.71618266634278,174.4072723388672],
		            [-36.708338784926944,174.4046115875244],
		            [-36.70304027158719,174.39525604248047],
		            [-36.70503585845462,174.3863296508789],
		            [-36.707169014703126,174.38787460327148]
					],
					popup:{
						className:'custom-popup',
						content:'Woodhill Park Boundary<img src="assets/wp-logo.png">',
						latlng:[-36.707169014703126,174.38787460327148]
						}
		}

	];

	_(boundaryLine).each(function(boundary){

		let polygon = L.polygon(boundary.latlng,{color:'#61BF4F', weight:1}).addTo(map);

		let popup = L.popup({
				closeButton:false,
				closeOnClick:false,
				className: boundary.popup.className,
				offset:[0,0]
	})
		.setLatLng(boundary.popup.latlng)
			.setContent(boundary.popup.content)
			.addTo(map);

			polygon.on('click',function(){
				if(map.hasLayer(popup)){
					map.closePopup(popup);
				}else{
					map.addLayer(popup);
				}
			});
		});


	});





