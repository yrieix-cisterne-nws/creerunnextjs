import { Link } from "react-router";


const Erreur = () => {
    return (
        <div style={{ fontFamily: 'Roboto'}} className="h-[100vh] bg-gray-300">
            <p style={{ fontFamily: 'Roboto Mono'}} className="flex justify-center text-center text-7xl">
            Erreur</p>
        <br/>
        <br/>
            <p className="flex justify-center text-center">La page que vous chercher n'existe pas ou n'est plus disponible,
                vous pouvez retourner à l'accueil en cliquant sur le bouton juste en dessous.
        </p>
        <div className="flex justify-center mt-52"><Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg">Accueil</Link></div>
        </div>
    );
};

export default Erreur;