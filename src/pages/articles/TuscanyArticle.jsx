import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import WaitingListModal from '@/components/WaitingListModal';

const TuscanyArticle = () => {
  const { i18n } = useTranslation();
  const es = i18n.language === 'es';

  const openWaitingList = () => {
    window.dispatchEvent(new Event('open-waitlist-modal'));
  };

  return (
    <>
      <Helmet>
        <title>Tuscany Wine Regions: Chianti, Brunello & the Supertuscans | The Wine Trips</title>
        <meta name="description" content="A complete guide to Tuscany's wine regions — from Chianti Classico's Sangiovese hillsides to Brunello di Montalcino's legendary aging cellars and the revolutionary Supertuscans of Bolgheri. Plan your perfect Tuscan wine journey." />
        <meta name="keywords" content="tuscany wine regions guide, chianti classico wine, brunello di montalcino, supertuscan wines, bolgheri wine, sangiovese italy, tuscany wine travel, visiting tuscany wineries" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
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
              src="https://images.unsplash.com/photo-1696260397199-258789095abe" 
              alt="Rolling Tuscan vineyard landscape at sunset" 
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
                {es ? "Guía de Región" : "Region Guide"}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] text-white leading-tight font-light mb-6">
                {es ? <>Las regiones de la Toscana:<br />Chianti, Brunello y los Supertoscanos</> : <>Tuscany Wine Regions:<br />Chianti, Brunello & the Supertuscans</>}
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
              <span>{es ? "1 de marzo de 2024" : "March 1, 2024"}</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c9a96e]" />
              <span>{es ? "11 min de lectura" : "11 min read"}</span>
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
              {es ? '"La Toscana no es un monolito. Es un mosaico de microclimas, suelos y tradiciones. Desde las alturas pedregosas del Chianti hasta la costa bañada por el sol de Bolgheri, la región ofrece una diversidad que rivaliza con cualquiera del mundo."' : '"Tuscany is not a monolith. It is a mosaic of micro-climates, soils, and traditions. From the stony heights of Chianti to the sun-baked coast of Bolgheri, the region offers a diversity that rivals any in the world."'}
            </p>

            <p className="mb-6">
              {es ? "Cuando pensamos en vino italiano, pensamos en la Toscana. La imagen es imborrable: caminos bordeados de cipreses, caseríos medievales de piedra y colinas onduladas cubiertas de viñedos. Pero debajo de esta perfección de postal yace una región vitivinícola seria y compleja que ha atravesado una revolución de calidad radical en los últimos 40 años." : "When we think of Italian wine, we think of Tuscany. The image is indelible: cypress-lined driveways, medieval stone farmhouses, and rolling hills covered in vines. But beneath this postcard perfection lies a serious, complex wine region that has undergone a radical quality revolution in the last 40 years."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Sangiovese: la uva que define una región" : "Sangiovese: The Grape That Defines a Region"}</h2>
            <p className="mb-6">
              {es ? <>En el corazón del vino toscano está el Sangiovese. Su nombre deriva de <em>Sanguis Jovis</em> ("La Sangre de Júpiter"). Es una uva notoriamente difícil de cultivar: madura tarde, tiene piel fina y puede resultar excesivamente ácida si no se la maneja con cuidado.</> : <>At the heart of Tuscan wine is Sangiovese. Its name derives from <em>Sanguis Jovis</em> ("The Blood of Jove"). It is a grape that is notoriously difficult to grow—it ripens late, is thin-skinned, and can be overly acidic if not handled with care.</>}
            </p>
            <p className="mb-6">
              {es ? "Sin embargo, cuando se la trata con respeto en el terroir adecuado, produce vinos de una belleza asombrosa. El sello del gran Sangiovese es su carácter sápido: notas de cereza ácida, hoja de tomate, hierbas secas, violetas y espresso. Es un vino hecho para la comida, con una acidez alta que corta el aceite de oliva untuoso y las carnes de la cocina toscana." : "However, when treated with respect in the right terroir, it produces wines of breathtaking beauty. The hallmark of great Sangiovese is its savory character: notes of sour cherry, tomato leaf, dried herbs, violets, and espresso. It is a wine built for food, with high acidity that cuts through the rich olive oil and meats of Tuscan cuisine."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Chianti Classico: el corazón del vino toscano" : "Chianti Classico: The Heart of Tuscan Wine"}</h2>
            <p className="mb-6">
              {es ? 'No confundas "Chianti" con "Chianti Classico". El primero es una región grande y variable. El segundo es el núcleo histórico, definido por el símbolo del "Gallo Nero" (Gallo Negro) en el cuello de la botella.' : 'Do not confuse "Chianti" with "Chianti Classico." The former is a large, variable region. The latter is the historic heartland, defined by the "Gallo Nero" (Black Rooster) symbol on the bottle neck.'}
            </p>
            <p className="mb-6">
              {es ? "El Chianti Classico se extiende entre Florencia y Siena. Es una región de altura, con viñedos que suelen ubicarse entre los 250 y los 600 metros sobre el nivel del mar. Esta elevación preserva la acidez y los aromas frescos de la uva Sangiovese." : "Chianti Classico stretches between Florence and Siena. It is a high-altitude region, with vineyards often sitting between 250 and 600 meters above sea level. This elevation preserves the acidity and fresh aromatics of the Sangiovese grape."}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "Los suelos del Chianti Classico" : "The Soils of Chianti Classico"}</h3>
            <p className="mb-4">
              {es ? <>Dominan dos tipos principales de suelo: el <strong>Galestro</strong> (una arcilla escamosa, parecida al esquisto) y el <strong>Alberese</strong> (caliza/marga dura). El Galestro tiende a producir vinos más aromáticos y elegantes, mientras que el Alberese da vinos estructurados y potentes. Las mejores fincas suelen tener una mezcla de ambos.</> : <>Two main soil types dominate: <strong>Galestro</strong> (a flaky, schist-like clay) and <strong>Alberese</strong> (hard limestone/marl). Galestro tends to produce more aromatic, elegant wines, while Alberese yields structured, powerful wines. The best estates often have a mix of both.</>}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "La revolución del Gran Selezione" : "The Gran Selezione Revolution"}</h3>
            <p className="mb-4">
              {es ? <>En 2014, el consorcio introdujo un nuevo escalón en la cima de la pirámide: el <strong>Gran Selezione</strong>. Estos vinos deben cultivarse exclusivamente en la propia finca (sin uvas compradas) y envejecer durante períodos más largos. Representa el pináculo de lo que el Chianti Classico puede alcanzar.</> : <>In 2014, the consortium introduced a new tier at the top of the pyramid: <strong>Gran Selezione</strong>. These wines must be grown exclusively on the estate (no purchased grapes) and aged for longer periods. It represents the pinnacle of what Chianti Classico can achieve.</>}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "Los pueblos del Chianti Classico" : "The Villages of Chianti Classico"}</h3>
            <p className="mb-8">
              {es ? <>Así como Borgoña tiene sus pueblos, el Chianti tiene comunas con estilos distintos. <strong>Radda</strong> es conocida por su elegancia de altura; <strong>Panzano</strong> (hogar de la famosa "Conca d'Oro" o Concha Dorada) produce vinos ricos e intensos; <strong>Gaiole</strong> es más salvaje y estructurada.</> : <>Just as Burgundy has its villages, Chianti has communes with distinct styles. <strong>Radda</strong> is known for high-altitude elegance; <strong>Panzano</strong> (home to the famous "Conca d'Oro" or Golden Shell) produces rich, intense wines; <strong>Gaiole</strong> is wilder and more structured.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Brunello di Montalcino: el tinto más magnífico de Italia" : "Brunello di Montalcino: Italy's Most Magnificent Red"}</h2>
            <p className="mb-6">
              {es ? "Si el Chianti es el corazón cotidiano de la Toscana, el Brunello di Montalcino es su alma aristocrática. Ubicado al sur de Siena, Montalcino es más cálido, más seco y más marítimo que el Chianti." : "If Chianti is the everyday heart of Tuscany, Brunello di Montalcino is its aristocratic soul. Located south of Siena, Montalcino is warmer, drier, and more maritime than Chianti."}
            </p>
            <p className="mb-6">
              {es ? <>Por ley, el Brunello debe ser 100% Sangiovese (específicamente un clon llamado <em>Sangiovese Grosso</em>). Requiere un mínimo de cuatro años de crianza antes de salir al mercado (cinco para el Riserva). El resultado es un vino de inmensa potencia, taninos y longevidad.</> : <>By law, Brunello must be 100% Sangiovese (specifically a clone called <em>Sangiovese Grosso</em>). It requires a minimum of four years of aging before release (five for Riserva). The result is a wine of immense power, tannin, and longevity.</>}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "El terroir de Montalcino" : "The Terroir of Montalcino"}</h3>
            <p className="mb-4">
              {es ? <>Montalcino es una sola colina, pero tiene cuatro laderas distintas. El <strong>Norte</strong> es más fresco y produce vinos perfumados. El <strong>Sur</strong> es más cálido, mira al mar y produce vinos potentes y maduros. La tendencia moderna es mezclar parcelas de distintas exposiciones para lograr equilibrio.</> : <>Montalcino is a single hill, but it has four distinct slopes. The <strong>North</strong> is cooler, producing perfumed wines. The <strong>South</strong> is hotter, facing the sea, producing powerful, ripe wines. The modern trend is blending plots from different exposures to achieve balance.</>}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "Los productores que definen el Brunello" : "The Producers Who Define Brunello"}</h3>
            <p className="mb-8">
              {es ? <>La historia vive acá. <strong>Biondi-Santi</strong> inventó el estilo a fines del siglo XIX. Tradicionalistas como <strong>Soldera</strong> e <strong>Il Poggione</strong> envejecen en grandes toneles de Eslavonia, mientras que los modernistas pueden usar barricas más chicas de roble francés. Los mejores vinos necesitan de 10 a 20 años para revelar plenamente su complejidad.</> : <>History lives here. <strong>Biondi-Santi</strong> invented the style in the late 1800s. Traditionalists like <strong>Soldera</strong> and <strong>Il Poggione</strong> age in large Slavonian casks, while modernists may use smaller French oak. The best wines need 10–20 years to fully reveal their complexity.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Vino Nobile di Montepulciano: el noble que se pasa por alto" : "Vino Nobile di Montepulciano: The Overlooked Noble"}</h2>
            <p className="mb-8">
              {es ? "A menudo confundido con la uva Montepulciano d'Abruzzo (que es completamente distinta), el Vino Nobile proviene del pueblo de Montepulciano. Se elabora principalmente con Prugnolo Gentile (un clon de Sangiovese). Estos vinos ofrecen un puente entre el Chianti y el Brunello: más estructura que el primero, pero más accesibles que el segundo." : "Often confused with the grape Montepulciano d'Abruzzo (which is entirely different), Vino Nobile comes from the town of Montepulciano. It is made primarily from Prugnolo Gentile (a Sangiovese clone). These wines offer a bridge between Chianti and Brunello—more structure than the former, but more approachable than the latter."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Los Supertoscanos: cuando las reglas se hicieron para romperse" : "The Supertuscans: When Rules Were Made to Be Broken"}</h2>
            <p className="mb-6">
              {es ? 'En la década de 1970, las estrictas leyes vitivinícolas italianas prohibían el uso de uvas francesas (como el Cabernet Sauvignon) en los vinos de alta gama. Los enólogos, frustrados, se rebelaron y elaboraron vinos por fuera del sistema DOC usando variedades internacionales. Fueron etiquetados como humilde "Vino de Mesa", pero arrasaron en las catas a ciegas de todo el mundo. La prensa los bautizó "Supertoscanos".' : 'In the 1970s, strict Italian wine laws forbade the use of French grapes (like Cabernet Sauvignon) in top-tier wines. Frustrated winemakers rebelled, making wines outside the DOC system using international varieties. They were labeled as lowly "Table Wine" but swept blind tastings globally. The press dubbed them "Supertuscans."'}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "Bolgheri: la cuna de los Supertoscanos" : "Bolgheri: The Supertuscan Heartland"}</h3>
            <p className="mb-8">
              {es ? <>Ubicada en la costa toscana, Bolgheri es Bordeaux con acento italiano. Los suelos de grava de acá son perfectos para el Cabernet Sauvignon, el Cabernet Franc y el Merlot. Leyendas como <strong>Sassicaia</strong>, <strong>Ornellaia</strong> y <strong>Masseto</strong> provienen de esta región. Son vinos opulentos, de clase mundial, que alcanzan los precios más altos de Italia.</> : <>Located on the Tuscan coast, Bolgheri is Bordeaux with an Italian accent. The gravel soils here are perfect for Cabernet Sauvignon, Cabernet Franc, and Merlot. Legends like <strong>Sassicaia</strong>, <strong>Ornellaia</strong>, and <strong>Masseto</strong> hail from this region. These are opulent, world-class wines that command the highest prices in Italy.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La Toscana blanca: Vernaccia, Vermentino y el lado que se pasa por alto" : "White Tuscany: Vernaccia, Vermentino, and the Overlooked Side"}</h2>
            <p className="mb-8">
              {es ? <>Aunque el tinto es el rey, la Toscana tiene joyas blancas. La <strong>Vernaccia di San Gimignano</strong> es el vino blanco documentado más antiguo de Italia, y ofrece una frescura nítida con aromas a almendra. En la costa prospera el <strong>Vermentino</strong>, que produce vinos salinos y cítricos, perfectos para los mariscos.</> : <>While red is king, Tuscany has white gems. <strong>Vernaccia di San Gimignano</strong> is Italy’s oldest documented white wine, offering crisp, almond-scented refreshment. On the coast, <strong>Vermentino</strong> thrives, producing saline, citrusy wines perfect for seafood.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Cuándo visitarla y cómo planificarlo" : "When to Visit and How to Plan"}</h2>
            <p className="mb-8">
              {es ? <>La <strong>primavera (mayo-junio)</strong> y el <strong>otoño (septiembre-octubre)</strong> son ideales. La vendimia de fines de septiembre es mágica, pero ajetreada. Evitá agosto, cuando muchos italianos se van de vacaciones y el calor puede resultar sofocante.</> : <><strong>Spring (May-June)</strong> and <strong>Autumn (September-October)</strong> are ideal. The harvest in late September is magical but busy. Avoid August, when many Italians go on holiday and the heat can be stifling.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Viví la Toscana con The Wine Trips" : "Experience Tuscany with The Wine Trips"}</h2>
            <p className="mb-8">
              {es ? "Creemos que la única manera de entender la Toscana es caminar su tierra. Nuestros viajes a medida te llevan detrás de los portones de fincas privadas en el Chianti Classico, a las bodegas de las leyendas del Brunello y a los viñedos con brisa marina de Bolgheri." : "We believe the only way to understand Tuscany is to walk the soil. Our curated journeys take you behind the gates of private estates in Chianti Classico, into the cellars of Brunello legends, and to the sea-breeze vineyards of Bolgheri."}
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
            
            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">{es ? "Descubrí nuestra Experiencia en la Toscana" : "Explore our Tuscany Experience"}</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              {es ? "Siete días por el Chianti Classico, Montalcino y Bolgheri: acceso a fincas privadas, largos almuerzos en los viñedos y todo el arco del vino toscano. Limitado a 4 a 8 huéspedes." : "Seven days through Chianti Classico, Montalcino, and Bolgheri — private estate access, long lunches in the vineyards, and the full arc of Tuscan wine. Limited to 4–8 guests."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                {es ? "Ver el itinerario de la Toscana" : "View the Tuscany Itinerary"}
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
            {(es ? ['Toscana', 'Chianti Classico', 'Brunello di Montalcino', 'Supertoscano', 'Bolgheri', 'Sangiovese', 'Vino Italiano', 'Viajes de Vino', 'Italia'] : ['Tuscany', 'Chianti Classico', 'Brunello di Montalcino', 'Supertuscan', 'Bolgheri', 'Sangiovese', 'Italian Wine', 'Wine Travel', 'Italy']).map((tag) => (
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
              <Link to="/journal/barolo-king-italian-wines" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1696636533515-c9f7fda368f2" 
                      alt="Barolo wine region" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Cultura del Vino" : "Wine Education"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "Barolo: el rey de los vinos italianos" : "Barolo: The King of Italian Wines"}
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      {es ? "Leer más" : "Read More"} <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>

              {/* Card 2 */}
              <Link to="/journal/best-time-visit-wine-regions-seasonal-guide" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1683548957866-69e6d9694c02" 
                      alt="Vineyard seasonal landscape" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Guía de Viaje" : "Travel Guide"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "La mejor época para visitar las regiones de vino: guía estacional" : "The Best Time to Visit Wine Regions: A Seasonal Guide"}
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

export default TuscanyArticle;