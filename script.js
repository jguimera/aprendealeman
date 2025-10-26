// Base de datos de 300 palabras comunes en alemán apropiadas para niños de 8 años
const wordsDatabase = [
    // Animales (Animals) - 50 palabras
    { german: "Hund", article: "der", spanish: "perro", category: "animales" },
    { german: "Katze", article: "die", spanish: "gato", category: "animales" },
    { german: "Pferd", article: "das", spanish: "caballo", category: "animales" },
    { german: "Vogel", article: "der", spanish: "pájaro", category: "animales" },
    { german: "Fisch", article: "der", spanish: "pez", category: "animales" },
    { german: "Kuh", article: "die", spanish: "vaca", category: "animales" },
    { german: "Schwein", article: "das", spanish: "cerdo", category: "animales" },
    { german: "Schaf", article: "das", spanish: "oveja", category: "animales" },
    { german: "Huhn", article: "das", spanish: "gallina", category: "animales" },
    { german: "Hase", article: "der", spanish: "conejo", category: "animales" },
    { german: "Maus", article: "die", spanish: "ratón", category: "animales" },
    { german: "Elefant", article: "der", spanish: "elefante", category: "animales" },
    { german: "Löwe", article: "der", spanish: "león", category: "animales" },
    { german: "Tiger", article: "der", spanish: "tigre", category: "animales" },
    { german: "Bär", article: "der", spanish: "oso", category: "animales" },
    { german: "Giraffe", article: "die", spanish: "jirafa", category: "animales" },
    { german: "Affe", article: "der", spanish: "mono", category: "animales" },
    { german: "Zebra", article: "das", spanish: "cebra", category: "animales" },
    { german: "Frosch", article: "der", spanish: "rana", category: "animales" },
    { german: "Schmetterling", article: "der", spanish: "mariposa", category: "animales" },
    { german: "Biene", article: "die", spanish: "abeja", category: "animales" },
    { german: "Spinne", article: "die", spanish: "araña", category: "animales" },
    { german: "Schlange", article: "die", spanish: "serpiente", category: "animales" },
    { german: "Schildkröte", article: "die", spanish: "tortuga", category: "animales" },
    { german: "Delfin", article: "der", spanish: "delfín", category: "animales" },
    { german: "Hai", article: "der", spanish: "tiburón", category: "animales" },
    { german: "Wal", article: "der", spanish: "ballena", category: "animales" },
    { german: "Pinguin", article: "der", spanish: "pingüino", category: "animales" },
    { german: "Eule", article: "die", spanish: "búho", category: "animales" },
    { german: "Adler", article: "der", spanish: "águila", category: "animales" },
    { german: "Ente", article: "die", spanish: "pato", category: "animales" },
    { german: "Gans", article: "die", spanish: "ganso", category: "animales" },
    { german: "Fuchs", article: "der", spanish: "zorro", category: "animales" },
    { german: "Wolf", article: "der", spanish: "lobo", category: "animales" },
    { german: "Reh", article: "das", spanish: "ciervo", category: "animales" },
    { german: "Eichhörnchen", article: "das", spanish: "ardilla", category: "animales" },
    { german: "Igel", article: "der", spanish: "erizo", category: "animales" },
    { german: "Ziege", article: "die", spanish: "cabra", category: "animales" },
    { german: "Esel", article: "der", spanish: "burro", category: "animales" },
    { german: "Hahn", article: "der", spanish: "gallo", category: "animales" },
    { german: "Truthahn", article: "der", spanish: "pavo", category: "animales" },
    { german: "Krokodil", article: "das", spanish: "cocodrilo", category: "animales" },
    { german: "Nilpferd", article: "das", spanish: "hipopótamo", category: "animales" },
    { german: "Nashorn", article: "das", spanish: "rinoceronte", category: "animales" },
    { german: "Kamel", article: "das", spanish: "camello", category: "animales" },
    { german: "Känguru", article: "das", spanish: "canguro", category: "animales" },
    { german: "Koala", article: "der", spanish: "koala", category: "animales" },
    { german: "Panda", article: "der", spanish: "panda", category: "animales" },
    { german: "Flamingo", article: "der", spanish: "flamenco", category: "animales" },
    { german: "Papagei", article: "der", spanish: "loro", category: "animales" },

    // Familia y personas (Family and people) - 30 palabras
    { german: "Mutter", article: "die", spanish: "madre", category: "familia" },
    { german: "Vater", article: "der", spanish: "padre", category: "familia" },
    { german: "Kind", article: "das", spanish: "niño", category: "familia" },
    { german: "Bruder", article: "der", spanish: "hermano", category: "familia" },
    { german: "Schwester", article: "die", spanish: "hermana", category: "familia" },
    { german: "Oma", article: "die", spanish: "abuela", category: "familia" },
    { german: "Opa", article: "der", spanish: "abuelo", category: "familia" },
    { german: "Tante", article: "die", spanish: "tía", category: "familia" },
    { german: "Onkel", article: "der", spanish: "tío", category: "familia" },
    { german: "Cousin", article: "der", spanish: "primo", category: "familia" },
    { german: "Cousine", article: "die", spanish: "prima", category: "familia" },
    { german: "Baby", article: "das", spanish: "bebé", category: "familia" },
    { german: "Junge", article: "der", spanish: "chico", category: "familia" },
    { german: "Mädchen", article: "das", spanish: "chica", category: "familia" },
    { german: "Mann", article: "der", spanish: "hombre", category: "familia" },
    { german: "Frau", article: "die", spanish: "mujer", category: "familia" },
    { german: "Freund", article: "der", spanish: "amigo", category: "familia" },
    { german: "Freundin", article: "die", spanish: "amiga", category: "familia" },
    { german: "Lehrer", article: "der", spanish: "profesor", category: "familia" },
    { german: "Lehrerin", article: "die", spanish: "profesora", category: "familia" },
    { german: "Arzt", article: "der", spanish: "médico", category: "familia" },
    { german: "Ärztin", article: "die", spanish: "médica", category: "familia" },
    { german: "Koch", article: "der", spanish: "cocinero", category: "familia" },
    { german: "Köchin", article: "die", spanish: "cocinera", category: "familia" },
    { german: "Polizist", article: "der", spanish: "policía (m)", category: "familia" },
    { german: "Polizistin", article: "die", spanish: "policía (f)", category: "familia" },
    { german: "Feuerwehrmann", article: "der", spanish: "bombero", category: "familia" },
    { german: "Pilot", article: "der", spanish: "piloto", category: "familia" },
    { german: "Sänger", article: "der", spanish: "cantante (m)", category: "familia" },
    { german: "Sängerin", article: "die", spanish: "cantante (f)", category: "familia" },

    // Casa y objetos (House and objects) - 50 palabras
    { german: "Haus", article: "das", spanish: "casa", category: "casa" },
    { german: "Tür", article: "die", spanish: "puerta", category: "casa" },
    { german: "Fenster", article: "das", spanish: "ventana", category: "casa" },
    { german: "Zimmer", article: "das", spanish: "habitación", category: "casa" },
    { german: "Bett", article: "das", spanish: "cama", category: "casa" },
    { german: "Tisch", article: "der", spanish: "mesa", category: "casa" },
    { german: "Stuhl", article: "der", spanish: "silla", category: "casa" },
    { german: "Sofa", article: "das", spanish: "sofá", category: "casa" },
    { german: "Lampe", article: "die", spanish: "lámpara", category: "casa" },
    { german: "Küche", article: "die", spanish: "cocina", category: "casa" },
    { german: "Bad", article: "das", spanish: "baño", category: "casa" },
    { german: "Garten", article: "der", spanish: "jardín", category: "casa" },
    { german: "Dach", article: "das", spanish: "techo", category: "casa" },
    { german: "Wand", article: "die", spanish: "pared", category: "casa" },
    { german: "Boden", article: "der", spanish: "suelo", category: "casa" },
    { german: "Treppe", article: "die", spanish: "escalera", category: "casa" },
    { german: "Schrank", article: "der", spanish: "armario", category: "casa" },
    { german: "Regal", article: "das", spanish: "estantería", category: "casa" },
    { german: "Spiegel", article: "der", spanish: "espejo", category: "casa" },
    { german: "Uhr", article: "die", spanish: "reloj", category: "casa" },
    { german: "Bild", article: "das", spanish: "cuadro", category: "casa" },
    { german: "Teppich", article: "der", spanish: "alfombra", category: "casa" },
    { german: "Vorhang", article: "der", spanish: "cortina", category: "casa" },
    { german: "Kissen", article: "das", spanish: "cojín", category: "casa" },
    { german: "Decke", article: "die", spanish: "manta", category: "casa" },
    { german: "Fernseher", article: "der", spanish: "televisión", category: "casa" },
    { german: "Computer", article: "der", spanish: "computadora", category: "casa" },
    { german: "Telefon", article: "das", spanish: "teléfono", category: "casa" },
    { german: "Schlüssel", article: "der", spanish: "llave", category: "casa" },
    { german: "Buch", article: "das", spanish: "libro", category: "casa" },
    { german: "Stift", article: "der", spanish: "bolígrafo", category: "casa" },
    { german: "Heft", article: "das", spanish: "cuaderno", category: "casa" },
    { german: "Papier", article: "das", spanish: "papel", category: "casa" },
    { german: "Schere", article: "die", spanish: "tijeras", category: "casa" },
    { german: "Kleber", article: "der", spanish: "pegamento", category: "casa" },
    { german: "Tasche", article: "die", spanish: "bolso", category: "casa" },
    { german: "Korb", article: "der", spanish: "cesta", category: "casa" },
    { german: "Eimer", article: "der", spanish: "cubo", category: "casa" },
    { german: "Besen", article: "der", spanish: "escoba", category: "casa" },
    { german: "Handtuch", article: "das", spanish: "toalla", category: "casa" },
    { german: "Seife", article: "die", spanish: "jabón", category: "casa" },
    { german: "Zahnbürste", article: "die", spanish: "cepillo de dientes", category: "casa" },
    { german: "Kamm", article: "der", spanish: "peine", category: "casa" },
    { german: "Bürste", article: "die", spanish: "cepillo", category: "casa" },
    { german: "Spiegel", article: "der", spanish: "espejo", category: "casa" },
    { german: "Klo", article: "das", spanish: "váter", category: "casa" },
    { german: "Dusche", article: "die", spanish: "ducha", category: "casa" },
    { german: "Badewanne", article: "die", spanish: "bañera", category: "casa" },
    { german: "Waschbecken", article: "das", spanish: "lavabo", category: "casa" },
    { german: "Kühlschrank", article: "der", spanish: "refrigerador", category: "casa" },

    // Comida (Food) - 40 palabras
    { german: "Brot", article: "das", spanish: "pan", category: "comida" },
    { german: "Butter", article: "die", spanish: "mantequilla", category: "comida" },
    { german: "Käse", article: "der", spanish: "queso", category: "comida" },
    { german: "Milch", article: "die", spanish: "leche", category: "comida" },
    { german: "Ei", article: "das", spanish: "huevo", category: "comida" },
    { german: "Fleisch", article: "das", spanish: "carne", category: "comida" },
    { german: "Wurst", article: "die", spanish: "salchicha", category: "comida" },
    { german: "Apfel", article: "der", spanish: "manzana", category: "comida" },
    { german: "Banane", article: "die", spanish: "plátano", category: "comida" },
    { german: "Orange", article: "die", spanish: "naranja", category: "comida" },
    { german: "Erdbeere", article: "die", spanish: "fresa", category: "comida" },
    { german: "Kirsche", article: "die", spanish: "cereza", category: "comida" },
    { german: "Traube", article: "die", spanish: "uva", category: "comida" },
    { german: "Birne", article: "die", spanish: "pera", category: "comida" },
    { german: "Pfirsich", article: "der", spanish: "melocotón", category: "comida" },
    { german: "Wassermelone", article: "die", spanish: "sandía", category: "comida" },
    { german: "Ananas", article: "die", spanish: "piña", category: "comida" },
    { german: "Karotte", article: "die", spanish: "zanahoria", category: "comida" },
    { german: "Kartoffel", article: "die", spanish: "patata", category: "comida" },
    { german: "Tomate", article: "die", spanish: "tomate", category: "comida" },
    { german: "Gurke", article: "die", spanish: "pepino", category: "comida" },
    { german: "Salat", article: "der", spanish: "ensalada", category: "comida" },
    { german: "Zwiebel", article: "die", spanish: "cebolla", category: "comida" },
    { german: "Reis", article: "der", spanish: "arroz", category: "comida" },
    { german: "Nudel", article: "die", spanish: "pasta", category: "comida" },
    { german: "Suppe", article: "die", spanish: "sopa", category: "comida" },
    { german: "Pizza", article: "die", spanish: "pizza", category: "comida" },
    { german: "Kuchen", article: "der", spanish: "pastel", category: "comida" },
    { german: "Keks", article: "der", spanish: "galleta", category: "comida" },
    { german: "Schokolade", article: "die", spanish: "chocolate", category: "comida" },
    { german: "Eis", article: "das", spanish: "helado", category: "comida" },
    { german: "Bonbon", article: "das", spanish: "caramelo", category: "comida" },
    { german: "Honig", article: "der", spanish: "miel", category: "comida" },
    { german: "Marmelade", article: "die", spanish: "mermelada", category: "comida" },
    { german: "Zucker", article: "der", spanish: "azúcar", category: "comida" },
    { german: "Salz", article: "das", spanish: "sal", category: "comida" },
    { german: "Wasser", article: "das", spanish: "agua", category: "comida" },
    { german: "Saft", article: "der", spanish: "zumo", category: "comida" },
    { german: "Tee", article: "der", spanish: "té", category: "comida" },
    { german: "Kaffee", article: "der", spanish: "café", category: "comida" },

    // Ropa (Clothing) - 25 palabras
    { german: "Kleid", article: "das", spanish: "vestido", category: "ropa" },
    { german: "Hose", article: "die", spanish: "pantalón", category: "ropa" },
    { german: "Rock", article: "der", spanish: "falda", category: "ropa" },
    { german: "Hemd", article: "das", spanish: "camisa", category: "ropa" },
    { german: "T-Shirt", article: "das", spanish: "camiseta", category: "ropa" },
    { german: "Pullover", article: "der", spanish: "jersey", category: "ropa" },
    { german: "Jacke", article: "die", spanish: "chaqueta", category: "ropa" },
    { german: "Mantel", article: "der", spanish: "abrigo", category: "ropa" },
    { german: "Schal", article: "der", spanish: "bufanda", category: "ropa" },
    { german: "Mütze", article: "die", spanish: "gorro", category: "ropa" },
    { german: "Hut", article: "der", spanish: "sombrero", category: "ropa" },
    { german: "Handschuh", article: "der", spanish: "guante", category: "ropa" },
    { german: "Socke", article: "die", spanish: "calcetín", category: "ropa" },
    { german: "Schuh", article: "der", spanish: "zapato", category: "ropa" },
    { german: "Stiefel", article: "der", spanish: "bota", category: "ropa" },
	{ german: "Sandale", article: "die", spanish: "sandalia", category: "ropa" },
    { german: "Gürtel", article: "der", spanish: "cinturón", category: "ropa" },
    { german: "Krawatte", article: "die", spanish: "corbata", category: "ropa" },
    { german: "Brille", article: "die", spanish: "gafas", category: "ropa" },
    { german: "Uhr", article: "die", spanish: "reloj", category: "ropa" },
    { german: "Ring", article: "der", spanish: "anillo", category: "ropa" },
    { german: "Kette", article: "die", spanish: "collar", category: "ropa" },
    { german: "Ohrring", article: "der", spanish: "pendiente", category: "ropa" },
    { german: "Tasche", article: "die", spanish: "bolso", category: "ropa" },
    { german: "Rucksack", article: "der", spanish: "mochila", category: "ropa" },

    // Naturaleza y clima (Nature and weather) - 30 palabras
    { german: "Sonne", article: "die", spanish: "sol", category: "naturaleza" },
    { german: "Mond", article: "der", spanish: "luna", category: "naturaleza" },
    { german: "Stern", article: "der", spanish: "estrella", category: "naturaleza" },
    { german: "Himmel", article: "der", spanish: "cielo", category: "naturaleza" },
    { german: "Wolke", article: "die", spanish: "nube", category: "naturaleza" },
    { german: "Regen", article: "der", spanish: "lluvia", category: "naturaleza" },
    { german: "Schnee", article: "der", spanish: "nieve", category: "naturaleza" },
    { german: "Wind", article: "der", spanish: "viento", category: "naturaleza" },
    { german: "Gewitter", article: "das", spanish: "tormenta", category: "naturaleza" },
    { german: "Blitz", article: "der", spanish: "relámpago", category: "naturaleza" },
    { german: "Donner", article: "der", spanish: "trueno", category: "naturaleza" },
    { german: "Regenbogen", article: "der", spanish: "arco iris", category: "naturaleza" },
    { german: "Baum", article: "der", spanish: "árbol", category: "naturaleza" },
    { german: "Blume", article: "die", spanish: "flor", category: "naturaleza" },
    { german: "Gras", article: "das", spanish: "hierba", category: "naturaleza" },
    { german: "Blatt", article: "das", spanish: "hoja", category: "naturaleza" },
    { german: "Ast", article: "der", spanish: "rama", category: "naturaleza" },
    { german: "Wurzel", article: "die", spanish: "raíz", category: "naturaleza" },
    { german: "Berg", article: "der", spanish: "montaña", category: "naturaleza" },
    { german: "Tal", article: "das", spanish: "valle", category: "naturaleza" },
    { german: "Fluss", article: "der", spanish: "río", category: "naturaleza" },
    { german: "See", article: "der", spanish: "lago", category: "naturaleza" },
    { german: "Meer", article: "das", spanish: "mar", category: "naturaleza" },
    { german: "Strand", article: "der", spanish: "playa", category: "naturaleza" },
    { german: "Welle", article: "die", spanish: "ola", category: "naturaleza" },
    { german: "Sand", article: "der", spanish: "arena", category: "naturaleza" },
    { german: "Stein", article: "der", spanish: "piedra", category: "naturaleza" },
    { german: "Fels", article: "der", spanish: "roca", category: "naturaleza" },
    { german: "Wald", article: "der", spanish: "bosque", category: "naturaleza" },
    { german: "Wiese", article: "die", spanish: "prado", category: "naturaleza" },

    // Escuela y juguetes (School and toys) - 35 palabras
    { german: "Schule", article: "die", spanish: "escuela", category: "escuela" },
    { german: "Klasse", article: "die", spanish: "clase", category: "escuela" },
    { german: "Tafel", article: "die", spanish: "pizarra", category: "escuela" },
    { german: "Kreide", article: "die", spanish: "tiza", category: "escuela" },
    { german: "Hausaufgabe", article: "die", spanish: "deberes", category: "escuela" },
    { german: "Prüfung", article: "die", spanish: "examen", category: "escuela" },
    { german: "Note", article: "die", spanish: "nota", category: "escuela" },
    { german: "Zeugnis", article: "das", spanish: "boletín", category: "escuela" },
    { german: "Pause", article: "die", spanish: "recreo", category: "escuela" },
    { german: "Spielplatz", article: "der", spanish: "patio", category: "escuela" },
    { german: "Ball", article: "der", spanish: "pelota", category: "escuela" },
    { german: "Puppe", article: "die", spanish: "muñeca", category: "escuela" },
    { german: "Auto", article: "das", spanish: "coche", category: "escuela" },
    { german: "Zug", article: "der", spanish: "tren", category: "escuela" },
    { german: "Flugzeug", article: "das", spanish: "avión", category: "escuela" },
    { german: "Schiff", article: "das", spanish: "barco", category: "escuela" },
    { german: "Fahrrad", article: "das", spanish: "bicicleta", category: "escuela" },
    { german: "Roller", article: "der", spanish: "patinete", category: "escuela" },
    { german: "Drachen", article: "der", spanish: "cometa", category: "escuela" },
    { german: "Puzzle", article: "das", spanish: "puzzle", category: "escuela" },
    { german: "Spiel", article: "das", spanish: "juego", category: "escuela" },
    { german: "Karte", article: "die", spanish: "carta", category: "escuela" },
    { german: "Würfel", article: "der", spanish: "dado", category: "escuela" },
    { german: "Baustein", article: "der", spanish: "bloque", category: "escuela" },
    { german: "Malkasten", article: "der", spanish: "caja de pinturas", category: "escuela" },
    { german: "Pinsel", article: "der", spanish: "pincel", category: "escuela" },
    { german: "Farbe", article: "die", spanish: "color", category: "escuela" },
    { german: "Musik", article: "die", spanish: "música", category: "escuela" },
    { german: "Lied", article: "das", spanish: "canción", category: "escuela" },
    { german: "Instrument", article: "das", spanish: "instrumento", category: "escuela" },
    { german: "Gitarre", article: "die", spanish: "guitarra", category: "escuela" },
    { german: "Klavier", article: "das", spanish: "piano", category: "escuela" },
    { german: "Trommel", article: "die", spanish: "tambor", category: "escuela" },
    { german: "Flöte", article: "die", spanish: "flauta", category: "escuela" },
    { german: "Geige", article: "die", spanish: "violín", category: "escuela" },

    // Colores, números y tiempo (Colors, numbers and time) - 40 palabras
    { german: "Farbe", article: "die", spanish: "color", category: "varios" },
    { german: "Tag", article: "der", spanish: "día", category: "varios" },
    { german: "Nacht", article: "die", spanish: "noche", category: "varios" },
    { german: "Morgen", article: "der", spanish: "mañana", category: "varios" },
    { german: "Mittag", article: "der", spanish: "mediodía", category: "varios" },
    { german: "Abend", article: "der", spanish: "tarde", category: "varios" },
    { german: "Woche", article: "die", spanish: "semana", category: "varios" },
    { german: "Monat", article: "der", spanish: "mes", category: "varios" },
    { german: "Jahr", article: "das", spanish: "año", category: "varios" },
    { german: "Stunde", article: "die", spanish: "hora", category: "varios" },
    { german: "Minute", article: "die", spanish: "minuto", category: "varios" },
    { german: "Sekunde", article: "die", spanish: "segundo", category: "varios" },
    { german: "Frühling", article: "der", spanish: "primavera", category: "varios" },
    { german: "Sommer", article: "der", spanish: "verano", category: "varios" },
    { german: "Herbst", article: "der", spanish: "otoño", category: "varios" },
    { german: "Winter", article: "der", spanish: "invierno", category: "varios" },
    { german: "Geburtstag", article: "der", spanish: "cumpleaños", category: "varios" },
    { german: "Fest", article: "das", spanish: "fiesta", category: "varios" },
    { german: "Geschenk", article: "das", spanish: "regalo", category: "varios" },
    { german: "Party", article: "die", spanish: "fiesta", category: "varios" },
    { german: "Kerze", article: "die", spanish: "vela", category: "varios" },
    { german: "Kuchen", article: "der", spanish: "pastel", category: "varios" },
    { german: "Ballon", article: "der", spanish: "globo", category: "varios" },
    { german: "Stadt", article: "die", spanish: "ciudad", category: "varios" },
    { german: "Dorf", article: "das", spanish: "pueblo", category: "varios" },
    { german: "Straße", article: "die", spanish: "calle", category: "varios" },
    { german: "Weg", article: "der", spanish: "camino", category: "varios" },
    { german: "Brücke", article: "die", spanish: "puente", category: "varios" },
    { german: "Turm", article: "der", spanish: "torre", category: "varios" },
    { german: "Kirche", article: "die", spanish: "iglesia", category: "varios" },
    { german: "Laden", article: "der", spanish: "tienda", category: "varios" },
    { german: "Markt", article: "der", spanish: "mercado", category: "varios" },
    { german: "Park", article: "der", spanish: "parque", category: "varios" },
    { german: "Zoo", article: "der", spanish: "zoo", category: "varios" },
    { german: "Kino", article: "das", spanish: "cine", category: "varios" },
    { german: "Theater", article: "das", spanish: "teatro", category: "varios" },
    { german: "Museum", article: "das", spanish: "museo", category: "varios" },
    { german: "Bibliothek", article: "die", spanish: "biblioteca", category: "varios" },
    { german: "Krankenhaus", article: "das", spanish: "hospital", category: "varios" },
    { german: "Restaurant", article: "das", spanish: "restaurante", category: "varios" }
];

