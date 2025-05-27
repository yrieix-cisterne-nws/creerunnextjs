import { Link } from "react-router-dom";
import InterviewCarousel from "../component/Carousel";
import { Titre } from "../component/Titre";


const Home = () => {
    return (
      <main style={{ fontFamily: 'Roboto'}} className="bg-fond">
  
        <section>
          <div>

          <Titre title={"Accueil"}/>

            <img src="photodemoi.png" alt="Yrieix Cisterne" className="h-[100px] block m-auto sm:h-[250px] lg:h-[250px]" />
            
            <div id="main_text" style={{ fontFamily: 'Roboto'}} className="justify-center top-1/2 text-black pt-4">
              <p className="background_text p-5 bg-blanc rounded-[50px] mb-5 mx-[5px]">
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
        <div className="flex justify-center pb-4"><InterviewCarousel/></div>
  
        <div style={{ fontFamily: 'Roboto'}} className='bg-[url("./assets/images/waterbackground.png")] w-full h-[100px] pt-4'>
          <p id="status_text" className="flex justify-center content-center">
            ACTUELLEMENT : <br /> <br /> EN STAGE
          </p>
        </div>
      </main>
    );
  };
  
  export default Home;
  