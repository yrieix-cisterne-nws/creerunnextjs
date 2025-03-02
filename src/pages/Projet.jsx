import React from "react";

const Projet = () => {
  return (
    <div className="min-h-screen bg-gray-300 font-sans flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-gray-700 text-white py-4 text-center font-bold text-2xl rounded-lg my-6">
        Mes Projets
      </header>
      
      {/* Project Sections */}
      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-2">Interview d'un étudiant</h2>
        <p>
          J'ai réalisé une interview et créé un carrousel pour présenter un étudiant de la Normandie Web School, en alternance chez
          <a href="https://jwin.fr/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> JWIN</a>.
        </p>
        <img src="/assets/images/carousel/interview.png" alt="Interview " className="w-full mt-4 rounded-lg" />
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 className="text-xl font-semibold mb-2">HANDISUP</h2>
        <p>
          <span className="text-red-500 font-bold">CE PROJET EST EN COURS</span>
          <br />
          En équipe sur ce projet, la NWS nous a mis en relation avec HANDISUP pour améliorer leur site web tout en respectant certaines contraintes.
        </p>
        <img src="handisup_actu.png" alt="HANDISUP section actualité" className="w-full mt-4 rounded-lg" />
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 className="text-xl font-semibold mb-2">Intégration d'une maquette Figma</h2>
        <p>
          Dans ce projet, j'ai reproduit une maquette provenant de
          <a href="https://www.figma.com/fr-fr/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> Figma</a>
          en HTML et CSS.
        </p>
        <img src="maquettefigma.png" alt="Maquette Figma" className="w-full mt-4 rounded-lg" />
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 className="text-xl font-semibold mb-2">Normandie Blog School</h2>
        <p>
        Ce projet à été réalisé à la Normandie Web School (NWS) en équipe avec
        d'autres élèves de la NWS comme des développeurs web et des Graphistes,
        nous avons décider de partie sur un blog d'entraide entre personne de
        l'école, 
        <a href="https://nino-rameau.github.io/normandie-blog-school/index.html" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> ce site est fictif </a>
            et tout le code est déposé sur <a href="https://github.com/yrieix-cisterne-nws/normandie-blog-school/tree/main" className="text-blue-500 underline" target="_blank" rel="nooperner noreferrer">Github</a>
        </p>
        <img src="normandiebs.png" alt="Page Accueil Normandie Blog School" className="w-full mt-4 rounded-lg" />
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 className="text-xl font-semibold mb-2">Club eco St.Sever</h2>
        <p>
        Dans le cadre de ce projet, qui a été réalisé par la suite de la
        solicitation du club eco St.Sever, nous avons du en équipe réaliser un
        diaporama pour présenter nos idée au Club Eco St.Sever comme un nouveau
        logo pour le club
        </p>
        <img src="clubeco.png" alt="Logo pour club eco St.Sever" className="w-full mt-4 rounded-lg" />
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
        <h2 className="text-xl font-semibold mb-2">Logo personnel</h2>
        <p>
        Dans le but de définir mon identité sur le web, j'ai conçu ce logo pour
        mon portfolio et autres création,
        ce logo comprend mes initiales pour mon Prénom et mon Nom, j'ai voulu en
        faire un logo chic et élégant.
        </p>
        <img src="logoyc.png" alt="Mon logo personnel" className="w-full mt-4 rounded-lg" />
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Projet Dés</h2>
        <p>
        J'ai réalisé ce projet en 2023 à l'aide de Python, il a été réalisé
        pendant mon année de première. Ce projet m'a permis de découvrir comment
        utiliser la librairie "Turtle". Tout le code est déposé sur 
        <a href="https://github.com/modzarlino/de" target="_blank" className="text-blue-500 underline" rel="noopener noreferrer"> Github </a>
        sur mon Github personel.
        </p>
        <img src="des.png" alt="Des produit aléatoirement" className="w-full mt-4 rounded-lg" />
      </section>
      
      

    </div>
  );
};

export default Projet;
