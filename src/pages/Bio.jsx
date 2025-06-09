import { Texte } from "../component/Texte";
import { Titre } from "../component/Titre";

const Bio = () => {
    return(
        <div style={{ fontFamily: 'Roboto'}} className="min-h-screen bg-fond dark:bg-fondDark font-sans flex flex-col justify-center items-center">

        <main className="text-center p-6">
          <Titre title="Un peu plus sur moi"/>
        </main>
        <Texte description="Je m'appelle Yrieix Cisterne. J'ai 18 ans. Je suis étudiant en première année de Bachelor Chef de Projets Digitaux.
        J'étudie à la Normandie Web School de Rouen. Passionné par le numérique, j'ai découvert le code au lycée.
        J'ai obtenu un Bac général en 2024. Mes spécialités étaient NSI et Mathématiques. 
        J'ai appris Python et SQL au lycée. Ces langages m'ont donné une base solide en programmation."/>
        <Texte description="Je m'intéresse au développement web. J'apprends tous les jours HTML et CSS, ainsi que le React et TailwindCSS.
        Ces outils me permettent de créer des sites modernes et fonctionnels. Je suis en train d'apprendre JavaScript. 
        Ce langage me sert à rendre mes sites interactifs. . Je veux maîtriser le front-end et le back-end pour devenir un développeur polyvalent web.
        Je souhaite créer des solutions simples et efficaces. J'aime apprendre de nouvelles technologies et langages. 
        Je veux améliorer mes compétences pour répondre aux besoins des utilisateurs. Je travaille sur des projets personnels pour progresser. 
        Ces projets m'aident à appliquer mes connaissances. Je suis motivé par la recherche de solutions pratiques. Je suis rigoureux et organisé. 
        Je veux m'impliquer dans des projets stimulants. Je suis toujours prêt à relever de nouveaux défis. Mon but est de contribuer à des projets."/>
        <Texte description="Je suis actuellement en stage alterné de deux mois en développement web du 10 mars aux 20 juin 2025, 
        je vis actuellement à Rouen. Je souhaite participer à la création de sites (pour une société ou une association, e-commerce, etc.). 
        Je souhaite mettre en pratique et développer mes compétences dans un environnement professionnel. Mon but est de contribuer à des projets. 
        Je suis prêt à relever des défis et à apprendre sur le terrain."/>
        </div>
    );
};

export default Bio;