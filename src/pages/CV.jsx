import React from "react";

const CV = () => {
  return (
    <div className="min-h-screen bg-gray-300 font-sans flex flex-col justify-center items-center">

    <main className="text-center p-6">
      <h1 className="bg-gray-700 text-white text-2xl font-bold py-4 rounded-lg">Mon cv</h1>
    </main>
      <main className="bg-gray-100 m-2 py-5 px-4">
        <img src="photodemoi.png" alt="Tête de moi" className="w-full rounded-full bg-white" />
        <div className="text-center mt-4">
          <p className="text-lg font-bold">
            CISTERNE <br /> YRIEIX <br /> DEVELOPPEUR WEB
          </p>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-blue-500 text-xl">PROFIL</h2>
          <p className="mt-2">Né en décembre 2006 <br /> 76000, Rouen</p>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-blue-500 text-xl">CONTACT</h2>
          <p className="mt-2">TÉLÉPHONE : <br /> 06.18.03.13.27</p>
          <p className="mt-2">E-MAIL : <br /> ycisterne@normandiewebschool.fr</p>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-blue-500 text-xl">LOISIRS</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Jeux Vidéos</li>
            <li>Musique</li>
            <li>Tennis de Table</li>
          </ul>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-blue-500 text-xl">NIVEAU DE LANGUE</h2>
          <p className="mt-2">Anglais niveau C1<br />Bases en espagnol</p>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-blue-500 text-xl">LIENS UTILES</h2>
          <div className="mt-2">
            <a href="https://github.com/modzilano" className="text-blue-600 hover:underline">GitHub perso</a>
            <br />
            <a href="https://www.linkedin.com/in/yrieix-cisterne-96963b332/" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </main>
      <section className="bg-gray-200 p-6">
        <div className="text-center">
          <p className="text-xl font-bold">FORMATION</p>
          <div className="mt-4">
            <p>
              2024-2027 - Normandie Web School<br />
              1re année <br />
              Bachelor Chef de Projets Digitaux<br />
              - Création de site web en utilisant HTML/CSS/JavaScript<br />
              - Utilisation d’API
            </p>
            <p className="mt-4">
              2022-2024 - Camille Saint-Saëns<br />
              - Obtention du BAC 2024<br />
              - Option Mathématiques et NSI
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-xl font-bold">COMPÉTENCES</p>
          <div className="flex justify-between px-12 mt-4">
            <p>
              VSCode <br />
              Python <br />
              SQL <br />
              HTML
            </p>
            <p>
              CSS <br />
              JavaScript <br />
              Wordpress <br />
              Suite Adobe
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
