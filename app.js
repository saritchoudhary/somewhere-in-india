const regions = [
  { name: "Andhra Pradesh", type: "state" },
  { name: "Arunachal Pradesh", type: "state" },
  { name: "Assam", type: "state" },
  { name: "Bihar", type: "state" },
  { name: "Chhattisgarh", type: "state" },
  { name: "Goa", type: "state" },
  { name: "Gujarat", type: "state" },
  { name: "Haryana", type: "state" },
  { name: "Himachal Pradesh", type: "state" },
  { name: "Jharkhand", type: "state" },
  { name: "Karnataka", type: "state" },
  { name: "Kerala", type: "state" },
  { name: "Madhya Pradesh", type: "state" },
  { name: "Maharashtra", type: "state" },
  { name: "Manipur", type: "state" },
  { name: "Meghalaya", type: "state" },
  { name: "Mizoram", type: "state" },
  { name: "Nagaland", type: "state" },
  { name: "Odisha", type: "state" },
  { name: "Punjab", type: "state" },
  { name: "Rajasthan", type: "state" },
  { name: "Sikkim", type: "state" },
  { name: "Tamil Nadu", type: "state" },
  { name: "Telangana", type: "state" },
  { name: "Tripura", type: "state" },
  { name: "Uttar Pradesh", type: "state" },
  { name: "Uttarakhand", type: "state" },
  { name: "West Bengal", type: "state" },
  { name: "Andaman and Nicobar Islands", type: "territory" },
  { name: "Chandigarh", type: "territory" },
  { name: "Dadra and Nagar Haveli and Daman and Diu", type: "territory" },
  { name: "Delhi", type: "territory" },
  { name: "Jammu and Kashmir", type: "territory" },
  { name: "Ladakh", type: "territory" },
  { name: "Lakshadweep", type: "territory" },
  { name: "Puducherry", type: "territory" },
];

