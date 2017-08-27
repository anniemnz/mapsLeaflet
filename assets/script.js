$(function(){
	// console.log('blah');
	let center = [-36.72478249306733,174.41465377807614];

	let map = L.map('map').setView(center,14);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1ueiIsImEiOiJjajZsZ3JzYjQxZHE2MzNteTJiM2hhczNqIn0.D_kx9IhyAvBz4FvjWQXJeA').addTo(map);


	// L.circle(center, {
	// 		radius: 3860,
	// 		color: '#427296',
	// 		weight:2,
	// 		fill:false
	// 	}).addTo(map);



//areas of interest ============

let interestPoints = [
	{
		latlng:[-36.748581791796845,174.43199157714844],
		description: 'Bikepark Office',
		iconImage: 'assets/office.svg',
		iconSize: [50,50]
	},
	{
		latlng: [-36.74815390106932,174.4392927093506],
		description: 'Carpark',
		iconImage: 'assets/carpark.svg',
		iconSize: [50,50]
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
		iconSize: [30,30],
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
				// content: '<img src="assets/map.svg">',
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
						content:'<h3>Woodhill Park Boundary</h3><img src="assets/wp-logo.png">',
						latlng:[-36.707169014703126,174.38787460327148]
						}
		}

	];

	_(boundaryLine).each(function(boundary){

		let polygon = L.polygon(boundary.latlng,{color:'#61BF4F', weight:1}).addTo(map);

		let popup = L.popup({
				// closeButton:false,
				// closeOnClick:false,
				className: boundary.popup.className,
				offset:[0,0],
				maxWidth:190
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

	//bike tracks ============================

	let bikeTrack = [
		{
			name:'Kamma Cuzzy',
			latlng: [
			  [-36.73465390694624,174.4054913520813],
	          [-36.73489465728431,174.40615653991696],
	          [-36.735324566724465,174.40622091293335],
	          [-36.735530922400606,174.40652132034302],
	          [-36.735616903768616,174.40720796585083],
	          [-36.73559970750272,174.4084525108337],
	          [-36.735358959375674,174.40890312194824],
	          [-36.735290174057845,174.4100832939148],
	          [-36.735066621349276,174.410297870636],
	          [-36.73432717313698,174.41034078598022],
	          ],
	          popup:{
						className:'kcPopup',
						content:'<h3>Kamma Cuzzy</h3><img src="assets/bike1.png">',
						latlng:[-36.735616903768616,174.40720796585083]
						}
	}
	];

		_(bikeTrack).each(function(track){

		let polyline = L.polyline(track.latlng,{color:'#033344', weight:3}).addTo(map);



		let popup = L.popup({
				// closeButton:false,
				closeOnClick:false,
				className: track.popup.className,
				offset:[0,0],
				maxWidth:190
	})
		.setLatLng(track.popup.latlng)
			.setContent(track.popup.content)
			.addTo(map);

			polyline.on('click',function(){
				if(map.hasLayer(popup)){
					map.closePopup(popup);
				}else{
					map.addLayer(popup);
				}
			});
		});

//office building =================	

	let officeBuilding = [
		{
			name: 'Woodhill Office',
			latlng: [
				    [-36.739537551832214,174.4222390651703],
		            [-36.74024255940825,174.42245364189148],
		            [-36.74055207288394,174.42272186279297],
		            [-36.74024255940825,174.4236981868744],
		            [-36.739399988623326,174.42296862602234],
		            [-36.739537551832214,174.4222390651703],
					],
					popup:{
						className: 'officePopup',
						content: '<h3>Woodhill Office</h3><img src="assets/office.svg">',
						latlng:[-36.74055207288394,174.42272186279297]
					}
		}
		];
			_(officeBuilding).each(function(building){

			let polygon = L.polygon(building.latlng,{color:'white',fillOpacity:0,weight:2}).addTo(map);

				let popup = L.popup({
				// closeButton:false,
				closeOnClick:false,
				className: building.popup.className,
				offset:[0,0],
				maxWidth:190
	})
		.setLatLng(building.popup.latlng)
			.setContent(building.popup.content)
			.addTo(map);

			polygon.on('click',function(){
				if(map.hasLayer(popup)){
					map.closePopup(popup);
				}else{
					map.addLayer(popup);
				}
			});

			});


//tree ventures ===================

	let treeVentures = [
		{
			name: 'Tree Ventures',
			latlng: [
				    [-36.73986211405114,174.41996186971664],
          			[-36.740132939752996,174.42048490047455],
          			[-36.739945941156215,174.4206377863884],
          			[-36.739677264213896,174.42010402679443],
          			[-36.73987286112101,174.41995918750763],
			],
		}
		];
			_(treeVentures).each(function(ventures){

			let polygon = L.polygon(ventures.latlng,{color:'white',fillOpacity:1,weight:2}).addTo(map);




			let popup = L.popup({
				// closeButton:false,
				closeOnClick:false,
				className: ventures.popup.className,
				offset:[0,0],
				maxWidth:190
	})
		.setLatLng(ventures.popup.latlng)
			.setContent(ventures.popup.content)
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