// Estado global de la aplicación
let appState = {
    currentWord: null,
    sessionCorrect: 0,
    sessionTotal: 0,
    currentStreak: 0,
    bestStreak: 0,
    wordProgress: {},
    activityLog: [],
    totalCorrect: 0,
    totalAttempts: 0,
    genderStats: {
        der: { correct: 0, total: 0 },
        die: { correct: 0, total: 0 },
        das: { correct: 0, total: 0 }
    }
};

// Logros disponibles
const achievements = [
    { id: 'first_word', icon: '🎯', name: 'Primera Palabra', desc: 'Responde correctamente', unlocked: false },
    { id: 'streak_5', icon: '🔥', name: 'Racha de 5', desc: '5 respuestas seguidas', unlocked: false },
    { id: 'streak_10', icon: '⚡', name: 'Racha de 10', desc: '10 respuestas seguidas', unlocked: false },
    { id: 'words_10', icon: '📚', name: 'Aprendiz', desc: 'Domina 10 palabras', unlocked: false },
    { id: 'words_25', icon: '🎓', name: 'Estudiante', desc: 'Domina 25 palabras', unlocked: false },
    { id: 'words_50', icon: '👨‍🎓', name: 'Experto', desc: 'Domina 50 palabras', unlocked: false },
    { id: 'words_100', icon: '🏆', name: 'Maestro', desc: 'Domina 100 palabras', unlocked: false },
    { id: 'perfect_10', icon: '💯', name: 'Perfección', desc: '10 respuestas perfectas', unlocked: false },
    { id: 'all_genders', icon: '🌟', name: 'Trilingüe', desc: 'Practica los 3 géneros', unlocked: false }
];