const starterPlaces = [
  ["Andhra Pradesh", "Alluri Sitharama Raju", "Araku Valley", "Nature & outdoors"],
  ["Andhra Pradesh", "Tirupati", "Tirumala Venkateswara Temple", "Culture & heritage"],
  ["Andhra Pradesh", "NTR", "Undavalli Caves", "Culture & heritage"],
  ["Arunachal Pradesh", "Tawang", "Tawang Monastery", "Culture & heritage"],
  ["Arunachal Pradesh", "West Kameng", "Sela Pass", "Nature & outdoors"],
  ["Arunachal Pradesh", "Lower Subansiri", "Ziro Valley", "Nature & outdoors"],
  ["Assam", "Kamrup Metro", "Kamakhya Temple", "Culture & heritage"],
  ["Assam", "Golaghat", "Kaziranga National Park", "Nature & outdoors"],
  ["Assam", "Dibrugarh", "Majuli Island", "Nature & outdoors"],
  ["Bihar", "Gaya", "Mahabodhi Temple", "Culture & heritage"],
  ["Bihar", "Nalanda", "Nalanda Mahavihara", "Culture & heritage"],
  ["Bihar", "Patna", "Takht Sri Patna Sahib", "Culture & heritage"],
  ["Chhattisgarh", "Bastar", "Chitrakote Falls", "Nature & outdoors"],
  ["Chhattisgarh", "Raipur", "Sirpur", "Culture & heritage"],
  ["Chhattisgarh", "Bastar", "Kanger Valley National Park", "Nature & outdoors"],
  ["Goa", "North Goa", "Fort Aguada", "Culture & heritage"],
  ["Goa", "South Goa", "Palolem Beach", "Coast & islands"],
  ["Goa", "North Goa", "Fontainhas", "City & neighbourhood"],
  ["Gujarat", "Kachchh", "Great Rann of Kutch", "Nature & outdoors"],
  ["Gujarat", "Ahmedabad", "Sabarmati Ashram", "Culture & heritage"],
  ["Gujarat", "Gir Somnath", "Gir National Park", "Nature & outdoors"],
  ["Haryana", "Gurugram", "Sultanpur National Park", "Nature & outdoors"],
  ["Haryana", "Kurukshetra", "Brahma Sarovar", "Culture & heritage"],
  ["Haryana", "Panchkula", "Morni Hills", "Nature & outdoors"],
  ["Himachal Pradesh", "Kangra", "Dharamshala & McLeod Ganj", "Nature & outdoors"],
  ["Himachal Pradesh", "Kullu", "Great Himalayan National Park", "Nature & outdoors"],
  ["Himachal Pradesh", "Shimla", "The Ridge, Shimla", "City & neighbourhood"],
  ["Jharkhand", "Ranchi", "Hundru Falls", "Nature & outdoors"],
  ["Jharkhand", "Deoghar", "Baidyanath Temple", "Culture & heritage"],
  ["Jharkhand", "East Singhbum", "Dalma Wildlife Sanctuary", "Nature & outdoors"],
  ["Karnataka", "Mysuru", "Mysore Palace", "Culture & heritage"],
  ["Karnataka", "Vijayanagara", "Hampi", "Culture & heritage"],
  ["Karnataka", "Uttara Kannada", "Gokarna", "Coast & islands"],
  ["Kerala", "Alappuzha", "Alappuzha backwaters", "Nature & outdoors"],
  ["Kerala", "Idukki", "Munnar", "Nature & outdoors"],
  ["Kerala", "Thiruvananthapuram", "Kovalam Beach", "Coast & islands"],
  ["Madhya Pradesh", "Narmadapuram", "Pachmarhi", "Nature & outdoors"],
  ["Madhya Pradesh", "Chhatarpur", "Khajuraho Group of Monuments", "Culture & heritage"],
  ["Madhya Pradesh", "Umaria", "Bandhavgarh National Park", "Nature & outdoors"],
  ["Maharashtra", "Pune", "Shaniwar Wada", "Culture & heritage"],
  ["Maharashtra", "Chhatrapati Sambhajinagar", "Ajanta Caves", "Culture & heritage"],
  ["Maharashtra", "Mumbai", "Gateway of India", "City & neighbourhood"],
  ["Manipur", "Bishnupur", "Loktak Lake", "Nature & outdoors"],
  ["Manipur", "Imphal West", "Kangla Fort", "Culture & heritage"],
  ["Manipur", "Churachandpur", "Dzukou Valley", "Nature & outdoors"],
  ["Meghalaya", "East Khasi Hills", "Living Root Bridges", "Nature & outdoors"],
  ["Meghalaya", "East Khasi Hills", "Dawki & the Umngot River", "Nature & outdoors"],
  ["Meghalaya", "East Jaintia Hills", "Krang Suri Falls", "Nature & outdoors"],
  ["Mizoram", "Aizawl", "Reiek Tlang", "Nature & outdoors"],
  ["Mizoram", "Lunglei", "Lunglei town", "City & neighbourhood"],
  ["Mizoram", "Champhai", "Murlen National Park", "Nature & outdoors"],
  ["Nagaland", "Kohima", "Kohima War Cemetery", "Culture & heritage"],
  ["Nagaland", "Kohima", "Dzukou Valley", "Nature & outdoors"],
  ["Nagaland", "Mon", "Longwa village", "Culture & heritage"],
  ["Odisha", "Puri", "Jagannath Temple", "Culture & heritage"],
  ["Odisha", "Khordha", "Chilika Lake", "Nature & outdoors"],
  ["Odisha", "Kataka", "Barabati Fort", "Culture & heritage"],
  ["Punjab", "Amritsar", "Golden Temple", "Culture & heritage"],
  ["Punjab", "Amritsar", "Jallianwala Bagh", "Culture & heritage"],
  ["Punjab", "Ludhiana", "Rural Olympics, Kila Raipur", "Culture & heritage"],
  ["Rajasthan", "Jaipur", "Hawa Mahal", "Culture & heritage"],
  ["Rajasthan", "Jaisalmer", "Jaisalmer Fort", "Culture & heritage"],
  ["Rajasthan", "Udaipur", "Lake Pichola", "City & neighbourhood"],
  ["Sikkim", "Gangtok", "Tsomgo Lake", "Nature & outdoors"],
  ["Sikkim", "Mangan", "Gurudongmar Lake", "Nature & outdoors"],
  ["Sikkim", "Pakyong", "Rumtek Monastery", "Culture & heritage"],
  ["Tamil Nadu", "Madurai", "Meenakshi Amman Temple", "Culture & heritage"],
  ["Tamil Nadu", "The Nilgiris", "Ooty & the Nilgiri Mountain Railway", "Nature & outdoors"],
  ["Tamil Nadu", "Ramanathapuram", "Rameswaram & Pamban Bridge", "Coast & islands"],
  ["Telangana", "Hyderabad", "Charminar", "Culture & heritage"],
  ["Telangana", "Hyderabad", "Golconda Fort", "Culture & heritage"],
  ["Telangana", "Mulugu", "Ramappa Temple", "Culture & heritage"],
  ["Tripura", "West Tripura", "Ujjayanta Palace", "Culture & heritage"],
  ["Tripura", "Gomati", "Neermahal", "Culture & heritage"],
  ["Tripura", "North Tripura", "Unakoti", "Culture & heritage"],
  ["Uttar Pradesh", "Agra", "Taj Mahal", "Culture & heritage"],
  ["Uttar Pradesh", "Varanasi", "Dashashwamedh Ghat", "Culture & heritage"],
  ["Uttar Pradesh", "Lucknow", "Bara Imambara", "Culture & heritage"],
  ["Uttarakhand", "Chamoli", "Valley of Flowers National Park", "Nature & outdoors"],
  ["Uttarakhand", "Dehradun", "Robber's Cave", "Nature & outdoors"],
  ["Uttarakhand", "Haridwar", "Har Ki Pauri", "Culture & heritage"],
  ["West Bengal", "Kolkata", "Victoria Memorial", "Culture & heritage"],
  ["West Bengal", "Darjeeling", "Darjeeling Himalayan Railway", "Nature & outdoors"],
  ["West Bengal", "South 24 Parganas", "Sundarbans National Park", "Nature & outdoors"],
  ["Andaman and Nicobar Islands", "South Andamans", "Cellular Jail", "Culture & heritage"],
  ["Andaman and Nicobar Islands", "South Andamans", "Swaraj Dweep (Havelock Island)", "Coast & islands"],
  ["Andaman and Nicobar Islands", "Nicobars", "Great Nicobar Biosphere Reserve", "Nature & outdoors"],
  ["Chandigarh", "Chandigarh", "Rock Garden", "Culture & heritage"],
  ["Chandigarh", "Chandigarh", "Sukhna Lake", "Nature & outdoors"],
  ["Chandigarh", "Chandigarh", "Capitol Complex", "Culture & heritage"],
  ["Dadra and Nagar Haveli and Daman and Diu", "Diu", "Nagoa Beach", "Coast & islands"],
  ["Dadra and Nagar Haveli and Daman and Diu", "Daman", "Moti Daman Fort", "Culture & heritage"],
  ["Dadra and Nagar Haveli and Daman and Diu", "Dadra and Nagar Haveli", "Vanganga Lake Garden", "Nature & outdoors"],
  ["Delhi", "New Delhi", "Humayun's Tomb", "Culture & heritage"],
  ["Delhi", "New Delhi", "Qutub Minar", "Culture & heritage"],
  ["Delhi", "New Delhi", "Chandni Chowk", "Food & markets"],
  ["Jammu and Kashmir", "Srinagar", "Dal Lake", "Nature & outdoors"],
  ["Jammu and Kashmir", "Anantnag", "Pahalgam", "Nature & outdoors"],
  ["Jammu and Kashmir", "Jammu", "Vaishno Devi", "Culture & heritage"],
  ["Ladakh", "Leh Ladakh", "Pangong Tso", "Nature & outdoors"],
  ["Ladakh", "Leh Ladakh", "Thiksey Monastery", "Culture & heritage"],
  ["Ladakh", "Kargil", "Zanskar Valley", "Nature & outdoors"],
  ["Lakshadweep", "Lakshadweep District", "Agatti Island", "Coast & islands"],
  ["Lakshadweep", "Lakshadweep District", "Kavaratti Island", "Coast & islands"],
  ["Lakshadweep", "Lakshadweep District", "Bangaram Atoll", "Coast & islands"],
  ["Puducherry", "Puducherry", "Promenade Beach", "Coast & islands"],
  ["Puducherry", "Puducherry", "French Quarter", "City & neighbourhood"],
  ["Puducherry", "Karaikal", "Karaikal Ammaiyar Temple", "Culture & heritage"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Spiti Valley", "Nature & outdoors"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Kaza", "City & neighbourhood"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Key Monastery", "Culture & heritage"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Tabo Monastery", "Culture & heritage"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Dhankar Monastery", "Culture & heritage"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Chandratal Lake", "Nature & outdoors"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Pin Valley National Park", "Nature & outdoors"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Kibber Village", "Nature & outdoors"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Komic Village", "Nature & outdoors"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Hikkim", "Culture & heritage"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Langza", "Nature & outdoors"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Kunzum Pass", "Nature & outdoors"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Chicham Bridge", "Nature & outdoors"],
  ["Himachal Pradesh", "Lahaul And Spiti", "Gue Mummy Monastery", "Culture & heritage"],
  ["Himachal Pradesh", "Kullu", "Naggar Castle", "Culture & heritage"],
  ["Himachal Pradesh", "Solan", "Kuthar Fort", "Culture & heritage"],
  ["Himachal Pradesh", "Kullu", "Hadimba Devi Temple", "Culture & heritage"],
  ["Himachal Pradesh", "Kangra", "Kangra Fort", "Culture & heritage"],
  ["Himachal Pradesh", "Shimla", "Jakhu Temple", "Culture & heritage"],
  ["Himachal Pradesh", "Kangra", "Namgyal Monastery", "Culture & heritage"],
  ["Himachal Pradesh", "Kullu", "Shangchul Mahadev Temple", "Culture & heritage"],
  ["Himachal Pradesh", "Kangra", "Palpung Sherabling Monastery", "Culture & heritage"],
  ["Himachal Pradesh", "Kullu", "Manikaran Gurudwara", "Culture & heritage"],
  ["Himachal Pradesh", "Shimla", "Hatu Peak", "Nature & outdoors"],
  ["Himachal Pradesh", "Kullu", "Solang Valley", "Nature & outdoors"],
  ["Himachal Pradesh", "Kullu", "Rohtang Pass", "Nature & outdoors"],
  ["Himachal Pradesh", "Kullu", "Kasol", "Nature & outdoors"],
  ["Rajasthan", "Jaipur", "Amber Fort", "Culture & heritage"],
  ["Rajasthan", "Udaipur", "City Palace, Udaipur", "Culture & heritage"],
  ["Rajasthan", "Jodhpur", "Mehrangarh Fort", "Culture & heritage"],
  ["Rajasthan", "Chittorgarh", "Chittorgarh Fort", "Culture & heritage"],
  ["Rajasthan", "Sirohi", "Mount Abu", "Nature & outdoors"],
  ["Rajasthan", "Bharatpur", "Keoladeo National Park", "Nature & outdoors"],
  ["Rajasthan", "Sawai Madhopur", "Ranthambore National Park", "Nature & outdoors"],
  ["Rajasthan", "Ajmer", "Pushkar Lake", "Culture & heritage"],
  ["Rajasthan", "Jaisalmer", "Patwon Ki Haveli", "Culture & heritage"],
  ["Rajasthan", "Jodhpur", "Jaswant Thada", "Culture & heritage"],
  ["Kerala", "Ernakulam", "Mattancherry Palace", "Culture & heritage"],
  ["Kerala", "Kasaragod", "Bekal Fort", "Culture & heritage"],
  ["Kerala", "Ernakulam", "Fort Kochi", "City & neighbourhood"],
  ["Kerala", "Ernakulam", "Paradesi Synagogue", "Culture & heritage"],
  ["Kerala", "Thrissur", "Athirappilly Waterfalls", "Nature & outdoors"],
  ["Kerala", "Thrissur", "Guruvayur Temple", "Culture & heritage"],
  ["Kerala", "Kollam", "Palaruvi Waterfalls", "Nature & outdoors"],
  ["Kerala", "Pathanamthitta", "Sabarimala", "Culture & heritage"],
  ["Kerala", "Palakkad", "Palakkad Fort", "Culture & heritage"],
  ["Goa", "North Goa", "Basilica of Bom Jesus", "Culture & heritage"],
  ["Goa", "North Goa", "Baga Beach", "Coast & islands"],
  ["Goa", "North Goa", "Calangute Beach", "Coast & islands"],
  ["Goa", "South Goa", "Agonda Beach", "Coast & islands"],
  ["Goa", "South Goa", "Dudhsagar Falls", "Nature & outdoors"],
  ["Goa", "North Goa", "Church of Our Lady of the Immaculate Conception", "Culture & heritage"],
  ["Uttarakhand", "Chamoli", "Badrinath Temple", "Culture & heritage"],
  ["Uttarakhand", "Uttarkashi", "Gangotri Temple", "Culture & heritage"],
  ["Uttarakhand", "Uttarkashi", "Yamunotri Temple", "Culture & heritage"],
  ["Uttarakhand", "Rudraprayag", "Kedarnath Temple", "Culture & heritage"],
  ["Uttarakhand", "Dehradun", "Beatles Ashram", "Culture & heritage"],
  ["Uttarakhand", "Rudraprayag", "Chopta", "Nature & outdoors"],
  ["Uttarakhand", "Uttarkashi", "Dayara Bugyal", "Nature & outdoors"],
  ["Uttarakhand", "Tehri Garhwal", "Tehri Lake", "Nature & outdoors"],
  ["Uttarakhand", "Chamoli", "Nanda Devi National Park", "Nature & outdoors"],
  ["Sikkim", "Gyalshing", "Dubdi Monastery", "Culture & heritage"],
  ["Sikkim", "Gyalshing", "Rabdentse Ruins", "Culture & heritage"],
  ["Sikkim", "Gyalshing", "Pemayangtse Monastery", "Culture & heritage"],
  ["Sikkim", "Gangtok", "Menmecho Lake", "Nature & outdoors"],
  ["Sikkim", "Pakyong", "Lampokari Lake", "Nature & outdoors"],
  ["Sikkim", "Mangan", "Yumthang Valley", "Nature & outdoors"],
  ["Sikkim", "Gyalshing", "Reshi Hot Springs", "Nature & outdoors"],
  ["Karnataka", "Bagalkote", "Pattadakal", "Culture & heritage"],
  ["Karnataka", "Hassan", "Belur Chennakeshava Temple", "Culture & heritage"],
  ["Karnataka", "Hassan", "Halebidu Hoysaleswara Temple", "Culture & heritage"],
  ["Karnataka", "Hassan", "Shravanabelagola", "Culture & heritage"],
  ["Karnataka", "Kodagu", "Coorg", "Nature & outdoors"],
  ["Karnataka", "Chikkamagaluru", "Chikkamagaluru", "Nature & outdoors"],
  ["Karnataka", "Shivamogga", "Jog Falls", "Nature & outdoors"],
  ["Karnataka", "Chamarajanagar", "Bandipur National Park", "Nature & outdoors"],
  ["Karnataka", "Mysuru", "Nagarhole National Park", "Nature & outdoors"],
  ["Karnataka", "Vijayanagara", "Daroji Sloth Bear Sanctuary", "Nature & outdoors"],
  ["Karnataka", "Bagalkote", "Badami Cave Temples", "Culture & heritage"],
  ["Madhya Pradesh", "Ujjain", "Mahakaleshwar Temple", "Culture & heritage"],
  ["Madhya Pradesh", "Niwari", "Orchha", "Culture & heritage"],
  ["Madhya Pradesh", "Khandwa (East Nimar)", "Omkareshwar Temple", "Culture & heritage"],
  ["Madhya Pradesh", "Panna", "Panna National Park", "Nature & outdoors"],
  ["Madhya Pradesh", "Mandla", "Kanha National Park", "Nature & outdoors"],
  ["Madhya Pradesh", "Seoni", "Pench National Park", "Nature & outdoors"],
  ["Madhya Pradesh", "Narmadapuram", "Satpura Tiger Reserve", "Nature & outdoors"],
  ["Madhya Pradesh", "Raisen", "Bhimbetka Rock Shelters", "Culture & heritage"],
  ["Gujarat", "Patan", "Rani ki Vav", "Culture & heritage"],
  ["Gujarat", "Mahesana", "Modhera Sun Temple", "Culture & heritage"],
  ["Gujarat", "Gir Somnath", "Somnath Temple", "Culture & heritage"],
  ["Gujarat", "Devbhumi Dwarka", "Dwarkadhish Temple", "Culture & heritage"],
  ["Gujarat", "Bhavnagar", "Palitana Jain Temples", "Culture & heritage"],
  ["Gujarat", "Junagadh", "Girnar Hill", "Nature & outdoors"],
  ["Gujarat", "Kachchh", "Mandvi Beach", "Coast & islands"],
  ["Gujarat", "Kachchh", "Little Rann of Kutch", "Nature & outdoors"],
  ["Uttar Pradesh", "Agra", "Agra Fort", "Culture & heritage"],
  ["Uttar Pradesh", "Agra", "Fatehpur Sikri", "Culture & heritage"],
  ["Uttar Pradesh", "Agra", "Itimad-ud-Daulah's Tomb", "Culture & heritage"],
  ["Uttar Pradesh", "Lucknow", "Rumi Darwaza", "Culture & heritage"],
  ["Uttar Pradesh", "Meerut", "Hastinapur", "Culture & heritage"],
  ["Uttar Pradesh", "Varanasi", "Ramnagar Fort", "Culture & heritage"],
  ["Uttar Pradesh", "Jhansi", "Jhansi Fort", "Culture & heritage"],
  ["Uttar Pradesh", "Mathura", "Vrindavan", "Culture & heritage"],
  ["Uttar Pradesh", "Mathura", "Banke Bihari Temple", "Culture & heritage"],
  ["Uttar Pradesh", "Ayodhya", "Hanuman Garhi", "Culture & heritage"],
  ["Uttar Pradesh", "Ayodhya", "Ram Janmabhoomi", "Culture & heritage"],
  ["Uttar Pradesh", "Kushinagar", "Mahaparinirvana Temple", "Culture & heritage"],
  ["Uttar Pradesh", "Varanasi", "Sarnath", "Culture & heritage"],
  ["Uttar Pradesh", "Varanasi", "Vindhyachal", "Culture & heritage"],
  ["Maharashtra", "Ahilyanagar", "Shirdi Sai Baba Temple", "Culture & heritage"],
  ["Maharashtra", "Mumbai", "Elephanta Caves", "Culture & heritage"],
  ["Maharashtra", "Mumbai", "Marine Drive", "City & neighbourhood"],
  ["Maharashtra", "Mumbai", "Siddhivinayak Temple", "Culture & heritage"],
  ["Maharashtra", "Nagpur", "Deekshabhoomi", "Culture & heritage"],
  ["Maharashtra", "Chandrapur", "Tadoba-Andhari Tiger Reserve", "Nature & outdoors"],
  ["Maharashtra", "Ratnagiri", "Ganpatipule", "Coast & islands"],
  ["Odisha", "Puri", "Konark Sun Temple", "Culture & heritage"],
  ["Odisha", "Khordha", "Udayagiri and Khandagiri Caves", "Culture & heritage"],
  ["Odisha", "Khordha", "Lingaraj Temple", "Culture & heritage"],
  ["Odisha", "Koraput", "Koraput Valley", "Nature & outdoors"],
  ["Odisha", "Ganjam", "Gopalpur-on-Sea", "Coast & islands"],
  ["Odisha", "Mayurbhanj", "Simlipal National Park", "Nature & outdoors"],
  ["Odisha", "Kataka", "Barabati Fort", "Culture & heritage"],
  ["Tamil Nadu", "Chengalpattu", "Shore Temple, Mahabalipuram", "Culture & heritage"],
  ["Tamil Nadu", "Thanjavur", "Brihadeeswara Temple", "Culture & heritage"],
  ["Tamil Nadu", "Ariyalur", "Gangaikonda Cholapuram Temple", "Culture & heritage"],
  ["Tamil Nadu", "Thanjavur", "Airavatesvara Temple", "Culture & heritage"],
  ["Tamil Nadu", "Dindigul", "Kodaikanal", "Nature & outdoors"],
  ["Tamil Nadu", "Tirupathur", "Yelagiri", "Nature & outdoors"],
  ["Tamil Nadu", "Kallakurichi", "Kalvarayan Hills", "Nature & outdoors"],
  ["Tamil Nadu", "Salem", "Yercaud", "Nature & outdoors"],
  ["Tamil Nadu", "Coimbatore", "Anamalai Tiger Reserve", "Nature & outdoors"],
  ["West Bengal", "Bankura", "Bishnupur Terracotta Temples", "Culture & heritage"],
  ["West Bengal", "Malda", "Gaur", "Culture & heritage"],
  ["West Bengal", "Kolkata", "Dakshineswar Kali Temple", "Culture & heritage"],
  ["West Bengal", "Howrah", "Belur Math", "Culture & heritage"],
  ["Andaman and Nicobar Islands", "South Andamans", "Netaji Subhas Chandra Bose Dweep", "Culture & heritage"],
  ["Andaman and Nicobar Islands", "South Andamans", "Shaheed Dweep", "Coast & islands"],
  ["Andaman and Nicobar Islands", "South Andamans", "Corbyn's Cove Beach", "Coast & islands"],
  ["Andaman and Nicobar Islands", "North And Middle Andaman", "Baratang Island Limestone Caves", "Nature & outdoors"],
  ["Andaman and Nicobar Islands", "South Andamans", "North Bay Island", "Coast & islands"],
  ["Andaman and Nicobar Islands", "South Andamans", "Chidiya Tapu", "Nature & outdoors"],
  ["Andaman and Nicobar Islands", "South Andamans", "Mahatma Gandhi Marine National Park", "Nature & outdoors"],
  ["Andaman and Nicobar Islands", "South Andamans", "Mount Manipur National Park", "Nature & outdoors"],
  ["Assam", "Sivasagar", "Rang Ghar", "Culture & heritage"],
  ["Assam", "Sivasagar", "Sivadol", "Culture & heritage"],
  ["Assam", "Sivasagar", "Joysagar Tank", "Culture & heritage"],
  ["Assam", "Nagaon", "Kaziranga National Park", "Nature & outdoors"],
  ["Assam", "Jorhat", "Majuli Island", "Nature & outdoors"],
  ["Assam", "Dibrugarh", "Digboi Oil Museum", "Culture & heritage"],
  ["Assam", "Dima Hasao", "Haflong", "Nature & outdoors"],
  ["Assam", "Kokrajhar", "Manas National Park", "Nature & outdoors"],
  ["Assam", "Marigaon", "Pobitora Wildlife Sanctuary", "Nature & outdoors"],
  ["Assam", "Tinsukia", "Dibru-Saikhowa National Park", "Nature & outdoors"],
  ["Assam", "Kamrup Metro", "Navagraha Temple", "Culture & heritage"],
  ["Arunachal Pradesh", "Tawang", "Nuranang Falls", "Nature & outdoors"],
  ["Arunachal Pradesh", "Tawang", "Gorichen Peak", "Nature & outdoors"],
  ["Arunachal Pradesh", "Changlang", "Namdapha National Park", "Nature & outdoors"],
  ["Arunachal Pradesh", "Upper Siang", "Mouling National Park", "Nature & outdoors"],
  ["Arunachal Pradesh", "Papum Pare", "Itanagar Wildlife Sanctuary", "Nature & outdoors"],
  ["Arunachal Pradesh", "Dibang Valley", "Dibang Wildlife Sanctuary", "Nature & outdoors"],
  ["Arunachal Pradesh", "Lower Dibang Valley", "Bhismaknagar", "Culture & heritage"],
  ["Manipur", "Imphal West", "Ima Keithel (Mother's Market)", "Food & markets"],
  ["Manipur", "Bishnupur", "Sendra Park", "Nature & outdoors"],
  ["Manipur", "Bishnupur", "Keibul Lamjao National Park", "Nature & outdoors"],
  ["Manipur", "Ukhrul", "Shirui Hills", "Nature & outdoors"],
  ["Manipur", "Thoubal", "Ikop Lake", "Nature & outdoors"],
  ["Manipur", "Thoubal", "Waithou Lake", "Nature & outdoors"],
  ["Manipur", "Ukhrul", "Nillai Tea Estate", "Nature & outdoors"],
  ["Manipur", "Tengnoupal", "Moreh & the India-Myanmar Friendship Bridge", "Culture & heritage"],
  ["Meghalaya", "South Garo Hills", "Siju Caves", "Nature & outdoors"],
  ["Meghalaya", "East Khasi Hills", "Mawphlang Sacred Forest", "Nature & outdoors"],
  ["Meghalaya", "East Khasi Hills", "Mawsmai Cave", "Nature & outdoors"],
  ["Meghalaya", "East Khasi Hills", "Nohkalikai Falls", "Nature & outdoors"],
  ["Meghalaya", "East Khasi Hills", "Laitlum Canyon", "Nature & outdoors"],
  ["Meghalaya", "East Garo Hills", "Nokrek National Park", "Nature & outdoors"],
  ["Meghalaya", "South Garo Hills", "Balpakram National Park", "Nature & outdoors"],
  ["Meghalaya", "Ri Bhoi", "Nongkhyllem Wildlife Sanctuary", "Nature & outdoors"],
  ["Meghalaya", "West Jaintia Hills", "Nartiang Monoliths", "Culture & heritage"],
  ["Mizoram", "Mamit", "Dampa Tiger Reserve", "Nature & outdoors"],
  ["Mizoram", "Lawngtlai", "Phawngpui (Blue Mountain) National Park", "Nature & outdoors"],
  ["Mizoram", "Serchhip", "Vantawng Falls", "Nature & outdoors"],
  ["Mizoram", "Saitual", "Tam Dil Lake", "Nature & outdoors"],
  ["Nagaland", "Dimapur", "Kachari Ruins", "Culture & heritage"],
  ["Nagaland", "Wokha", "Doyang Reservoir", "Nature & outdoors"],
  ["Nagaland", "Wokha", "Mount Tiyi", "Nature & outdoors"],
  ["Nagaland", "Kohima", "Japfu Peak", "Nature & outdoors"],
  ["Nagaland", "Kohima", "Kisama Heritage Village", "Culture & heritage"],
  ["Nagaland", "Kohima", "Touphema Tourist Village", "Culture & heritage"],
  ["Tripura", "South Tripura", "Pilak Archaeological Site", "Culture & heritage"],
  ["Tripura", "North Tripura", "Jampui Hills", "Nature & outdoors"],
  ["Tripura", "Sepahijala", "Sepahijala Wildlife Sanctuary", "Nature & outdoors"],
  ["Tripura", "Gomati", "Gumti Wildlife Sanctuary", "Nature & outdoors"],
  ["Tripura", "Gomati", "Dumboor Lake", "Nature & outdoors"],
  ["Tripura", "Sepahijala", "Rudrasagar Lake", "Nature & outdoors"],
  ["Punjab", "Patiala", "Qila Mubarak", "Culture & heritage"],
  ["Punjab", "Rupnagar", "Virasat-e-Khalsa", "Culture & heritage"],
  ["Punjab", "Rupnagar", "Ropar Wetland", "Nature & outdoors"],
  ["Punjab", "Tarn Taran", "Harike Wetland and Bird Sanctuary", "Nature & outdoors"],
  ["Punjab", "Fazilka", "Abohar Wildlife Sanctuary", "Nature & outdoors"],
  ["Punjab", "Amritsar", "Wagah Border Ceremony", "Culture & heritage"],
  ["Punjab", "Patiala", "Baradari Gardens", "Nature & outdoors"],
  ["Jammu and Kashmir", "Jammu", "Bahu Fort", "Culture & heritage"],
  ["Jammu and Kashmir", "Jammu", "Mubarak Mandi Palace", "Culture & heritage"],
  ["Jammu and Kashmir", "Srinagar", "Pari Mahal", "Culture & heritage"],
  ["Jammu and Kashmir", "Srinagar", "Nageen Lake", "Nature & outdoors"],
  ["Jammu and Kashmir", "Srinagar", "Chashme Shahi Garden", "Nature & outdoors"],
  ["Jammu and Kashmir", "Jammu", "Akhnoor Fort", "Culture & heritage"],
];

const templePlaces = [
  ["Andhra Pradesh", "Tirupati", "Tirumala Venkateswara Temple"],
  ["Andhra Pradesh", "Tirupati", "Srikalahasti Temple"],
  ["Andhra Pradesh", "Nandyal", "Srisailam Mallikarjuna Temple"],
  ["Andhra Pradesh", "NTR", "Kanaka Durga Temple"],
  ["Andhra Pradesh", "Visakhapatnam", "Simhachalam Temple"],
  ["Andhra Pradesh", "Sri Sathya Sai", "Lepakshi Veerabhadra Temple"],
  ["Andhra Pradesh", "Palnadu", "Amaravathi Amareswara Temple"],
  ["Arunachal Pradesh", "Lower Siang", "Malinithan Temple"],
  ["Assam", "Kamrup Metro", "Kamakhya Temple"],
  ["Assam", "Kamrup Metro", "Umananda Temple"],
  ["Assam", "Kamrup Metro", "Navagraha Temple"],
  ["Assam", "Sivasagar", "Sivadol Temple"],
  ["Bihar", "Gaya", "Vishnupad Temple"],
  ["Bihar", "Kaimur (Bhabua)", "Mundeshwari Temple"],
  ["Bihar", "Patna", "Badi Patan Devi Temple"],
  ["Bihar", "Patna", "Mahavir Mandir"],
  ["Chhattisgarh", "Bastar", "Danteshwari Temple"],
  ["Chhattisgarh", "Kabeerdham", "Bhoramdeo Temple"],
  ["Goa", "North Goa", "Shri Mangeshi Temple"],
  ["Goa", "North Goa", "Shri Shantadurga Temple"],
  ["Gujarat", "Gir Somnath", "Somnath Temple"],
  ["Gujarat", "Devbhumi Dwarka", "Dwarkadhish Temple"],
  ["Gujarat", "Devbhumi Dwarka", "Nageshwar Jyotirlinga Temple"],
  ["Gujarat", "Banas Kantha", "Ambaji Temple"],
  ["Gujarat", "Mahesana", "Modhera Sun Temple"],
  ["Gujarat", "Gandhinagar", "Akshardham Temple"],
  ["Gujarat", "Bhavnagar", "Palitana Jain Temples"],
  ["Haryana", "Panchkula", "Mata Mansa Devi Temple"],
  ["Haryana", "Kurukshetra", "Sthaneshwar Mahadev Temple"],
  ["Himachal Pradesh", "Kangra", "Jwalamukhi Temple"],
  ["Himachal Pradesh", "Una", "Chintpurni Temple"],
  ["Himachal Pradesh", "Bilaspur", "Naina Devi Temple"],
  ["Himachal Pradesh", "Kangra", "Baijnath Temple"],
  ["Himachal Pradesh", "Shimla", "Jakhu Temple"],
  ["Jharkhand", "Deoghar", "Baidyanath Temple"],
  ["Jharkhand", "Deoghar", "Naulakha Temple"],
  ["Jharkhand", "Deoghar", "Tapovan Nath Temple"],
  ["Karnataka", "Mysuru", "Chamundeshwari Temple"],
  ["Karnataka", "Uttara Kannada", "Murudeshwar Temple"],
  ["Karnataka", "Udupi", "Udupi Sri Krishna Temple"],
  ["Karnataka", "Dakshina Kannada", "Kukke Subramanya Temple"],
  ["Karnataka", "Chikkamagaluru", "Sringeri Sharadamba Temple"],
  ["Karnataka", "Vijayanagara", "Virupaksha Temple, Hampi"],
  ["Karnataka", "Hassan", "Chennakeshava Temple, Belur"],
  ["Karnataka", "Bagalkote", "Pattadakal Temples"],
  ["Kerala", "Thiruvananthapuram", "Sree Padmanabhaswamy Temple"],
  ["Kerala", "Thrissur", "Guruvayur Temple"],
  ["Kerala", "Pathanamthitta", "Sabarimala Ayyappa Temple"],
  ["Kerala", "Thrissur", "Vadakkunnathan Temple"],
  ["Kerala", "Thiruvananthapuram", "Attukal Bhagavathy Temple"],
  ["Kerala", "Ernakulam", "Chottanikkara Temple"],
  ["Kerala", "Kottayam", "Ettumanoor Mahadeva Temple"],
  ["Kerala", "Kasaragod", "Ananthapura Lake Temple"],
  ["Madhya Pradesh", "Ujjain", "Mahakaleshwar Jyotirlinga Temple"],
  ["Madhya Pradesh", "Khandwa (East Nimar)", "Omkareshwar Jyotirlinga Temple"],
  ["Madhya Pradesh", "Raisen", "Bhojeshwar Temple"],
  ["Madhya Pradesh", "Jabalpur", "Chausath Yogini Temple, Bhedaghat"],
  ["Madhya Pradesh", "Satna", "Sharda Devi Temple, Maihar"],
  ["Maharashtra", "Chhatrapati Sambhajinagar", "Grishneshwar Jyotirlinga Temple"],
  ["Maharashtra", "Nashik", "Trimbakeshwar Jyotirlinga Temple"],
  ["Maharashtra", "Pune", "Bhimashankar Jyotirlinga Temple"],
  ["Maharashtra", "Ahilyanagar", "Shirdi Sai Baba Temple"],
  ["Maharashtra", "Mumbai", "Siddhivinayak Temple"],
  ["Maharashtra", "Kolhapur", "Mahalakshmi Temple"],
  ["Maharashtra", "Dharashiv", "Tulja Bhavani Temple"],
  ["Maharashtra", "Solapur", "Vitthal Rukmini Temple, Pandharpur"],
  ["Maharashtra", "Hingoli", "Aundha Nagnath Temple"],
  ["Maharashtra", "Beed", "Parli Vaijnath Temple"],
  ["Manipur", "Imphal West", "Shree Govindajee Temple"],
  ["Meghalaya", "West Jaintia Hills", "Nartiang Durga Temple"],
  ["Odisha", "Puri", "Jagannath Temple"],
  ["Odisha", "Puri", "Konark Sun Temple"],
  ["Odisha", "Khordha", "Lingaraj Temple"],
  ["Odisha", "Khordha", "Mukteswar Temple"],
  ["Odisha", "Ganjam", "Tara Tarini Temple"],
  ["Odisha", "Sambalpur", "Samaleswari Temple"],
  ["Odisha", "Kendujhar", "Maa Tarini Temple"],
  ["Punjab", "Amritsar", "Golden Temple"],
  ["Punjab", "Amritsar", "Durgiana Temple"],
  ["Punjab", "Pathankot", "Mukteshwar Temple"],
  ["Punjab", "Jalandhar", "Devi Talab Mandir"],
  ["Rajasthan", "Ajmer", "Brahma Temple, Pushkar"],
  ["Rajasthan", "Bikaner", "Karni Mata Temple"],
  ["Rajasthan", "Udaipur", "Eklingji Temple"],
  ["Rajasthan", "Sirohi", "Dilwara Jain Temples"],
  ["Rajasthan", "Jaipur", "Govind Dev Ji Temple"],
  ["Rajasthan", "Dausa", "Mehandipur Balaji Temple"],
  ["Rajasthan", "Churu", "Salasar Balaji Temple"],
  ["Rajasthan", "Pali", "Ranakpur Jain Temple"],
  ["Sikkim", "Gyalshing", "Kirateshwar Mahadev Temple"],
  ["Tamil Nadu", "Madurai", "Meenakshi Amman Temple"],
  ["Tamil Nadu", "Ramanathapuram", "Ramanathaswamy Temple"],
  ["Tamil Nadu", "Thanjavur", "Brihadeeswara Temple"],
  ["Tamil Nadu", "Chengalpattu", "Shore Temple, Mahabalipuram"],
  ["Tamil Nadu", "Tiruvannamalai", "Arunachaleswarar Temple"],
  ["Tamil Nadu", "Chennai", "Kapaleeshwarar Temple"],
  ["Tamil Nadu", "Cuddalore", "Nataraja Temple, Chidambaram"],
  ["Tamil Nadu", "Tiruchirappalli", "Ranganathaswamy Temple, Srirangam"],
  ["Tamil Nadu", "Kanniyakumari", "Kumari Amman Temple"],
  ["Tamil Nadu", "Dindigul", "Palani Murugan Temple"],
  ["Tamil Nadu", "Kancheepuram", "Ekambareswarar Temple"],
  ["Tamil Nadu", "Kancheepuram", "Kamakshi Amman Temple"],
  ["Telangana", "Hanumakonda", "Thousand Pillar Temple"],
  ["Telangana", "Mulugu", "Ramappa Temple"],
  ["Telangana", "Yadadri Bhuvanagiri", "Yadadri Lakshmi Narasimha Temple"],
  ["Telangana", "Bhadradri Kothagudem", "Bhadrachalam Temple"],
  ["Telangana", "Jogulamba Gadwal", "Jogulamba Temple, Alampur"],
  ["Telangana", "Hyderabad", "Chilkur Balaji Temple"],
  ["Telangana", "Rajanna Sircilla", "Vemulawada Rajarajeshwara Temple"],
  ["Tripura", "Gomati", "Tripura Sundari Temple"],
  ["Tripura", "West Tripura", "Chaturdasha Temple"],
  ["Uttar Pradesh", "Varanasi", "Kashi Vishwanath Temple"],
  ["Uttar Pradesh", "Ayodhya", "Shri Ram Janmabhoomi Temple"],
  ["Uttar Pradesh", "Mathura", "Shri Krishna Janmasthan Temple"],
  ["Uttar Pradesh", "Mathura", "Banke Bihari Temple"],
  ["Uttar Pradesh", "Mathura", "Prem Mandir"],
  ["Uttar Pradesh", "Mirzapur", "Vindhyavasini Temple"],
  ["Uttar Pradesh", "Sitapur", "Naimisharanya Chakra Tirth"],
  ["Uttar Pradesh", "Gorakhpur", "Gorakhnath Temple"],
  ["Uttar Pradesh", "Saharanpur", "Shakumbhari Devi Temple"],
  ["Uttarakhand", "Rudraprayag", "Kedarnath Temple"],
  ["Uttarakhand", "Chamoli", "Badrinath Temple"],
  ["Uttarakhand", "Uttarkashi", "Gangotri Temple"],
  ["Uttarakhand", "Uttarkashi", "Yamunotri Temple"],
  ["Uttarakhand", "Dehradun", "Tungnath Temple"],
  ["Uttarakhand", "Almora", "Jageshwar Dham"],
  ["Uttarakhand", "Bageshwar", "Baijnath Temple"],
  ["Uttarakhand", "Haridwar", "Mansa Devi Temple"],
  ["Uttarakhand", "Haridwar", "Chandi Devi Temple"],
  ["Uttarakhand", "Dehradun", "Neelkanth Mahadev Temple"],
  ["West Bengal", "Kolkata", "Dakshineswar Kali Temple"],
  ["West Bengal", "Kolkata", "Kalighat Kali Temple"],
  ["West Bengal", "Birbhum", "Tarapith Temple"],
  ["West Bengal", "Nadia", "Mayapur ISKCON Temple"],
  ["West Bengal", "Bankura", "Bishnupur Terracotta Temples"],
  ["Andaman and Nicobar Islands", "South Andamans", "Sri Vetrimalai Murugan Temple"],
  ["Chandigarh", "Chandigarh", "Shri Mata Mansa Devi Temple"],
  ["Dadra and Nagar Haveli and Daman and Diu", "Daman", "Somnath Mahadev Temple, Daman"],
  ["Delhi", "New Delhi", "Akshardham Temple, Delhi"],
  ["Delhi", "South", "Chhatarpur Temple"],
  ["Delhi", "South East", "Kalkaji Temple"],
  ["Jammu and Kashmir", "Jammu", "Vaishno Devi Temple"],
  ["Jammu and Kashmir", "Jammu", "Raghunath Temple"],
  ["Jammu and Kashmir", "Anantnag", "Amarnath Cave Temple"],
  ["Jammu and Kashmir", "Srinagar", "Shankaracharya Temple"],
  ["Jammu and Kashmir", "Anantnag", "Martand Sun Temple"],
  ["Puducherry", "Puducherry", "Manakula Vinayagar Temple"],
  ["Andhra Pradesh", "Nandyal", "Ahobilam Narasimha Temples"],
  ["Andhra Pradesh", "NTR", "Panakala Lakshmi Narasimha Temple, Mangalagiri"],
  ["Andhra Pradesh", "Dr. B.R. Ambedkar Konaseema", "Draksharamam Bhimeswara Temple"],
  ["Andhra Pradesh", "Kakinada", "Annavaram Satyanarayana Temple"],
  ["Andhra Pradesh", "Annamayya", "Vontimitta Kodandarama Temple"],
  ["Assam", "Kamrup", "Hayagriva Madhava Temple, Hajo"],
  ["Assam", "Nagaon", "Batadrava Than"],
  ["Assam", "Jorhat", "Dhekiakhowa Bornamghar"],
  ["Assam", "Majuli", "Auniati Satra"],
  ["Assam", "Majuli", "Dakhinpat Satra"],
  ["Bihar", "Nalanda", "Jal Mandir, Pawapuri"],
  ["Bihar", "Vaishali", "Bawan Pokhar Temple"],
  ["Bihar", "Madhubani", "Uchhaitha Bhagwati Temple"],
  ["Bihar", "Banka", "Mandar Hill Papaharni Temple"],
  ["Chhattisgarh", "Dakshin Bastar Dantewada", "Mama-Bhanja Temple, Barsur"],
  ["Chhattisgarh", "Rajnandgaon", "Dongargarh Bamleshwari Temple"],
  ["Chhattisgarh", "Raipur", "Hatkeshwar Mahadev Temple"],
  ["Goa", "South Goa", "Shri Mahalasa Narayani Temple"],
  ["Goa", "South Goa", "Shri Damodar Temple, Zambaulim"],
  ["Goa", "North Goa", "Shri Ramnath Temple"],
  ["Gujarat", "Panch Mahals", "Kalika Mata Temple, Pavagadh"],
  ["Gujarat", "Kheda", "Ranchhodraiji Temple, Dakor"],
  ["Gujarat", "Mahesana", "Bahucharaji Temple"],
  ["Gujarat", "Amreli", "Khodiyar Mata Temple, Rajpara"],
  ["Haryana", "Kurukshetra", "Bhadrakali Shaktipeeth"],
  ["Haryana", "Yamunanagar", "Kapal Mochan Temple"],
  ["Himachal Pradesh", "Chamba", "Lakshmi Narayan Temple, Chamba"],
  ["Himachal Pradesh", "Kangra", "Chamunda Devi Temple"],
  ["Himachal Pradesh", "Kinnaur", "Bhimakali Temple, Sarahan"],
  ["Himachal Pradesh", "Kullu", "Bijli Mahadev Temple"],
  ["Himachal Pradesh", "Mandi", "Bhootnath Temple, Mandi"],
  ["Himachal Pradesh", "Sirmaur", "Renuka Ji Temple"],
  ["Jharkhand", "Ramgarh", "Chhinnamasta Temple, Rajrappa"],
  ["Jharkhand", "Dumka", "Maluti Terracotta Temples"],
  ["Jharkhand", "Ranchi", "Jagannath Temple, Ranchi"],
  ["Jharkhand", "Saraikela Kharsawan", "Kharsawan Jagannath Temple"],
  ["Karnataka", "Udupi", "Kollur Mookambika Temple"],
  ["Karnataka", "Dakshina Kannada", "Dharmasthala Manjunatha Temple"],
  ["Karnataka", "Uttara Kannada", "Mahabaleshwar Temple, Gokarna"],
  ["Karnataka", "Mysuru", "Vaidyanatheshwara Temple, Talakadu"],
  ["Karnataka", "Chikkamagaluru", "Annapoorneshwari Temple, Horanadu"],
  ["Karnataka", "Belagavi", "Kamal Basadi, Belagavi"],
  ["Kerala", "Kottayam", "Vaikom Mahadeva Temple"],
  ["Kerala", "Kottayam", "Kaduthuruthy Thaliyil Mahadeva Temple"],
  ["Kerala", "Wayanad", "Thirunelli Temple"],
  ["Kerala", "Kozhikode", "Lokanarkavu Temple"],
  ["Kerala", "Kannur", "Parassinikadavu Muthappan Temple"],
  ["Kerala", "Alappuzha", "Mannarasala Sree Nagaraja Temple"],
  ["Kerala", "Thrissur", "Kodungallur Bhagavathy Temple"],
  ["Kerala", "Thiruvananthapuram", "Janardanaswamy Temple, Varkala"],
  ["Madhya Pradesh", "Datia", "Pitambara Peeth"],
  ["Madhya Pradesh", "Niwari", "Chaturbhuj Temple, Orchha"],
  ["Madhya Pradesh", "Ujjain", "Chintaman Ganesh Temple"],
  ["Madhya Pradesh", "Chhatarpur", "Matangeshwar Temple"],
  ["Maharashtra", "Pune", "Morgaon Mayureshwar Temple"],
  ["Maharashtra", "Ahilyanagar", "Siddhatek Siddhivinayak Temple"],
  ["Maharashtra", "Raigad", "Pali Ballaleshwar Temple"],
  ["Maharashtra", "Raigad", "Mahad Varadvinayak Temple"],
  ["Maharashtra", "Pune", "Theur Chintamani Temple"],
  ["Maharashtra", "Pune", "Lenyadri Girijatmaj Temple"],
  ["Maharashtra", "Pune", "Ozar Vighneshwar Temple"],
  ["Maharashtra", "Pune", "Ranjangaon Mahaganapati Temple"],
  ["Maharashtra", "Ratnagiri", "Ganpatipule Ganapati Temple"],
  ["Maharashtra", "Nashik", "Kalaram Temple"],
  ["Maharashtra", "Mumbai Suburban", "Mahalakshmi Temple, Mumbai"],
  ["Manipur", "Bishnupur", "Vishnu Temple, Bishnupur"],
  ["Meghalaya", "East Khasi Hills", "Mawjymbuin Cave Shrine"],
  ["Odisha", "Jagatsinghapur", "Sarala Temple"],
  ["Odisha", "Kataka", "Dhabaleswar Temple"],
  ["Odisha", "Ganjam", "Biranchi Narayan Temple, Buguda"],
  ["Odisha", "Anugola", "Huma Leaning Temple"],
  ["Odisha", "Khordha", "Rajarani Temple"],
  ["Odisha", "Khordha", "Parsurameswara Temple"],
  ["Odisha", "Kalahandi", "Manikeswari Temple"],
  ["Odisha", "Kendrapada", "Baladevjew Temple"],
  ["Odisha", "Puri", "Loknath Temple"],
  ["Punjab", "Hoshiarpur", "Chintpurni Temple"],
  ["Punjab", "Amritsar", "Shri Ram Tirath Temple"],
  ["Punjab", "Patiala", "Kali Mata Temple, Patiala"],
  ["Punjab", "Rupnagar", "Anandpur Sahib Takht Sri Keshgarh Sahib"],
  ["Rajasthan", "Rajsamand", "Shrinathji Temple, Nathdwara"],
  ["Rajasthan", "Jhalawar", "Chandrabhaga Temples, Jhalrapatan"],
  ["Rajasthan", "Banswara", "Tripura Sundari Temple, Talwara"],
  ["Rajasthan", "Alwar", "Bhartrihari Temple"],
  ["Rajasthan", "Sikar", "Khatu Shyam Temple"],
  ["Rajasthan", "Jaipur", "Moti Dungri Ganesh Temple"],
  ["Rajasthan", "Jaipur", "Birla Mandir, Jaipur"],
  ["Rajasthan", "Pratapgarh", "Gautameshwar Mahadev Temple"],
  ["Sikkim", "Namchi", "Char Dham, Namchi"],
  ["Sikkim", "Namchi", "Samdruptse Statue and Monastery"],
  ["Tamil Nadu", "Tirunelveli", "Nellaiappar Temple"],
  ["Tamil Nadu", "Tiruchirappalli", "Jambukeswarar Temple"],
  ["Tamil Nadu", "Tiruvannamalai", "Arunachaleswarar Temple, Tiruvannamalai"],
  ["Tamil Nadu", "Kancheepuram", "Varadaraja Perumal Temple"],
  ["Tamil Nadu", "Kancheepuram", "Kailasanathar Temple, Kanchipuram"],
  ["Tamil Nadu", "Thanjavur", "Sarangapani Temple"],
  ["Tamil Nadu", "Nagapattinam", "Vaitheeswaran Koil"],
  ["Tamil Nadu", "Sivaganga", "Karpaka Vinayakar Temple, Pillayarpatti"],
  ["Tamil Nadu", "Thiruvarur", "Thyagaraja Temple, Tiruvarur"],
  ["Tamil Nadu", "Kanniyakumari", "Suchindram Thanumalayan Temple"],
  ["Tamil Nadu", "Coimbatore", "Marudhamalai Murugan Temple"],
  ["Tamil Nadu", "Erode", "Bannari Amman Temple"],
  ["Tamil Nadu", "Viluppuram", "Melmalayanur Angala Parameswari Temple"],
  ["Tamil Nadu", "Tiruppur", "Avinashi Lingeshwarar Temple"],
  ["Tamil Nadu", "Theni", "Kuchanur Saneeswaran Temple"],
  ["Tamil Nadu", "Virudhunagar", "Srivilliputhur Andal Temple"],
  ["Telangana", "Nirmal", "Gnana Saraswati Temple, Basar"],
  ["Telangana", "Karimnagar", "Kondagattu Anjaneya Swamy Temple"],
  ["Telangana", "Nagarkurnool", "Uma Maheshwaram Temple"],
  ["Telangana", "Vikarabad", "Anantha Padmanabha Swamy Temple, Ananthagiri"],
  ["Telangana", "Nalgonda", "Chaya Someswara Temple"],
  ["Telangana", "Warangal", "Bhadrakali Temple, Warangal"],
  ["Tripura", "Unakoti", "Unakoti Shaivite Sculptures"],
  ["Tripura", "South Tripura", "Chabimura Devi Sculptures"],
  ["Uttar Pradesh", "Prayagraj", "Bade Hanuman Temple"],
  ["Uttar Pradesh", "Ayodhya", "Kanak Bhawan"],
  ["Uttar Pradesh", "Ayodhya", "Hanuman Garhi"],
  ["Uttar Pradesh", "Mathura", "Dwarkadhish Temple, Mathura"],
  ["Uttar Pradesh", "Mathura", "ISKCON Temple, Vrindavan"],
  ["Uttar Pradesh", "Mathura", "Radha Raman Temple"],
  ["Uttar Pradesh", "Mathura", "Govind Dev Ji Temple, Vrindavan"],
  ["Uttar Pradesh", "Varanasi", "Sankat Mochan Hanuman Temple"],
  ["Uttar Pradesh", "Varanasi", "Durga Kund Temple"],
  ["Uttar Pradesh", "Varanasi", "Bharat Mata Temple"],
  ["Uttar Pradesh", "Chitrakoot", "Kamadgiri Temple"],
  ["Uttar Pradesh", "Chitrakoot", "Hanuman Dhara"],
  ["Uttar Pradesh", "Pratapgarh", "Bela Bhawani Temple"],
  ["Uttarakhand", "Rudraprayag", "Madhyamaheshwar Temple"],
  ["Uttarakhand", "Chamoli", "Rudranath Temple"],
  ["Uttarakhand", "Chamoli", "Kalpeshwar Temple"],
  ["Uttarakhand", "Rudraprayag", "Dhari Devi Temple"],
  ["Uttarakhand", "Tehri Garhwal", "Surkanda Devi Temple"],
  ["Uttarakhand", "Almora", "Kasar Devi Temple"],
  ["Uttarakhand", "Almora", "Jageshwar Mahadev Temples"],
  ["Uttarakhand", "Nainital", "Naina Devi Temple, Nainital"],
  ["Uttarakhand", "Bageshwar", "Bagnath Temple"],
  ["Uttarakhand", "Champawat", "Purnagiri Temple"],
  ["Uttarakhand", "Pauri Garhwal", "Kandoliya Temple"],
  ["West Bengal", "Hooghly", "Tarakeswar Temple"],
  ["West Bengal", "Murshidabad", "Kiriteswari Temple"],
  ["West Bengal", "Hooghly", "Hanseswari Temple"],
  ["West Bengal", "Kolkata", "Adyapith Temple"],
  ["West Bengal", "Jalpaiguri", "Jalpesh Temple"],
  ["West Bengal", "Paschim Bardhaman", "Kalyaneshwari Temple"],
  ["West Bengal", "Bankura", "Joyrambati Matri Mandir"],
  ["West Bengal", "Purba Bardhaman", "108 Shiva Temples, Kalna"],
  ["Delhi", "South", "Kalkaji Temple"],
  ["Delhi", "New Delhi", "Birla Mandir, Delhi"],
  ["Jammu and Kashmir", "Jammu", "Bahu Fort and Bawe Wali Mata Temple"],
  ["Jammu and Kashmir", "Srinagar", "Kheer Bhawani Temple"],
  ["Jammu and Kashmir", "Anantnag", "Amarnath Cave Shrine"],
  ["Jammu and Kashmir", "Reasi", "Shiv Khori Cave Shrine"],
  ["Jammu and Kashmir", "Udhampur", "Sudh Mahadev Temple"],
  ["Nagaland", "Dimapur", "Kachari Temple Ruins"],
];

const STORAGE_KEY = "somewhere-in-india-v1";
const VISITED_KEY = "somewhere-in-india-visited-v1";
const IMAGE_CACHE_KEY = "somewhere-in-india-image-cache-v3";
const DISCOVERED_KEY = "somewhere-in-india-district-discoveries-v2";
const photoPlaceholder = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120"><rect width="160" height="120" fill="#eeeee7"/><path d="M56 53a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-22 42 28-29 18 17 16-13 30 25H34Z" fill="#c9cec3"/><text x="80" y="109" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="#72776d">PHOTO NOT VERIFIED</text></svg>')}`;
const featuredImages = {
  "Spiti Valley": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg/500px-Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg",
  "Key Monastery": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/1000_Year_loop.jpg/500px-1000_Year_loop.jpg",
  "Tabo Monastery": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Tabo_Monjastery_Entrance.jpg/500px-Tabo_Monjastery_Entrance.jpg",
  "Dhankar Monastery": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Dhankar_Gompa_and_village.jpg/500px-Dhankar_Gompa_and_village.jpg",
  "Chandratal Lake": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Chandratal_1.JPG/500px-Chandratal_1.JPG",
  "Pin Valley National Park": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Morning_scene_in_Thuskeo_Dhar.jpg/500px-Morning_scene_in_Thuskeo_Dhar.jpg",
  "Kibber Village": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Kibber_-_a_villege_in_spiti.jpg/500px-Kibber_-_a_villege_in_spiti.jpg",
  "Komic Village": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Komic_village.jpg/500px-Komic_village.jpg",
  Hikkim: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Hikkim_Village_and_water_reservoir_used_for_irrigation_spiti_India.jpg/500px-Hikkim_Village_and_water_reservoir_used_for_irrigation_spiti_India.jpg",
  Langza: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Langza_Village%2C_Himachal_Pradesh.jpg/500px-Langza_Village%2C_Himachal_Pradesh.jpg",
  "Kunzum Pass": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Kunzum_Pass_between_Lahaul_%26_Spiti_28-6-04.jpg/500px-Kunzum_Pass_between_Lahaul_%26_Spiti_28-6-04.jpg",
  "Chicham Bridge": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Chicham_Bridge.jpg/500px-Chicham_Bridge.jpg",
  "Gue Mummy Monastery": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Gue_monastery.jpg/500px-Gue_monastery.jpg",
  Kaza: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg/500px-Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg",
};
const featuredDescriptions = {
  "Spiti Valley": "A high-altitude Himalayan valley of quiet villages, winding mountain roads and vast, open skies. Give the journey time: the changing light and pauses along the way are part of the experience.",
  "Key Monastery": "Rising above the Spiti River, this centuries-old Tibetan Buddhist monastery is one of the valley's most recognisable landmarks. Visit respectfully, dress modestly and ask before photographing people or prayer spaces.",
  "Tabo Monastery": "Often called the Ajanta of the Himalayas, Tabo's ancient monastery is treasured for its historic temples and delicate murals. Step inside gently and follow local guidance around sacred spaces.",
  "Dhankar Monastery": "Perched dramatically above the meeting of the Spiti and Pin rivers, Dhankar offers a beautiful glimpse of the valley's spiritual and mountain heritage. The nearby lake trek is steep and needs good acclimatisation.",
  "Chandratal Lake": "The crescent-shaped high-altitude lake is known for its striking blue water and open, rugged landscape. Protect this fragile place: follow camping rules, take all waste back and never enter the lake.",
  "Pin Valley National Park": "A starkly beautiful high-altitude landscape of cold desert, dramatic cliffs and wildlife habitat. Go with local advice, allow extra time and remember that spotting wildlife is never guaranteed.",
  "Kibber Village": "A high, windswept village where stone homes sit beneath broad Himalayan ridgelines. Take it slowly, respect village life and ask locally about wildlife-viewing rules.",
  "Komic Village": "One of Spiti's far-flung high villages, Komic rewards a slow visit with enormous skies, mountain quiet and a feel for life at altitude. Walk gently and give yourself time to adjust.",
  Hikkim: "A high mountain village known for its small post office and wide-open Himalayan views. Send a postcard, linger over the landscape and remember that services can have limited hours.",
  Langza: "A high village framed by snow peaks and known for its fossil-rich slopes and the great Buddha statue overlooking the valley. Enjoy the views without removing fossils or disturbing the land.",
  "Kunzum Pass": "A lofty mountain pass linking the Lahaul and Spiti valleys, surrounded by a grand sweep of high Himalayan scenery. It is seasonal and may close suddenly; check road conditions before setting out.",
  "Chicham Bridge": "A remarkable high bridge connecting villages across a deep Himalayan gorge. Pause for the view from safe, designated spots and take extra care on narrow mountain roads.",
  "Gue Mummy Monastery": "A small, remote monastery near Gue village, known for its naturally preserved meditation mummy. Visit quietly, follow local customs and check access before making the drive.",
  Kaza: "The valley's main little hub is a practical place to pause, stock up and meet the mountain road at its own pace. Use it as a base, but leave room for the villages and quiet corners beyond town.",
};
const featuredWikiTitles = {
  "Chandratal Lake": "Chandra Taal",
  "Dhankar Monastery": "Dhankar Gompa",
  "Komic Village": "Komic",
  "Qutub Minar": "Qutb Minar",
  "Netaji Subhas Chandra Bose Dweep": "Ross Island",
  "Shaheed Dweep": "Neil Island",
  "Swaraj Dweep (Havelock Island)": "Havelock Island",
};
const localFood = {
  "Andaman and Nicobar Islands": "Fresh fish curry, grilled seafood, coconut-rich dishes and tropical fruit.",
  "Andhra Pradesh": "Try a local Andhra thali, gongura pachadi, pesarattu and the regional biryani.",
  "Arunachal Pradesh": "Look for thukpa, momos, smoked meat and warm, locally grown bamboo-shoot dishes.",
  Assam: "Taste an Assamese thali with rice, khar and seasonal greens; try pitha if it is in season.",
  Bihar: "Try litti chokha, sattu paratha, thekua and fresh malpua from a local sweet shop.",
  Chandigarh: "Enjoy Punjabi chole bhature, stuffed parathas, lassi and a relaxed dhaba meal.",
  "Dadra and Nagar Haveli and Daman and Diu": "Try fresh coastal seafood, coconut-based curries and Gujarati-influenced local thalis.",
  Delhi: "Follow your appetite through chaat, kebabs, parathas and the lively food lanes of Old Delhi.",
  Goa: "Try Goan fish curry rice, recheado, xacuti and bebinca; ask about the catch of the day.",
  Gujarat: "Taste a Gujarati thali, dhokla, khandvi and seasonal farsan; ask for the local version.",
  Haryana: "Look for bajra roti, kadhi, seasonal saag and a glass of fresh lassi.",
  "Himachal Pradesh": "Warm up with siddu, madra and dham-style dishes; try local fruit when it is in season.",
  "Lahaul And Spiti": "Warm up with thukpa, momos and hearty thenthuk; ask local guesthouses what is freshly cooked.",
  "Jammu and Kashmir": "Try kahwa, rogan josh and a local wazwan meal; ask about vegetarian versions too.",
  Jharkhand: "Look for dhuska, chilka roti and seasonal forest produce prepared by local kitchens.",
  Karnataka: "From a Mysore masala dosa to a coastal thali, try the local speciality wherever you stop.",
  Kerala: "Try appam with stew, puttu and kadala curry, or a Kerala sadya served on a banana leaf.",
  Ladakh: "Warm up with thukpa, skyu, momos and butter tea; look for apricots in season.",
  Lakshadweep: "Try island-style tuna, coconut-rich curries and fresh seafood when locally available.",
  "Madhya Pradesh": "Try poha-jalebi for breakfast, a local thali and Indore-style street snacks.",
  Maharashtra: "Taste the local thali, misal pav, vada pav or coastal kokum and seafood specialities.",
  Manipur: "Explore a Manipuri thali with seasonal greens, singju and the region's distinctive fermented flavours.",
  Meghalaya: "Try jadoh, tungrymbai and local smoked dishes; ask for a milder option if you prefer.",
  Mizoram: "Look for bai, local greens and simple rice dishes prepared in Mizo home-style kitchens.",
  Nagaland: "Try smoked pork, bamboo shoot and seasonal Naga greens; ask how spicy the dish is.",
  Odisha: "Enjoy a local thali, dalma, pakhala in warm weather and a little chhena poda for dessert.",
  Puducherry: "Try Tamil-French-influenced cafés, South Indian tiffin and fresh seafood near the coast.",
  Punjab: "Sit down to sarson da saag and makki di roti in season, or try chole, Amritsari kulcha and lassi.",
  Rajasthan: "Taste dal baati churma, gatte ki sabzi and local sweets; carry water for a desert food walk.",
  Sikkim: "Try momos, thukpa, phagshapa and fermented local flavours in a cosy neighbourhood kitchen.",
  "Tamil Nadu": "Start with idli, dosa or pongal, then seek out the region's own Chettinad, Kongunadu or coastal cooking.",
  Telangana: "Try Hyderabadi biryani, haleem when in season and a Telangana thali with local millets.",
  Tripura: "Look for mui borok, seasonal herbs and bamboo-shoot dishes in a local kitchen.",
  "Uttar Pradesh": "From Awadhi kebabs to Banarasi chaat and peda, let each city set the menu.",
  Uttarakhand: "Try kafuli, aloo ke gutke and mandua roti; ask for seasonal pahadi dishes.",
  "West Bengal": "Enjoy Bengali fish curry, shukto and sweets such as mishti doi or sandesh.",
};
const bestSeasons = {
  "Andaman and Nicobar Islands": "November to April is usually the drier, more comfortable window; check sea and ferry conditions.",
  "Andhra Pradesh": "October to February is generally more comfortable for sightseeing.",
  "Arunachal Pradesh": "October to April often brings clearer travel weather; check mountain-road and permit conditions.",
  Assam: "October to April is usually pleasant; avoid planning around flood-season disruption without checking locally.",
  Bihar: "October to March is generally cooler for heritage and city visits.",
  Chandigarh: "October to March is usually the most comfortable for outdoor exploring.",
  "Dadra and Nagar Haveli and Daman and Diu": "November to February is generally pleasant for the coast.",
  Delhi: "October to March is usually best for walking outdoors; summers can be very hot.",
  Goa: "November to February is popular for beach weather; monsoon months are lush but can bring rough seas.",
  Gujarat: "November to February is generally cooler; check seasonal access for the Rann.",
  Haryana: "October to March is generally more comfortable for outdoor visits.",
  "Himachal Pradesh": "March to June suits many hill trips; September to November often has clear post-monsoon skies.",
  "Lahaul And Spiti": "Late May to early October is the usual road-trip window, but high passes and roads can close with snow or storms. Check current access, acclimatise gradually and plan flexible days.",
  "Jammu and Kashmir": "March to October suits many valley trips; winter brings snow and can change road access.",
  Jharkhand: "October to March is generally comfortable for waterfalls and heritage sites.",
  Karnataka: "October to February is generally pleasant; hill and coast seasons vary by monsoon.",
  Kerala: "October to March is popular for drier travel; monsoon offers lush scenery but affects outdoor plans.",
  Ladakh: "June to September is the usual road-trip season; high passes can still close suddenly.",
  Lakshadweep: "October to May is usually the calmer travel window; confirm permits and boat schedules.",
  "Madhya Pradesh": "October to March is generally comfortable for heritage and wildlife trips.",
  Maharashtra: "October to February is generally pleasant; monsoon is beautiful in the hills but can affect roads.",
  Manipur: "October to April is often comfortable; check current local and road conditions.",
  Meghalaya: "October to April is generally drier; monsoon brings spectacular waterfalls and very heavy rain.",
  Mizoram: "October to March is generally pleasant; mountain roads can be slow after rain.",
  Nagaland: "October to May is generally comfortable; check festival dates and local access ahead.",
  Odisha: "October to February is generally comfortable for coastal and heritage trips.",
  Puducherry: "November to February is generally the most comfortable for walks along the coast.",
  Punjab: "October to March is usually cooler for city and heritage visits.",
  Rajasthan: "October to March is generally best for desert and heritage trips; summer heat can be intense.",
  Sikkim: "March to May and October to November are popular; always check permits and mountain-road conditions.",
  "Tamil Nadu": "November to February is usually cooler for city visits; hill stations have their own seasons.",
  Telangana: "October to February is generally more comfortable for city and heritage walks.",
  Tripura: "October to March is generally pleasant for heritage and nature trips.",
  "Uttar Pradesh": "October to March is generally comfortable for heritage cities and long walks.",
  Uttarakhand: "March to June and September to November suit many trips; check monsoon and high-altitude routes.",
  "West Bengal": "October to March is generally pleasant for cities; hill and forest seasons differ.",
};
const localFoodByDistrict = {
  Agra: "Look for petha, bedai with jalebi and Mughlai-influenced meals around the old city.",
  Amritsar: "Try Amritsari kulcha, chole, lassi and a langar meal if you would like to experience community dining.",
  Chennai: "Try a filter coffee with idli or dosa, then explore the city's Tamil vegetarian and seafood cooking.",
  Darjeeling: "Warm up with momos, thukpa and Darjeeling tea; ask cafés which local tea is freshly brewed.",
  Hyderabad: "Try Hyderabadi biryani, haleem when in season and the city's Irani chai with osmania biscuits.",
  Jaipur: "Try pyaaz kachori, dal baati churma, ghewar and a Rajasthani thali from a well-reviewed local kitchen.",
  Kolkata: "Look for kathi rolls, Bengali fish dishes and sweets such as sandesh or mishti doi.",
  Leh: "Try thukpa, skyu, momos and butter tea; apricot treats are lovely when locally in season.",
  Lucknow: "Taste Awadhi kebabs, galouti and sheermal; ask for vegetarian-friendly local specialities too.",
  Madurai: "Try jigarthanda, idli and a traditional South Indian meal served on a banana leaf.",
  Mumbai: "Try vada pav, pav bhaji and bhelpuri, or seek out the seafood specialities of the neighbourhood.",
  Mysuru: "Look for Mysore masala dosa, Mysore pak and a Karnataka-style meals plate.",
  Puri: "Try khaja, a local Odia thali and seafood near the coast; check temple food rules before visiting.",
  "South Goa": "Try Goan fish curry rice, xacuti and bebinca; ask for the day's fresh catch and local seasonal dishes.",
  Srinagar: "Try kahwa, nadru dishes and a wazwan meal; ask hosts about local etiquette and vegetarian options.",
  Udaipur: "Look for Rajasthani thali, dal baati churma and local sweets in the old city.",
  Varanasi: "Try kachori-sabzi, tamatar chaat, thandai and Banarasi paan from trusted local shops.",
  Visakhapatnam: "Try Andhra meals, fresh coastal seafood and local snacks; ask for the spice level before ordering.",
};
const stayAreas = {
  "Lahaul And Spiti": "Kaza is the most practical base for central Spiti, with guesthouses in villages like Tabo, Kibber and Langza for slower local stays. Confirm the road is open, the stay is operating and the altitude suits your acclimatisation plan.",
  "Agra": "Base yourself near Taj Ganj or central Agra for easy access to the Taj Mahal; compare recent reviews and transport.",
  "Amritsar": "Stay around the Golden Temple or Ranjit Avenue, depending on whether you prefer walking access or a quieter base.",
  "Bengaluru Urban": "Central Bengaluru is handy for city sights; choose a neighbourhood near your planned stops to avoid long cross-city journeys.",
  "Bangalore Urban": "Central Bengaluru is handy for city sights; choose a neighbourhood near your planned stops to avoid long cross-city journeys.",
  "Dharamshala": "McLeod Ganj suits cafés and monastery visits; lower Dharamshala is a calmer base with town connections.",
  "East Khasi Hills": "Shillong is a practical base for East Khasi Hills day trips; for Dawki or the root bridges, check drive times before booking.",
  "Jaipur": "The Old City is close to major sights; Bani Park and C-Scheme offer other convenient bases.",
  "Leh": "Choose a central Leh stay for markets and restaurants, and allow time to acclimatise before high-altitude outings.",
  "Mumbai City": "South Mumbai suits heritage sights; Bandra or central neighbourhoods can work better for other itineraries.",
  "Mysuru": "Central Mysuru makes palace visits and local food stops easier.",
  "New Delhi": "Choose a well-connected area near your planned sights; compare recent reviews, transit access and late-night arrival options.",
  "North Goa": "Choose a base near the beaches and villages you want to explore; North Goa driving times can add up.",
  "South Goa": "Palolem and Agonda suit the southern beaches; Margao is a practical transport and food hub.",
  "Srinagar": "Dal Lake and central Srinagar are convenient bases; check current lake-boat and road conditions.",
  "Thiruvananthapuram": "Stay near the city centre for museums and temples, or near Kovalam if the beach is your focus.",
  "Udaipur": "The old city and Lake Pichola area keep many heritage sights within an easy walk.",
  "Varanasi": "The old city is close to the ghats; Assi Ghat is a popular alternative base with cafés and riverside walks.",
  "Visakhapatnam": "Beach Road is a handy base for the waterfront; choose a northern neighbourhood if Araku is part of your plan.",
  "West Sikkim": "Pelling is a useful base for nearby monasteries and viewpoints; verify road and weather conditions.",
};

function foodAdviceFor(destination) {
  const districtAdvice = destination?.district && localFoodByDistrict[destination.district];
  const placeAdvice = destination?.name && localFoodByDistrict[destination.name];
  if (placeAdvice || districtAdvice) return placeAdvice || districtAdvice;
  return localFood[destination?.region] || "Ask a local cook or market vendor what is fresh and special in this district.";
}
let customPlaces = [];
let visitedPlaces = new Set();
let imageCache = {};
let discoveredByDistrict = {};
let selectedRegion = "all";
let selectedDistrictKey = "";
let selectedCollection = "all";
let discoveryState = { key: "", status: "idle" };
let toastTimeout;
const storyCache = new Map();
const weatherCache = new Map();
let activeImageRequests = 0;
const imageQueue = [];
let destinationBackgroundPhotos = [];
let destinationBackgroundIndex = 0;
let currentDestinationBackground = "";
let activeBackgroundPlaceKeys = new Set();
let activeDestinationBackgroundPlaces = [];
let destinationBackgroundLayer = 0;
let destinationBackgroundTimer = null;
let destinationBackgroundLoadToken = 0;
let pendingDestinationBackgroundUrl = "";
let destinationBackgroundInitialized = false;
const backgroundResolutionCache = new Map();
const destinationBackgroundPhotoByPlace = new Map();
let destinationBackgroundPlaceKeyByUrl = new Map();
const skippedInitialBackgroundPlaceKeys = new Set();
const rejectedMapBackgroundKeys = new Set();
const destinationBackgroundLayers = [...document.querySelectorAll(".destination-backdrop-image")];
const imageObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      imageObserver.unobserve(entry.target);
      queuePlaceImage(entry.target);
    }
  }, { rootMargin: "160px" })
  : null;

