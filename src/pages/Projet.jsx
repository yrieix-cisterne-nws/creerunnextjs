import React from "react";
import InterviewCarousel from "../component/Carousel";
import { Link } from "react-router-dom";
import { Titre } from "../component/Titre";

const Projet = () => {
  return (
    <div style={{ fontFamily: 'Roboto'}} className="min-h-screen bg-gray-300 font-sans flex flex-col items-center">
     <Titre title={"Mes Projets"}/>

      <InterviewCarousel/>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 style={{fontFamily: 'Roboto Mono'}} className="text-xl font-semibold mb-2">Maquette du site</h2>
        <div className="md:grid md:grid-cols-2">
        <p>
        Dans le but de créer un portfolio, j'ai dû créer une maquette de mon site web, voici les couleurs utilisées : 
        <br/>-#2E2E2E (Header et Footer) 
        <br/>-#D1D5DB (Background)
        <br/>-#374151 (Repère de navigation)
        <br/>-#FFFFFF et #E5E7EB (Bloc de contenu) 
        <br/>
        <br/>Pour le corps de texte, j'utilise Roboto et pour les titres Roboto Mono. 
        </p>
        <a href="/Maquette.zip" download="Maquette.zip">
        <img src="/maquettepc.png" alt="Maquette site web" className="w-full mt-4 rounded-lg" /></a>

        </div>
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 style={{fontFamily: 'Roboto Mono'}} className="text-xl font-semibold mb-2">HANDISUP</h2>
        <div className="md:grid md:grid-cols-2">
        <p>
          <span className="text-red-500 font-bold">CE PROJET EST EN ATTENTE D'UNE RÉPONSE.</span>
          <br />
          En équipe sur ce projet, la NWS nous a mis en relation avec HANDISUP pour améliorer leur site web tout en 
          respectant certaines contraintes donnée par HANDISUP. <a href="https://handisup6.normandieweb.school/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Voici le site réalisé par le groupe.</a> Si le site venait à être choisi, une version responsive serais envisageable 
        </p>
        <img src="/projet/handisup_actu.png" alt="HANDISUP section actualité" className="w-full mt-4 rounded-lg" />
        </div>
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 style={{fontFamily: 'Roboto Mono'}} className="text-xl font-semibold mb-2">Intégration d'une maquette Figma</h2>
        <div className="md:grid md:grid-cols-2">
        <p>
          Dans ce projet, j'ai reproduit une maquette provenant de
          <a href="https://www.figma.com/fr-fr/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> Figma </a>
          .En HTML et CSS. J'ai appris l'importance des "div" pour structure une page web.
        </p>
        <img src="/projet/maquettefigma.png" alt="Maquette Figma" className="w-full mt-4 rounded-lg sm:h-[500px] md:h-[250px] object-cover" />
        </div>
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 style={{fontFamily: 'Roboto Mono'}} className="text-xl font-semibold mb-2">Normandie Blog School</h2>
        <p>
        Ce projet a été réalisé à la Normandie Web School (NWS) en équipe avec d'autres élèves de la NWS comme des développeurs web
        et des Graphistes, nous avons décidé de partie sur un blog d'entraide entre personne de l'école, 
        <a href="https://nino-rameau.github.io/normandie-blog-school/index.html" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> ce site est fictif </a>
            et tout le code est déposé sur <a href="https://github.com/yrieix-cisterne-nws/normandie-blog-school/tree/main" className="text-blue-500 underline" target="_blank" rel="nooperner noreferrer">Github.</a>
        </p>
        <img src="/projet/normandiebs.png" alt="Page Accueil Normandie Blog School" className="w-full mt-4 rounded-lg" />
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 style={{fontFamily: 'Roboto Mono'}} className="text-xl font-semibold mb-2">Club eco St.Sever</h2>
        <p>
        Dans le cadre de ce projet, qui a été réalisé par la suite de la sollicitation du Club Eco St.Sever, 
        nous avons dû en équipe réaliser un diaporama pour présenter nos idées au Club Eco St.Sever comme un nouveau logo pour 
        le club et une nouvelle direction artistique
        </p> 
        <img src="/projet/clubeco.png" alt="Logo pour club eco St.Sever" className="w-full mt-4 rounded-lg" />
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 style={{fontFamily: 'Roboto Mono'}} className="text-xl font-semibold mb-2">Logo personnel</h2>
        <div className="md:grid md:grid-cols-2">
        <p>
        Dans le but de définir mon identité sur le web, j'ai conçu ce logo pour mon portfolio et d'autres créations, 
        ce logo comprend mes initiales pour mon prénom et mon nom, j'ai voulu en faire un logo chic et élégant. 
        En cliquant sur le logo, vous pourrez voir la charte graphique pour mon logo.
        </p>
        <Link
        to="/charte">
        <img src="/charte/logoycbw.jpg" alt="Mon logo personnel" className="w-full rounded-lg h-[350px] object-contain" />
        </Link>
        
        </div>
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6 mb-6">
        <h2 style={{fontFamily: 'Roboto Mono'}} className="text-xl font-semibold mb-2">Projet Dés</h2>
        <p>
        J'ai réalisé ce projet en 2023 à l'aide de Python, il a été réalisé pendant mon année de première. 
        Ce projet m'a permis de découvrir comment utiliser la librairie "Turtle". Tout le code est déposé sûr 
        <a href="https://github.com/modzarlino/de" target="_blank" className="text-blue-500 underline" rel="noopener noreferrer"> Github </a>
        sur mon Github personnel.
        </p>
        <img src="/projet/des.png" alt="Des produit aléatoirement" className="w-full mt-4 rounded-lg" />
      </section>
      
      

    </div>
  );
};

export default Projet;