// Claves de almacenamiento y estado multiusuario
const STORAGE = {
    users: 'germanLearningUsers',
    currentUser: 'germanLearningCurrentUser',
    progressPrefix: 'germanLearningProgress_'
};

let users = [];
let currentUser = null;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadUsersAndInit();
    setupEventListeners();
    loadNewWord();
    updateUI();
});

// Configurar event listeners
function setupEventListeners() {
    // Navegación entre pestañas
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset && btn.dataset.tab) {
            btn.addEventListener('click', () => switchTab(btn.dataset.tab));
        }
    });

    // Botones de género
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', () => checkAnswer(btn.dataset.gender));
    });

    // Filtros de palabras
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterWords(btn.dataset.filter));
    });

    // Controles de usuario
    const userSelect = document.getElementById('user-select');
    const addUserBtn = document.getElementById('add-user-btn');
    const resetUserBtn = document.getElementById('reset-user-btn');
    const newUserInput = document.getElementById('new-user-name');

    if (userSelect) {
        userSelect.addEventListener('change', () => switchUser(userSelect.value));
    }
    if (addUserBtn) {
        addUserBtn.addEventListener('click', () => addNewUser(newUserInput.value.trim()));
    }
    if (resetUserBtn) {
        resetUserBtn.addEventListener('click', () => resetCurrentUserData());
    }

    // Ayuda (modal)
    const helpBtn = document.getElementById('help-btn');
    const helpModal = document.getElementById('help-modal');
    const helpClose = document.getElementById('help-close');
    const helpOk = document.getElementById('help-ok');
    const helpBackdrop = document.getElementById('help-backdrop');

    const openHelp = () => {
        if (!helpModal) return;
        helpModal.classList.remove('hidden');
        helpModal.setAttribute('aria-hidden', 'false');
    };
    const closeHelp = () => {
        if (!helpModal) return;
        helpModal.classList.add('hidden');
        helpModal.setAttribute('aria-hidden', 'true');
    };

    if (helpBtn) helpBtn.addEventListener('click', openHelp);
    if (helpClose) helpClose.addEventListener('click', closeHelp);
    if (helpOk) helpOk.addEventListener('click', closeHelp);
    if (helpBackdrop) helpBackdrop.addEventListener('click', closeHelp);

    // Atajos de teclado: 1=der, 2=die, 3=das
    document.addEventListener('keydown', (e) => {
        if (e.repeat) return;
        if (e.key === '1') {
            checkAnswer('der');
        } else if (e.key === '2') {
            checkAnswer('die');
        } else if (e.key === '3') {
            checkAnswer('das');
        }
    });
}