const stateList = document.querySelector("#state-list");
const territoryList = document.querySelector("#territory-list");
const placeList = document.querySelector("#place-list");
const districtFilter = document.querySelector("#district-filter");
const statusFilter = document.querySelector("#status-filter");
const searchInput = document.querySelector("#search-input");
const addDialog = document.querySelector("#add-dialog");
const formError = document.querySelector("#form-error");
const helperMessages = document.querySelector("#helper-messages");
const helperInput = document.querySelector("#helper-input");
const helperForm = document.querySelector("#helper-form");
const helperPanel = document.querySelector("#travel-helper");
const helperToggle = document.querySelector("#travel-helper-toggle");

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`Could not read ${key} from local storage.`, error);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    document.querySelector("#saved-note").textContent = "Your progress is saved on this device.";
  } catch (error) {
    console.error(`Could not save ${key} to local storage.`, error);
    document.querySelector("#saved-note").textContent = "Couldn't save changes. Check your browser storage settings.";
  }
}

function allPlaces() {
  const templeKeys = new Set(templePlaces.map(([region, district, name]) => (
    `${normalizeName(region)}|${normalizeName(district)}|${normalizeName(name)}`
  )));
  const includedTempleKeys = new Set();
  const starterKeys = new Set(starterPlaces.map(([region, district, name]) => (
    `${normalizeName(region)}|${normalizeName(district)}|${normalizeName(name)}`
  )));
  const savedPlaces = [
    ...starterPlaces.map(([region, district, name, category], index) => {
      const key = `${normalizeName(region)}|${normalizeName(district)}|${normalizeName(name)}`;
      const isTemple = templeKeys.has(key) || isTempleName(name);
      return {
        id: `starter-${index}`,
        region,
        district,
        name,
        category: isTemple ? "Temple & pilgrimage" : category,
        imageUrl: featuredImages[name],
        description: featuredDescriptions[name],
        isTemple,
      };
    }),
    ...templePlaces.map(([region, district, name], index) => ({
      id: `temple-${`${normalizeName(region)}-${normalizeName(district)}-${normalizeName(name)}`.replace(/\s+/g, "-")}`,
      region,
      district,
      name,
      category: "Temple & pilgrimage",
      isTemple: true,
    })).filter((place) => {
      const key = `${normalizeName(place.region)}|${normalizeName(place.district)}|${normalizeName(place.name)}`;
      if (starterKeys.has(key) || includedTempleKeys.has(key)) return false;
      includedTempleKeys.add(key);
      return true;
    }),
    ...customPlaces.map((place) => {
      const isTemple = place.isTemple || place.category === "Temple & pilgrimage" || isTempleName(place.name);
      return { ...place, category: isTemple ? "Temple & pilgrimage" : place.category, isTemple };
    }),
  ];
  const savedKeys = new Set(savedPlaces.map((place) => `${normalizeName(place.region)}|${normalizeName(place.district)}|${normalizeName(place.name)}`));
  const discoveries = Object.values(discoveredByDistrict).flat().map((place) => {
    const isTemple = place.isTemple || place.category === "Temple & pilgrimage" || isTempleName(place.name);
    return { ...place, category: isTemple ? "Temple & pilgrimage" : place.category, isTemple };
  }).filter((place) => {
    const key = `${normalizeName(place.region)}|${normalizeName(place.district)}|${normalizeName(place.name)}`;
    if (savedKeys.has(key)) return false;
    savedKeys.add(key);
    return true;
  });
  return [...savedPlaces, ...discoveries];
}

