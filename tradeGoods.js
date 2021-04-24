// Note: at certain law/government types, some trade goods are illegal
// law = illegal to governments above this level.
// What is the law level threshold where goods become contraband?
// If law level is greater than the given number, then goods are contraband under the given government types

// government = illegal in these government types:
//	- Weapons	 1,3,4,5,6,8,9,11,12
//	- Drugs		 2,4,8,9
//	- Technology 3,5,6,9,11
//	- Computers	 5,11
//	- Travellers 3,6,9
//	- Psionics	 9


const tradeGoods = [
{
	dd : 11,
	type : 'Common Electronics',
	availability : ['All'],
	tons : '2D x 10',
	price : 20000,
	buyDm : {IN: 2, HT: 3, RI: 1},
	sellDm : {NI: 2, LT: 1, PO: 1},
	law: 9,
	government: [3,5,6,9,11],
	example : 'Simple electronics including basic computers up to TL10'
},{
	dd : 12,
	type : 'Common Industrial Goods',
	availability : ['All'],
	tons : '2D x 10',
	price : 10000,
	buyDm : {NA: 2, IN: 5},
	sellDm : {NI: 3, AG: 2},
	law: 9,
	government: [3,5,6,9,11],
	example : 'Machine components and spare parts for common machinery'
},{
	dd : 13,
	type : 'Common Manufactured Goods',
	availability : ['All'],
	tons : '2D x 10',
	price : 20000,
	buyDm : {NA: 2, IN: 5},
	sellDm : {NI: 3, HI: 2},
	law: 0,
	government: [],
	example : 'Household appliances, clothing and so forth'
},{
	dd : 14,
	type : 'Common Raw Materials',
	availability : ['All'],
	tons : '2D x 20',
	price : 5000,
	buyDm : {AG: 3, GA: 2},
	sellDm : {IN: 2, PO: 2},
	law: 0,
	government: [],
	example : 'Metal, plastics, chemicals and other basic materials'
},{
	dd : 15,
	type : 'Common Consumables',
	availability : ['All'],
	tons : '2D x 20',
	price : 500,
	buyDm : {AG: 3, WA: 2, GA: 1, AS: -4},
	sellDm : {AS: 1, Fl: 1, IE: 1, HI: 1},
	law: 0,
	government: [],
	example : 'Food, drink and other agricultural products'
},{
	dd : 16,
	type : 'Common Ore',
	availability : ['All'],
	tons : '2D x 20',
	price : 1000,
	buyDm : {AS: 4},
	sellDm : {IN: 3, NI: 1},
	law: 0,
	government: [],
	example : 'Ore bearing common metals'
},{
	dd : 21,
	type : 'Advanced Electronics',
	availability : ['IN', 'HT'],
	tons : '1D x 5',
	price : 100000,
	buyDm : {IN: 2, HT: 3},
	sellDm : {NI: 1, RI: 2, AS: 3},
	law: 6,
	government: [5,11],
	example : 'Advanced sensors, computers and other electronics up to TL15'
},{
	dd : 22,
	type : 'Advanced Machine Parts',
	availability : ['IN', 'HT'],
	tons : '1D x 5',
	price : 75000,
	buyDm : {IN: 2, HT: 1},
	sellDm : {AS: 2, NI: 1},
	law: 8,
	government: [3,5,6,9,11],
	example : 'Machine components and spare parts, including gravitic components'
},{
	dd : 23,
	type : 'Advanced Manufactured Goods',
	availability : ['IN', 'HT'],
	tons : '1D x 5',
	price : 100000,
	buyDm : {IN: 1},
	sellDm : {HI: 1, RI: 2},
	law: 8,
	government: [3,5,6,9,11],
	example : 'Devices and clothing incorporating advanced technologies'
},{
	dd : 24,
	type : 'Advanced Weapons',
	availability : ['IN', 'HT'],
	tons : '1D x 5',
	price : 150000,
	buyDm : {HT: 2},
	sellDm : {PO: 1, AmberZone: 2, RedZone: 4},
	law: 3,
	government: [1,3,4,5,6,8,9,11,12],
	example : 'Firearms, explosives, ammunition, artillery and other military-grade weaponry'
},{
	dd : 25,
	type : 'Advanced Vehicles',
	availability : ['IN', 'HT'],
	tons : '1D x 5',
	price : 180000,
	buyDm : {HT: 2},
	sellDm : {AS: 2, RI: 2},
	law: 8,
	government: [3,5,6,9,11],
	example : 'Grav cars, tanks, spacecraft and other vehicles up to TL15'
},{
	dd : 26,
	type : 'Biochemicals',
	availability : ['AG', 'WA'],
	tons : '1D x 5',
	price : 50000,
	buyDm : {AG: 1, WA: 2},
	sellDm : {IN: 2},
	law: 0,
	government: [],
	example : 'Biofuels, organic chemicals, extracts'
},{
	dd : 31,
	type : 'Crystals & Gems',
	availability : ['AS', 'DE', 'IE'],
	tons : '1D x 5',
	price : 20000,
	buyDm : {AS: 2, DE: 1, IE: 1},
	sellDm : {IN: 3, RI: 2},
	law: 0,
	government: [],
	example : 'Diamonds, synthetic or natural gemstones'
},{
	dd : 32,
	type : 'Cybernetics',
	availability : ['HT'],
	tons : '1D',
	price : 250000,
	buyDm : {HT: 1},
	sellDm : {AS: 1, IE: 1, RI: 2},
	law: 0,
	government: [3,5,6,9,11],
	example : 'Cybernetic components, replacement limbs'
},{
	dd : 33,
	type : 'Live Animals',
	availability : ['AG', 'GA'],
	tons : '1D x 10',
	price : 10000,
	buyDm : {AG: 2},
	sellDm : {LO: 3},
	law: 0,
	government: [],
	example : 'Riding animals, beasts of burden, exotic pets'
},{
	dd : 34,
	type : 'Luxury Consumables',
	availability : ['AG', 'GA', 'WA'],
	tons : '1D x 10',
	price : 20000,
	buyDm : {AG: 2, WA: 1},
	sellDm : {RI: 2, HI: 2},
	law: 0,
	government: [],
	example : 'Rare foods, fine liquors'
},{
	dd : 35,
	type : 'Luxury Goods',
	availability : ['HI'],
	tons : '1D',
	price : 200000,
	buyDm : {HI: 1},
	sellDm : {RI: 4},
	law: 0,
	government: [],
	example : 'Rare or extremely high-quality manufactured goods'
},{
	dd : 36,
	type : 'Medical Supplies',
	availability : ['HT', 'HI'],
	tons : '1D x 5',
	price : 50000,
	buyDm : {HT: 2},
	sellDm : {IN: 2, PO: 1, RI: 1},
	law: 9,
	government: [2,4,8,9],
	example : 'Diagnostic equipment, basic drugs, cloning technology'
},{
	dd : 41,
	type : 'Petrochemicals',
	availability : ['DE', 'Fl', 'IE', 'WA'],
	tons : '1D x 10',
	price : 10000,
	buyDm : {DE: 2},
	sellDm : {IN: 2, AG: 1, LT: 2},
	law: 0,
	government: [],
	example : 'Oil, liquid fuels'
},{
	dd : 42,
	type : 'Pharmaceuticals',
	availability : ['AS', 'DE', 'HI', 'WA'],
	tons : '1D',
	price : 100000,
	buyDm : {AS: 2, HI: 1},
	sellDm : {RI: 2, LT: 1},
	law: 0,
	government: [],
	example : 'Drugs, medical supplies, anagathatics, fast or slow drugs'
},{
	dd : 43,
	type : 'Polymers',
	availability : ['IN'],
	tons : '1D x 10',
	price : 7000,
	buyDm : {IN: 1},
	sellDm : {RI: 2, NI: 1},
	law: 0,
	government: [],
	example : 'Plastics and other synthetics'
},{
	dd : 44,
	type : 'Precious Metals',
	availability : ['AS', 'DE', 'IE', 'FL'],
	tons : '1D',
	price : 50000,
	buyDm : {AS: 3, DE: 1, IE: 2},
	sellDm : {RI: 3, IN: 2, HT: 1},
	law: 0,
	government: [],
	example : 'Gold, silver, platinum, rare elements'
},{
	dd : 45,
	type : 'Radioactives',
	availability : ['AS', 'DE', 'LO'],
	tons : '1D',
	price : 1000000000,
	buyDm : {AS: 2, LO: 2},
	sellDm : {IN: 3, HT: 1, NI: -2, AG: -3},
	law: 0,
	government: [],
	example : 'Uranium, plutonium, unobtanium, rare elements'
},{
	dd : 46,
	type : 'Robots',
	availability : ['IN'],
	tons : '1D x 5',
	price : 400000,
	buyDm : {IN: 1},
	sellDm : {AG: 2, HT: 1},
	law: 8,
	government: [3,5,6,9,11],
	example : 'Industrial and personal robots and drones'
},{
	dd : 51,
	type : 'Spices',
	availability : ['GA', 'DE', 'WA'],
	tons : '1D x 10',
	price : 6000,
	buyDm : {DE: 2},
	sellDm : {HI: 2, RI: 3, PO: 3},
	law: 0,
	government: [],
	example : 'Preservatives, luxury food additives, natural drugs'
},{
	dd : 52,
	type : 'Textiles',
	availability : ['AG', 'NI'],
	tons : '1D x 20',
	price : 3000,
	buyDm : {AG: 7},
	sellDm : {HI: 3, NA: 2},
	law: 0,
	government: [],
	example : 'Clothing and fabrics'
},{
	dd : 53,
	type : 'Uncommon Ore',
	availability : ['AS', 'IE'],
	tons : '1D x 20',
	price : 5000,
	buyDm : {AS: 4},
	sellDm : {IN: 3, NI: 1},
	law: 0,
	government: [],
	example : 'Ore containing precious or valuable metals'
},{
	dd : 54,
	type : 'Uncommon Raw Materials',
	availability : ['AG', 'DE', 'WA'],
	tons : '1D x 10',
	price : 20000,
	buyDm : {AG: 2, WA: 1},
	sellDm : {IN: 2, HT: 1},
	law: 0,
	government: [],
	example : 'Valuable metals like titanium, rare elements'
},{
	dd : 55,
	type : 'Wood',
	availability : ['AG', 'GA'],
	tons : '1D x 20',
	price : 1000,
	buyDm : {AG: 6},
	sellDm : {RI: 2, IN: 1},
	law: 0,
	government: [],
	example : 'Hard or beautiful woods and plant extracts'
},{
	dd : 56,
	type : 'Vehicles',
	availability : ['IN', 'HT'],
	tons : '1D x 10',
	price : 15000,
	buyDm : {IN: 2, HT: 1},
	sellDm : {NI: 2, HI: 1},
	law: 0,
	government: [],
	example : 'Wheeled, tracked and other vehicles from TL10 or lower'
},{
	dd : 61,
	type : 'Illegal Biochemicals',
	availability : ['AG', 'WA'],
	tons : '1D x 5',
	price : 50000,
	buyDm : {WA: 2},
	sellDm : {IN: 6},
	law: 3,
	government: [],
	example : 'Dangerous chemicals, extracts from endangered species'
},{
	dd : 62,
	type : 'Cybernetics, Illegal',
	availability : ['HT'],
	tons : '1D',
	price : 250000,
	buyDm : {HT: 1},
	sellDm : {AS: 4, IE: 4, RI: 8, AmberZone: 6, RedZone: 6},
	law: 3,
	government: [],
	example : 'Combat cybernetics, illegal enhancements'
},{
	dd : 63,
	type : 'Drugs, Illegal',
	availability : ['AS', 'DE', 'HI', 'WA'],
	tons : '1D',
	price : 100000,
	buyDm : {AS: 1, DE: 1, GA: 1, WA: 1},
	sellDm : {RI: 6, HI: 6},
	law: 6,
	government: [1,2,3,4,5,6,8,9,11],
	example : 'Addictive drugs, combat drugs'
},{
	dd : 64,
	type : 'Luxuries, Illegal',
	availability : ['AG', 'GA', 'WA'],
	tons : '1D',
	price : 50000,
	buyDm : {AG: 2, WA: 1},
	sellDm : {RI: 6, HI: 4},
	law: 6,
	government: [],
	example : 'Debauched or addictive luxuries'
},{
	
	dd : 65,
	type : 'Weapons, Illegal',
	availability : ['IN', 'HT'],
	tons : '1D x 5',
	price : 150000,
	buyDm : {HT: 2},
	sellDm : {PO: 6, AmberZone: 8, RedZone: 10},
	law: 1,
	government: [],
	example : 'Weapons of mass destruction, naval weapons'
},{
	
	dd : 66,
	type : 'Exotics',
	availability : ['?'],
	tons : '?',
	price : 0,
	buyDm : {},
	sellDm : {},
	law: 0,
	government: [],
	example : 'Exotic goods are outside the normal trade rules, and covers such things are alien relics, prototype technology, unique plant or animal life, priceless treasures and so forth. Buying and selling exotic goods is a matter for roleplaying and adventure'
}
];