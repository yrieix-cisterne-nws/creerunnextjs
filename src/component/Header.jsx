export const Navbar = () => {
    return (
        <div className="bg-[#d3d3d3]">
      <header className="w-full">
        <div>
          <nav id="navbar" className="bg-[#2e2e2e] text-white relative z-10">
            <ul className="m-0 p-0 list-none flex">
              <li>
                <a
                  href="index.html"
                  className="p-4 text-inherit no-underline inline-block bg-[#cc540e] hover:bg-[#4e4e4e]"
                >
                  Accueil
                </a>
              </li>
              <div className="hidden md:flex space-x-4">
                <li>
                  <a href="cv.html" className="p-4 text-inherit no-underline inline-block hover:bg-[#4e4e4e]">
                    CV
                  </a>
                </li>
                <li>
                  <a href="projet_perso.html" className="p-4 text-inherit no-underline inline-block hover:bg-[#4e4e4e]">
                    Projet Personnel
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="p-4 text-inherit no-underline inline-block hover:bg-[#4e4e4e]">
                    Contact
                  </a>
                </li>
              </div>
            </ul>
  
            <button id="hamburger-toggle" className="lg:hidden absolute top-0 right-0 border-0 bg-transparent cursor-pointer">
              <div className="icon-open">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  strokeWidth="2"
                >
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>
              </div>
              <div className="icon-close hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  strokeWidth="2"
                >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>20
              </div>
            </button>
          </nav>
        </div>
      </header>
      <main>
      <div id="image_pc" className='bg-[url("./assets/images/ecrandepc.png")] w-full h-[220px]'>
        <div>
          <h1 className="absolute top-[15%] left-[50%] text-white">Yrieix Cisterne</h1>
          <p id="subtext" className="absolute top-[29%] left-[46%] text-white">Développeur web Junior</p>
        </div>
      </div>
    </main>
    <section>
      <div>
        <div><h2>A PROPOS DE MOI</h2></div>
        <div>
          <img src="photodemoi.png" alt="Yrieix Cisterne" id="image_moi" className="h-[100px] block m-auto"/>
        </div>
        <div id="main_text" className="justify-center top-1/2 text-black">
          <p class="background_text p-5 bg-[#f5f5f5] rounded-[50px] mb-5 ml-[5px] mr-[5px]">
            Je m'appelle Yrieix Cisterne. J'ai 18 ans. Je suis étudiant en
            première année de Bachelor Chef de Projets Digitaux. J'étudie à la
            Normandie Web School de Rouen. Passionné par le numérique, j'ai
            découvert le code au lycée. J'ai obtenu un Bac général en 2024. Mes
            spécialités étaient NSI et Mathématiques. J'ai appris Python et SQL
            au lycée. Ces langages m'ont donné une base solide en programmation.
          </p>
          <p class="background_text p-5 bg-[#f5f5f5] rounded-[50px] mb-5 ml-[5px] mr-[5px]">
            Je m'intéresse au développement web. J'apprends tout les jours HTML
            et CSS. Ces outils me permettent de créer des sites modernes et
            fonctionnels. Je suis en train d'apprendre JavaScript. Ce langage me
            sert à rendre mes sites interactifs. Je veux maîtriser le front-end
            et le back-end. Pour devenir un développeur polyvalent web. Je
            souhaite créer des solutions simples et efficaces. J'aime apprendre
            de nouvelles technologies et langages. Je veux améliorer mes
            compétences pour répondre aux besoins des utilisateurs. Je travaille
            sur des projets personnels pour progresser. Ces projets m'aident à
            appliquer mes connaissances. Je suis motivé par la recherche de
            solutions pratiques. Je suis rigoureux et organisé. Je veux
            m'impliquer dans des projets stimulants. Je suis toujours prêt à
            relever de nouveaux défis. Mon but est de contribuer à des projets
            innovants.
          </p>
          <p class="background_text p-5 bg-[#f5f5f5] rounded-[50px] mb-5 ml-[5px] mr-[5px]">
            Je suis actuellement en recherche d'un stage alterné de deux mois en
            développement web du 10 mars aux 20 juin 2025, je vis actuellement à
            Rouen. Je souhaite participer à la création de sites (pour une
            société ou une association, e-commerce, etc.). Je souhaite mettre en
            pratique et développer mes compétences dans un environnement
            professionnel. Mon but est de contribuer à des projets. Je suis prêt
            à relever des défis et à apprendre sur le terrain.
          </p>
        </div>
      </div>
    </section>
    <div className='bg-[url("./assets/images/waterbackground.png")] w-full h-[100px]'>
      <p id="status_text" className="flex justify-center content-center">
        ACTUELLEMENT : <br /><br />
        En recherche de stage
      </p>
    </div>
    <footer className="bg-[#f5deb3]">
      <p>© 2025 Yrieix Cisterne. Tous droits réservés.</p>
      <br />
      <a href="mentions_legales.html">Mentions Légales</a>
    </footer>
      </div>
      
    );
  };
  