function isTempleName(name) {
  return /\b(?:temples?|mandirs?|gurdwaras?|gurudwaras?|jyotirlingas?)\b/i.test(name)
    || ["sivadol", "vaishno devi", "sabarimala", "shravanabelagola"].includes(normalizeName(name));
}

function normalizeName(value) {
  return String(value).normalize("NFKD").replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim().toLocaleLowerCase();
}

function looksLikeMapImage(url, ...details) {
  let source = [url, ...details].filter(Boolean).join(" ").replace(/[_-]+/g, " ").replace(/%20/gi, " ");
  try { source = decodeURIComponent(source); } catch { /* Keep the encoded source text. */ }
  const normalized = normalizeName(source);
  return /\b(?:map|maps|locator|cartographic|topographic|road map|route map|location map)\b/.test(normalized);
}

function selectedDistrict() {
  if (!selectedDistrictKey) return null;
  const [region, district] = selectedDistrictKey.split("|").map(decodeURIComponent);
  return { region, district };
}

function makeRegionButton(region) {
  const button = document.createElement("button");
  button.className = "region-button";
  button.type = "button";
  button.dataset.region = region.name;
  button.innerHTML = `<span class="region-symbol" aria-hidden="true">↗</span><span>${escapeHtml(region.name)}</span>`;
  button.addEventListener("click", () => {
    selectedRegion = region.name;
    selectedDistrictKey = "";
    districtFilter.value = "";
    render();
  });
  return button;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function renderRegionControls() {
  stateList.replaceChildren();
  territoryList.replaceChildren();
  for (const region of regions) {
    (region.type === "state" ? stateList : territoryList).append(makeRegionButton(region));
  }
  document.querySelectorAll(".region-button[data-region='all']").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRegion = "all";
      selectedDistrictKey = "";
      districtFilter.value = "";
      render();
    });
  });

  const regionSelect = document.querySelector("#place-region");
  regionSelect.replaceChildren();
  for (const region of regions) {
    const option = document.createElement("option");
    option.value = region.name;
    option.textContent = region.name;
    regionSelect.append(option);
  }
}