// Cambiar entre pestañas
function switchTab(tabName) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    const navBtn = document.querySelector(`[data-tab="${tabName}"]`);
    const tabEl = document.getElementById(tabName);
    if (navBtn) navBtn.classList.add('active');
    if (tabEl) tabEl.classList.add('active');
    
    if (tabName === 'stats') {
        updateStatsDisplay();
    } else if (tabName === 'progress') {
        updateProgressDisplay();
    }
}

// Inicializar progreso de palabras
function initializeWordProgress() {
    wordsDatabase.forEach(word => {
        if (!appState.wordProgress[word.german]) {
            appState.wordProgress[word.german] = {
                correct: 0,
                total: 0,
                lastSeen: null,
                mastery: 0
            };
        }
    });
}

// Sistema adaptativo de selección de palabras
function selectWord() {
    // Obtener palabras según nivel de dificultad adaptativo
    const weights = wordsDatabase.map(word => {
        const progress = appState.wordProgress[word.german];
        const mastery = progress.mastery;
        
        // Priorizar palabras con baja maestría
        if (mastery < 30) return 5; // Palabras nuevas o difíciles
        if (mastery < 60) return 3; // Palabras en aprendizaje
        if (mastery < 90) return 2; // Palabras casi dominadas
        return 1; // Palabras dominadas (repaso ocasional)
    });
    
    // Selección ponderada
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    
    for (let i = 0; i < wordsDatabase.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            return wordsDatabase[i];
        }
    }
    
    return wordsDatabase[0];
}

