import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import WaitingListModal from '@/components/WaitingListModal';

const PrivateVsGroupToursArticle = () => {
  const { i18n } = useTranslation();
  const es = i18n.language === 'es';

  const openWaitingList = () => {
    window.dispatchEvent(new Event('open-waitlist-modal'));
  };

  return (
    <>
      <Helmet>
        <title>Private Wine Tours vs Group Tours: What's the Difference? | The Wine Trips</title>
        <meta name="description" content="Choosing between a private wine tour and a group tour? We break down the real differences in access, experience, cost, and depth — and explain why the world's best wine regions reward those who visit them the right way." />
        <meta name="keywords" content="private wine tours vs group tours, luxury wine travel, small group wine tours, bordeaux private tours, wine tour comparison, curated wine experiences, wine travel guide" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://thewinetrips.com/journal/private-wine-tours-vs-group-tours" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://thewinetrips.com/journal/private-wine-tours-vs-group-tours" />
        <meta property="og:title" content="Private Wine Tours vs Group Tours: What's the Difference? | The Wine Trips" />
        <meta property="og:description" content="Choosing between a private wine tour and a group tour? We break down the real differences in access, experience, cost, and depth." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/journal/private-wine-tours-vs-group-tours" />
        <meta property="twitter:title" content="Private Wine Tours vs Group Tours: What's the Difference? | The Wine Trips" />
        <meta property="twitter:description" content="Choosing between a private wine tour and a group tour? We break down the real differences in access, experience, cost, and depth." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      <div className="bg-[#f9f7f4] min-h-screen font-['Jost'] text-[#1a1f2e]">
        
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 w-full z-20 p-6">
          <Link to="/journal" className="inline-flex items-center gap-2 text-white/80 hover:text-[#c9a96e] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs font-bold">{es ? "Volver al Journal" : "Back to Journal"}</span>
          </Link>
        </nav>

        {/* Hero Section */}
        <header className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1698904738835-51c949c1cbaa" 
              alt="Luxury wine estate vineyard landscape" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1a1f2e]/90"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block py-1 px-3 border border-[#c9a96e]/50 text-[#c9a96e] text-[10px] font-bold tracking-[0.2em] uppercase mb-6 bg-black/30 backdrop-blur-sm">
                {es ? "Cultura del Vino" : "Wine Education"}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] text-white leading-tight font-light mb-6">
                {es ? <>Tours de vino privados vs. en grupo:<br />¿cuál es la diferencia?</> : <>Private Wine Tours vs Group Tours:<br />What's the Difference?</>}
              </h1>
            </motion.div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-[780px] mx-auto px-6 -mt-20 relative z-10">
          
          {/* Metadata Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-6 shadow-xl rounded-sm flex flex-wrap justify-between items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider border-t-4 border-[#c9a96e] mb-12"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#c9a96e]" />
              <span>{es ? "5 de abril de 2024" : "April 5, 2024"}</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c9a96e]" />
              <span>{es ? "8 min de lectura" : "8 min read"}</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#c9a96e]" />
              <span>The Wine Trips</span>
            </div>
          </motion.div>

          {/* Body Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="prose prose-lg max-w-none font-light leading-relaxed text-[#1a1f2e]"
          >
            <p className="text-xl font-['Cormorant_Garamond'] italic text-gray-600 mb-8 border-l-2 border-[#c9a96e] pl-6 py-2">
              {es ? '"Cómo visitás una región de vino determina qué ves. La diferencia entre un tour en micro y un viaje privado no es solo el precio: es la diferencia entre ver la etiqueta y saborear la historia."' : '"How you visit a wine region determines what you see. The difference between a bus tour and a private journey isn\'t just price—it\'s the difference between seeing the label and tasting the history."'}
            </p>

            <p className="mb-6">
              {es ? "Al planificar un viaje a Bordeaux, la Toscana o Napa, la abundancia de opciones puede abrumar. ¿Reservás el gran tour en micro que promete cinco bodegas en un día? ¿Contratás un chofer privado? ¿O te sumás a un grupo pequeño y a medida?" : "When planning a trip to Bordeaux, Tuscany, or Napa, the abundance of options can be overwhelming. Do you book the large coach tour that promises five wineries in a day? Do you hire a private driver? Or do you join a small, curated group?"}
            </p>
            <p className="mb-6">
              {es ? 'La industria suele ocultar la realidad de estas experiencias. "Grupo pequeño" puede significar 25 personas. "Acceso privado" puede significar una sala de cata separada, no un encuentro con el enólogo. Acá tenés un análisis honesto de las concesiones, las ventajas y las realidades de cómo podés vivir el país del vino.' : 'The industry often obscures the reality of these experiences. "Small group" can mean 25 people. "Private access" can mean a separate tasting room, not a meeting with the winemaker. Here is an honest breakdown of the trade-offs, advantages, and realities of how you can experience wine country.'}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La cuestión del acceso: ¿quién te abre la puerta?" : "The Access Question: Who Opens the Door?"}</h2>
            <p className="mb-6">
              {es ? "Este es el mayor diferenciador. Las fincas de primer nivel en regiones como Borgoña o el Piamonte simplemente no aceptan grupos grandes. Sus bodegas son pequeñas, su personal es limitado y su foco está en la intimidad." : "This is the single biggest differentiator. Top-tier estates in regions like Burgundy or Piedmont simply do not accept large groups. Their cellars are small, their staff is limited, and their focus is on intimacy."}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "La realidad del tour en grupo" : "The Group Tour Reality"}</h3>
            <p className="mb-4">
              {es ? 'Los tours grandes están limitados a instalaciones grandes. Vas a visitar bodegas diseñadas para el turismo, con estacionamientos para micros y "barras de cata" designadas. Estas fincas suelen ser hermosas, pero la experiencia está estandarizada. Estás viendo el showroom, no el taller.' : 'Large tours are restricted to large facilities. You will visit wineries that are designed for tourism, with parking lots for buses and designated "tasting bars." These estates are often beautiful, but the experience is standardized. You are seeing the showroom, not the workshop.'}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "La realidad privada" : "The Private Reality"}</h3>
            <p className="mb-8">
              {es ? "Un grupo privado o ultra reducido (4 a 8 personas) puede colarse por la puerta lateral. Podemos visitar al enólogo que trabaja desde su garaje en Barolo, o el château Grand Cru Classé de Bordeaux que requiere una carta de presentación personal. La persona que te sirve el vino suele ser la que lo hizo, o un familiar." : "A private or ultra-small group (4-8 people) can slip through the side door. We can visit the winemaker who works out of his garage in Barolo, or the Grand Cru Classé château in Bordeaux that requires a personal letter of introduction. The person pouring your wine is often the person who made it, or a family member."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La experiencia de cata: volumen vs. profundidad" : "The Tasting Experience: Volume vs Depth"}</h2>
            <p className="mb-6">
              {es ? 'En el turismo del vino, cantidad no es lo mismo que calidad. Muchos tours comerciales publicitan "¡5 bodegas en un día!". Los enófilos experimentados saben que esa es una receta para la fatiga del paladar y la superficialidad.' : 'Quantity does not equal quality in wine tourism. Many commercial tours advertise "5 Wineries in One Day!" Experienced oenophiles know this is a recipe for palate fatigue and superficiality.'}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? 'El "tomar y salir corriendo"' : "The 'Drink and Dash'"}</h3>
            <p className="mb-4">
              {es ? "En un tour en grupo estándar, el cronograma es rígido. Llegás, te sirven tres copas estándar, tenés 15 minutos para comprar una botella y subís al micro. Rara vez hay tiempo para que el vino se abra en la copa, ni hablar de una conversación sobre tipos de suelo o variación entre añadas." : "On a standard group tour, the schedule is rigid. You arrive, you get three standard pours, you have 15 minutes to buy a bottle, and you board the bus. There is rarely time for the wine to open up in the glass, let alone for a discussion about soil types or vintage variation."}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "El enfoque de clase magistral" : "The Masterclass Approach"}</h3>
            <p className="mb-8">
              {es ? "Un viaje a medida se concentra en 2 o 3 fincas por día. Eso permite una caminata por el viñedo para conocer el terroir. Permite una cata de barrica para entender el proceso de crianza. Y, lo más importante, permite una cata vertical (probar el mismo vino de distintos años) o una cata horizontal (probar distintos viñedos del mismo año). Acá es donde sucede el aprendizaje." : "A curated journey focuses on 2 or 3 estates per day. This allows for a vineyard walk to see the terroir. It allows for a barrel tasting to understand the aging process. Most importantly, it allows for a vertical tasting (trying the same wine from different years) or a horizontal tasting (trying different vineyards from the same year). This is where education happens."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La cuestión del ritmo: horarios vs. experiencias" : "The Pace Question: Schedules vs Experiences"}</h2>
            <p className="mb-6">
              {es ? "El país del vino está hecho para ir despacio. Es agrícola. Está gobernado por el sol y las estaciones." : "Wine country is meant to be slow. It is agricultural. It is governed by the sun and the seasons."}
            </p>
            <p className="mb-8">
              {es ? "Los tours en grupo funcionan con tiempo industrial: salidas estrictas y bloques rígidos. El viaje privado funciona con tiempo agrícola. Si la charla con el enólogo es fascinante, nos quedamos. Si el almuerzo en la terraza es perfecto y el sol brilla, pedimos otra botella. El lujo de un tour privado es el lujo de la autonomía." : "Group tours operate on industrial time: strict departures and rigid blocks. Private travel operates on agricultural time. If the conversation with the winemaker is fascinating, we stay. If the lunch on the terrace is perfect and the sun is shining, we order another bottle. The luxury of a private tour is the luxury of autonomy."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La cuestión de la gente: con quién viajás" : "The People Question: Who You Travel With"}</h2>
            <p className="mb-6">
              {es ? "El vino es social. Las personas con las que compartís una botella moldean el recuerdo de esa botella." : "Wine is social. The people you share a bottle with shape the memory of that bottle."}
            </p>
            <p className="mb-8">
              {es ? "En un grupo grande, quedás sujeto a la lotería de los desconocidos. En un tour privado, estás con tu círculo elegido. En nuestros grupos pequeños y a medida (exclusivos de The Wine Trips), seleccionamos con cuidado a los huéspedes para garantizar un grupo de entusiastas afines: personas que están ahí por el vino, no solo por la fiesta." : "In a large group, you are subject to the lottery of strangers. In a private tour, you are with your chosen circle. In our small curated groups (The Wine Trips exclusives), we carefully vet guests to ensure a group of like-minded enthusiasts—people who are there for the wine, not just the buzz."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La cuestión del costo: ¿qué estás comparando realmente?" : "The Cost Question: What Are You Actually Comparing?"}</h2>
            <p className="mb-6">
              {es ? "Es común sorprenderse con el precio. Un tour privado de un día puede costar 3 o 4 veces lo que cuesta una entrada en grupo. Pero la comparación está mal planteada." : "Sticker shock is common. A private day tour can cost 3x or 4x what a group ticket costs. But the comparison is flawed."}
            </p>
            <p className="mb-8">
              {es ? <>Una entrada en grupo te compra transporte y acceso de ingreso. Una inversión privada te compra <em>acceso</em> de verdad. Te compra vinos que no están abiertos al público (muchas veces de cientos de dólares la botella). Te compra el tiempo de expertos. Cuando tenés en cuenta el valor de los vinos catados y la exclusividad de la experiencia, la propuesta de valor del viaje privado suele superar a la del tour estándar.</> : <>A group ticket buys you transportation and entry. A private investment buys you <em>access</em>. It buys you wines that are not open to the public (often worth hundreds of dollars per bottle). It buys you the time of experts. When you factor in the value of the wines tasted and the exclusivity of the experience, the value proposition of private travel often exceeds that of the standard tour.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Para quién es ideal cada enfoque" : "Who Each Approach Is Right For"}</h2>
            <ul className="list-disc pl-5 space-y-4 mb-8 marker:text-[#c9a96e]">
              <li>{es ? <><strong>Elegí un tour en grupo si:</strong> recién empezás en el mundo del vino, tenés un presupuesto ajustado, querés conocer a mucha gente nueva y te alcanza con ver los "grandes éxitos" de una región sin necesitar un detalle técnico profundo.</> : <><strong>Choose a Group Tour If:</strong> You are new to wine, you are on a strict budget, you want to meet a lot of new people, and you are happy seeing the "greatest hits" of a region without needing deep technical detail.</>}</li>
              <li>{es ? <><strong>Elegí un viaje privado o a medida si:</strong> coleccionás vino, querés comprar botellas que no se consiguen en casa, te importan el terroir y la historia, o simplemente valorás tu tiempo y tu privacidad por encima de todo.</> : <><strong>Choose a Private/Curated Journey If:</strong> You collect wine, you want to buy bottles that aren't available at home, you care about terroir and history, or you simply value your time and privacy above all else.</>}</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La ventaja del grupo pequeño en The Wine Trips" : "The Small Group Advantage at The Wine Trips"}</h2>
            <p className="mb-8">
              {es ? 'Creemos que hay un camino intermedio. Nuestros viajes en grupo pequeño tienen un tope de 8 huéspedes. Este es el "número mágico": lo bastante chico como para sentarse a la mesa de un enólogo y entrar en un solo vehículo, pero lo bastante grande como para crear el ambiente vibrante de una cena entre amigos. Nos permite abrir las puertas de fincas privadas mientras compartimos el costo de ese acceso entre unos pocos amigos selectos.' : 'We believe there is a middle path. Our small group journeys are capped at 8 guests. This is the "magic number"—small enough to fit at a winemaker\'s dining table and fit into a single vehicle, but large enough to create a vibrant dinner party atmosphere. It allows us to unlock the doors of private estates while sharing the cost of that access among a few select friends.'}
            </p>

          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-16 border-2 border-[#c9a96e] p-8 md:p-12 text-center bg-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent opacity-50"></div>
            
            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">{es ? "Viví la diferencia" : "Experience the Difference"}</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              {es ? "De 4 a 8 huéspedes. Acceso a fincas privadas. Itinerarios a medida diseñados en torno a lo mejor que ofrece cada región en el momento en que la visitás. Sumate a la lista de espera para nuestras próximas salidas." : "4 to 8 guests. Private estate access. Curated itineraries designed around the best each region offers at the moment you visit. Join the waiting list for our next departures."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                {es ? "Ver nuestras experiencias" : "View Our Experiences"}
              </Link>
              <button
                onClick={openWaitingList}
                className="px-8 py-3 border border-[#1a1f2e] text-[#1a1f2e] text-xs font-bold tracking-widest uppercase hover:bg-[#1a1f2e] hover:text-white transition-colors duration-300"
              >
                {es ? "Unite a la lista de espera" : "Join the Waiting List"}
              </button>
            </div>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {(es ? ['Viajes de Vino', 'Tours Privados', 'Viajes en Grupo Reducido', 'Turismo del Vino', 'Bordeaux', 'Cómo Hacerlo', 'Experiencia de Vino', 'Viajes de Lujo'] : ['Wine Travel', 'Private Tours', 'Small Group Travel', 'Wine Tourism', 'Bordeaux', 'How To', 'Wine Experience', 'Luxury Travel']).map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-[#c9a96e] text-[10px] font-bold tracking-widest uppercase hover:bg-[#c9a96e] hover:text-white transition-colors cursor-default">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

        </article>

        {/* Related Articles */}
        <section className="bg-white py-20 px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-center text-2xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-12">
              {es ? "Artículos relacionados" : "Related Articles"}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <Link to="/journal/best-time-visit-europe-wine-regions" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1669667867723-1e5dd1e8fec5" 
                      alt="Seasonal vineyard landscape" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Cultura del Vino" : "Wine Education"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "La mejor época para visitar las regiones de vino de Europa" : "The Best Time to Visit Europe's Wine Regions"}
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      {es ? "Leer más" : "Read More"} <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>

              {/* Card 2 */}
              <Link to="/journal/how-to-visit-bordeaux-chateaux-insider-guide" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1700593739220-a4ed2b998156" 
                      alt="Bordeaux chateau barrel room" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Guía de Viaje" : "Travel Guide"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "Cómo visitar los châteaux de Bordeaux: la guía del conocedor" : "How to Visit Bordeaux Châteaux: The Insider Guide"}
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      {es ? "Leer más" : "Read More"} <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>
            </div>
          </div>
        </section>

        <WaitingListModal />
      </div>
    </>
  );
};

export default PrivateVsGroupToursArticle;