function currentRegionPlaces() {
  const district = selectedDistrict();
  return allPlaces().filter((place) => {
    const matchesRegion = selectedRegion === "all" || place.region === selectedRegion;
    const matchesDistrict = !district || (
      normalizeName(place.region) === normalizeName(district.region)
      && normalizeName(place.district) === normalizeName(district.district)
    );
    return matchesRegion && matchesDistrict;
  });
}

function updateDistrictOptions() {
  const previous = districtFilter.value;
  const catalog = Array.isArray(window.indiaDistricts) ? window.indiaDistricts : [];
  const districts = catalog
    .filter((entry) => selectedRegion === "all" || normalizeName(entry.state) === normalizeName(selectedRegion))
    .flatMap((entry) => entry.districts.map((district) => ({ state: entry.state, district })))
    .sort((a, b) => a.district.localeCompare(b.district) || a.state.localeCompare(b.state));
  districtFilter.replaceChildren(new Option(`All districts (${districts.length})`, ""));
  for (const entry of districts) {
    const key = `${encodeURIComponent(entry.state)}|${encodeURIComponent(entry.district)}`;
    const label = selectedRegion === "all" ? `${entry.district} — ${entry.state}` : entry.district;
    districtFilter.add(new Option(label, key));
  }
  if (districts.some((entry) => `${encodeURIComponent(entry.state)}|${encodeURIComponent(entry.district)}` === previous)) {
    districtFilter.value = previous;
  }
}