// Cargar nueva palabra
function loadNewWord() {
    appState.currentWord = selectWord();
    
    document.getElementById('current-word').textContent = appState.currentWord.german;
    document.getElementById('current-translation').textContent = `(${appState.currentWord.spanish})`;
    
    // Reiniciar botones
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect', 'disabled');
    });
    
    // Ocultar feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('show', 'success', 'error');
}

// Verificar respuesta
function checkAnswer(selectedGender) {
    const correctGender = appState.currentWord.article;
    const isCorrect = selectedGender === correctGender;
    
    // Actualizar estadísticas de sesión
    appState.sessionTotal++;
    appState.totalAttempts++;
    
    if (isCorrect) {
        appState.sessionCorrect++;
        appState.totalCorrect++;
        appState.currentStreak++;
        
        if (appState.currentStreak > appState.bestStreak) {
            appState.bestStreak = appState.currentStreak;
        }
    } else {
        appState.currentStreak = 0;
    }
    
    // Actualizar progreso de la palabra
    const wordProgress = appState.wordProgress[appState.currentWord.german];
    wordProgress.total++;
    if (isCorrect) {
        wordProgress.correct++;
    }
    wordProgress.lastSeen = Date.now();
    
    // Calcular maestría (0-100)
    if (wordProgress.total > 0) {
        const accuracy = wordProgress.correct / wordProgress.total;
        const consistencyBonus = Math.min(wordProgress.correct * 2, 30);
        wordProgress.mastery = Math.min(100, Math.round(accuracy * 70 + consistencyBonus));
    }
    
    // Actualizar estadísticas de género
    appState.genderStats[correctGender].total++;
    if (isCorrect) {
        appState.genderStats[correctGender].correct++;
    }
    
    // Niveles eliminados
    
    // Registrar actividad
    appState.activityLog.unshift({
        word: appState.currentWord.german,
        article: correctGender,
        spanish: appState.currentWord.spanish,
        correct: isCorrect,
        timestamp: Date.now()
    });
    
    // Limitar log a 50 entradas
    if (appState.activityLog.length > 50) {
        appState.activityLog = appState.activityLog.slice(0, 50);
    }
    
    // Verificar logros
    checkAchievements();
    
    // Mostrar feedback visual
    showFeedback(isCorrect, correctGender, selectedGender);
    
    // Guardar progreso
    saveProgress();
    
    // Actualizar UI
    updateSessionStats();
    
    // Cargar siguiente palabra después de un delay
    const delay = isCorrect ? 2000 : 4000;
    setTimeout(() => {
        loadNewWord();
    }, delay);
}

