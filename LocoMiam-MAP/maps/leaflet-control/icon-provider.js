
function getIcon(types, directSaleProductCategories, indirectSaleProductCategories) {
	if (types === "e306d685-8f13-40b6-a6a0-d75fb9cbd47c") {
		return "map-icons/vente-directe.png";
	} else if (types === "79f94c5a-e836-4126-bad6-6b0060b54fe4") {
		return  "map-icons/paniers.png";
	} else if (types === "5fe3c88a-c9aa-4d1a-bae8-bd6dac125c9c") {
		return  "map-icons/circuits-courts.png";
	}
	
	// AUTRES TYPES DE CONFITIONS POSSIBLES
	//if (directSaleProductCategories === "Entreprises TIC + de 50 salari\u00e9s") {
	// 	return  "map-icons/professional.png";
	// } else if (directSaleProductCategories === "Education") {
	// 	return  "map-icons/schools.png";
	
	return "map-icons/default.png";
}