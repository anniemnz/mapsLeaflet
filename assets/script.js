$(function(){
	// console.log('blah');
	let center = [-36.72478249306733,174.41465377807614];

	let map = L.map('map').setView(center,12);

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
			  [-36.72958937664222,174.38864707946777],
	          [-36.729331411998096,174.3886363506317],
	          [-36.72903905102044,174.3890118598938],
	          [-36.728858474566394,174.38967704772946],
	          [-36.72858330962934,174.39005255699158],
	          [-36.72811036759001,174.39022421836853],
	          [-36.72784379897519,174.3905782699585],
	          [-36.72767181873259,174.39082503318787],
	          [-36.72747404097744,174.39084649085996],
	          [-36.72719887107943,174.39059972763062],
	          [-36.72700969120258,174.39040660858154],
	          [-36.7267431187669,174.39042806625366],
	          [-36.72651954117184,174.39067482948303],
	          [-36.72629596292585,174.39190864562988],
	          [-36.726201371933534,174.3919730186462],
	          [-36.72623576867149,174.39256310462952],
	          [-36.726055185625306,174.3928849697113],
	          [-36.72603798721781,174.39337849617004],
	          [-36.725642422782315,174.39419388771057]
	          ],
	}
	];

		_(bikeTrack).each(function(track){

		let polyline = L.polyline(track.latlng,{color:'#61BF4F', weight:1}).addTo(map);

	});

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
		}
		];
			_(officeBuilding).each(function(building){

			let polygon = L.polygon(building.latlng,{color:'white',fillOpacity:0,weight:2}).addTo(map);

			});

	});