// Mostrar feedback visual
function showFeedback(isCorrect, correctGender, selectedGender) {
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.gender-btn');
    
    // Deshabilitar todos los botones
    buttons.forEach(btn => btn.classList.add('disabled'));
    
    // Marcar respuesta
    if (isCorrect) {
        const correctBtn = document.querySelector(`[data-gender="${correctGender}"]`);
        correctBtn.classList.add('correct');
        
        const messages = [
            '¡Excelente! 🎉',
            '¡Muy bien! ⭐',
            '¡Perfecto! 🌟',
            '¡Correcto! ✨',
            '¡Genial! 🎯',
            '¡Fantástico! 💫'
        ];
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
        feedback.classList.add('success');
    } else {
        const incorrectBtn = document.querySelector(`[data-gender="${selectedGender}"]`);
        const correctBtn = document.querySelector(`[data-gender="${correctGender}"]`);
        
        incorrectBtn.classList.add('incorrect');
        correctBtn.classList.add('correct');
        
        feedback.textContent = `No exactamente. Es "${correctGender}" 📝`;
        feedback.classList.add('error');
    }
    
    feedback.classList.add('show');
}

// Actualizar estadísticas de sesión
function updateSessionStats() {
    document.getElementById('session-correct').textContent = appState.sessionCorrect;
    document.getElementById('session-total').textContent = appState.sessionTotal;
    
    const accuracy = appState.sessionTotal > 0 
        ? Math.round((appState.sessionCorrect / appState.sessionTotal) * 100)
        : 100;
    document.getElementById('session-accuracy').textContent = accuracy + '%';
    
    document.getElementById('streak-count').textContent = appState.currentStreak;
    
    // Progreso de la sesión: porcentaje de aciertos
    const bar = document.getElementById('session-progress');
    if (bar) {
        const sessionProgress = appState.sessionTotal > 0 ? Math.round((appState.sessionCorrect / appState.sessionTotal) * 100) : 0;
        bar.style.width = sessionProgress + '%';
    }
}

