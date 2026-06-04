import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import WaitingListModal from '@/components/WaitingListModal';

const BaroloArticle = () => {
  const { i18n } = useTranslation();
  const es = i18n.language === 'es';
  const openWaitingList = () => {
    window.dispatchEvent(new Event('open-waitlist-modal'));
  };

  return (
    <>
      <Helmet>
        <title>Barolo: The King of Italian Wines | The Wine Trips</title>
        <meta name="description" content="Explore the misty hills of Piedmont and discover why Barolo commands respect among wine collectors worldwide. A deep dive into Nebbiolo, Langhe terroir, the great producers, and how to visit Italy's most noble wine region." />
        <meta name="keywords" content="barolo wine guide, king of italian wines, nebbiolo piedmont, langhe wine region, barolo vs barbaresco, visiting barolo italy, piemonte wine travel" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://thewinetrips.com/journal/barolo-king-italian-wines" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://thewinetrips.com/journal/barolo-king-italian-wines" />
        <meta property="og:title" content="Barolo: The King of Italian Wines | The Wine Trips" />
        <meta property="og:description" content="Explore the misty hills of Piedmont and discover why Barolo commands respect among wine collectors worldwide." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/journal/barolo-king-italian-wines" />
        <meta property="twitter:title" content="Barolo: The King of Italian Wines | The Wine Trips" />
        <meta property="twitter:description" content="Explore the misty hills of Piedmont and discover why Barolo commands respect among wine collectors worldwide." />
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
              src="https://images.unsplash.com/photo-1696636533515-c9f7fda368f2"
              alt="Misty hills of Barolo wine region"
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
                {es ? <>Barolo:<br />el rey de los vinos italianos</> : <>Barolo:<br />The King of Italian Wines</>}
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
              <span>{es ? "28 de septiembre de 2023" : "September 28, 2023"}</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c9a96e]" />
              <span>{es ? "10 min de lectura" : "10 min read"}</span>
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
              {es ? "\"Il Re dei vini e il vino dei Re\" — El rey de los vinos y el vino de los reyes." : "\"Il Re dei vini e il vino dei Re\" — The King of Wines and the Wine of Kings."}
            </p>

            <p className="mb-6">
              {es ? "En las colinas onduladas y cubiertas de niebla del Piemonte, en el noroeste de Italia, se esconde una pequeña denominación que cautivó la imaginación de los amantes del vino durante siglos. El Barolo no es solo un vino; es un estudio de la paciencia, el reflejo de un terroir indómito y la máxima expresión de la uva Nebbiolo." : "In the rolling, mist-covered hills of Piedmont in northwest Italy lies a small appellation that has captured the imagination of wine lovers for centuries. Barolo is not just a wine; it is a study in patience, a reflection of a fierce terroir, and the ultimate expression of the Nebbiolo grape."}
            </p>

            <p className="mb-6">
              {es ? "Al igual que Borgoña, el Barolo es una región de viñedos específicos, crus y personalidades de pueblo bien diferenciadas. Exige atención y, históricamente, exigía años de espera. Hoy, si bien los estilos de elaboración evolucionaron, el alma del Barolo permanece intacta: poderosa, estructurada y de una aromática que no se olvida." : "Like Burgundy, Barolo is a region of specific vineyards, crus, and distinct village characters. It demands attention and, historically, it demanded years of waiting. Today, while winemaking styles have evolved, the soul of Barolo remains unchanged: powerful, structured, and hauntingly aromatic."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La uva noble: Nebbiolo" : "The Noble Grape: Nebbiolo"}</h2>
            <p className="mb-6">
              {es ? <>Se cree que el nombre <em>Nebbiolo</em> deriva de <em>nebbia</em>, la palabra italiana para la niebla espesa que cubre las colinas de las Langhe durante la vendimia de otoño. Es una uva de paradojas.</> : <>The name <em>Nebbiolo</em> is thought to derive from <em>nebbia</em>, the Italian word for the thick fog that blankets the Langhe hills during the autumn harvest. It is a grape of paradoxes.</>}
            </p>
            <p className="mb-6">
              {es ? "En la copa es engañosamente pálido, a menudo recuerda a un Pinot Noir o un Grenache ligero, y vira a un característico tono teja con el paso de los años. Sin embargo, en boca despliega una estructura imponente de acidez alta y taninos formidables." : "In the glass, it is deceptively pale, often resembling a light Pinot Noir or Grenache, turning a distinctive brick-orange hue as it ages. Yet on the palate, it delivers a massive structure of high acidity and formidable tannins."}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li><strong>{es ? "Aromas:" : "Aromatics:"}</strong> {es ? "El Barolo clásico es famoso por su aroma a \"alquitrán y rosas\", acompañado de notas de cereza ácida, hierbas secas, trufa y cuero." : "Classic Barolo is famous for its scent of \"tar and roses,\" accompanied by notes of sour cherry, dried herbs, truffle, and leather."}</li>
              <li><strong>{es ? "Estructura:" : "Structure:"}</strong> {es ? "Los taninos altos y la acidez actúan como conservantes, permitiendo que los mejores ejemplares envejezcan 30, 40 e incluso 50 años." : "The high tannins and acidity act as preservatives, allowing top examples to age for 30, 40, or even 50 years."}</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La historia de dos suelos" : "A Tale of Two Soils"}</h2>
            <p className="mb-6">
              {es ? "La zona del Barolo se divide a grandes rasgos en dos tipos principales de suelo, que influyen de manera notable en el estilo del vino. Entender esta geografía es clave para entender la botella que tenés enfrente." : "The Barolo zone is roughly divided into two main soil types, which dramatically influence the style of the wine. Understanding this geography is key to understanding the bottle in front of you."}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "Suelos tortonienses (marga azul)" : "Tortonian Soils (Blue Marl)"}</h3>
            <p className="mb-4">
              {es ? <>Se encuentran principalmente en las comunas de <strong>La Morra</strong> y <strong>Barolo</strong>. Son suelos más jóvenes y compactos, que dan vinos por lo general más perfumados, elegantes y accesibles en su juventud.</> : <>Found primarily in the communes of <strong>La Morra</strong> and <strong>Barolo</strong>. These soils are younger and more compact, producing wines that are generally more perfumed, elegant, and approachable in their youth.</>}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "Suelos helvecianos (arenisca y caliza)" : "Helvetian Soils (Sandstone & Chalk)"}</h3>
            <p className="mb-8">
              {es ? <>Se encuentran en <strong>Serralunga d’Alba</strong>, <strong>Monforte d’Alba</strong> y <strong>Castiglione Falletto</strong>. Estos suelos antiguos y más pobres obligan a la vid a luchar, dando vinos de inmenso poder, estructura y longevidad. Son los pesos pesados de la región.</> : <>Found in <strong>Serralunga d’Alba</strong>, <strong>Monforte d’Alba</strong>, and <strong>Castiglione Falletto</strong>. These ancient, poorer soils force the vines to struggle, yielding wines of immense power, structure, and longevity. These are the heavyweights of the region.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La guerra de las rosas" : "The War of the Roses"}</h2>
            <p className="mb-6">
              {es ? <>En las décadas de 1980 y 1990, la región se vio dividida por las llamadas "Guerras del Barolo". Los tradicionalistas defendían maceraciones largas (dejando el jugo sobre las pieles durante semanas) y la crianza en grandes toneles neutros de roble de Eslavonia (<em>botti</em>). Esto producía vinos tánicos y austeros, que necesitaban décadas para suavizarse.</> : <>In the 1980s and 90s, the region was torn by the so-called "Barolo Wars." Traditionalists adhered to long macerations (leaving juice on skins for weeks) and aging in large, neutral Slavonian oak casks (<em>botti</em>). This produced wines that were tannic and austere, requiring decades to soften.</>}
            </p>
            <p className="mb-6">
              {es ? "Los modernistas introdujeron maceraciones más cortas, fermentadores rotativos y pequeñas barricas de roble francés para suavizar los taninos y aportar especias de vainilla, volviendo los vinos accesibles mucho antes." : "Modernists introduced shorter macerations, roto-fermenters, and small French oak barriques to soften the tannins and add vanilla spice, making the wines accessible much sooner."}
            </p>
            <p className="mb-6">
              {es ? "Hoy la guerra está prácticamente terminada. La mayoría de los productores encontró un punto medio: usan higiene moderna y manejo del viñedo para lograr una fruta limpia y sin defectos, mientras vuelven a los formatos grandes de roble para respetar la delicada aromática floral de la uva Nebbiolo." : "Today, the war is largely over. Most producers have found a middle ground, using modern hygiene and vineyard management to produce clean, fault-free fruit, while returning to larger oak formats to respect the delicate floral aromatics of the Nebbiolo grape."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Visitar las Langhe" : "Visiting the Langhe"}</h2>
            <p className="mb-6">
              {es ? <>No hay paisaje en el mundo como el de las Langhe. La niebla se cuela entre castillos medievales encaramados sobre lomas cubiertas de viñas. La cocina es tan legendaria como el vino: esta es la tierra de la trufa blanca (<em>Tartufo Bianco d'Alba</em>), de la delicada pasta <em>tajarin</em> y de las avellanas.</> : <>There is no landscape in the world quite like the Langhe. The fog weaves through medieval castles perched atop vine-covered ridges. The cuisine is as legendary as the wine: this is the home of the white truffle (<em>Tartufo Bianco d'Alba</em>), delicate <em>tajarin</em> pasta, and hazelnuts.</>}
            </p>
            <p className="mb-8">
              {es ? "Una visita acá tiene menos que ver con saltar de sala de cata en sala de cata, y más con almuerzos lentos que se estiran hasta la tarde, caminar los crus empinados de Cannubi o Brunate, y entender por qué los lugareños guardan sus mejores botellas no para ocasiones especiales, sino para el almuerzo del domingo en familia." : "A visit here is less about hopping from tasting room to tasting room, and more about slow lunches that stretch into the afternoon, walking the steep crus of Cannubi or Brunate, and understanding why the locals save their best bottles not for special occasions, but for Sunday lunch with family."}
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

            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">{es ? "Descubrí nuestra Experiencia Piemonte" : "Explore our Piemonte Experience"}</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              {es ? "Una inmersión de siete días en las Langhe. Caza de trufas al amanecer, catas privadas con productores legendarios en Barolo y Barbaresco, y alojamiento en castillos reconvertidos." : "A seven-day immersion into the Langhe. Truffle hunting at dawn, private tastings with legendary producers in Barolo and Barbaresco, and accommodation in converted castles."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                {es ? "Ver el itinerario del Piemonte" : "View the Piemonte Itinerary"}
              </Link>
              <button
                onClick={openWaitingList}
                className="px-8 py-3 border border-[#1a1f2e] text-[#1a1f2e] text-xs font-bold tracking-widest uppercase hover:bg-[#1a1f2e] hover:text-white transition-colors duration-300"
              >
                {es ? "Sumate a la lista de espera" : "Join the Waiting List"}
              </button>
            </div>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {['Barolo', 'Barbaresco', 'Nebbiolo', 'Piedmont', 'Langhe', es ? 'Vino Italiano' : 'Italian Wine', es ? 'Viajes de Vino' : 'Wine Travel', es ? 'Italia' : 'Italy'].map((tag) => (
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
              <Link to="/journal/bordeaux-left-bank-masterclass-terroir" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1657117735687-50cda95e80cc"
                      alt="Bordeaux vineyard landscape"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Guía de Región" : "Region Guide"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "La Orilla Izquierda de Bordeaux: una clase magistral de terroir" : "Bordeaux's Left Bank: A Masterclass in Terroir"}
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      {es ? "Leer más" : "Read More"} <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>

              {/* Card 2 */}
              <Link to="/journal/mendoza-hidden-gems-beyond-malbec" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1636318414118-0b8f285082fc"
                      alt="Mendoza vineyards"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Descubrimiento" : "Discovery"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "Los tesoros ocultos de Mendoza: más allá del Malbec" : "Mendoza's Hidden Gems: Beyond the Malbec"}
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

export default BaroloArticle;