function renderPlaces() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  updateDistrictOptions();
  const placesForRegion = currentRegionPlaces();
  const places = placesForRegion
    .filter((place) => selectedCollection === "temples" ? place.isTemple : !place.isTemple)
    .filter((place) => {
      const matchesQuery = !query || `${place.name} ${place.district} ${place.region} ${place.category}`.toLocaleLowerCase().includes(query);
      const matchesStatus = statusFilter.value === "all"
        || (statusFilter.value === "visited" && visitedPlaces.has(place.id))
        || (statusFilter.value === "not-visited" && !visitedPlaces.has(place.id));
      return matchesQuery && matchesStatus;
    })
    .sort((a, b) => a.region.localeCompare(b.region) || a.district.localeCompare(b.district) || a.name.localeCompare(b.name));

  placeList.replaceChildren();
  const district = selectedDistrict();
  const isDiscovering = district && discoveryState.key === selectedDistrictKey && discoveryState.status === "loading";
  document.querySelector("#results-count").textContent = isDiscovering
    ? `Finding places in ${district.district}…`
    : selectedCollection === "temples"
      ? `Showing ${places.length} ${places.length === 1 ? "temple" : "temples"}`
      : `Showing ${places.length} ${places.length === 1 ? "place" : "places"}`;
  const sourceNote = document.querySelector("#discovery-source");
  sourceNote.innerHTML = discoveryState.key === selectedDistrictKey && discoveryState.status === "error"
    ? '<span class="note-dot"></span> Could not load suggestions. Check your connection and try this district again.'
    : selectedCollection === "temples"
      ? '<span class="note-dot"></span> Temple picks inspired by Incredible India state guides'
    : district && discoveryState.key === selectedDistrictKey && discoveryState.status === "loaded"
      ? '<span class="note-dot"></span> Wikipedia suggestions · check before you go'
      : '<span class="note-dot"></span> Curated picks + district discoveries';
  document.querySelector("#empty-state").hidden = places.length > 0 || isDiscovering;
  const knownDistrictPlaces = district ? discoveredByDistrict[selectedDistrictKey] || [] : [];
  const emptyTitle = document.querySelector("#empty-state h4");
  const emptyDescription = document.querySelector("#empty-state p");
  if (district && discoveryState.status === "loaded" && knownDistrictPlaces.length === 0) {
    emptyTitle.textContent = "No suggestions found for this district yet.";
    emptyDescription.textContent = "Add a place you know, or try searching its nearby attractions.";
  } else if (selectedCollection === "temples" && places.length === 0) {
    emptyTitle.textContent = "No temples in this view just yet.";
    emptyDescription.textContent = "Choose another state or district to explore the Temple Trail.";
  } else {
    emptyTitle.textContent = "No places found just yet.";
    emptyDescription.textContent = "Try another search or add this place to your list.";
  }
  document.querySelector(".list-footnote").hidden = places.length === 0;

  for (const place of places) {
    const visited = visitedPlaces.has(place.id);
    const article = document.createElement("article");
    article.className = `place-card${visited ? " visited" : ""}`;
    const location = selectedRegion === "all"
      ? `<span>${escapeHtml(place.district)}</span><span class="location-separator">·</span><span>${escapeHtml(place.region)}</span>`
      : escapeHtml(place.district);
    const hasFeaturedImage = Boolean(featuredImages[place.name]);
    const imageUrl = featuredImages[place.name] || photoPlaceholder;
    article.innerHTML = `
      <img class="place-image" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(place.name)}" loading="lazy" decoding="async">
      <div class="place-main">
        <div class="place-category">${escapeHtml(place.category)}</div>
        <h4 class="place-name">${escapeHtml(place.name)}</h4>
        <div class="place-location">${location}</div>
        <button class="place-story-toggle" type="button" aria-expanded="false">A little about this place <span aria-hidden="true">＋</span></button>
      </div>
      <span class="visited-badge" aria-hidden="true">Been there ✓</span>
      <label class="visit-control">
        <input class="visit-checkbox" type="checkbox" ${visited ? "checked" : ""} aria-label="Mark ${escapeHtml(place.name)} in ${escapeHtml(place.district)} as visited">
      </label>
      <div class="place-story" hidden>
        <p class="story-description">Gathering a little story for this stop…</p>
        <div class="story-tips">
          <section><span>ON THE PLATE</span><p>${escapeHtml(foodAdviceFor(place))}</p></section>
          <section><span>A GOOD TIME TO GO</span><p>${escapeHtml(bestSeasons[place.district] || bestSeasons[place.region] || "Seasons vary locally. Check the forecast and local travel guidance before choosing your dates.")}</p></section>
          <section><span>WHERE TO MAKE BASE</span><p>${escapeHtml(stayAreas[place.district] || `${place.district} is a useful starting point. Look for well-reviewed accommodation near the place you plan to visit, and check transport, recent guest reviews and cancellation terms before booking.`)}</p></section>
        </div>
        <a class="story-source" target="_blank" rel="noopener noreferrer" hidden>Read more about this place ↗</a>
      </div>`;
    const image = article.querySelector(".place-image");
    image.dataset.place = JSON.stringify({ name: place.name, district: place.district, region: place.region });
    image.dataset.curated = String(hasFeaturedImage);
    if (!hasFeaturedImage) image.alt = `Photo not verified for ${place.name}`;
    image.addEventListener("load", () => rememberDestinationPhoto(place, image.currentSrc || image.src));
    image.addEventListener("error", () => {
      if (image.dataset.curated === "true") {
        image.dataset.curated = "false";
        image.src = photoPlaceholder;
        image.dataset.queued = "false";
        queuePlaceImage(image);
        return;
      }
      if (image.dataset.loadedFromCache === "true") {
        const failedPlace = JSON.parse(image.dataset.place);
        imageCache[imageCacheKey(failedPlace)] = false;
        saveImageCache();
        image.dataset.loadedFromCache = "false";
      }
      image.src = photoPlaceholder;
      image.alt = `Photo not verified for ${place.name}`;
    });
    const checkbox = article.querySelector(".visit-checkbox");
    checkbox.addEventListener("change", () => toggleVisited(place.id, checkbox.checked));
    const storyToggle = article.querySelector(".place-story-toggle");
    const story = article.querySelector(".place-story");
    storyToggle.addEventListener("click", () => {
      const opening = story.hidden;
      story.hidden = !opening;
      storyToggle.setAttribute("aria-expanded", String(opening));
      storyToggle.querySelector("span").textContent = opening ? "−" : "＋";
      if (opening) loadPlaceStory(place, story);
    });
    placeList.append(article);
    if (!featuredImages[place.name]) {
      if (imageObserver) imageObserver.observe(image);
      else queuePlaceImage(image);
    }
  }
  syncDestinationBackground(places);
}

