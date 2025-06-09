import { Link } from "react-router-dom";
import { ProjetTexteSeul } from "../component/Projettexte";
import { Titre } from "../component/Titre";


const Home = () => {
    return (
      <main style={{ fontFamily: 'Roboto'}} className="bg-fond dark:bg-fondDark">
  
        <section>
          <div>

          <Titre title={"Accueil"}/>

            <img src="photodemoi.png" alt="Yrieix Cisterne" className="h-[100px] block m-auto sm:h-[250px] lg:h-[250px]" />
            
            <div id="main_text" style={{ fontFamily: 'Roboto'}} className="mx-auto max-w-7xl text-black dark:text-white pt-4">
              <p className="background_text p-5 bg-blanc dark:bg-blancDark rounded-[25px] mb-5 mx-[5px]">
              Je m'appelle Yrieix Cisterne. J'ai 18 ans. Je suis étudiant en
            première année de Bachelor Chef de Projets Digitaux. J'étudie à la
            Normandie Web School de Rouen. Passionné par le numérique, j'ai
            découvert le code au lycée. J'ai obtenu un Bac général en 2024. Mes
            spécialités étaient NSI et Mathématiques. J'ai appris Python et SQL
            au lycée. Ces langages m'ont donné une base solide en programmation.
            <br/>
            <Link
            to="/bio"
            className="text-blue-500 underline"
          >
            En savoir plus sur moi
          </Link>
          </p>
            </div>
          </div>
        </section>
        <div className="flex justify-center pb-4"><ProjetTexteSeul title={"Normandie Blog School"}
                                description={"Ce projet a été réalisé à la Normandie Web School (NWS) en équipe avec d'autres élèves de la NWS comme des développeurs web et des Graphistes, nous avons décidé de partie sur un blog d'entraide entre personne de l'école, "}
                                image={"/projet/normandiebs.png"}
                                alt={"Page Accueil Normandie Blog School"}
                                link={"https://nino-rameau.github.io/normandie-blog-school/index.html"}
                                linktext={"Vous pouvez consultez le site ici."}/></div>
  
        <div style={{ fontFamily: 'Roboto'}} className='bg-[url("./assets/images/lignedecode.png")] w-full bg-no-repeat bg-cover h-[100px] flex items-center justify-center'>

          <p className="flex flex-col bg-white bg-opacity-85 px-10">
            <span>ACTUELLEMENT : </span>
            <span>&nbsp;</span>
            <span>En recherche d'alternance.</span>
          </p>
          </div>
      </main>
    );
  };
  
  export default Home;
  