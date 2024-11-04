
const departamentos = {
            
    "Amazonas": ["Leticia", "El Encanto", "La Chorrera", "La Pedrera","La Victoria",  "Miriti-Parana", 
    "Puerto alegria", "Puerto Arica", "Puerto Nariño", "Puero santander","Tarapaca"], 

    "Antioquia": ["Medellin", "Abejorral", "Abriaquí", "Alejandría", "Amagá", "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí",
    "Anza", "Apartadó", "Arboletes", "Argelia", "Armenia", "Barbosa", "Bello", "Belmira", "Betania", "Betulia",
    "Briceño", "Buriticá", "Cáceres", "Caicedo", "Caldas", "Campamento", "Cañasgordas", "Caracolí", "Caramanta", "Carepa",
    "Carolina", "Caucasia", "Chigorodó", "Cisneros", "Ciudad Bolívar", "Cocorná", "Concepción", "Concordia", "	Copacabana", "Dabeiba",
    "Don Matías", "Ebéjico", "El Bagre", "El Carmen de Viboral", "El Peñol", "El Retiro", "El Santuario", "Entrerrios", "Envigado", "Fredonia",
    "Frontino", "Giraldo", "Girardota", "Gómez Plata", "Granada", "Guadalupe", "Guarne", "Guatapé", "Heliconia", "Hispania",
    "Itagui", "Ituango", "Jardín", "Jericó", "La Ceja", "La Estrella", "La Pintada", "La Unión", "Liborina", "Maceo",
    "Marinilla", "Montebello", "Murindó", "Mutatá", "Nariño", "Nechí", "Necoclí", "Olaya", "Peque", "Pueblorrico",
    "Puerto Berrío", "Puerto Nare", "Puerto Triunfo", "Remedios", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar", "San Andrés de Cuerquía", "San Carlos",
    "San Francisco", "San Jerónimo", "San José de La Montaña", "San Juan de Urabá", "San Luis", "San Pedro", "San Pedro de Uraba", "San Rafael", "San Roque", "San Vicente",
    "Santa Bárbara", "	Santa Rosa de Osos", "Santafé de Antioquia", "Santo Domingo", "Segovia", "Sonson", "Sopetrán", "9	Támesis", "Tarazá", "Tarso",
    "Titiribí", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí", "Venecia", "Vigía del Fuerte",
    "Yalí", "	Yarumal", "Yolombó", "Yondó", "Zaragoza"],

    "Arauca":["Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rodón", "Saravena", "Tame"],

    "Atlántico":["Barranquilla", "Baranoa", "Campo de la Cruz", "Candelaria", "Galapa", "Juan de Acosta", "Luruaco", "Malambo", "Manatí", "Palmar de Varela",
    "Piojó", "Polonuevo", "Ponedera", "Puerto Colombia", "Repelón", "Sabanagrande", "Sabanalarga", "Santa Lucía", "Santo Tomás", "Soledad",
    "Suán", "Tubará", "Usiacurí"],

    
    "Bolivar": ["Cartagena", "Achí", "Altos del Rosario", "Arenal",
    "Arjona", "Arroyohondo", "Barranco de Loba", "Brazuelo de Papayal", "Calamar", "Cantagallo", "El Carmen de Bolívar", "El Carmen de Bolívar", "Cicuco", "Clemencia",
    "Córdoba", "El Guamo", "El Peñón", "Hatillo de Loba", "Magangué", "Mahates", "Margarita", "María La Baja", "Montecristo", "Morales",
    "Norosí", "Pinillos", "Regidor", "Río Viejo", "San Cristóbal", "San Estanislao", "San Fernando", "San Jacinto", "San Jacinto del Cauca", "San Juan Nepomuceno",
    "San Martín de Loba", "San Pablo", "Santa Catalina", "Santa Cruz de Mompox", "Santa Rosa", "Santa Rosa del Sur", "Simití", "Soplaviento", "Talaigua Nuevo", "Tiquisio",
    "Turbaco", "Turbaná", "Villanueva", "Zambrano"],

    "Boyacá":["Tunja", "Almeida", "Aquitania", "Arcabuco", "Belén", "Berbeo", "Betéitiva", "Boavita", "Boyacá", "Briceño",
    "Buenavista", "Busbanzá", "Caldas", "Campohermoso", "Cerinza", "Chinavita", "Chiquinquirá", "Chíquiza", "Chiscas", "Chita",
    "Chitaraque", "Chivatá", "Chivor", "Ciénega", "Cómbita", "Coper", "Corrales", "Covarachía", "Cubará", "Cucaita",
    "Cuítiva", "Duitama", "El Cocuy", "El Espino", "Firavitoba", "Floresta", "Gachantivá", "Gameza", "Garagoa", "Guacamayas",
    "Guateque", "	Guayatá", "Güicán", "Iza", "Jenesano", "Jericó", "La Capilla", "La Uvita", "La Victoria", "Labranzagrande",
    "Macanal", "Maripí", "Miraflores", "Mongua", "Monguí", "Moniquirá", "Motavita", "Muzo", "Nobsa", "Nuevo Colón",
    "Oicatá", "Otanche", "Pachavita", "Páez", "Paipa", "Pajarito", "Panqueba", "Pauna", "Paya","Paz de Río", "Pesca", "Pisba", 
    "Puerto Boyacá", "Quípama", "Ramiriquí", "	Ráquira", "Rondón", "Saboyá", "Sáchica", "Samacá", "San Eduardo", "San José de Pare", 
    "San Luis de Gaceno", "San Mateo", "San Miguel de Sema", "San Pablo de Borbur", "Santa María", "Santa Rosa de Viterbo", "Santa Sofía",
    "Santana", "Sativanorte", "Sativasur", "Siachoque", "Soatá", "Socha", "Socotá", "Sogamoso", "Somondoco", "Sora","Soracá", "Sotaquirá", 
    "Susacón", "Sutamarchán", "Sutatenza", "Tasco", "Tenza", "Tibaná", "Tibasosa", "Tinjacá","Tipacoque", "Toca", "Togüí", "Tópaga", "Tota",
    "Tununguá", "Turmequé", "Tuta", "Tutazá", "Umbita","Ventaquemada", "Villa de Leyva", "Viracachá", "Zetaquira"],

    "Caldas": ["Manizales", "Aguadas", "Anserma", "Aranzazu", "Belalcazar", "Chinchiná", "Filadelfia", "La Dorada", "La Merced", "Manzanares",
    "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pacora", "Palestina", "Pensilvania", "Riosucio", "Risaralda",
    "Salamina", "Samana", "San Jose", "Supía", "Victoria", "Villamaría", "Viterbo"],

    "Caquetá": ["Florencia", "Albania", " Cartagena del Chairá", "Curillo", "El Doncello", "El Paujil", "La Montañita", "Morelia", 
    "Puerto Milán", "Puerto Rico", "San José del Fragua", "San Vicente del Caguán", "Solano", "Solita", "Valparaíso"],

    "Casanare": ["Yopal", "Aguazul", "Chámeza", "Hato Corozal", "La Salina", "Maní", "Monterrey", "Nunchía", "Orocué", "Paz de Ariporo", 
    "Pore", "Recetor", "Sabanalarga", "Sácama", "San Luis de Palenque", "Támara", "Tauramena", "Trinidad", "Villanueva"],

    "Cauca": ["Popayán", "Almaguer", "Argelia", "Balboa", "Bolívar", "Buenos Aires", "Cajibio", "Caldono", "Caloto", "Corinto", "El Tambo", 
    "Florencia", "Guapi", "Inza", "Jambaló", "La Sierra", "La Vega", "López", "Mercaderes", "Miranda", "Morales", "Padilla", 
    "Páez", "Patia (El Bordo)", "Piamonte", "Piendamo",  "Puerto Tejada", "Purace", "Rosas", "San Sebastián", "Santa Rosa",
        "Santander de Quilichao", "Silvia", "Sotara", "Suárez", "Sucre", "Timbío", "Timbiquí", "Toribio", "Totoro", "Villa Rica"],

    "Cesar": ["Valledupar", "Aguachica", "Codazzi", "Astrea", "Becerril", "Bosconia", "Chimichagua", "Curumaní",
    "El Copey", "El Paso", "Gamarra", "González", "La Gloria", "La Jagua Ibirico", "Manaure Balcón Del Cesar", "Pailitas", "Pelaya", 
    "Pueblo Bello","Río De Oro", "Robles (La Paz)", "San Alberto", "San Diego", "San Martín", "Tamalameque"],

    "Chocó": ["Quibdó", " Acandi", "Alto Baudo (pie de pato)","Atrato", "Bagado", "Bahia Solano (mutis)", "Bajo Baudo (pizarro)", 
    "Bojaya (bellavista)", "Canton de San Pablo", "Carmen del Darien", "Certegui", "Condoto", "El Carmen", "Istmina", "Jurado", "Litoral del san juan",
    "Lloro","Medio Atrato", "Medio Baudo (boca de pepe)", "Medio San Juan", "Novita", "Nuqui", "Rio iro", "Rio Quito", "Riosucio", 
    "San Jose del Palmar","Sipi", "Tado", "Unguia", "Unión Panamericana"],

    "Córdoba": ["Montería", "Ayapel", "Buenavista", "Canalete", "Cereté", "Chima", "Chinú", "Cienaga De Oro", "Cotorra", "La Apartada", "Lorica",
    "Los Córdobas", "Momil", "Montelíbano",  "Moñitos", "Planeta Rica", "Pueblo Nuevo", "Puerto Escondido", "Puerto Libertador", 
    "Purísima","Sahagún", "San Andrés de Sotavento", "San Antero", "San Bernardo del Viento", "San Carlos", "San Pelayo", "Tierralta", 
    "Valencia"],

    "Cundinamarca": ["Bogotá_D.C","Agua de Dios", "Albán", "Anapoima", "Anolaima", "Apulo", "Arbeláez", "Beltrán", "Bituima", "Bojacá", "Cabrera",
    "Cachipay", "Cajicá", "Caparrapí", "Cáqueza", "Carmen de Carupa", "Chaguaní", "Chía", "Chipaque", "Choachí", 
    "Chocontá","Cogua", "Cota", "Cucunubá", "El Colegio", "El Peñón", "El Rosal", "Facatativá", "Fómeque", "Fosca", "Funza",
    "Fúquene", "Fusagasugá", "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Granada", "Guachetá", "Guaduas", "Guasca",
    "Guataquí","Guatavita", "Guayabal de Síquima", "Guayabetal", "Gutiérrez", "Jerusalén", "Junín", "La Calera", "La Mesa", "La Palma",
    "La Peña", "La Vega", "Lenguazaque", "Machetá", "Madrid", "Manta", "Medina", "Mosquera", "Nariño", "Nemocón", "Nilo", "Nimaima",
    "Nocaima", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pulí", "Quebradanegra", "Quetame", "Quipile",
    "Ricaurte","San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco", "San Juan de Rioseco", "Sasaima", 
    "Sesquilé", "Sibaté", "Silvania", "Simijaca", "Soacha", "Sopó", "Subachoque", "Suesca", "Supatá", "Susa", "Sutatausa", "Tabio",
    "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima", "Tocancipá", "Topaipí", "Ubalá", "Ubaque", "Ubaté", "Une", "Útica",
    "Venecia", "Vergara", "Vianí", "Villagómez", "Villapinzón", "Villeta", "Viotá", "Yacopí", "Zipacón", "Zipaquirá"],

    "Guainía": ["Inírida", "Barrancominas", "Cacahual", "La Guadalupe", "Mapiripana", "Morichal Nuevo", "Pana Pana", 
    "Puerto Colombia", "San Felipe"],

    "Guaviare": ["San Jose del Guaviare", "Calamar", "El Retorno", "Miraflorez"],

    "Huila": ["Neiva", "Acevedo", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", "Elías", "El Agrado","Garzón",
    "Gigante", "Guadalupe", "Hobo", "Íquira", "Isnos", "La Argentina", "La Plata", "Nátaga", "Oporapa", "Paicol", "Palermo", "Palestina",
    "Pital", "Pitalito", "Rivera", "Saladoblanco", "Santa María", "San Agustín", "Suaza", "Tarqui", "Tello", "Teruel", "Tesalia", "Timaná",
    "Villavieja", "Yaguará"], 

    "La Guajira": ["Riohacha","Albania", "Barrancas", "Dibulla", "Distracción", "El Molino", "Fonseca", "Hatonuevo", "La Jagua del Pilar", "Maicao", 
    "Manaure", "San Juan del Cesar", "Uribia", "Urumita", "Villanueva"],

    "Magdalena": ["Santa Martha", "Algarrobo", "Aracataca", "Ariguaní", "Cerro de San Antonio", "Chibolo", "Ciénaga", "Concordia", "El Banco",
    "El Piñon","El Retén", "Fundación", "Guamal", "Nueva Granada", "Pedraza", "Pijino del Carmen", "Pivijai", "Plato", "Pueblo Viejo", 
    "Remolino", "Sabanas de San Ángel", "Salamina", "San Sebastián de Buenavista", "Santa Ana", "Santa Bárbara de Pinto", "San Zenón", 
    "Sitionuevo", "Tenerife", "Zapayán", "Zona Bananera"],

    "Meta": ["Villavicencio", "Acacías", "Barranca de Upía", "Cabuyaro", "Castilla La Nueva", "	Cubarral", "Cumaral", "El Calvario", "El Castillo",
    "El Dorado","Fuente de Oro", "Granada", "Guamal", "La Macarena", "Lejanías", "Mapiripán", "Mesetas", "Puerto Concordia", "Puerto Gaitán", 
    "Puerto Lleras","Puerto López", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", "San Juan de Arama", "San Juanito", "San Martín", "Uribe", "Vista Hermosa"],

    "Nariño": ["Pasto", "Alban", "Aldaña", "Ancuya", "Arboleda", "Barbacoas", "Belen", "Buesaco", "Chachagui", "Colon(genova)","Consaca", 
    "Contadero", "Cordoba", "Cuaspud", "Cumbal", "Cumbitara", "El Charco", "El Peñol", "El Rosario", "El tablón", "El Tambo", "Funes", "Guachucal",
    "Guaitarilla", "Gualmatan", "Iles", "Imues", "Ipiales", "La Cruz", "La florida", "La llanada","La Tola", "La Unión", "Leiva", "Leiva", "Linares",
    "Los Andes", "Magui", "Mallama", "Mosquera", "Nariño", "Olaya Herrera", "Ospina", "Pizarro", "Policarpa", "Potosi", "Providencia", "Puerres", 
    "Pupiales", "Ricaurte", "Roberto Payan", "Samaniego", "San Bernardo", "San Lorenzo", "San Pablo", "Nariño", "San Pedro de Cartago", "Ospina", 
    "Sandona", "Santa Barbara", "Santacruz", "Sapuyes", "Taminango", "Tangua", "Tumaco", "Tuquerres", "Yacuanquer"],

    "Norte de Santander": ["Cucuta", "Ábrego", "Arboledas", "Bochalema", "Bochalema", "Cáchira", "Cácota", "Chinácota", "Chitagá", "",
    "Convención", "Cucutilla", "Durania", "El Carmen", "El Tarra", "El Zulia", "Gramalote", "Hacarí", "Herrán", "La Esperanza", "La Playa de Belén",
    "Labateca", "Los Patios", "	Lourdes", "Mutiscua", "Ocaña", "Pamplona", "Pamplonita", "Puerto Santander", "Ragonvalia", "Salazar de Las Palmas",
    "San Calixto", "San Cayetano", "Santiago", "Santo Domingo de Silos", "Sardinata", "Teorama", "Tibú", "Toledo", "Villa Caro", "Villa del Rosario"],

    "Putumayo": ["Mocoa", "Colón", "Orito", "Puerto Asís", "Puerto Caicedo", "Puerto Guzmán", "Puerto Leguízamo", "San Francisco", "San Miguel", 
    "Santiago", "Sibundoy", "Valle del Guamuez", "Villagarzón"],

    "Quindío": ["Armenia", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia", "Génova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya","Salento"],

    "Risaralda": ["Pereira", "Apía", "Balboa", "Belén de Umbría", "Dosquebradas", "Guática", "La Celia", "La Virginia", "Marsella", "Mistrató",
    "Pueblo Rico", "Quinchía", "Santa Rosa de Cabal", "Santuario"],

    "San Andrés y Providencia": ["San_Andrés"],

    "Santander": ["Bucaramanga", "Aguada", "Albania", "Aratoca", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bolívar", "Cabrera",
    " California", "Capitanejo", "Carcasí", "Cepitá", "Cerrito", "Charalá", "Charta", "Chima", "Chipatá", "Cimitarra", "Concepción", "Confines",
    "Contratación", "Coromoro", "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "Encino", "Enciso","Florián", "Floridablanca",
    "Galán", "Gámbita", "Girón", "Guaca", "Guadalupe", "Guapotá", "Guavatá", "Güepsa", "Hato","Jesús María", "Jordán", "La Belleza", "La Paz", "Landázuri",
    "Lebrija", "Los Santos", "Macaravita", "Málaga", "Matanza", "Mogotes", "Molagavita", " Ocamonte", "Oiba", "Onzaga", "Palmar", "Palmas del Socorro",
    "Páramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andrés", "San Benito", 
    "San Gil", "San Joaquín", "San José de Miranda", "San Miguel", "San Vicente de Chucurí", "Santa Bárbara", "Santa Helena del Opón", "Simacota",
    "Socorro", "Suaita", "Sucre", "Suratá", "Tona", "Valle de San José", "Vélez", "Vetas", "Villanueva", "Zapatoca"],

    "Sucre": ["Sincelejo", "Buenavista", "Caimito", "Chalán", "Colosó", "Corozal", "Coveñas", "El Roble", "Galeras", "Guaranda", "La Unión", 
    "Los Palmitos", "Majagual", "Morroa", "Ovejas", "Palmito", "Sampués", "San Benito Abad", "San Juan de Betulia", "San Marcos", "San Onofre", 
    "San Pedro", "Santiago de Tolú", "Sincé", "Sucre", "Tolúviejo"],

    "Tolima":["Ibagué", "Alpujarra", "Alvarado", "Ambalema", "Anzoátegui", "Armero guayabal", "Ataco", "cunday", "Cajamarca", "Carmen de Apicalá", "Casabianca",
    "Chaparral", "Coello", "Coyaima", "Dolores", "Espinal", "Falan", "Flandes", "Fresno ", "Guamo", "Herveo", "Honda", "Icononzo", "Lérida ", "Líbano",
    "Mariquita", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", "Planadas", "Prado", "Purificación", "Rioblanco", "Roncesvalles",
    "Rovira", "Saldaña", "San Antonio", "San Luis", "Santa Isabel", "Suárez", "Valle de San Juan", "Venadillo", "Villahermosa", "Villarrica"],

    "Valle del Cauca": ["Cali", "Alcalá", "Andalucía", "Ansermanuevo", "Argelia", "Bolívar", "Buenaventura", "Buga", "Bugalagrande", "Caicedonia",
    "Calima - El Darién", "Candelaria", "Cartago", "Dagua", "El Águila", "El Cairo", "El Cerrito", "El Dovio", "Florida", "Ginebra", "Guacarí", "Jamundí",
    "La Cumbre", "La Unión", "La Victoria", "Obando", "Palmira", "Pradera", "Restrepo", "Riofrío", "Roldanillo", "San Pedro", "Sevilla", "Toro", "Trujillo", 
    "Tuluá", "Ulloa", "Versalles", "Vijes", "Yotoco", "Yumbo", "Zarzal"],

    "Vaupés": ["Mitú", "Caruru", "Pacoa", "Taraira", "Papunaua", "Yavaraté"],

    "Vichada": ["Puerto Carreño", "Cumaribo", "La Primavera", "Santa Rosalía"],
    
    // Añade los demás departamentos y municipios
};


function actualizarMunicipios() {
    const departamento = document.getElementById("departamento").value;
    const municipiosSelect = document.getElementById("municipio");
    municipiosSelect.innerHTML = "";

    if (departamento) {
        departamentos[departamento].forEach(function(municipio) {
            const option = document.createElement("option");
            option.value = municipio;
            option.text = municipio;
            municipiosSelect.add(option);
        });
    }
}

function validar() {
    formulario.reset();
    
}