async function loadPlaceStory(place, container) {
  const description = container.querySelector(".story-description");
  const sourceLink = container.querySelector(".story-source");
  if (place.description) {
    description.textContent = place.description;
    const wikiTitle = featuredWikiTitles[place.name] || place.name;
    sourceLink.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(wikiTitle.replace(/ /g, "_"))}`;
    sourceLink.hidden = false;
    return;
  }
  const key = `${place.name}|${place.region}`;
  try {
    if (!storyCache.has(key)) {
      const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(`"${place.name}" ${place.region}`)}&gsrlimit=5&prop=extracts%7Cdescription&exintro=1&explaintext=1&exsentences=4&format=json&origin=*`;
      storyCache.set(key, fetch(url).then((response) => {
        if (!response.ok) throw new Error(`Place description request returned HTTP ${response.status}.`);
        return response.json();
      }));
    }
    const data = await storyCache.get(key);
    const pages = Object.values(data.query?.pages || {});
    const page = pages.find((item) => normalizeName(item.title) === normalizeName(place.name)) || pages[0];
    if (!page?.extract) throw new Error("No reliable place description was found.");
    description.textContent = `${page.extract} Your visit can be as unhurried as you like—leave room for a small detour and a story you didn't plan.`;
    sourceLink.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`;
    sourceLink.hidden = false;
  } catch (error) {
    console.error(`Could not load a description for ${place.name}.`, error);
    description.textContent = "We couldn't fetch a reliable description right now. Your local food, season and stay ideas are still here; try opening this again when you're online.";
  }
}

function renderProgress() {
  const places = allPlaces();
  const visitedCount = places.filter((place) => visitedPlaces.has(place.id)).length;
  const percent = places.length ? Math.round((visitedCount / places.length) * 100) : 0;
  document.querySelector("#total-count").textContent = places.length;
  document.querySelector("#visited-count").textContent = visitedCount;
  document.querySelector("#progress-label").textContent = `${percent}%`;
  document.querySelector("#progress-fill").style.width = `${percent}%`;
  const progressBar = document.querySelector("#progress-bar");
  progressBar.setAttribute("aria-valuenow", percent);
  document.querySelector("#progress-caption").textContent = visitedCount
    ? `${places.length - visitedCount} ${places.length - visitedCount === 1 ? "place" : "places"} still waiting for you.`
    : "Your next adventure is waiting.";
}

function render() {
  const district = selectedDistrict();
  const regionTitle = district
    ? `${district.district} · ${district.region}`
    : selectedRegion === "all" ? "All of India" : selectedRegion;
  document.querySelector("#selected-region").textContent = selectedCollection === "temples"
    ? `Temple Trail · ${regionTitle}`
    : regionTitle;
  document.querySelectorAll(".collection-button").forEach((button) => {
    const active = button.dataset.collection === selectedCollection;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const places = allPlaces();
  document.querySelector("#all-place-count").textContent = places.filter((place) => !place.isTemple).length;
  document.querySelector("#temple-count").textContent = places.filter((place) => place.isTemple).length;
  document.querySelectorAll(".region-button").forEach((button) => {
    const active = button.dataset.region === selectedRegion;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  renderProgress();
  renderPlaces();
}

function classifySuggestion(title, description) {
  const text = `${title} ${description}`.toLocaleLowerCase();
  if (/beach|island|coast|atoll|sea/.test(text)) return "Coast & islands";
  if (/temple|fort|palace|mosque|monument|monastery|heritage|historic|church|tomb|cave/.test(text)) return "Culture & heritage";
  if (/market|city|town|street|museum|garden/.test(text)) return "City & neighbourhood";
  if (/park|wildlife|waterfall|lake|river|forest|hill|mountain|valley|sanctuary|reserve/.test(text)) return "Nature & outdoors";
  return "Other";
}

async function discoverDistrictPlaces(state, districtName) {
  const key = `${encodeURIComponent(state)}|${encodeURIComponent(districtName)}`;
  selectedDistrictKey = key;
  if (Object.hasOwn(discoveredByDistrict, key)) {
    discoveryState = { key, status: "loaded" };
    render();
    return;
  }

  discoveryState = { key, status: "loading" };
  render();
  const search = `${districtName} ${state} tourist places attractions`;
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(search)}&gsrlimit=50&prop=pageimages%7Cdescription%7Cextracts&piprop=thumbnail&pithumbsize=320&exintro=1&explaintext=1&exsentences=2&format=json&origin=*`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Wikipedia search returned HTTP ${response.status}.`);
    const data = await response.json();
    const excludedTerms = ["district", "tourism in", "list of", "disambiguation"];
    const results = Object.values(data.query?.pages || {})
      .filter((page) => {
        const title = normalizeName(page.title);
        const description = normalizeName(page.description || "");
        const location = normalizeName(`${page.description || ""} ${page.extract || ""}`);
        return title !== normalizeName(districtName)
          && !excludedTerms.some((term) => title.includes(term) || description.startsWith(term))
          && !/^[0-9]{4}/.test(page.title)
          && location.includes(normalizeName(districtName));
      })
      .map((page) => ({
        id: `wiki-${key}-${encodeURIComponent(page.title)}`,
        region: state,
        district: districtName,
        name: page.title,
        category: classifySuggestion(page.title, page.description || ""),
        imageUrl: page.thumbnail?.source || "",
        description: page.extract || "",
        source: "Wikipedia",
      }));

    const existingPlaces = new Set(allPlaces().map((place) => `${normalizeName(place.region)}|${normalizeName(place.district)}|${normalizeName(place.name)}`));
    discoveredByDistrict[key] = results.filter((place) => !existingPlaces.has(`${normalizeName(place.region)}|${normalizeName(place.district)}|${normalizeName(place.name)}`));
    saveStorage(DISCOVERED_KEY, discoveredByDistrict);
    discoveryState = { key, status: "loaded" };
    render();
  } catch (error) {
    console.error(`Could not find suggestions for ${districtName}, ${state}.`, error);
    discoveryState = { key, status: "error" };
    render();
  }
}

function toggleVisited(id, isVisited) {
  if (isVisited) visitedPlaces.add(id);
  else visitedPlaces.delete(id);
  saveStorage(VISITED_KEY, [...visitedPlaces]);
  render();
  showToast(isVisited ? "A new memory for the list." : "Removed from your visited places.");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2300);
}

function imageCacheKey(place) {
  return `${place.region}|${place.district}|${place.name}`;
}

function syncDestinationBackground(places) {
  activeBackgroundPlaceKeys = new Set(places.map(imageCacheKey));
  activeDestinationBackgroundPlaces = places;
  for (const place of places) {
    const key = imageCacheKey(place);
    const lowerResolutionPhoto = featuredImages[place.name] || imageCache[key];
    const highResolutionState = backgroundResolutionCache.get(key);
    if (rejectedMapBackgroundKeys.has(key) || looksLikeMapImage(lowerResolutionPhoto)) {
      rejectedMapBackgroundKeys.add(key);
      discardMapBackground(key);
      continue;
    }
    if (lowerResolutionPhoto && lowerResolutionPhoto !== photoPlaceholder && highResolutionState !== "pending" && !highResolutionState) {
      destinationBackgroundPhotoByPlace.set(key, lowerResolutionPhoto);
    }
  }
  refreshDestinationBackgroundPhotos();
  for (const place of places.slice(0, 12)) requestHighResolutionBackground(place);
  if (!destinationBackgroundPhotos.length) {
    currentDestinationBackground = "";
    destinationBackgroundLayers.forEach((layer) => layer.classList.remove("active"));
  }
  if (!destinationBackgroundTimer) {
    destinationBackgroundTimer = window.setInterval(showNextDestinationBackground, 5000);
  }
}

function refreshDestinationBackgroundPhotos() {
  const seenPhotoUrls = new Set();
  const entries = activeDestinationBackgroundPlaces
    .map((place) => ({ key: imageCacheKey(place), url: destinationBackgroundPhotoByPlace.get(imageCacheKey(place)) }))
    .filter((entry) => {
      if (!entry.url || entry.url === photoPlaceholder || seenPhotoUrls.has(entry.url)) return false;
      seenPhotoUrls.add(entry.url);
      return true;
    });
  destinationBackgroundPhotos = [...new Set(entries.map((entry) => entry.url))];
  destinationBackgroundPlaceKeyByUrl = new Map(entries.map((entry) => [entry.url, entry.key]));
  if (!destinationBackgroundPhotos.length) return;

  if (!destinationBackgroundInitialized) {
    if (entries.length < 3) return;
    entries.slice(0, 2).forEach((entry) => skippedInitialBackgroundPlaceKeys.add(entry.key));
    destinationBackgroundInitialized = true;
    showDestinationBackground(entries[2].url);
    return;
  }

  if (!destinationBackgroundPhotos.includes(currentDestinationBackground)) {
    const nextPhoto = entries.find((entry) => !skippedInitialBackgroundPlaceKeys.has(entry.key)) || entries[0];
    destinationBackgroundIndex = destinationBackgroundPhotos.indexOf(nextPhoto.url);
    showDestinationBackground(nextPhoto.url);
  }
}

function discardMapBackground(placeKey) {
  const rejectedPhoto = destinationBackgroundPhotoByPlace.get(placeKey);
  destinationBackgroundPhotoByPlace.delete(placeKey);
  if (rejectedPhoto === pendingDestinationBackgroundUrl) {
    destinationBackgroundLoadToken += 1;
    pendingDestinationBackgroundUrl = "";
  }
  if (rejectedPhoto === currentDestinationBackground) {
    currentDestinationBackground = "";
    destinationBackgroundLayers.forEach((layer) => layer.classList.remove("active"));
  }
}

async function requestHighResolutionBackground(place) {
  const key = imageCacheKey(place);
  if (backgroundResolutionCache.has(key) || rejectedMapBackgroundKeys.has(key)) return;
  backgroundResolutionCache.set(key, "pending");
  const title = featuredWikiTitles[place.name] || place.name;
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&redirects=1&prop=pageimages%7Cdescription&piprop=thumbnail%7Coriginal%7Cname&pithumbsize=3840&format=json&origin=*`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`High-resolution image lookup returned HTTP ${response.status}.`);
    const data = await response.json();
    const page = Object.values(data.query?.pages || {})[0];
    const description = normalizeName(page?.description || "");
    const nameMatches = page && [place.name, title].some((acceptedTitle) => (
      normalizeName(page.title) === normalizeName(acceptedTitle)
    ));
    const conflictingRegion = regions.some((region) => (
      normalizeName(region.name) !== normalizeName(place.region)
      && description.includes(normalizeName(region.name))
    ));
    const photo = !page?.missing
      && nameMatches
      && !description.includes("disambiguation")
      && !conflictingRegion
      ? page.original?.source || page.thumbnail?.source
      : "";
    const isMap = looksLikeMapImage(photo, page?.title, page?.pageimage, description);
    if (isMap) {
      rejectedMapBackgroundKeys.add(key);
      discardMapBackground(key);
    }
    backgroundResolutionCache.set(key, photo && !isMap ? photo : null);
    if (photo && !isMap) destinationBackgroundPhotoByPlace.set(key, photo);
    refreshDestinationBackgroundPhotos();
  } catch (error) {
    backgroundResolutionCache.set(key, null);
    console.warn(`Could not load the highest-resolution background photo for ${place.name}.`, error);
  }
}

function rememberDestinationPhoto(place, url) {
  if (!url || url === photoPlaceholder || !activeBackgroundPlaceKeys.has(imageCacheKey(place))) return;
  const key = imageCacheKey(place);
  if (looksLikeMapImage(url)) {
    rejectedMapBackgroundKeys.add(key);
    discardMapBackground(key);
    refreshDestinationBackgroundPhotos();
    return;
  }
  const highResolutionState = backgroundResolutionCache.get(key);
  if (!highResolutionState || highResolutionState === "pending") {
    if (!destinationBackgroundPhotoByPlace.has(key)) destinationBackgroundPhotoByPlace.set(key, url);
    refreshDestinationBackgroundPhotos();
  }
  requestHighResolutionBackground(place);
}

function showNextDestinationBackground() {
  if (pendingDestinationBackgroundUrl) return;
  const availablePhotos = destinationBackgroundPhotos.filter((photo) => (
    !skippedInitialBackgroundPlaceKeys.has(destinationBackgroundPlaceKeyByUrl.get(photo))
  ));
  if (availablePhotos.length < 2) return;
  const currentIndex = availablePhotos.indexOf(currentDestinationBackground);
  destinationBackgroundIndex = (currentIndex + 1) % availablePhotos.length;
  showDestinationBackground(availablePhotos[destinationBackgroundIndex]);
}

function showDestinationBackground(url) {
  if (!url || url === currentDestinationBackground || url === pendingDestinationBackgroundUrl || destinationBackgroundLayers.length < 2) return;
  const requestToken = ++destinationBackgroundLoadToken;
  pendingDestinationBackgroundUrl = url;
  const preload = new Image();
  preload.decoding = "async";
  preload.onload = async () => {
    try { if (preload.decode) await preload.decode(); } catch { /* The loaded image can still be displayed. */ }
    if (requestToken !== destinationBackgroundLoadToken) return;
    pendingDestinationBackgroundUrl = "";
    const nextLayerIndex = 1 - destinationBackgroundLayer;
    const currentLayer = destinationBackgroundLayers[destinationBackgroundLayer];
    const nextLayer = destinationBackgroundLayers[nextLayerIndex];
    currentLayer.classList.remove("active");
    nextLayer.classList.remove("active");
    nextLayer.style.backgroundImage = `url("${url.replaceAll('"', "%22")}")`;
    requestAnimationFrame(() => nextLayer.classList.add("active"));
    destinationBackgroundLayer = nextLayerIndex;
    currentDestinationBackground = url;
    destinationBackgroundIndex = destinationBackgroundPhotos.indexOf(url);
  };
  preload.onerror = () => {
    if (requestToken !== destinationBackgroundLoadToken) return;
    pendingDestinationBackgroundUrl = "";
    destinationBackgroundPhotos = destinationBackgroundPhotos.filter((photo) => photo !== url);
    for (const place of activeDestinationBackgroundPlaces) {
      const key = imageCacheKey(place);
      if (destinationBackgroundPhotoByPlace.get(key) !== url) continue;
      const fallback = featuredImages[place.name] || imageCache[key];
      if (fallback && !looksLikeMapImage(fallback)) destinationBackgroundPhotoByPlace.set(key, fallback);
      else destinationBackgroundPhotoByPlace.delete(key);
    }
    refreshDestinationBackgroundPhotos();
  };
  preload.src = url;
}

function queuePlaceImage(image) {
  if (!image.isConnected || image.dataset.queued === "true") return;
  image.dataset.queued = "true";
  imageQueue.push(image);
  processImageQueue();
}

