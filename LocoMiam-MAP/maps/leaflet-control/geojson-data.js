geojson = [{
	"id": "02c8e8da-63ee-4529-81ad-c48fb6213e7e",
	"fields": {
		"city": "GUERANDE",
		"wgs84": [47.362348690975864, -2.4342269014051734], //cf "location:"
		"notes": "Paniers types (2 tailles : 10€ et 15€)",
		"website": "http://www.bio-legume.fr",
		"fbPageUrl": '',
		"lines": "51, Rue du parc des Menuns - Domhéry",
		"phone": "02 40 42 86 37",
		"mobile": "06 16 11 76 08",//(2 fois "mobile" dans fichier source,PB? + voir à ne pas trop donner n° perso)
		"email": "benoit@bio-legumes.fr",
		"lgn": -2.4342269014051734,
		"zipcode": 44350,
		"lat": 47.362348690975864,
		"name": "Les Jardins de Domhéry",//PB avec répétition champ "name" avec celui du nom du contact?
		"types": "e306d685-8f13-40b6-a6a0-d75fb9cbd47c",
		"directSaleProductCategories": "Légumes",// aussi "productCategories:", lequel est celui à aller chercher? 'fd1084ef-5b33-4110-8f22-eacac7d3d005' à changer en "Légumes"
		"directSaleProductCategories2": '',
		"indirectSaleProductCategories": '',//pour afficher si revente autres produits
		"indirectSaleProductCategories": '',//pour afficher si revente autres produits
		"usualOpeningDays": "Samedi",
		openingHours: 
		// "[]" enlevé du code initial:
		//  saturday: [
		// 		{
		// 			end: '12:00',
		// 			start: '10:00'
		// 		  }
		// 		],
		{
			notes: '',
			timezone: 'Europe/Paris',
			usual: {
			  friday:
				{
				  end: '18:30',
				  start: '16:30'
				}
			  ,
			  saturday: 
				{
				  end: '12:00',
				  start: '10:00'
				}
			  ,
			  wednesday: 
				{
				  end: '18:30',
				  start: '16:30'
				}
			  
			}
		  },
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-2.4342269014051734, 47.362348690975864]
	},
	"record_timestamp": "2014-08-13T22:12:23+00:00"
}, {
	"id": "1b4f0176-3ff9-41ac-87f7-b886a7fa613c",
	"fields": {
		"city": "SAINTE-PAZANNE",
		"wgs84": [47.095563090773275, -1.802994925715044], //cf "location:"
		"notes": "Paniers types de légumes (3 tailles : 10€, 15€ ou 20€) ou de fruits (2 tailles : 10€ ou 12€)",
		"website": "http://www.aujardinbioretz.com",
		"fbPageUrl": "https://www.facebook.com/jardin.bioretz/",
		"lines": "La Haute Mojetière - 23 rue Roche Blanche",
		"phone": "02 51 11 87 27",
		"mobile": "06 75 45 25 38",//(2 fois "mobile" dans fichier source,PB? + voir à ne pas trop donner n° perso)
		"email": "aujardinbioretz@orange.fr",
		"lgn": -1.802994925715044,
		"zipcode": 44680,
		"lat": 47.095563090773275,
		"name": "Au Jardin Bio Retz",//PB avec répétition champ "name" avec celui du nom du contact?
		"types": "5fe3c88a-c9aa-4d1a-bae8-bd6dac125c9c",
		"directSaleProductCategories": "Fruits",// +rajouter légumes aussi - aussi "productCategories:", lequel est celui à aller chercher? '14bfff88-7060-48c3-8029-02ace9ec5ffa' à changer en "Fruits"
		"directSaleProductCategories2": "Légumes",
		"indirectSaleProductCategories": "Viandes et Charcuterie" + "," + "&nbsp;" + "Œufs et Produits Laitiers"+ "," + "&nbsp;" + "Epicerie Traiteur" + "," + "&nbsp;" + "Vins et Boissons",//pour afficher si revente autres produits, changer "4182b842-0ca2-4730-9b18-0fb339d9e806" en 
		"usualOpeningDays": "Vendredi",
		openingHours: {
			notes: '',
			timezone: 'Europe/Paris',
			usual: {
			  friday: [
				{
				  end: '12:30',
				  start: '09:00'
				},
				{
				  end: '19:00', // PB quand horaire matin + après-midi car exprimé par même code
				  start: '13:00'
				}
			  ],
			  saturday: 
				{
				  end: '12:30',
				  start: '09:00'
				}
			  ,
			  thursday: [
				{
				  end: '12:30',
				  start: '09:00'
				},
				{
				  end: '19:00',
				  start: '13:00'
				}
			  ],
			  tuesday: [
				{
				  end: '12:30',
				  start: '09:00'
				},
				{
				  end: '19:00',
				  start: '13:00'
				}
			  ],
			  wednesday: [
				{
				  end: '12:30',
				  start: '09:00'
				},
				{
				  end: '19:00',
				  start: '13:00'
				}
			  ]
			}
		  },	},
	"geometry": {
		"type": "Point",
		"coordinates": [-1.802994925715044, 47.095563090773275]
	},
	"record_timestamp": "2014-08-13T22:12:23+00:00"

}, {
	"id": "66db7ab0-5fb6-4670-8dcb-bbe4d3534dd1",
	"fields": {
		"city": "BOUGUENNAIS",
		"wgs84": [47.169887, -1.565421], //cf "location:"
		"notes": "Paniers types (2 tailles : 10 € (1/2 personnes) et 15 € (3/4 personnes)",
		"website": '',
		"fbPageUrl": "https://www.facebook.com/escarbote",
		"lines": "Chemin du Clos de la Fontaine",
		"phone": "06 02 38 86 13",
		"mobile": '',
		"email": "escarbote2@gmail.com",
		"lgn": -1.565421,
		"zipcode": 44340,
		"lat": 47.169887,
		"name": "L\'Escarbote",//PB avec répétition champ "name" avec celui du nom du contact?
		"types": "79f94c5a-e836-4126-bad6-6b0060b54fe4",
		"directSaleProductCategories": "Légumes",// aussi "productCategories:", lequel est celui à aller chercher? 'fd1084ef-5b33-4110-8f22-eacac7d3d005' à changer en "Légumes"
		"directSaleProductCategories2": '',
		"indirectSaleProductCategories": '',
		"usualOpeningDays": "Samedi",
		openingHours: {
			notes: '',
			timezone: 'Europe/Paris',
				usual: {
				  wednesday: {
					orderDeadline: '22:00',
					pickupHours: {
					  saturday: [
						{
						  end: '10:00',
						  start: '09:00'
						}
					  ]
					}
				  }
				}
			  },	},
	"geometry": {
		"type": "Point",
		"coordinates": [-1.565421, 47.169887]
	},
	"record_timestamp": "2014-08-13T22:12:23+00:00"
		
}];