// Actualizar nivel adaptativo
// Eliminado sistema de niveles

// Mostrar notificación de subida de nivel
// (sin niveles)

// Verificar y desbloquear logros
function checkAchievements() {
    const masteredWords = Object.values(appState.wordProgress).filter(p => p.mastery >= 80).length;
    
    const achievementChecks = {
        'first_word': appState.totalCorrect >= 1,
        'streak_5': appState.currentStreak >= 5,
        'streak_10': appState.currentStreak >= 10,
        'words_10': masteredWords >= 10,
        'words_25': masteredWords >= 25,
        'words_50': masteredWords >= 50,
        'words_100': masteredWords >= 100,
        'perfect_10': appState.sessionCorrect >= 10 && appState.sessionCorrect === appState.sessionTotal,
        'all_genders': appState.genderStats.der.total > 0 && 
                      appState.genderStats.die.total > 0 && 
                      appState.genderStats.das.total > 0
    };
    
    achievements.forEach(achievement => {
        if (!achievement.unlocked && achievementChecks[achievement.id]) {
            achievement.unlocked = true;
            showAchievementUnlocked(achievement);
        }
    });
}

// Mostrar notificación de logro desbloqueado
function showAchievementUnlocked(achievement) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = `🏆 ¡Logro desbloqueado: ${achievement.name}! ${achievement.icon}`;
    feedback.classList.add('success', 'show');
    
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 3000);
}

// Actualizar display de estadísticas
function updateStatsDisplay() {
    const masteredWords = Object.values(appState.wordProgress).filter(p => p.mastery >= 80).length;
    
    document.getElementById('total-words-learned').textContent = masteredWords;
    document.getElementById('total-correct').textContent = appState.totalCorrect;
    document.getElementById('best-streak').textContent = appState.bestStreak;
    
    const overallAccuracy = appState.totalAttempts > 0 
        ? Math.round((appState.totalCorrect / appState.totalAttempts) * 100)
        : 0;
    document.getElementById('overall-accuracy').textContent = overallAccuracy + '%';
    
    // Estadísticas por género
    ['der', 'die', 'das'].forEach(gender => {
        const stats = appState.genderStats[gender];
        const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        
        document.getElementById(`${gender}-accuracy`).textContent = accuracy + '%';
        document.getElementById(`${gender}-progress`).style.width = accuracy + '%';
    });
    
    // Log de actividad
    updateActivityLog();
}

