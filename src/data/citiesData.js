const citiesData = [
  {
    name: "Casablanca",
    tagline: "The White City",
    brief: "Casablanca is Morocco's largest city and economic hub, known for its modernity and vibrant business district. This dynamic metropolis is a blend of traditional Moroccan culture and modern urban life. It serves as a key port city and an influential commercial center in North Africa.",
    description: "Casablanca is the largest city in Morocco, known for its modern business district and stunning Hassan II Mosque.",
    introduction: "Casablanca, founded in the 7th century, has evolved from a small Berber settlement to a bustling metropolis. The city experienced significant growth under French colonial rule, which left a lasting imprint on its architecture and infrastructure. Today, Casablanca is a symbol of Moroccan modernization and economic progress.",
    population: "3.7 million",
    area: "220 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Hassan II Mosque",
      "Old Medina",
      "Corniche",
      "Anfa Place"
    ],
    events: [
      "Casablanca International Marathon",
      "Jazzablanca Festival"
    ],
    travelInfo: {
      transportation: ["Mohammed V International Airport", "Tramway", "Buses", "Taxis"],
      accommodation: ["Hyatt Regency", "Hotel Kenzi Tower", "Ibis Casablanca City Center"],
      restaurants: ["Rick's Café", "Le Cabestan", "La Sqala"]
    },
    weather: {
      current: "Sunny, 22°C",
      climate: "Mediterranean climate with warm summers and mild winters."
    },
    images: ["casablanca1.png", "casablanca2.png", "casablanca3.png"],
    mapCoordinates: [33.5731, -7.5898]
  },
  {
    name: "Rabat",
    tagline: "The Capital City",
    brief: "Rabat, the political and administrative capital of Morocco, is known for its blend of historical landmarks and modern infrastructure. This coastal city is celebrated for its tranquil environment, rich history, and cultural significance, making it a center of political and cultural activities.",
    description: "Rabat, the capital of Morocco, is known for its historic sites, including the Kasbah of the Udayas and Hassan Tower.",
    introduction: "Rabat was established as a military fort by the Almohad dynasty in the 12th century. Over the centuries, it has grown into a significant political and cultural hub. The city's well-preserved medina and historic monuments reflect its storied past, while modern developments signify its status as a contemporary capital.",
    population: "1.6 million",
    area: "117 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Hassan Tower",
      "Kasbah of the Udayas",
      "Rabat Archaeological Museum",
      "Chellah"
    ],
    events: [
      "Mawazine Music Festival",
      "Rabat International Author’s Salon"
    ],
    travelInfo: {
      transportation: ["Rabat-Salé Airport", "Tramway", "Buses", "Taxis"],
      accommodation: ["Sofitel Rabat Jardin des Roses", "The View Hotel", "Dar Alia"],
      restaurants: ["Le Dhow", "Al Marsa", "Dar Zaki"]
    },
    weather: {
      current: "Partly Cloudy, 20°C",
      climate: "Mediterranean climate with hot, dry summers and mild, wet winters."
    },
    images: ["rabat1.png", "rabat2.png", "rabat3.png"],
    mapCoordinates: [34.0209, -6.8416]
  },
  {
    name: "Marrakech",
    tagline: "The Red City",
    brief: "Marrakech is a vibrant and colorful city known for its bustling markets, historical palaces, and rich cultural experiences. This city is a cultural treasure trove, offering an immersive experience into the heart of Moroccan traditions and heritage.",
    description: "Marrakech is a vibrant city known for its bustling souks, stunning palaces, and rich cultural heritage.",
    introduction: "Founded in 1062 by the Almoravid dynasty, Marrakech quickly became a significant cultural and religious center. The city is renowned for its distinctive red sandstone buildings, giving it the nickname 'The Red City.' Over the centuries, Marrakech has remained a major trading hub and a focal point of Moroccan history and culture.",
    population: "1 million",
    area: "230 sq km",
    languages: ["Arabic", "Berber", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Koutoubia Mosque",
      "Bahia Palace",
      "Jemaa el-Fnaa",
      "Majorelle Garden"
    ],
    events: [
      "Marrakech International Film Festival",
      "Marrakech Popular Arts Festival"
    ],
    travelInfo: {
      transportation: ["Marrakech Menara Airport", "Buses", "Taxis"],
      accommodation: ["La Mamounia", "Royal Mansour", "Riad Kniza"],
      restaurants: ["Al Fassia", "Nomad", "Le Jardin"]
    },
    weather: {
      current: "Sunny, 25°C",
      climate: "Warm summers with temperatures often exceeding 30°C, mild winters averaging around 18°C."
    },
    images: ["marrakech1.png", "marrakech2.png", "marrakech3.png"],
    mapCoordinates: [31.6295, -7.9811]
  },
  {
    name: "Fes",
    tagline: "The Spiritual City",
    brief: "Fes is renowned for its ancient walled medina, Fes el Bali, and its rich Islamic heritage. As one of the oldest cities in Morocco, Fes is a center of culture, education, and spirituality.",
    description: "Fes is famous for its ancient walled city, Fes el Bali, with medieval architecture and vibrant souks.",
    introduction: "Founded in the 9th century, Fes has been a seat of learning and culture for over a millennium. It is home to Al Quaraouiyine University, the world's oldest continuously operating university. The city's labyrinthine medina, a UNESCO World Heritage site, reflects its rich history and cultural significance.",
    population: "1.1 million",
    area: "320 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Al Quaraouiyine University",
      "Bou Inania Madrasa",
      "Fes el Bali",
      "Dar Batha Museum"
    ],
    events: [
      "Fes Festival of World Sacred Music",
      "Festival of Sufi Culture"
    ],
    travelInfo: {
      transportation: ["Fes-Saïss Airport", "Buses", "Taxis"],
      accommodation: ["Riad Fes", "Palais Amani", "Dar Bensouda"],
      restaurants: ["The Ruined Garden", "Dar Roumana", "Restaurant Numéro 7"]
    },
    weather: {
      current: "Clear, 19°C",
      climate: "Continental climate with hot summers and cold, wet winters."
    },
    images: ["fes1.png", "fes2.png", "fes3.png"],
    mapCoordinates: [34.0331, -4.9998]
  },
  {
    name: "Tangier",
    tagline: "The Gateway to Africa",
    brief: "Tangier is a historic port city at the crossroads of Europe and Africa. Known for its international character and strategic location, Tangier has long been a cultural melting pot.",
    description: "Tangier is a port city known for its blend of cultures and historical significance as a gateway between Europe and Africa.",
    introduction: "With a history dating back to the 5th century BC, Tangier has been influenced by numerous civilizations, including the Phoenicians, Romans, and Arabs. In the 20th century, it became an international zone attracting artists and writers. Today, Tangier is a vibrant city that reflects a unique blend of cultures and traditions.",
    population: "947,952",
    area: "120 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Cape Spartel",
      "Caves of Hercules",
      "Tangier Medina",
      "American Legation Museum"
    ],
    events: [
      "Tanjazz Festival",
      "Tangier Film Festival"
    ],
    travelInfo: {
      transportation: ["Tangier Ibn Battouta Airport", "Ferry", "Trains", "Taxis"],
      accommodation: ["Hotel Farah Tangier", "Kenzi Solazur", "El Minzah Hotel"],
      restaurants: ["El Morocco Club", "Anna e Paolo", "Le Saveur du Poisson"]
    },
    weather: {
      current: "Windy, 18°C",
      climate: "Mediterranean climate with hot summers and mild, wet winters."
    },
    images: ["tangier1.png", "tangier2.png", "tangier3.png"],
    mapCoordinates: [35.7595, -5.8340]
  },
  {
    name: "Agadir",
    tagline: "The Beach City",
    brief: "Agadir is a modern coastal city known for its beautiful beaches, resorts, and vibrant nightlife. It is a popular destination for sun-seekers and offers a range of outdoor activities and cultural experiences.",
    description: "Agadir is known for its beautiful beaches, resorts, and vibrant nightlife. It is a popular destination for sun-seekers.",
    introduction: "Agadir was rebuilt in the 1960s after a devastating earthquake, transforming it into a modern city with a focus on tourism. The city's wide sandy beaches and mild climate make it a year-round destination. Agadir also serves as a gateway to the scenic Souss-Massa region, known for its national parks and natural beauty.",
    population: "421,844",
    area: "70 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Agadir Beach",
      "Agadir Oufella Ruins",
      "Souk El Had",
      "Marina Agadir"
    ],
    events: [
      "Timitar Festival",
      "Concerts at Agadir Beach"
    ],
    travelInfo: {
      transportation: ["Agadir Al-Massira Airport", "Buses", "Taxis"],
      accommodation: ["Sofitel Agadir Thalassa Sea & Spa", "Riu Palace Tikida", "Royal Atlas Hotel"],
      restaurants: ["Pure Passion", "Le Jardin d'Eau", "El Toro"]
    },
    weather: {
      current: "Sunny, 26°C",
      climate: "Mild, subtropical climate with warm winters and hot summers."
    },
    images: ["agadir1.png", "agadir2.png", "agadir3.png"],
    mapCoordinates: [30.4278, -9.5981]
  },
  {
    name: "Essaouira",
    tagline: "The Wind City",
    brief: "Essaouira is a coastal city known for its well-preserved medina, vibrant arts scene, and strong winds, making it a popular spot for windsurfing. The city's relaxed atmosphere and cultural diversity attract artists and visitors from around the world.",
    description: "Essaouira is a coastal city known for its well-preserved medina, vibrant arts scene, and strong winds, making it a popular spot for windsurfing.",
    introduction: "Founded in the 18th century by Sultan Mohammed ben Abdallah, Essaouira was designed by European architects, giving it a unique blend of Moroccan and European styles. The city's medina is a UNESCO World Heritage site, and its picturesque harbor and fortifications are reminiscent of its strategic maritime history.",
    population: "77,966",
    area: "90 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Essaouira Beach",
      "Skala de la Ville",
      "Medina of Essaouira",
      "Sidi Mohammed Ben Abdallah Museum"
    ],
    events: [
      "Gnaoua World Music Festival",
      "Essaouira Mogador Marathon"
    ],
    travelInfo: {
      transportation: ["Essaouira Mogador Airport", "Buses", "Taxis"],
      accommodation: ["Le Medina Essaouira Hotel", "Riad Baladin", "Villa Maroc"],
      restaurants: ["La Table by Madada", "Elizir", "Ocean Vagabond"]
    },
    weather: {
      current: "Windy, 20°C",
      climate: "Mild, Mediterranean climate with cool winters and warm summers."
    },
    images: ["essaouira1.png", "essaouira2.png", "essaouira3.png"],
    mapCoordinates: [31.5085, -9.7595]
  },
  {
    name: "Meknes",
    tagline: "The Imperial City",
    brief: "Meknes is one of Morocco's imperial cities, known for its historical sites and grand architecture. This city combines the grandeur of its past with the charm of its vibrant markets and lively cultural scene.",
    description: "Meknes is one of Morocco's imperial cities, known for its historical sites and grand architecture, including the famous Bab Mansour gate.",
    introduction: "Meknes was founded in the 11th century by the Almoravids as a military settlement. It rose to prominence in the 17th century under Sultan Moulay Ismail, who transformed it into a grand capital. The city's impressive fortifications, palaces, and gardens reflect its historical significance and imperial grandeur.",
    population: "632,079",
    area: "105 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Bab Mansour",
      "Moulay Ismail Mausoleum",
      "Heri es-Souani",
      "Dar Jamai Museum"
    ],
    events: [
      "Meknes International Festival of Animation",
      "Meknes Art Fair"
    ],
    travelInfo: {
      transportation: ["Fes-Saïss Airport", "Trains", "Buses", "Taxis"],
      accommodation: ["Riad Yacout", "Riad D'Or", "Hotel Transatlantique"],
      restaurants: ["Collier de la Colombe", "Restaurant Zohra", "Dar Sultana"]
    },
    weather: {
      current: "Cloudy, 17°C",
      climate: "Continental climate with hot summers and cool, wet winters."
    },
    images: ["meknes1.png", "meknes2.png", "meknes3.png"],
    mapCoordinates: [33.8959, -5.5540]
  },
  {
    name: "Ouarzazate",
    tagline: "The Door of the Desert",
    brief: "Ouarzazate is known as a gateway to the Sahara Desert and a popular filming location for many Hollywood movies. The city is a starting point for desert tours and has a distinctive charm with its adobe buildings and dramatic landscapes.",
    description: "Ouarzazate is known as a gateway to the Sahara Desert and a popular filming location for many Hollywood movies.",
    introduction: "Established in the 1920s as a French garrison town, Ouarzazate has grown into a significant cultural and tourism hub. The city is famous for its proximity to the Sahara Desert and its role in the film industry, with many major films shot in its surrounding areas. The nearby Ait Benhaddou, a UNESCO World Heritage site, is a prime example of traditional Moroccan earthen architecture.",
    population: "71,067",
    area: "60 sq km",
    languages: ["Arabic", "Berber"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Ait Benhaddou",
      "Atlas Film Studios",
      "Taourirt Kasbah",
      "Fint Oasis"
    ],
    events: [
      "Ouarzazate Marathon",
      "Cinema and Migration Festival"
    ],
    travelInfo: {
      transportation: ["Ouarzazate Airport", "Buses", "Taxis"],
      accommodation: ["Le Berbere Palace", "Dar Chamaa", "Hotel Ouarzazate Le Riad"],
      restaurants: ["La Kasbah des Sables", "Le Petit Riad", "Restaurant Accord Majeur"]
    },
    weather: {
      current: "Sunny, 24°C",
      climate: "Desert climate with hot, dry summers and mild winters."
    },
    images: ["ouarzazate1.png", "ouarzazate2.png", "ouarzazate3.png"],
    mapCoordinates: [30.9189, -6.8930]
  },
  {
    name: "Chefchaouen",
    tagline: "The Blue Pearl",
    brief: "Chefchaouen is known for its striking blue-washed buildings and charming, narrow streets. Nestled in the Rif Mountains, it offers a serene atmosphere and stunning views, making it a favorite destination for photographers and travelers seeking tranquility.",
    description: "Chefchaouen is known for its striking blue-washed buildings and charming, narrow streets.",
    introduction: "Founded in 1471, Chefchaouen served as a fortress to defend against Portuguese invasions. The city's blue-painted houses are said to symbolize the sky and heaven, providing a sense of peace and spirituality. Over the years, Chefchaouen has become a haven for artists and travelers, offering a unique blend of cultural heritage and natural beauty.",
    population: "42,786",
    area: "40 sq km",
    languages: ["Arabic", "Berber"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Medina of Chefchaouen",
      "Ras El Maa Waterfall",
      "Kasbah Museum",
      "Spanish Mosque"
    ],
    events: [
      "Chefchaouen Festival of Andalusian Music",
      "Chefchaouen Hiking Festival"
    ],
    travelInfo: {
      transportation: ["Tangier Ibn Battouta Airport", "Buses", "Taxis"],
      accommodation: ["Dar Gabriel", "Casa Perleta", "Lina Ryad & Spa"],
      restaurants: ["Restaurant Beldi Bab Ssour", "Aladdin Restaurant", "Cafe Clock"]
    },
    weather: {
      current: "Clear, 16°C",
      climate: "Mediterranean climate with warm summers and mild, wet winters."
    },
    images: ["chefchaouen1.png", "chefchaouen2.png", "chefchaouen3.png"],
    mapCoordinates: [35.1688, -5.2636]
  },
  {
    name: "Ifrane",
    tagline: "The Little Switzerland",
    brief: "Ifrane is known for its alpine-style architecture and is a popular destination for skiing and outdoor activities. The city's clean environment and beautiful scenery offer a refreshing retreat from the hustle and bustle of city life.",
    description: "Ifrane is known for its alpine-style architecture and is a popular destination for skiing and outdoor activities.",
    introduction: "Founded in the 1920s during the French colonial period, Ifrane was designed to resemble a European alpine village. Its high altitude and cool climate make it a popular destination for winter sports and summer retreats. The presence of Al Akhawayn University adds to its vibrant and diverse community.",
    population: "30,000",
    area: "60 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Michlifen Ski Resort",
      "Dayet Aoua Lake",
      "Al Akhawayn University",
      "Lion Stone"
    ],
    events: [
      "Ifrane Cherry Festival",
      "Ifrane Snow Festival"
    ],
    travelInfo: {
      transportation: ["Fes-Saïss Airport", "Buses", "Taxis"],
      accommodation: ["Michlifen Resort & Golf", "Hotel Al Akhawayn", "Farah Inn Ifrane"],
      restaurants: ["Forest Restaurant", "Le Chamonix", "La Paix"]
    },
    weather: {
      current: "Snowy, -2°C",
      climate: "Alpine climate with cold, snowy winters and mild summers."
    },
    images: ["ifrane1.png", "ifrane2.png", "ifrane3.png"],
    mapCoordinates: [33.5338, -5.1087]
  },
  {
    name: "Tétouan",
    tagline: "The White Dove",
    brief: "Tétouan is known for its blend of Andalusian and Moroccan cultures, with a beautifully preserved medina. The city is a UNESCO World Heritage site and a gateway to the Rif Mountains, offering rich historical and cultural experiences.",
    description: "Tétouan is known for its blend of Andalusian and Moroccan cultures, with a beautifully preserved medina.",
    introduction: "Tétouan was rebuilt in the 15th century by Andalusian refugees fleeing the Reconquista, which deeply influenced its architecture and culture. The city's medina is a UNESCO World Heritage site, recognized for its unique fusion of Arab and Andalusian traditions. Tétouan also serves as a cultural and artistic center in northern Morocco.",
    population: "380,787",
    area: "75 sq km",
    languages: ["Arabic", "Spanish", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Medina of Tétouan",
      "Archaeological Museum",
      "Hassan II Square",
      "Royal Palace"
    ],
    events: [
      "Mediterranean Film Festival",
      "Tétouan Music Festival"
    ],
    travelInfo: {
      transportation: ["Tangier Ibn Battouta Airport", "Buses", "Taxis"],
      accommodation: ["Blanco Riad", "Hotel La Paloma", "Riad El Reducto"],
      restaurants: ["El Reducto", "La Union", "Chez Abdelghani"]
    },
    weather: {
      current: "Partly Cloudy, 18°C",
      climate: "Mediterranean climate with hot summers and mild, wet winters."
    },
    images: ["tetouan1.png", "tetouan2.png", "tetouan3.png"],
    mapCoordinates: [35.5785, -5.3684]
  },
  {
    name: "El Jadida",
    tagline: "The Coastal City",
    brief: "El Jadida is known for its Portuguese architecture and beautiful beaches, attracting many visitors during the summer. The city's historical significance and coastal charm make it a popular destination for both relaxation and exploration.",
    description: "El Jadida is known for its Portuguese architecture and beautiful beaches, attracting many visitors during the summer.",
    introduction: "Founded by the Portuguese in the early 16th century, El Jadida was initially known as Mazagan. The city's fortifications and cisterns are remnants of its colonial past. Today, El Jadida is a thriving coastal city that blends historical architecture with modern amenities, offering a rich cultural and recreational experience.",
    population: "194,934",
    area: "30 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Portuguese Cistern",
      "El Jadida Beach",
      "Mazagan Fortress",
      "Sidi Bouzid Beach"
    ],
    events: [
      "El Jadida Horse Show",
      "El Jadida Cultural Festival"
    ],
    travelInfo: {
      transportation: ["Mohammed V International Airport", "Buses", "Taxis"],
      accommodation: ["Mazagan Beach Resort", "Pullman Mazagan Royal Golf & Spa", "Art Suites El Jadida"],
      restaurants: ["La Grillardière", "Le Privé", "Oasis"]
    },
    weather: {
      current: "Sunny, 22°C",
      climate: "Mediterranean climate with warm summers and mild winters."
    },
    images: ["eljadida1.png", "eljadida2.png", "eljadida3.png"],
    mapCoordinates: [33.2549, -8.5060]
  },
  {
    name: "Kenitra",
    tagline: "The Green City",
    brief: "Kenitra is an important port city and agricultural hub, known for its lush greenery and proximity to the Sidi Boughaba Nature Reserve. The city offers a unique blend of industrial growth and natural beauty.",
    description: "Kenitra is an important port city and agricultural hub, known for its lush greenery and proximity to the Sidi Boughaba Nature Reserve.",
    introduction: "Kenitra was established as a military fort during the French protectorate and has since evolved into a vital industrial and agricultural center. The city's natural attractions, such as the Sidi Boughaba Nature Reserve, offer a contrast to its urban and industrial areas, providing residents and visitors with a balanced environment.",
    population: "431,282",
    area: "76 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Sidi Boughaba Nature Reserve",
      "Plage Mehdia",
      "Kasbat Mahdia",
      "Kenitra Naval Base"
    ],
    events: [
      "Kenitra Music Festival",
      "Kenitra Carnival"
    ],
    travelInfo: {
      transportation: ["Rabat-Salé Airport", "Trains", "Buses", "Taxis"],
      accommodation: ["Hotel Mamora Kenitra", "Relax Kenitra", "Hotel Assam"],
      restaurants: ["Le Club", "Dar Tajine", "Pasta Piazza"]
    },
    weather: {
      current: "Cloudy, 21°C",
      climate: "Mediterranean climate with warm summers and mild, wet winters."
    },
    images: ["kenitra1.png", "kenitra2.png", "kenitra3.png"],
    mapCoordinates: [34.2643, -6.5890]
  },
  {
    name: "Oujda",
    tagline: "The City of Knowledge",
    brief: "Oujda is an eastern Moroccan city known for its universities and vibrant cultural scene, including the lively Souk El Ma. The city serves as a gateway to the Algerian border and has a rich history influenced by various civilizations.",
    description: "Oujda is an eastern Moroccan city known for its universities and vibrant cultural scene, including the lively Souk El Ma.",
    introduction: "Founded over a thousand years ago, Oujda has been a significant cultural and commercial center in eastern Morocco. The city's strategic location near the Algerian border has made it a crossroads of cultures. Oujda is renowned for its educational institutions and dynamic arts scene, making it a city of knowledge and culture.",
    population: "494,252",
    area: "80 sq km",
    languages: ["Arabic", "French"],
    timezone: "GMT+1",
    pointsOfInterest: [
      "Souk El Ma",
      "Park Lalla Aicha",
      "Medina of Oujda",
      "Dar Sebti"
    ],
    events: [
      "Oujda International Music Festival",
      "Oujda Rai Festival"
    ],
    travelInfo: {
      transportation: ["Oujda Angads Airport", "Trains", "Buses", "Taxis"],
      accommodation: ["Atlas Orient", "Hotel Ibis Oujda", "Dar Al Fassia"],
      restaurants: ["La Belle D'Orient", "Restaurant Al Hamra", "Al Farah"]
    },
    weather: {
      current: "Sunny, 23°C",
      climate: "Continental climate with hot, dry summers and cold, wet winters."
    },
    images: ["oujda1.png", "oujda2.png", "oujda3.png"],
    mapCoordinates: [34.6821, -1.8993]
  }
];

export default citiesData;
