import InterviewCarousel from "../component/Carousel";
import { Titre } from "../component/Titre";
import { ProjetTexteSeul } from "../component/Projettexte";
import { ProjetTexteImage } from "../component/Projetimage";

const Projet = () => {
  return (
    <div style={{ fontFamily: 'Roboto'}} className="min-h-screen bg-fond dark:bg-fondDark font-sans flex flex-col items-center">
     <Titre title={"Mes Projets"}/>

      <InterviewCarousel/>


      <ProjetTexteImage title={"Maquette du site web"}
                        description={"Dans le but de créer un portfolio, j'ai dû créer une maquette de mon site web, voici les couleurs utilisées : #2E2E2E (Header et Footer), #D1D5DB (Background), #374151 (Repère de navigation), #FFFFFF et #E5E7EB (Bloc de contenu). Pour le corps de texte, j'utilise Roboto et pour les titres Roboto Mono."}
                        image={"/maquettepc.png"}
                        alt={"Maquette du site web"}
                        download1={"/maquette.zip"}
                        downloadtext={"Maquette site web"}/>

      <ProjetTexteImage title={"Refonte du site web de Handisup"}
                        description={"Dans le cadre de ce projet, nous avons été mis en relation avec Handisup pour améliorer leur site web. Nous avons dû respecter certaines contraintes imposées par Handisup."}
                        image={"/projet/handisup_actu.png"}
                        alt={"Page d'accueil du site Handisup"}
                        link={"https://handisup6.normandieweb.school/"}
                        linktext={"Voir le site réalisé par le groupe"}/>

      <ProjetTexteImage title={"Intégration d'une maquette Figma"}
                        description={"Dans ce projet, j'ai reproduit une maquette provenant de Figma. En HTML et CSS. J'ai appris l'importance des 'div' pour structure une page web."}
                        image={"/projet/maquettefigma.png"}
                        alt={"Maquette Figma"}
                        link={"/projet/maquettefigma"}
                        linktext={"Voir le projet"}/>

      <ProjetTexteSeul title={"Normandie Blog School"}
                        description={"Ce projet a été réalisé à la Normandie Web School (NWS) en équipe avec d'autres élèves de la NWS comme des développeurs web et des Graphistes, nous avons décidé de partie sur un blog d'entraide entre personne de l'école, "}
                        image={"/projet/normandiebs.png"}
                        alt={"Page Accueil Normandie Blog School"}
                        link={"https://nino-rameau.github.io/normandie-blog-school/index.html"}
                        linktext={"Vous pouvez consultez le site ici."}/>

      <ProjetTexteSeul title={"Club Eco St.Sever"}
                        description={"Dans le cadre de ce projet, qui a été réalisé par la suite de la sollicitation du Club Eco St.Sever, nous avons dû en équipe réaliser un diaporama pour présenter nos idées au Club Eco St.Sever comme un nouveau logo pour le club et une nouvelle direction artistique"}
                        image={"/projet/clubeco.png"}
                        alt={"Logo pour club eco St.Sever"}/>

      <ProjetTexteImage title={"Logo personnel"}
                        description={"Dans le but de définir mon identité sur le web, j'ai conçu ce logo pour mon portfolio et d'autres créations, ce logo comprend mes initiales pour mon prénom et mon nom, j'ai voulu en faire un logo chic et élégant. En cliquant sur le logo, vous pourrez voir la charte graphique pour mon logo."}
                        image={"/charte/logoycbw.jpg"}
                        alt={"Mon logo personnel"}
                        link={"/charte"}
                        linktext={"Voir la charte graphique"}/>

      <ProjetTexteSeul title={"Projet Dés"}
                        description={" J'ai réalisé ce projet en 2023 à l'aide de Python, il a été réalisé pendant mon année de première. Ce projet m'a permis de découvrir comment utiliser la librairie 'Turtle'. Tout le code est déposé sur mon Github."}
                        image={"/projet/des.png"}
                        alt={"Dés produit aléatoirement"}
                        link={"https://github.com/modzarlino/de"}
                        linktext={"Vous pouvez voir le résultat sur mon Github."}/>
      

    </div>
  );
};

export default Projet;