// Actualizar log de actividad
function updateActivityLog() {
    const logContainer = document.getElementById('activity-log');
    
    if (appState.activityLog.length === 0) {
        logContainer.innerHTML = '<p style="text-align: center; color: #64748b;">Aún no hay actividad registrada</p>';
        return;
    }
    
    logContainer.innerHTML = appState.activityLog.slice(0, 20).map(activity => {
        const date = new Date(activity.timestamp);
        const timeStr = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div class="activity-item">
                <div>
                    <span class="activity-word">${activity.article} ${activity.word}</span>
                    <span style="color: #64748b; font-size: 0.9em;"> - ${activity.spanish}</span>
                    <div style="font-size: 0.8em; color: #94a3b8; margin-top: 5px;">${timeStr}</div>
                </div>
                <span class="activity-result ${activity.correct ? 'correct' : 'incorrect'}">
                    ${activity.correct ? '✓ Correcto' : '✗ Incorrecto'}
                </span>
            </div>
        `;
    }).join('');
}

// Actualizar display de progreso
function updateProgressDisplay() {
    updateAchievements();
    updateWordsList('all');
}

// Actualizar logros
function updateAchievements() {
    const grid = document.getElementById('achievements-grid');
    
    grid.innerHTML = achievements.map(achievement => `
        <div class="achievement-item ${achievement.unlocked ? 'unlocked' : ''}">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.desc}</div>
        </div>
    `).join('');
}

// Actualizar lista de palabras
function updateWordsList(filter) {
    const list = document.getElementById('words-list');
    
    let filteredWords = wordsDatabase;
    
    if (filter === 'mastered') {
        filteredWords = wordsDatabase.filter(w => appState.wordProgress[w.german].mastery >= 80);
    } else if (filter === 'learning') {
        filteredWords = wordsDatabase.filter(w => {
            const m = appState.wordProgress[w.german].mastery;
            return m > 0 && m < 80;
        });
    } else if (filter === 'new') {
        filteredWords = wordsDatabase.filter(w => appState.wordProgress[w.german].total === 0);
    }
    
    if (filteredWords.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #64748b; grid-column: 1/-1;">No hay palabras en esta categoría</p>';
        return;
    }
    
    list.innerHTML = filteredWords.map(word => {
        const progress = appState.wordProgress[word.german];
        const mastery = progress.mastery;
        
        let status = 'new';
        if (mastery >= 80) status = 'mastered';
        else if (mastery > 0) status = 'learning';
        
        return `
            <div class="word-item ${status}" data-gender="${word.article}">
                <div class="word-german">${word.article} ${word.german}</div>
                <div class="word-spanish">${word.spanish}</div>
                <div class="word-stats">
                    <span>✓ ${progress.correct}/${progress.total}</span>
                    <span>${mastery}% 📊</span>
                </div>
            </div>
        `;
    }).join('');
}

// Filtrar palabras
function filterWords(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    updateWordsList(filter);
}

// Guardar progreso en localStorage
function saveProgress() {
    saveProgressForUser(currentUser);
}

// Cargar progreso desde localStorage
function loadProgress() {
    // Mantenido por compatibilidad: delega al sistema multiusuario si existe usuario
    if (currentUser) {
        loadProgressForUser(currentUser);
        return;
    }
}

// Actualizar UI inicial
function updateUI() {
    updateSessionStats();
}

// -----------------
// Multiusuario
// -----------------

function loadUsersAndInit() {
    users = loadUsersList();
    if (!users || users.length === 0) {
        users = ['Usuario 1'];
        saveUsersList(users);
    }

    const storedCurrent = localStorage.getItem(STORAGE.currentUser);
    currentUser = storedCurrent && users.includes(storedCurrent) ? storedCurrent : users[0];
    localStorage.setItem(STORAGE.currentUser, currentUser);

    populateUserSelect();
    loadProgressForUser(currentUser);
    initializeWordProgress();
    // niveles eliminados
}

function loadUsersList() {
    try {
        const raw = localStorage.getItem(STORAGE.users);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveUsersList(list) {
    localStorage.setItem(STORAGE.users, JSON.stringify(list));
}

function populateUserSelect() {
    const sel = document.getElementById('user-select');
    if (!sel) return;
    sel.innerHTML = users.map(u => `<option value="${u}">${u}</option>`).join('');
    sel.value = currentUser;
}

function switchUser(userName) {
    if (!userName || userName === currentUser) return;
    // Guardar progreso del usuario actual
    saveProgressForUser(currentUser);
    // Cambiar usuario
    currentUser = userName;
    localStorage.setItem(STORAGE.currentUser, currentUser);
    // Cargar progreso del nuevo usuario
    loadProgressForUser(currentUser);
    initializeWordProgress();
    // niveles eliminados
    // Reiniciar stats de sesión
    appState.sessionCorrect = 0;
    appState.sessionTotal = 0;
    appState.currentStreak = 0;
    // Actualizar UI y palabra
    updateUI();
    loadNewWord();
}

function addNewUser(name) {
    if (!name) return;
    if (users.includes(name)) {
        // Seleccionar si ya existe
        switchUser(name);
        populateUserSelect();
        const input = document.getElementById('new-user-name');
        if (input) input.value = '';
        return;
    }
    users.push(name);
    saveUsersList(users);
    // Inicializar progreso por defecto para el nuevo usuario
    const defaultData = getDefaultProgressData();
    localStorage.setItem(STORAGE.progressPrefix + name, JSON.stringify(defaultData));
    // Cambiar a ese usuario
    switchUser(name);
    populateUserSelect();
    const input = document.getElementById('new-user-name');
    if (input) input.value = '';
}

function resetCurrentUserData() {
    if (!currentUser) return;
    const confirmReset = window.confirm ? window.confirm('¿Reiniciar el progreso de este usuario?') : true;
    if (!confirmReset) return;
    const defaultData = getDefaultProgressData();
    localStorage.setItem(STORAGE.progressPrefix + currentUser, JSON.stringify(defaultData));
    loadProgressForUser(currentUser);
    initializeWordProgress();
    // niveles eliminados
    // Reiniciar stats de sesión
    appState.sessionCorrect = 0;
    appState.sessionTotal = 0;
    appState.currentStreak = 0;
    updateUI();
    loadNewWord();
}

function getDefaultProgressData() {
    const base = {
        wordProgress: {},
        totalCorrect: 0,
        totalAttempts: 0,
        bestStreak: 0,
        // sin niveles
        genderStats: {
            der: { correct: 0, total: 0 },
            die: { correct: 0, total: 0 },
            das: { correct: 0, total: 0 }
        },
        activityLog: [],
        achievements: achievements.map(a => ({ id: a.id, unlocked: false }))
    };
    // Asegurar estructura de progreso de palabras
    wordsDatabase.forEach(word => {
        base.wordProgress[word.german] = { correct: 0, total: 0, lastSeen: null, mastery: 0 };
    });
    return base;
}

function loadProgressForUser(userName) {
    try {
        const raw = localStorage.getItem(STORAGE.progressPrefix + userName);
        let data = raw ? JSON.parse(raw) : null;
        if (!data) {
            data = getDefaultProgressData();
        }
        appState.wordProgress = data.wordProgress || {};
        appState.totalCorrect = data.totalCorrect || 0;
        appState.totalAttempts = data.totalAttempts || 0;
        appState.bestStreak = data.bestStreak || 0;
        // sin niveles
        appState.genderStats = data.genderStats || {
            der: { correct: 0, total: 0 },
            die: { correct: 0, total: 0 },
            das: { correct: 0, total: 0 }
        };
        appState.activityLog = data.activityLog || [];
        // Sincronizar logros
        const savedAch = data.achievements || [];
        achievements.forEach(a => {
            const found = savedAch.find(s => s.id === a.id);
            a.unlocked = !!(found && found.unlocked);
        });
    } catch (e) {
        console.error('Error loading user progress:', e);
    }
}

function saveProgressForUser(userName) {
    if (!userName) return;
    const dataToSave = {
        wordProgress: appState.wordProgress,
        totalCorrect: appState.totalCorrect,
        totalAttempts: appState.totalAttempts,
        bestStreak: appState.bestStreak,
        level: appState.level,
        genderStats: appState.genderStats,
        activityLog: appState.activityLog,
        achievements: achievements.map(a => ({ id: a.id, unlocked: a.unlocked }))
    };
    localStorage.setItem(STORAGE.progressPrefix + userName, JSON.stringify(dataToSave));
}