function processImageQueue() {
  while (activeImageRequests < 4 && imageQueue.length) {
    const image = imageQueue.shift();
    if (!image.isConnected) continue;

    const place = JSON.parse(image.dataset.place);
    const key = imageCacheKey(place);
    if (Object.hasOwn(imageCache, key)) {
      if (imageCache[key]) {
        image.dataset.loadedFromCache = "true";
        image.src = imageCache[key];
        image.alt = `${place.name}, ${place.district}, ${place.region}`;
      }
      continue;
    }

    activeImageRequests += 1;
    const title = featuredWikiTitles[place.name] || place.name;
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&redirects=1&prop=pageimages%7Cdescription&piprop=thumbnail&pithumbsize=320&format=json&origin=*`;
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Wikipedia image search returned HTTP ${response.status}.`);
        return response.json();
      })
      .then((data) => {
        const page = Object.values(data.query?.pages || {})[0];
        const description = normalizeName(page?.description || "");
        const nameMatches = page && [place.name, title].some((acceptedTitle) => (
          normalizeName(page.title) === normalizeName(acceptedTitle)
        ));
        const conflictingRegion = regions.some((region) => (
          normalizeName(region.name) !== normalizeName(place.region)
          && description.includes(normalizeName(region.name))
        ));
        const result = !page?.missing
          && nameMatches
          && !description.includes("disambiguation")
          && !conflictingRegion
          ? page.thumbnail?.source
          : "";
        imageCache[key] = result || false;
        saveImageCache();
        if (!result) return;
        image.dataset.loadedFromCache = "true";
        image.src = result;
        image.alt = `${place.name}, ${place.district}, ${place.region}`;
      })
      .catch((error) => {
        console.warn(`Could not verify a photo for ${place.name}.`, error);
      })
      .finally(() => {
        activeImageRequests -= 1;
        processImageQueue();
      });
  }
}

function saveImageCache() {
  try {
    localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(imageCache));
  } catch (error) {
    console.warn("Could not cache destination photos in local storage.", error);
  }
}

function matchDestination(question) {
  const query = normalizeName(question);
  const candidates = [];
  for (const place of allPlaces()) {
    candidates.push({ name: place.district, region: place.region, district: place.district, kind: "district" });
    candidates.push({ name: place.name, region: place.region, district: place.district, kind: "place" });
  }
  for (const entry of window.indiaDistricts || []) {
    for (const district of entry.districts) candidates.push({ name: district, region: entry.state, district, kind: "district" });
  }
  for (const region of regions) candidates.push({ name: region.name, region: region.name, district: "", kind: "region" });
  return candidates
    .filter((candidate) => normalizeName(candidate.name).length > 2 && query.includes(normalizeName(candidate.name)))
    .sort((a, b) => normalizeName(b.name).length - normalizeName(a.name).length)[0] || null;
}

function stayAdviceFor(destination) {
  if (!destination?.district) return "Choose a well-reviewed, licensed stay close to your planned sights and transport. Check recent guest reviews, accessibility, cancellation terms and safe late-arrival options before booking. I don't verify live hotel availability.";
  return stayAreas[destination.district]
    || `Use ${destination.district} as a starting base and look for well-reviewed accommodation close to the sights on your plan. Compare recent reviews, transport, cancellation terms and arrival options; I don't verify live hotel availability.`;
}

function addChatMessage(role, text, link) {
  const message = document.createElement("div");
  message.className = `chat-message ${role === "user" ? "user-message" : "assistant-message"}`;
  const copy = document.createElement("p");
  copy.textContent = text;
  message.append(copy);
  if (link) {
    const citation = document.createElement("a");
    citation.href = link.href;
    citation.target = "_blank";
    citation.rel = "noopener noreferrer";
    citation.textContent = link.label;
    message.append(citation);
  }
  helperMessages.append(message);
  helperMessages.scrollTop = helperMessages.scrollHeight;
  return message;
}

function weatherDescription(code) {
  if (code === 0) return "clear skies";
  if ([1, 2].includes(code)) return "some sunshine and clouds";
  if (code === 3) return "overcast skies";
  if ([45, 48].includes(code)) return "foggy conditions";
  if ([51, 53, 55, 56, 57].includes(code)) return "drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "thunderstorms";
  return "changeable weather";
}

async function getWeatherReport(destination) {
  const searchTerm = destination.district || destination.region;
  const cacheKey = normalizeName(searchTerm);
  const cached = weatherCache.get(cacheKey);
  if (cached && Date.now() - cached.savedAt < 15 * 60 * 1000) return cached.report;

  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchTerm)}&count=5&language=en&format=json`;
  const geoResponse = await fetch(geoUrl);
  if (!geoResponse.ok) throw new Error(`Weather location search returned HTTP ${geoResponse.status}.`);
  const geoData = await geoResponse.json();
  const location = (geoData.results || []).find((item) => item.country_code === "IN");
  if (!location) throw new Error(`Couldn't find a forecast location for ${searchTerm}.`);

  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m%2Capparent_temperature%2Cweather_code&daily=weather_code%2Ctemperature_2m_max%2Ctemperature_2m_min%2Cprecipitation_probability_max&forecast_days=5&timezone=auto`;
  const weatherResponse = await fetch(weatherUrl);
  if (!weatherResponse.ok) throw new Error(`Weather forecast returned HTTP ${weatherResponse.status}.`);
  const weather = await weatherResponse.json();
  const current = weather.current;
  const daily = weather.daily;
  const days = daily.time.map((date, index) => {
    const dateLabel = new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "short" }).format(new Date(`${date}T12:00:00`));
    return `${dateLabel}: ${Math.round(daily.temperature_2m_min[index])}–${Math.round(daily.temperature_2m_max[index])}°C, ${weatherDescription(daily.weather_code[index])}, up to ${daily.precipitation_probability_max[index] ?? 0}% rain`;
  });
  const report = `For ${location.name}, ${location.admin1 || destination.region}: right now it's ${Math.round(current.temperature_2m)}°C and feels like ${Math.round(current.apparent_temperature)}°C, with ${weatherDescription(current.weather_code)}.\n\nThe next five days:\n${days.join("\n")}\n\nThis is a short-range forecast, not a seasonal guarantee. Recheck before travelling and follow local weather or road advisories.`;
  weatherCache.set(cacheKey, { savedAt: Date.now(), report });
  return report;
}

function makeTripPlan(destination, dayCount) {
  const matchingPlaces = allPlaces()
    .filter((place) => normalizeName(place.region) === normalizeName(destination.region)
      && (!destination.district || normalizeName(place.district) === normalizeName(destination.district))
      && place.category !== "Other"
      && (!place.id.startsWith("wiki-") || place.category !== "City & neighbourhood"))
    .sort((a, b) => Number(b.id.startsWith("starter-")) - Number(a.id.startsWith("starter-")) || a.name.localeCompare(b.name))
    .filter((place, index, places) => places.findIndex((candidate) => normalizeName(candidate.name) === normalizeName(place.name)) === index);
  const itinerarySize = Math.min(Math.max(dayCount * 2, 2), 10);
  const picks = matchingPlaces.slice(0, itinerarySize);
  const intro = destination.district
    ? `A gentle ${dayCount}-day sketch around ${destination.district}, ${destination.region}. Treat it as a starting point, not a timetable.`
    : `A gentle ${dayCount}-day sketch for ${destination.region}. Exact routes depend on the towns you choose.`;
  const days = Array.from({ length: dayCount }, (_, index) => {
    const first = picks[index * 2];
    const second = picks[index * 2 + 1];
    if (!first && !second) return `Day ${index + 1}: Keep it unhurried—enjoy a slow breakfast, revisit a favourite, or ask locally about a nearby market or short walk.`;
    const places = [first, second].filter(Boolean).map((place) => place.name).join(" and ");
    return `Day ${index + 1}: Explore ${places}. Keep the afternoon flexible for a meal, rest and local discoveries.`;
  });
  return `${intro}\n\n${days.join("\n")}\n\nA taste to look for: ${foodAdviceFor(destination)}\n\nBefore you go: ${bestSeasons[destination.region] || "Check local weather and seasonal access."} ${stayAdviceFor(destination)}`;
}

async function answerTravelQuestion(question, message) {
  const query = normalizeName(question);
  const destination = matchDestination(question)
    || (selectedRegion !== "all" ? { name: selectedRegion, region: selectedRegion, district: selectedDistrict()?.district || "", kind: "region" } : null);

  if (/weather|temperature|forecast|rain|hot|cold/.test(query)) {
    if (!destination) return "Which Indian city, district or state should I check? For example: “What's the weather in Jaipur this week?”";
    message.querySelector("p").textContent = `Checking the latest forecast for ${destination.district || destination.region}…`;
    try {
      message.querySelector("p").textContent = await getWeatherReport(destination);
    } catch (error) {
      console.error("Could not retrieve a weather report.", error);
      message.querySelector("p").textContent = `I couldn't get a forecast right now: ${error.message} Please try again later or check your local weather service.`;
    }
    helperMessages.scrollTop = helperMessages.scrollHeight;
    return;
  }

  if (/food|eat|dish|meal|restaurant|cuisine|taste/.test(query)) {
    if (!destination) return "Tell me a state or district and I'll suggest some local dishes to look for.";
    return `Let the place set the table. In ${destination.district ? `${destination.district}, ` : ""}${destination.region}, you could look for: ${foodAdviceFor(destination)}\n\nFor a good meal, ask residents where they eat, check recent reviews and confirm opening times. These are regional ideas, not verified restaurant listings.`;
  }

  if (/stay|hotel|hostel|sleep|accommodation|where.*base/.test(query)) {
    if (!destination) return "Where are you planning to stay? Tell me the city or district and I can suggest a practical area to use as a base.";
    return `${stayAdviceFor(destination)}\n\nI don't have live hotel listings or booking availability, so please check current reviews and prices before reserving.`;
  }

  if (/best time|when.*visit|when.*go|season|month/.test(query)) {
    if (!destination) return "Which place are you thinking of? Share a city, district or state for seasonal travel guidance.";
    return `For ${destination.district ? `${destination.district}, ` : ""}${destination.region}, ${bestSeasons[destination.region] || "the best season depends on the district and altitude, so check its local forecast and access conditions before booking."}\n\nThis is broad seasonal guidance, not a promise about future weather. If you share your travel dates, I can also check the current five-day forecast.`;
  }

  if (/plan|itinerary|tour|trip|days|day trip/.test(query)) {
    if (!destination) return "Where would you like to go? For example, “Plan a 3-day trip to Jaipur.” I can use the places on your list to sketch an itinerary.";
    const match = query.match(/\b(\d{1,2})\s*[- ]?days?\b/);
    const dayCount = Math.min(Math.max(Number(match?.[1] || 2), 1), 7);
    return makeTripPlan(destination, dayCount);
  }

  if (!destination) return "I'd love to help you plan. Tell me a place in India, then ask about its weather, best season, local food, where to stay, or a 1–7 day tour.";
  return `${destination.name} is on our travel map. ${bestSeasons[destination.region] || "Check local seasons and travel conditions before you go."}\n\nTry asking me about the weather, food, a practical place to stay, or a trip plan.`;
}

async function submitTravelQuestion(question) {
  const trimmedQuestion = question.trim();
  if (!trimmedQuestion) return;
  addChatMessage("user", trimmedQuestion);
  helperInput.value = "";
  helperInput.disabled = true;
  helperForm.querySelector("button").disabled = true;
  const message = addChatMessage("assistant", "Let me think that through…");
  try {
    const answer = await answerTravelQuestion(trimmedQuestion, message);
    if (answer) message.querySelector("p").textContent = answer;
  } catch (error) {
    console.error("Travel helper could not answer the question.", error);
    message.querySelector("p").textContent = "Sorry, I couldn't answer that just now. Please try again in a moment.";
  } finally {
    helperInput.disabled = false;
    helperForm.querySelector("button").disabled = false;
    helperInput.focus();
    helperMessages.scrollTop = helperMessages.scrollHeight;
  }
}

function openAddDialog() {
  formError.textContent = "";
  addDialog.showModal();
  document.querySelector("#place-name").focus();
}

function setHelperOpen(isOpen) {
  helperPanel.hidden = !isOpen;
  helperToggle.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) helperInput.focus();
}

helperToggle.addEventListener("click", () => setHelperOpen(helperPanel.hidden));
document.querySelector("#helper-close").addEventListener("click", () => setHelperOpen(false));
helperForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitTravelQuestion(helperInput.value);
});
document.querySelectorAll(".helper-prompts button").forEach((button) => {
  button.addEventListener("click", () => submitTravelQuestion(button.dataset.prompt));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !addDialog.open && !helperPanel.hidden) setHelperOpen(false);
});

document.querySelector("#open-add").addEventListener("click", openAddDialog);
document.querySelector("#empty-add").addEventListener("click", openAddDialog);
document.querySelector("#close-add").addEventListener("click", () => addDialog.close());
addDialog.addEventListener("click", (event) => {
  if (event.target === addDialog) addDialog.close();
});
document.querySelector("#add-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const place = {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: String(formData.get("name")).trim(),
    region: String(formData.get("region")),
    district: String(formData.get("district")).trim(),
    category: String(formData.get("kind")),
  };
  place.isTemple = place.category === "Temple & pilgrimage";
  if (!place.name || !place.district || !regions.some((region) => region.name === place.region)) {
    formError.textContent = "Please enter a place, district, and valid region.";
    return;
  }
  customPlaces.push(place);
  saveStorage(STORAGE_KEY, customPlaces);
  event.currentTarget.reset();
  addDialog.close();
  selectedRegion = place.region;
  searchInput.value = "";
  districtFilter.value = "";
  statusFilter.value = "all";
  render();
  showToast(`${place.name} is on your list.`);
});

searchInput.addEventListener("input", renderPlaces);
document.querySelectorAll(".collection-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedCollection = button.dataset.collection;
    statusFilter.value = "all";
    searchInput.value = "";
    render();
  });
});
districtFilter.addEventListener("change", () => {
  if (!districtFilter.value) {
    selectedDistrictKey = "";
    discoveryState = { key: "", status: "idle" };
    render();
    return;
  }
  const [state, district] = districtFilter.value.split("|").map(decodeURIComponent);
  discoverDistrictPlaces(state, district);
});
statusFilter.addEventListener("change", renderPlaces);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) && !addDialog.open) {
    event.preventDefault();
    searchInput.focus();
  }
});

customPlaces = readStorage(STORAGE_KEY, []);
if (!Array.isArray(customPlaces)) customPlaces = [];
const savedVisited = readStorage(VISITED_KEY, []);
visitedPlaces = new Set(savedVisited.map((id) => {
  const match = /^temple-(\d+)$/.exec(id);
  if (!match) return id;
  const temple = templePlaces[Number(match[1])];
  return temple ? `temple-${`${normalizeName(temple[0])}-${normalizeName(temple[1])}-${normalizeName(temple[2])}`.replace(/\s+/g, "-")}` : id;
}));
if (savedVisited.some((id) => /^temple-\d+$/.test(id))) saveStorage(VISITED_KEY, [...visitedPlaces]);
imageCache = readStorage(IMAGE_CACHE_KEY, {});
if (!imageCache || typeof imageCache !== "object" || Array.isArray(imageCache)) imageCache = {};
discoveredByDistrict = readStorage(DISCOVERED_KEY, {});
if (!discoveredByDistrict || typeof discoveredByDistrict !== "object" || Array.isArray(discoveredByDistrict)) discoveredByDistrict = {};
renderRegionControls();
document.querySelector(".region-count").textContent = Array.isArray(window.indiaDistricts)
  ? window.indiaDistricts.reduce((total, entry) => total + entry.districts.length, 0)
  : "36";
render();
