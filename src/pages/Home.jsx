const Home = () => {
    return (
      <main>
        <div id="image_pc" className='bg-[url("./assets/images/ecrandepc.png")] w-full h-[220px]'>
          <div>
            <h1 className="absolute top-[15%] left-[50%] text-white">Yrieix Cisterne</h1>
            <p id="subtext" className="absolute top-[29%] left-[46%] text-white">
              Développeur web Junior
            </p>
          </div>
        </div>
  
        <section>
          <div>
            <h2>A PROPOS DE MOI</h2>
            <img src="photodemoi.png" alt="Yrieix Cisterne" className="h-[100px] block m-auto" />
            
            <div id="main_text" className="justify-center top-1/2 text-black">
              <p className="background_text p-5 bg-[#f5f5f5] rounded-[50px] mb-5 mx-[5px]">
              Je m'appelle Yrieix Cisterne. J'ai 18 ans. Je suis étudiant en
            première année de Bachelor Chef de Projets Digitaux. J'étudie à la
            Normandie Web School de Rouen. Passionné par le numérique, j'ai
            découvert le code au lycée. J'ai obtenu un Bac général en 2024. Mes
            spécialités étaient NSI et Mathématiques. J'ai appris Python et SQL
            au lycée. Ces langages m'ont donné une base solide en programmation.
              </p>
              <p className="background_text p-5 bg-[#f5f5f5] rounded-[50px] mb-5 mx-[5px]">
              Je m'intéresse au développement web. J'apprend tout les jours HTML
            et CSS. Ces outils me permettent de créer des sites modernes et
            fonctionnels. Je suis en train d'apprendre JavaScript. Ce langage me
            sert à rendre mes sites interactifs. . Je veux maîtriser le
            front-end et le back-end. pour devenir un développeur polyvalent
            web. Je souhaite créer des solutions simples et efficaces. J'aime
            apprendre de nouvelles technologies et langages. Je veux améliorer
            mes compétences pour répondre aux besoins des utilisateurs. Je
            travaille sur des projets personnels pour progresser. Ces projets
            m'aident à appliquer mes connaissances. Je suis motivé par la
            recherche de solutions pratiques. Je suis rigoureux et organisé. Je
            veux m'impliquer dans des projets stimulants. Je suis toujours prêt
            à relever de nouveaux défis. Mon but est de contribuer à des projets
              </p>
              <p className="background_text p-5 bg-[#f5f5f5] rounded-[50px] mb-5 mx-[5px]">
              Je suis actuellement en recherche d'un stage alterné de deux mois en
            développement web du 10 mars aux 20 juin 2025, je vit actuellement à
            Rouen. Je souhaite participer à la création de sites (pour une
            société ou une association, e-commerce, etc...). Je souhaite mettre
            en pratique et développer mes compétences dans un environnement
            professionnel. Mon but est de contribuer à des projets. Je suis prêt
            à relever des défis et à apprendre sur le terrain.
              </p>
            </div>
          </div>
        </section>
  
        <div className='bg-[url("./assets/images/waterbackground.png")] w-full h-[100px]'>
          <p id="status_text" className="flex justify-center content-center">
            ACTUELLEMENT : <br /> <br /> En recherche de stage
          </p>
        </div>
      </main>
    );
  };
  
  export default Home;
  